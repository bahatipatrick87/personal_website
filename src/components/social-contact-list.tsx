import { SOCIAL, SOCIAL_LINK_LIST } from "@/lib/social";

const ICONS: Record<(typeof SOCIAL_LINK_LIST)[number]["key"], string> = {
  linkedin: "in",
  instagram: "📷",
  github: "⌥",
  facebook: "f",
};

export function SocialContactList({ iconSize = "1.1rem" }: { iconSize?: string }) {
  return (
    <>
      {SOCIAL_LINK_LIST.map((s) => (
        <a
          key={s.key}
          href={SOCIAL[s.key]}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: iconSize, fontWeight: 700 }}>{ICONS[s.key]}</span>
            <span style={{ fontWeight: 600 }}>{s.label}</span>
          </div>
          <span
            style={{
              fontSize: "0.72rem",
              fontFamily: "monospace",
              color: "var(--accent)",
            }}
          >
            {s.handle}
          </span>
        </a>
      ))}
    </>
  );
}
