/**
 * Canonical site URL for metadata, sitemap, and robots.
 * On Vercel, `VERCEL_URL` is set automatically; prefer `NEXT_PUBLIC_SITE_URL` in production.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const normalized = normalizeOrigin(raw);
    if (normalized) return normalized;
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//i, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}

/** Safe for `metadataBase` — never throws (avoids 500 if env is malformed). */
export function getMetadataBase(): URL {
  try {
    return new URL(getSiteUrl());
  } catch {
    return new URL("http://localhost:3000");
  }
}

function normalizeOrigin(input: string): string | null {
  const trimmed = input.replace(/\/$/, "");
  if (!trimmed) return null;
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    const u = new URL(withProtocol);
    if (!u.hostname) return null;
    return `${u.protocol}//${u.host}`;
  } catch {
    return null;
  }
}
