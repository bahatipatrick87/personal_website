"use client";

import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { clerkAppearance } from "@/lib/clerk-appearance";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={clerkAppearance}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignOutUrl="/"
    >
      <ThemeProvider>{children}</ThemeProvider>
    </ClerkProvider>
  );
}
