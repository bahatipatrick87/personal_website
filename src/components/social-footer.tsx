import { SOCIAL, SOCIAL_LINK_LIST } from "@/lib/social";

export function SocialFooter() {
  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px]"
      aria-label="Social media"
    >
      {SOCIAL_LINK_LIST.map((s, i) => (
        <span key={s.key} className="inline-flex items-center gap-x-3">
          {i > 0 ? (
            <span className="text-[color:var(--border-medium)]" aria-hidden>
              ·
            </span>
          ) : null}
          <a
            href={SOCIAL[s.key]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[color:var(--accent)] underline-offset-2 transition-opacity hover:opacity-80 hover:underline"
          >
            {s.label}
          </a>
        </span>
      ))}
    </nav>
  );
}
