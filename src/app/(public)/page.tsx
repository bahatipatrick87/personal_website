import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SOCIAL } from "@/lib/social";
import { SocialContactList } from "@/components/social-contact-list";

export const metadata: Metadata = {
  title: {
    absolute: "Bahati Patrick | Data Scientist & Business Coach",
  },
  description:
    "Personal website of Bahati Patrick — a data scientist, business coach, and research assistant specializing in machine learning, big data, and data-driven problem solving.",
};

const EMAIL = "bahatipatrick87@gmail.com";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px", paddingBottom: "60px" }}>
      <HeroSection />
      <StatsBanner />
      <TwoColumnLayout />
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="animate-fade-up"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "28px",
        padding: "60px 48px 56px",
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-hero)",
        backgroundImage: "var(--gradient-card)",
      }}
    >
      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{ width: 420, height: 420, top: -100, right: -100,
          background: "var(--glow-orb-strong)" }}
      />
      <div
        className="glow-orb"
        style={{ width: 300, height: 300, bottom: -60, left: -40,
          background: "var(--glow-orb-soft)" }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Status */}
        <div className="animate-fade-up delay-100" style={{ marginBottom: "28px" }}>
          <span className="status-badge">
            <span className="status-dot" />
            Open to collaborations &amp; remote roles
          </span>
        </div>

        {/* Avatar + Name row */}
        <div
          className="animate-fade-up delay-200"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              position: "relative",
              flexShrink: 0,
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "3px solid transparent",
                background: "var(--gradient-hero)",
                padding: "3px",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <div style={{ borderRadius: "22px", overflow: "hidden", width: "100%", height: "100%" }}>
                <Image
                  src="/patrick-bahati.png"
                  alt="Bahati Patrick"
                  width={110}
                  height={110}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: "220px" }}>
            <p className="eyebrow" style={{ marginBottom: "8px" }}>
              Portfolio &amp; Academic Profile
            </p>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                color: "var(--text-main)",
              }}
            >
              <span className="gradient-text">Bahati</span>{" "}
              <span style={{ color: "var(--text-main)" }}>Patrick</span>
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                letterSpacing: "0.01em",
              }}
            >
              Data Scientist · Business Coach · Research Assistant
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="animate-fade-up delay-300" style={{ marginBottom: "32px", maxWidth: "740px" }}>
          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              marginBottom: "14px",
            }}
          >
            Results-driven data scientist with hands-on experience in{" "}
            <strong style={{ color: "var(--text-main)", fontWeight: 600 }}>
              machine learning, big data, and data visualization
            </strong>
            . Passionate about transforming complex datasets into{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 600 }}>actionable insights</strong>{" "}
            that drive business growth and social impact across private sector and humanitarian projects.
          </p>
          <p style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
            Currently pursuing a{" "}
            <strong style={{ color: "var(--text-main)", fontWeight: 600 }}>
              Master&apos;s Degree in Data Science
            </strong>{" "}
            at Università degli Studi di Messina, Italy — leveraging a strong background in Business
            Information Technology and field research in Uganda.
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="animate-fade-up delay-400"
          style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "36px" }}
        >
          <a
            href={`mailto:${EMAIL}`}
            className="hover-btn-primary"
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "12px 26px", borderRadius: "9999px",
              background: "var(--gradient-hero)", color: "#fff",
              fontSize: "0.90rem", fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.02em",
              boxShadow: "var(--shadow-glow)"
            }}
          >
            ✉ Email Me
          </a>
          <a
            href="https://github.com/bahatipatrick87/Resume"
            target="_blank" rel="noreferrer"
            className="hover-btn-secondary"
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "12px 26px", borderRadius: "9999px",
              background: "var(--bg-surface-soft)",
              color: "var(--text-main)",
              border: "1.5px solid var(--border-medium)",
              fontSize: "0.90rem", fontWeight: 600,
              textDecoration: "none"
            }}
          >
            ↓ Download CV
          </a>
          <a
            href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
            className="hover-btn-outline"
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "12px 22px", borderRadius: "9999px",
              color: "var(--text-secondary)",
              border: "1.5px solid var(--border-subtle)",
              fontSize: "0.88rem", fontWeight: 500,
              textDecoration: "none"
            }}
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
            className="hover-btn-outline"
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "12px 22px", borderRadius: "9999px",
              color: "var(--text-secondary)",
              border: "1.5px solid var(--border-subtle)",
              fontSize: "0.88rem", fontWeight: 500,
              textDecoration: "none"
            }}
          >
            GitHub
          </a>
          <a
            href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
            className="hover-btn-outline"
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "12px 22px", borderRadius: "9999px",
              color: "var(--text-secondary)",
              border: "1.5px solid var(--border-subtle)",
              fontSize: "0.88rem", fontWeight: 500,
              textDecoration: "none"
            }}
          >
            Instagram
          </a>
          <a
            href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer"
            className="hover-btn-outline"
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "12px 22px", borderRadius: "9999px",
              color: "var(--text-secondary)",
              border: "1.5px solid var(--border-subtle)",
              fontSize: "0.88rem", fontWeight: 500,
              textDecoration: "none"
            }}
          >
            Facebook
          </a>
        </div>

        {/* Info chips */}
        <div
          className="animate-fade-up delay-500"
          style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        >
          {[
            { label: " Location", value: "Messina, Italy · Uganda" },
            { label: " Focus", value: "Data Science & Analytics" },
            { label: " Degree", value: "MSc Data Science (2024–2026)" },
            { label: " University", value: "UniME, Italy" },
          ].map((chip) => (
            <div
              key={chip.label}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "7px 14px", borderRadius: "9999px",
                background: "var(--accent-soft)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.78rem", color: "var(--text-main)",
              }}
            >
              <span style={{ fontWeight: 600, color: "var(--accent)" }}>{chip.label}</span>
              <span style={{ color: "var(--text-secondary)" }}>{chip.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Banner ─────────────────────────────────────────────────── */
function StatsBanner() {
  const stats = [
    { value: "5+", label: "Years Experience", icon: "" },
    { value: "10+", label: "Projects Delivered", icon: "" },
    { value: "5", label: "Languages Spoken", icon: "🌍" },
    { value: "4.45", label: "GPA / 5.00", icon: "" },
    { value: "MSc", label: "Data Science", icon: "🎓" },
  ];

  return (
    <div
      className="animate-fade-up delay-300"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "16px",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="card"
          style={{
            textAlign: "center",
            padding: "24px 16px",
            animationDelay: `${i * 0.08}s`,
          }}
        >
          <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{s.icon}</div>
          <div
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "6px",
            }}
            className="gradient-text"
          >
            {s.value}
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontWeight: 500 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Two column layout ─────────────────────────────────────────────── */
function TwoColumnLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "28px",
      }}
      className="lg-two-col"
    >
      <style>{`
        @media (min-width: 1024px) {
          .lg-two-col { grid-template-columns: 1.7fr 1.1fr !important; align-items: start; }
        }
      `}</style>
      {/* Left column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <FeaturedProjects />
        <QuickExperience />
        <QuickEducation />
      </div>
      {/* Right column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        <QuickInfo />
        <TopSkills />
        <LanguagesCard />
        <QuickContact />
      </div>
    </div>
  );
}

/* ─── Section Wrapper ───────────────────────────────────────────────── */
function SectionCard({
  title,
  eyebrow,
  children,
  seeMoreHref,
  seeMoreLabel = "See all →",
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  seeMoreHref?: string;
  seeMoreLabel?: string;
}) {
  return (
    <div className="card animate-fade-up">
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "20px",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          {eyebrow && <p className="eyebrow" style={{ marginBottom: "6px" }}>{eyebrow}</p>}
          <h2
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "var(--text-main)",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {title}
          </h2>
        </div>
        {seeMoreHref && (
          <Link
            href={seeMoreHref}
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
              padding: "5px 12px",
              borderRadius: "9999px",
              background: "var(--accent-soft)",
              border: "1px solid var(--border-subtle)",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
          >
            {seeMoreLabel}
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}

/* ─── Featured Projects ─────────────────────────────────────────────── */
function FeaturedProjects() {
  const projects = [
    {
      name: "Real-Time Credit Card Fraud Detection",
      tech: "PySpark · Kafka · Hadoop · Docker · Streamlit",
      tag: "Big Data",
      tagColor: "#404040",
      desc: "Lambda architecture pipeline processing 280K+ transactions in real-time with sub-2s fraud alert latency.",
    },
    {
      name: "Eventligo Platform",
      tech: "Web Application · Data Integration",
      tag: "Full-Stack",
      tagColor: "#525252",
      desc: "Co-designed a web platform for discovering, creating, and managing events with analytics-ready logging.",
    },
    {
      name: "Real-Time Monitoring Dashboard",
      tech: "Python · Power BI",
      tag: "Analytics",
      tagColor: "#737373",
      desc: "Interactive dashboard aggregating live operational data into intuitive KPIs for decision-makers.",
    },
  ];

  return (
    <SectionCard
      title="Featured Projects"
      eyebrow="Data &amp; software work"
      seeMoreHref="/projects"
      seeMoreLabel="All projects →"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {projects.map((p) => (
          <div
            key={p.name}
            className="hover-project-card"
            style={{
              padding: "16px",
              borderRadius: "14px",
              background: "var(--bg-surface-soft)",
              border: "1px solid var(--border-subtle)"
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
              <h3 style={{ fontSize: "0.90rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>
                {p.name}
              </h3>
              <span style={{
                fontSize: "0.65rem", fontWeight: 700,
                padding: "3px 9px", borderRadius: "9999px",
                background: `${p.tagColor}1a`,
                color: p.tagColor,
                border: `1px solid ${p.tagColor}40`,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                flexShrink: 0,
              }}>
                {p.tag}
              </span>
            </div>
            <p style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 500, marginBottom: "8px", letterSpacing: "0.02em" }}>
              {p.tech}
            </p>
            <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ─── Quick Experience ──────────────────────────────────────────────── */
function QuickExperience() {
  const roles = [
    {
      role: "Business Coach",
      org: "AVSI Foundation – Nakivale, Uganda",
      period: "Oct 2023 – Oct 2024",
    },
    {
      role: "Data Clerk & Research Assistant",
      org: "Windle International Uganda",
      period: "2021 – 2022",
    },
    {
      role: "Data Analyst Intern",
      org: "Stratcom Communications",
      period: "Jun – Sep 2022",
    },
    {
      role: "Research Assistant",
      org: "Save the Children – Nakivale",
      period: "Aug 2023",
    },
  ];

  return (
    <SectionCard
      title="Professional Experience"
      eyebrow="Career highlights"
      seeMoreHref="/experience"
      seeMoreLabel="Full timeline →"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {roles.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
            }}
          >
            <div className="timeline-dot" />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-main)" }}>
                  {r.role}
                </span>
                <span style={{ fontSize: "0.70rem", color: "var(--text-secondary)", fontWeight: 500, flexShrink: 0 }}>
                  {r.period}
                </span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 500, marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {r.org}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ─── Quick Education ───────────────────────────────────────────────── */
function QuickEducation() {
  const edu = [
    {
      degree: "Master's Degree in Data Science",
      school: "Università degli Studi di Messina",
      period: "2024 – Dec 2026",
    },
    {
      degree: "BSc Business Information Technology",
      school: "Nkumba University",
      period: "2020 – 2023",
    },
    {
      degree: "Plus Two High School",
      school: "High School Diploma",
      period: "2017 – 2018",
    },
  ];

  return (
    <SectionCard
      title="Education Background"
      eyebrow="Academic Journey"
      seeMoreHref="/about"
      seeMoreLabel="Read details →"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {edu.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
            }}
          >
            <div className="timeline-dot" style={{ background: "var(--accent-2)" }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-main)" }}>
                  {r.degree}
                </span>
                <span style={{ fontSize: "0.70rem", color: "var(--text-secondary)", fontWeight: 500, flexShrink: 0 }}>
                  {r.period}
                </span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 500, marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {r.school}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ─── Quick Info ────────────────────────────────────────────────────── */
function QuickInfo() {
  const rows = [
    { label: "Age", value: "26" },
    { label: "Location", value: "Messina, Sicily, Italy" },
    { label: "Nationality", value: "Ugandan" },
    { label: "Studies", value: "MSc Data Science (2024–2026)" },
    { label: "University", value: "UniME, Italy" },
    { label: "Previous", value: "BSc BIT — CGPA 4.45 / 5.00" },
  ];

  return (
    <SectionCard title="At a Glance" eyebrow="Snapshot">
      <dl style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {rows.map((r) => (
          <div
            key={r.label}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: "8px",
              padding: "7px 0",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <dt style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)" }}>
              {r.label}
            </dt>
            <dd style={{ fontSize: "0.82rem", color: "var(--text-main)", fontWeight: 500, textAlign: "right" }}>
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </SectionCard>
  );
}

/* ─── Top Skills ────────────────────────────────────────────────────── */
function TopSkills() {
  const groups = [
    { label: "ML / AI", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"] },
    { label: "Big Data", items: ["PySpark", "Kafka", "Hadoop", "Docker"] },
    { label: "Visualization", items: ["Power BI", "Tableau", "Matplotlib"] },
    { label: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  ];

  return (
    <SectionCard title="Technical Skills" eyebrow="Stack" seeMoreHref="/about" seeMoreLabel="Full skills →">
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {groups.map((g) => (
          <div key={g.label}>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-secondary)", marginBottom: "7px" }}>
              {g.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {g.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ─── Languages ─────────────────────────────────────────────────────── */
function LanguagesCard() {
  const langs = [
    { name: "English", level: "Full professional", pct: 97 },
    { name: "Kinyarwanda", level: "Full professional", pct: 95 },
    { name: "Luganda", level: "Full professional", pct: 92 },
    { name: "Swahili", level: "Intermediate", pct: 65 },
    { name: "Italian", level: "Intermediate", pct: 55 },
  ];

  return (
    <SectionCard title="Languages" eyebrow="Communication">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {langs.map((l) => (
          <div key={l.name}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
              <span style={{ fontSize: "0.83rem", fontWeight: 600, color: "var(--text-main)" }}>{l.name}</span>
              <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>{l.level}</span>
            </div>
            <div style={{ height: "5px", borderRadius: "9999px", background: "var(--border-subtle)", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${l.pct}%`,
                  borderRadius: "9999px",
                  background: "var(--gradient-hero)",
                  transition: "width 1s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

/* ─── Quick Contact ─────────────────────────────────────────────────── */
function QuickContact() {
  return (
    <SectionCard title="Get In Touch" eyebrow="Let's collaborate">
      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: 1.65 }}>
        I&apos;m open to data science, analytics, research, and data-driven program design opportunities.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <a href={`mailto:${EMAIL}`} className="contact-item">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "1.1rem" }}>✉</span>
            <span style={{ fontWeight: 600 }}>Email</span>
          </div>
          <span style={{ fontSize: "0.72rem", fontFamily: "monospace", color: "var(--accent)" }}>{EMAIL}</span>
        </a>
        <a href="tel:+393925473237" className="contact-item">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "1.1rem" }}>📞</span>
            <span style={{ fontWeight: 600 }}>Phone</span>
          </div>
          <span style={{ fontSize: "0.72rem", fontFamily: "monospace", color: "var(--accent)" }}>+39 392 547 3237</span>
        </a>
        <SocialContactList />
      </div>
    </SectionCard>
  );
}

export { SectionCard };
