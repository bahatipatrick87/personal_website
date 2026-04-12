"use client";

import type { FormEvent } from "react";

type Props = { email: string };

export function ContactForm({ email }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const from = String(fd.get("email") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim() || "Message from your portfolio";
    const body = String(fd.get("body") ?? "").trim();
    const composed = [
      name || from ? `From: ${[name, from].filter(Boolean).join(" — ")}` : "",
      name || from ? "" : null,
      body,
    ]
      .filter((line) => line !== null)
      .join("\n");
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composed)}`;
    window.location.assign(url);
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

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      aria-label="Contact form"
    >
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
          style={{ ...fieldStyle, resize: "vertical" as const }}
        />
      </div>
      <button
        type="submit"
        className="hover-btn-send"
        style={{
          marginTop: "8px",
          padding: "14px 28px",
          borderRadius: "999px",
          background: "var(--gradient-hero)",
          color: "#fff",
          fontSize: "0.95rem",
          fontWeight: 700,
          cursor: "pointer",
          border: "none",
          boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
          textAlign: "center" as const,
        }}
      >
        Open email with message
      </button>
    </form>
  );
}
