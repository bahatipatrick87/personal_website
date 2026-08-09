import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isDatabaseConfigured, saveMessage } from "@/lib/db";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "bahatipatrick87@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendEmail(fields: { name: string; email: string; subject: string; message: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { attempted: false, ok: false };

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: fields.email || undefined,
      subject: `[Portfolio] ${fields.subject || "New message from your website"}`,
      html: `
        <div style="font-family: system-ui, sans-serif; font-size: 15px; line-height: 1.6; color: #171717;">
          <p><strong>Name:</strong> ${escapeHtml(fields.name) || "—"}</p>
          <p><strong>Email:</strong> ${escapeHtml(fields.email) || "—"}</p>
          <p><strong>Subject:</strong> ${escapeHtml(fields.subject) || "—"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(fields.message)}</p>
        </div>
      `,
    });
    if (error) {
      console.error("Resend error:", error);
      return { attempted: true, ok: false };
    }
    return { attempted: true, ok: true };
  } catch (err) {
    console.error("Resend threw:", err);
    return { attempted: true, ok: false };
  }
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, hpField } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: bots fill hidden fields, real visitors leave it blank.
  if (typeof hpField === "string" && hpField.trim() !== "") {
    console.warn("Contact form: honeypot field was filled, treating as bot submission.");
    return NextResponse.json({ ok: true });
  }

  const nameStr = typeof name === "string" ? name.trim().slice(0, 200) : "";
  const emailStr = typeof email === "string" ? email.trim().slice(0, 200) : "";
  const subjectStr = typeof subject === "string" ? subject.trim().slice(0, 200) : "";
  const messageStr = typeof message === "string" ? message.trim().slice(0, 5000) : "";

  if (!messageStr) {
    return NextResponse.json({ ok: false, error: "Message is required." }, { status: 400 });
  }
  if (emailStr && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!isDatabaseConfigured && !process.env.RESEND_API_KEY) {
    console.error("Contact form has no delivery method: no database and no RESEND_API_KEY configured.");
    return NextResponse.json(
      { ok: false, error: "The contact form isn't fully set up yet. Please email directly instead." },
      { status: 500 },
    );
  }

  const fields = { name: nameStr, email: emailStr, subject: subjectStr, message: messageStr };

  // Send the email first so we know whether to mark the stored row as emailed.
  const emailResult = await sendEmail(fields);

  let saved = null;
  try {
    saved = await saveMessage({ ...fields, emailed: emailResult.ok });
  } catch (err) {
    // Never let a database hiccup hide a message that was already emailed —
    // but always log it loudly, since this is the one path where a visitor
    // sees "sent" while the message silently fails to reach the inbox.
    console.error(
      `Failed to save message to database (from ${fields.email || "unknown"}, emailed=${emailResult.ok}):`,
      err,
    );
  }

  // Success if the message was captured by at least one channel.
  if (saved || emailResult.ok) {
    return NextResponse.json({ ok: true, stored: Boolean(saved), emailed: emailResult.ok });
  }

  return NextResponse.json(
    { ok: false, error: "Could not send your message. Please try again shortly, or email directly." },
    { status: 502 },
  );
}
