/** Clerk UI aligned with monochrome site theme. */
export const clerkAppearance = {
  variables: {
    colorPrimary: "#171717",
    colorDanger: "#dc2626",
    colorSuccess: "#16a34a",
    colorWarning: "#ca8a04",
    colorNeutral: "#737373",
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
      "bg-[#171717] text-white shadow-md hover:opacity-90 dark:bg-[#fafafa] dark:text-[#0a0a0a]",
    footerActionLink: "text-neutral-700 dark:text-neutral-300",
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
