import type { Metadata } from "next";
import { SectionCard } from "../page";

export const metadata: Metadata = {
  title: "Experience",
  description: "Bahati Patrick's complete professional journey in business coaching, data science, and research.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Business Coach",
      org: "AVSI Foundation – Nakivale, Isingiro District",
      period: "Oct 2023 – Oct 2024",
      highlights: [
        "Mentored micro and small enterprises using data-informed growth strategies.",
        "Conducted market and performance analysis to support sustainable and scalable business models.",
        "Collaborated with private sector partners to strengthen job placement and employability outcomes.",
        "Collected, analyzed, and reported labor market data to support workforce development programs.",
      ]
    },
    {
      role: "Research Assistant",
      org: "Save the Children – Nakivale Refugee Settlement",
      period: "Aug 2023",
      highlights: [
        "Conducted digital data collection using structured surveys while ensuring confidentiality.",
        "Compiled analytical summaries to support evidence-based humanitarian interventions.",
      ]
    },
    {
      role: "Data Analyst Intern",
      org: "Stratcom Communications and Computer Solutions",
      period: "Jun 2022 – Sep 2022",
      highlights: [
        "Cleaned, processed, and analyzed datasets to support data-driven business decisions.",
        "Developed dashboards and automated reporting solutions using Python and BI tools.",
        "Supported system performance monitoring and optimization through real-time data analysis.",
      ]
    },
    {
      role: "Data Clerk & Research Assistant",
      org: "Windle International Uganda",
      period: "2021 – 2022",
      highlights: [
        "Managed large-scale field data collection, validation, cleaning, and database maintenance.",
        "Performed quantitative and qualitative analysis for education-focused research initiatives.",
        "Ensured data accuracy, integrity, and compliance with ethical research standards.",
      ]
    },
    {
      role: "Community Facilitator",
      org: "DRDIP – Isingiro District",
      period: "2019 – 2020",
      highlights: [
        "Facilitated effective communication between development stakeholders and local communities.",
        "Delivered capacity-building programs and monitored project outcomes using structured data.",
      ]
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px", paddingBottom: "60px" }}>
      {/* Page Hero */}
      <section className="page-hero animate-fade-up" style={{ backgroundImage: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow" style={{ color: "#fff", marginBottom: "8px", opacity: 0.85 }}>
            Career Journey
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "16px" }}>
            Experience
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 500, opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
            A comprehensive track record of impact across humanitarian settings, field research, and data operations in Uganda.
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <div className="animate-fade-up delay-100">
        <SectionCard title="Professional Timeline" eyebrow="Roles & Responsibilities">
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", position: "relative" }}>
            {/* Timeline line */}
            <div style={{ position: "absolute", left: "4px", top: "10px", bottom: "10px", width: "2px", background: "var(--border-subtle)" }} />
            
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ display: "flex", gap: "20px", position: "relative", zIndex: 1 }}>
                <div className="timeline-dot" style={{ background: "var(--accent)" }} />
                <div 
                  className="hover-exp-card"
                  style={{ 
                    flex: 1, 
                    padding: "20px", 
                    background: "var(--bg-surface-soft)", 
                    borderRadius: "16px",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px" }}>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>{exp.role}</h3>
                      <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--accent)", padding: "4px 10px", background: "var(--accent-soft)", borderRadius: "999px" }}>
                        {exp.period}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                      {exp.org}
                    </p>
                  </div>
                  <ul style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
