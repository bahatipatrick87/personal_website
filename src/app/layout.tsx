import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { AppProviders } from "@/components/app-providers";
import { getMetadataBase } from "@/lib/site";
import { SocialFooter } from "@/components/social-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Bahati Patrick | Data Scientist & Business Coach",
    template: "%s | Bahati Patrick",
  },
  description:
    "Personal website of Bahati Patrick, a data scientist, business coach, and research assistant specializing in machine learning, big data, and data-driven problem solving.",
  openGraph: {
    title: "Bahati Patrick | Data Scientist & Business Coach",
    description:
      "Data scientist and business coach with experience in machine learning, big data, and social impact projects across Uganda and Italy.",
    type: "website",
    locale: "en_US",
    siteName: "Bahati Patrick",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahati Patrick | Data Scientist & Business Coach",
    description:
      "Portfolio and academic profile of Bahati Patrick, data scientist and business coach.",
  },
};

export const viewport = {
  width: "device-width" as const,
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[color:var(--bg-body)] text-[color:var(--text-main)]`}
      >
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <SiteHeader />
            <main id="main-content" className="w-full flex-1" tabIndex={-1}>
              {children}
            </main>
            <footer className="border-t border-[color:var(--border-subtle)] bg-[color:var(--bg-surface-soft)]/95">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-[color:var(--text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p className="order-2 text-center sm:order-1 sm:text-left">
                  © {new Date().getFullYear()} Bahati Patrick. All rights
                  reserved.
                </p>
                <div className="order-1 flex justify-center sm:order-2 sm:justify-end">
                  <SocialFooter />
                </div>
              </div>
            </footer>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
