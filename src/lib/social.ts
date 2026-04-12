/**
 * Profile URLs open in a new tab sitewide.
 * If a link 404s, replace it with the exact URL from your browser on that network.
 */
export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/bahatipatrick87",
  /** Instagram home. Replace with https://www.instagram.com/yourusername/ for your profile. */
  instagram: "https://www.instagram.com/",
  github: "https://github.com/bahatipatrick87",
  /** Opens Facebook (Italian locale). Replace with your profile URL (e.g. facebook.com/your.name) when you have it. */
  facebook: "https://www.facebook.com/?locale=it_IT",
} as const;

export type SocialKey = keyof typeof SOCIAL;

export const SOCIAL_LINK_LIST: {
  key: SocialKey;
  label: string;
  handle: string;
}[] = [
  { key: "linkedin", label: "LinkedIn", handle: "bahatipatrick87" },
  { key: "instagram", label: "Instagram", handle: "instagram.com" },
  { key: "github", label: "GitHub", handle: "bahatipatrick87" },
  { key: "facebook", label: "Facebook", handle: "Bahati Patrick" },
];
