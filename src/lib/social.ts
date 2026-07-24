/**
 * Profile URLs open in a new tab sitewide.
 * If a link 404s, replace it with the exact URL from your browser on that network.
 */
export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/bahatipatrick87",
  github: "https://github.com/bahatipatrick87",
} as const;

export type SocialKey = keyof typeof SOCIAL;

export const SOCIAL_LINK_LIST: {
  key: SocialKey;
  label: string;
  handle: string;
}[] = [
  { key: "linkedin", label: "LinkedIn", handle: "bahatipatrick87" },
  { key: "github", label: "GitHub", handle: "bahatipatrick87" },
];
