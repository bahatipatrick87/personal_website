import { NextResponse } from "next/server";
import { Resend } from "resend";

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

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, company } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: bots fill hidden fields, real visitors leave it blank.
  if (typeof company === "string" && company.trim() !== "") {
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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { ok: false, error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: emailStr || undefined,
    subject: `[Portfolio] ${subjectStr || "New message from your website"}`,
    html: `
      <div style="font-family: system-ui, sans-serif; font-size: 15px; line-height: 1.6; color: #171717;">
        <p><strong>Name:</strong> ${escapeHtml(nameStr) || "—"}</p>
        <p><strong>Email:</strong> ${escapeHtml(emailStr) || "—"}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subjectStr) || "—"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(messageStr)}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
