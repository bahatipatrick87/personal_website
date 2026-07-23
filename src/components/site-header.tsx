"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home",       icon: "⌂" },
  { href: "/about", label: "About",  icon: "✦" },
  { href: "/experience", label: "Experience", icon: "◈" },
  { href: "/projects", label: "Projects",    icon: "⬡" },
  { href: "/contact", label: "Contact",      icon: "✉" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled
          ? "var(--bg-glass)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "68px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid var(--accent)",
              flexShrink: 0,
              boxShadow: "0 0 0 3px var(--accent-soft)",
            }}
          >
            <Image
              src="/patrick-bahati.png"
              alt="Bahati Patrick"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
            <span
              style={{
                fontSize: "0.92rem",
                fontWeight: 700,
                color: "var(--text-main)",
                letterSpacing: "-0.01em",
              }}
            >
              Bahati Patrick
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                color: "var(--accent)",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              Data Scientist &amp; AI Researcher
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden sm:flex"
          style={{
            alignItems: "center",
            gap: "4px",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-medium)",
            borderRadius: "9999px",
            padding: "5px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions (desktop) */}
        <div className="hidden sm:flex" style={{ alignItems: "center", gap: "8px" }}>
          <ThemeToggle />
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 18px",
              borderRadius: "9999px",
              background: "var(--gradient-hero)",
              color: "#fff",
              fontSize: "0.80rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.02em",
              boxShadow: "var(--shadow-glow)",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            ✉ Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex sm:hidden" style={{ alignItems: "center", gap: "8px" }}>
          <ThemeToggle small />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((p) => !p)}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              border: "1px solid var(--border-medium)",
              background: "var(--bg-surface)",
              color: "var(--text-main)",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          style={{
            borderTop: "1px solid var(--border-subtle)",
            background: "var(--bg-glass)",
            backdropFilter: "blur(20px)",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  fontSize: "0.88rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--bg-surface)" : "var(--text-main)",
                  background: isActive ? "var(--text-main)" : "transparent",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "4px",
              padding: "11px 14px",
              borderRadius: "12px",
              background: "var(--gradient-hero)",
              color: "#fff",
              fontSize: "0.88rem",
              fontWeight: 600,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            ✉ Hire Me
          </Link>
        </nav>
      )}
    </header>
  );
}

function ThemeToggle({ small }: { small?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const isDark = theme === "dark";
  const icon = !mounted ? "◐" : isDark ? "🌙" : "☀️";
  const label = !mounted
    ? "Toggle"
    : isDark
      ? "Light mode"
      : "Dark mode";

  const size = small ? 32 : 36;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: small ? "10px" : "10px",
        border: "1px solid var(--border-medium)",
        background: "var(--bg-surface)",
        color: "var(--text-main)",
        fontSize: small ? "0.85rem" : "1rem",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s, transform 0.15s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1) rotate(12deg)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1) rotate(0deg)";
      }}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}
