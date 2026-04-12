import type { Metadata } from "next";
import { SectionCard } from "../page";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Bahati Patrick's background, summary, and overall philosophy in data science.",
};

export default function AboutPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px", paddingBottom: "60px" }}>
      {/* Page Hero */}
      <section className="page-hero animate-fade-up">
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow" style={{ color: "#fff", marginBottom: "8px", opacity: 0.85 }}>
            Background &amp; Philosophy
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "16px" }}>
            About Me
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 500, opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
            I believe that data becomes valuable only when it is transformed into actionable insights that drive real-world impact.
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "28px" }} className="lg-two-col anim-group">
        <style>{`
          @media (min-width: 1024px) {
            .lg-two-col { grid-template-columns: 1.5fr 1fr !important; align-items: start; }
          }
          .anim-group > *:nth-child(1) { animation: fadeUp 0.6s ease both; animation-delay: 0.1s; }
          .anim-group > *:nth-child(2) { animation: fadeUp 0.6s ease both; animation-delay: 0.2s; }
        `}</style>

        {/* Left Col */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <SectionCard title="My Journey" eyebrow="Professional Story">
            <p style={{ marginBottom: "16px", color: "var(--text-secondary)" }}>
              Hello! I am Bahati Patrick, a results-oriented data scientist with profound experience building
              predictive models, automating data pipelines, and delivering clear insights to both technical and
              non-technical stakeholders.
            </p>
            <p style={{ marginBottom: "16px", color: "var(--text-secondary)" }}>
              My work spans <strong style={{ color: "var(--accent)" }}>machine learning, statistical analysis, big data engineering, and data visualization</strong>,
              with a strong focus on real-world impact in education, labor markets, and humanitarian settings (such as my time with AVSI Foundation and Save the Children).
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              I am highly adaptable, committed to continuous learning, and totally comfortable working across the full data
              lifecycle—from data collection and preprocessing on the ground to advanced system deployment and dashboarding.
            </p>
          </SectionCard>

          <SectionCard title="Core Philosophy" eyebrow="How I work">
            <div style={{ display: "grid", gap: "16px" }}>
              {[
                { title: "Empathetic Problem Solving", desc: "Understanding the end-user's pain points before writing a single line of code." },
                { title: "Data Integrity Above All", desc: "A perfectly tuned model is useless if the underlying data lacks integrity." },
                { title: "Simplifying the Complex", desc: "Breaking down intricate algorithmic outcomes into simple, business-ready decisions." },
              ].map(item => (
                <div key={item.title} style={{ padding: "16px", background: "var(--bg-surface-soft)", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "4px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* Right Col */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <SectionCard title="Education Background" eyebrow="Academic Journey">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>Master&apos;s Degree in Data Science</h3>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap" }}>2024 &ndash; Dec 2026</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>Universit&agrave; degli Studi di Messina</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>BSc in Business Information Technology</h3>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap" }}>2020 &ndash; 2023</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>Nkumba University</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>Plus Two High School</h3>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap" }}>2017 &ndash; 2018</span>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Comprehensive Skills" eyebrow="Technical toolkit">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Programming", items: ["Python", "Java", "JavaScript", "HTML", "VB.NET"] },
                { label: "ML & AI", items: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch"] },
                { label: "Big Data", items: ["PySpark", "Spark SQL", "HDFS", "MapReduce", "Kafka"] },
                { label: "Web / API", items: ["React", "Next.js", "Node.js", "Spring Boot", "Django", "HTML5", "CSS3"] },
                { label: "DevOps & Tools", items: ["Docker", "Kubernetes", "Git"] },
              ].map(group => (
                <div key={group.label}>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-main)", marginBottom: "8px" }}>
                    {group.label}
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {group.items.map(i => <span key={i} className="skill-tag">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
