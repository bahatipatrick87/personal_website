"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import type { CSSProperties } from "react";

const btnBase: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 14px",
  borderRadius: "9999px",
  fontSize: "0.78rem",
  fontWeight: 600,
  textDecoration: "none",
  border: "1.5px solid var(--border-medium)",
  background: "var(--bg-surface-soft)",
  color: "var(--text-main)",
  cursor: "pointer",
  transition: "background 0.2s, border-color 0.2s",
};

function AuthPlaceholder() {
  return (
    <span
      style={{
        ...btnBase,
        opacity: 0.5,
        cursor: "default",
        pointerEvents: "none",
      }}
      aria-hidden
    >
      …
    </span>
  );
}

export function ClerkHeaderActions() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <AuthPlaceholder />;
  }

  if (isSignedIn) {
    return (
      <>
        <Link
          href="/dashboard"
          className="hidden sm:inline-flex"
          style={{
            ...btnBase,
            borderColor: "var(--border-subtle)",
            background: "transparent",
            color: "var(--text-secondary)",
          }}
        >
          Dashboard
        </Link>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "ring-2 ring-[color:var(--accent-soft)]",
            },
          }}
        />
      </>
    );
  }

  return (
    <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
      <button
        type="button"
        style={btnBase}
        title="Optional — your portfolio stays public; this is for your dashboard only."
      >
        Sign in
      </button>
    </SignInButton>
  );
}

export function ClerkHeaderActionsMobile({ onNavigate }: { onNavigate?: () => void }) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div
        style={{
          marginTop: "4px",
          paddingTop: "10px",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <AuthPlaceholder />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "4px",
        paddingTop: "10px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {isSignedIn ? (
        <>
          <Link
            href="/dashboard"
            onClick={onNavigate}
            style={{
              ...btnBase,
              width: "100%",
              padding: "11px 14px",
              fontSize: "0.88rem",
              justifyContent: "center",
              borderColor: "var(--border-subtle)",
              background: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            Dashboard
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "8px 0",
            }}
          >
            <UserButton />
          </div>
        </>
      ) : (
        <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
          <button
            type="button"
            onClick={onNavigate}
            title="Optional — your portfolio stays public; this is for your dashboard only."
            style={{
              ...btnBase,
              width: "100%",
              padding: "11px 14px",
              fontSize: "0.88rem",
            }}
          >
            Sign in
          </button>
        </SignInButton>
      )}
    </div>
  );
}
