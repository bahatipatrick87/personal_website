import type { Metadata } from "next";
import { DashboardNav } from "@/components/dashboard-nav";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your account overview",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-1 flex-col gap-0 lg:flex-row lg:gap-0">
      <aside
        className="border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]/90 px-4 py-6 backdrop-blur-sm lg:w-56 lg:shrink-0 lg:border-b-0 lg:border-r lg:px-5 lg:py-10"
        aria-label="Dashboard navigation"
      >
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
            Console
          </p>
          <p className="mt-1 text-sm font-bold text-[color:var(--text-main)]">
            Dashboard
          </p>
        </div>
        <DashboardNav />
      </aside>
      <div className="min-h-[60vh] flex-1 bg-[color:var(--bg-body)] px-4 py-8 sm:px-8 lg:px-12 lg:py-12">
        {children}
      </div>
    </div>
  );
}
