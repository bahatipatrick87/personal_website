import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="mb-3 text-2xl font-extrabold tracking-tight text-[color:var(--text-main)] sm:text-3xl">
        Page not found
      </h1>
      <p className="mb-8 text-sm leading-relaxed text-[color:var(--text-secondary)]">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold text-white no-underline shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90"
        style={{ background: "var(--gradient-hero)" }}
      >
        Back to home
      </Link>
    </div>
  );
}
