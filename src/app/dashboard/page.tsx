import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const primaryEmail = user.emailAddresses.find(
    (e) => e.id === user.primaryEmailAddressId,
  )?.emailAddress;
  const email = primaryEmail ?? user.emailAddresses[0]?.emailAddress ?? "—";
  const name =
    user.firstName || user.lastName
      ? [user.firstName, user.lastName].filter(Boolean).join(" ")
      : user.username ?? "Member";

  const created = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  return (
    <div className="animate-fade-up mx-auto max-w-3xl space-y-8">
      <header className="space-y-1">
        <h1
          className="text-2xl font-extrabold tracking-tight text-[color:var(--text-main)] sm:text-3xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          Welcome back,{" "}
          <span className="gradient-text">{user.firstName || name.split(" ")[0] || name}</span>
        </h1>
        <p className="text-sm text-[color:var(--text-secondary)]">
          Overview of your account on this site.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <div
          className="card rounded-2xl p-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
            Profile
          </p>
          <p className="mt-3 text-lg font-bold text-[color:var(--text-main)]">
            {name}
          </p>
          <p className="mt-1 break-all font-mono text-xs text-[color:var(--accent)]">
            {email}
          </p>
        </div>

        <div
          className="card rounded-2xl p-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--text-secondary)]">
            Member since
          </p>
          <p className="mt-3 text-2xl font-extrabold tabular-nums text-[color:var(--text-main)]">
            {created}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-[color:var(--border-medium)] bg-[color:var(--bg-surface)] px-6 py-3 text-sm font-semibold text-[color:var(--text-main)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
        >
          View portfolio
        </Link>
        <Link
          href="/contact"
          className="inline-flex flex-1 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            background: "var(--gradient-hero)",
            boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
          }}
        >
          Contact page
        </Link>
      </div>
    </div>
  );
}
