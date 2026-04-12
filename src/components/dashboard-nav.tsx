"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const dashNav = [
  { href: "/dashboard", label: "Overview", icon: "◉" },
  { href: "/", label: "Portfolio site", icon: "⌂" },
  { href: "/contact", label: "Contact", icon: "✉" },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
      {dashNav.map((item) => {
        const active =
          item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            data-active={active}
            className="flex shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors data-[active=true]:bg-[color:var(--accent)] data-[active=true]:text-white data-[active=false]:text-[color:var(--text-secondary)] data-[active=false]:hover:bg-[color:var(--accent-soft)] data-[active=false]:hover:text-[color:var(--text-main)]"
          >
            <span className="opacity-90" aria-hidden>
              {item.icon}
            </span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
