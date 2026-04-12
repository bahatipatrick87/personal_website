/** Align Clerk UI with site tokens (indigo / violet accent, rounded cards). */
export const clerkAppearance = {
  variables: {
    colorPrimary: "#6366f1",
    colorDanger: "#dc2626",
    colorSuccess: "#059669",
    colorWarning: "#d97706",
    colorNeutral: "#64748b",
    borderRadius: "0.75rem",
    fontFamily: '"Inter", "Outfit", system-ui, sans-serif',
    fontSize: "0.9375rem",
  },
  elements: {
    card: "shadow-[var(--shadow-card)] border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]",
    headerTitle: "text-[color:var(--text-main)]",
    headerSubtitle: "text-[color:var(--text-secondary)]",
    socialButtonsBlockButton:
      "border-[color:var(--border-medium)] bg-[color:var(--bg-surface-soft)] text-[color:var(--text-main)]",
    formButtonPrimary:
      "bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-600 shadow-md",
    footerActionLink: "text-indigo-600 dark:text-indigo-400",
    identityPreviewText: "text-[color:var(--text-main)]",
    formFieldLabel: "text-[color:var(--text-secondary)]",
    formFieldInput:
      "bg-[color:var(--bg-surface-soft)] border-[color:var(--border-subtle)] text-[color:var(--text-main)]",
    navbarButton: "text-[color:var(--text-main)]",
    userButtonPopoverCard: "border border-[color:var(--border-subtle)]",
    userPreviewMainIdentifier: "text-[color:var(--text-main)]",
    userPreviewSecondaryIdentifier: "text-[color:var(--text-secondary)]",
  },
};
