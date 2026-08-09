import type { Metadata } from "next";
import { isDatabaseConfigured, listMessages } from "@/lib/db";
import { AdminMessageActions } from "@/components/admin-message-actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const configured = isDatabaseConfigured;
  const messages = configured ? await listMessages() : [];
  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 80px" }}>
      <div style={{ marginBottom: "32px" }}>
        <p className="eyebrow" style={{ marginBottom: "8px" }}>
          Private
        </p>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "8px" }}>
          Inbox
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          Messages submitted through the contact form.{" "}
          {configured && (
            <strong style={{ color: "var(--text-main)" }}>
              {messages.length} total · {unreadCount} unread
            </strong>
          )}
        </p>
      </div>

      {!configured && (
        <div className="card" style={{ padding: "24px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
            Database not connected yet
          </h2>
          <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Attach a Postgres database in Vercel (Project → Storage → Create Database → Postgres),
            then redeploy. Once <code>POSTGRES_URL</code> is set, messages sent through the contact
            form will start appearing here automatically.
          </p>
        </div>
      )}

      {configured && messages.length === 0 && (
        <div className="card" style={{ padding: "24px", textAlign: "center" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            No messages yet. Once someone submits the contact form, it&apos;ll show up here.
          </p>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {messages.map((m) => (
          <div
            key={m.id}
            className="card"
            style={{
              padding: "20px",
              borderLeft: m.read ? undefined : "3px solid var(--accent)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "10px",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>
                    {m.name || "Anonymous"}
                  </h3>
                  {!m.read && (
                    <span
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "9999px",
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      New
                    </span>
                  )}
                  {m.emailed && (
                    <span
                      style={{
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "9999px",
                        background: "rgba(22,163,74,0.12)",
                        color: "#16a34a",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Emailed
                    </span>
                  )}
                </div>
                <a
                  href={`mailto:${m.email}`}
                  style={{ fontSize: "0.78rem", color: "var(--accent)", fontFamily: "monospace" }}
                >
                  {m.email}
                </a>
              </div>
              <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
                {new Date(m.created_at).toLocaleString()}
              </span>
            </div>

            {m.subject && (
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "8px" }}>
                {m.subject}
              </p>
            )}
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                whiteSpace: "pre-wrap",
                marginBottom: "14px",
              }}
            >
              {m.message}
            </p>

            <AdminMessageActions id={m.id} read={m.read} />
          </div>
        ))}
      </div>
    </div>
  );
}
