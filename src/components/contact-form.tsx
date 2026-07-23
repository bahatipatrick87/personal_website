"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("body") ?? "").trim(),
      company: String(fd.get("company") ?? ""), // honeypot
    };

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const fieldStyle = {
    width: "100%" as const,
    padding: "12px 16px",
    borderRadius: "12px",
    background: "var(--bg-surface-soft)",
    border: "1px solid var(--border-subtle)",
    color: "var(--text-main)",
    outline: "none" as const,
  };

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      aria-label="Contact form"
    >
      {/* Honeypot field — hidden from real visitors, bots tend to fill it in. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
        aria-hidden="true"
      />

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        className="contact-form-grid"
      >
        <div>
          <label
            htmlFor="contact-name"
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: "6px",
            }}
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            disabled={sending}
            style={fieldStyle}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: "6px",
            }}
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            disabled={sending}
            style={fieldStyle}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-subject"
          style={{
            display: "block",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "6px",
          }}
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Opportunity for collaboration..."
          disabled={sending}
          style={fieldStyle}
        />
      </div>
      <div>
        <label
          htmlFor="contact-body"
          style={{
            display: "block",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "6px",
          }}
        >
          Message
        </label>
        <textarea
          id="contact-body"
          name="body"
          rows={5}
          placeholder="Hello Patrick..."
          required
          disabled={sending}
          style={{ ...fieldStyle, resize: "vertical" as const }}
        />
      </div>

      <button
        type="submit"
        className="hover-btn-send"
        disabled={sending}
        style={{
          marginTop: "8px",
          padding: "14px 28px",
          borderRadius: "999px",
          background: "var(--gradient-hero)",
          color: "#fff",
          fontSize: "0.95rem",
          fontWeight: 700,
          cursor: sending ? "wait" : "pointer",
          border: "none",
          boxShadow: "var(--shadow-glow)",
          textAlign: "center" as const,
          opacity: sending ? 0.75 : 1,
        }}
      >
        {sending ? "Sending…" : "Send Message"}
      </button>

      {status === "sent" && (
        <p
          role="status"
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#16a34a",
            textAlign: "center" as const,
          }}
        >
          ✓ Message sent — thank you! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#dc2626",
            textAlign: "center" as const,
          }}
        >
          {error}
        </p>
      )}
    </form>
  );
}
