"use client";

import { useTransition } from "react";
import { markRead, removeMessage } from "@/app/admin/actions";

export function AdminMessageActions({ id, read }: { id: number; read: boolean }) {
  const [isPending, startTransition] = useTransition();

  function toggleRead() {
    const fd = new FormData();
    fd.set("id", String(id));
    fd.set("read", String(!read));
    startTransition(() => {
      markRead(fd);
    });
  }

  function handleDelete() {
    if (!window.confirm("Delete this message permanently?")) return;
    const fd = new FormData();
    fd.set("id", String(id));
    startTransition(() => {
      removeMessage(fd);
    });
  }

  const btnStyle = {
    fontSize: "0.72rem",
    fontWeight: 600,
    padding: "6px 12px",
    borderRadius: "9999px",
    border: "1px solid var(--border-subtle)",
    background: "var(--bg-surface-soft)",
    color: "var(--text-secondary)",
    cursor: "pointer",
  } as const;

  return (
    <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
      <button type="button" onClick={toggleRead} disabled={isPending} style={btnStyle}>
        {read ? "Mark unread" : "Mark read"}
      </button>
      <button
        type="button"
        onClick={handleDelete}
        disabled={isPending}
        style={{ ...btnStyle, color: "#dc2626", borderColor: "rgba(220,38,38,0.35)" }}
      >
        Delete
      </button>
    </div>
  );
}
