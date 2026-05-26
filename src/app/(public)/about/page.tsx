import type { Metadata } from "next";
import { SectionCard } from "../page";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Bahati Patrick's background, neuroscience research, certifications, and philosophy in data science and AI.",
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
            I believe data becomes valuable only when transformed into actionable insights — from spiking neurons to real-world decisions.
          </p>
        </div>
      </section>

      {/* Main Content */}
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
              I am Bahati Patrick — a results-driven <strong style={{ color: "var(--accent)" }}>Data Scientist</strong> and{" "}
              <strong style={{ color: "var(--accent)" }}>AI Researcher</strong> currently engaged as a{" "}
              <strong style={{ color: "var(--accent)" }}>Computational Neuroscience Research Intern</strong> at the Brian Lab,
              Università degli Studi di Messina. My research focuses on biologically inspired spiking neural networks (SNNs),
              STDP learning rules, and reward-modulated synaptic plasticity.
            </p>
            <p style={{ marginBottom: "16px", color: "var(--text-secondary)" }}>
              My work spans <strong style={{ color: "var(--accent)" }}>machine learning, deep learning, big data engineering,
              computational neuroscience, and data visualisation</strong>, with a strong track record of developing predictive models,
              automating data pipelines, and delivering clear insights to both technical and non-technical audiences.
            </p>
            <p style={{ color: "var(--text-secondary)" }}>
              Before Italy, I built a solid foundation through field research and data roles in Uganda — including business coaching
              for micro-enterprises with AVSI Foundation, humanitarian data collection with Save the Children, and education-focused
              research with Windle International Uganda.
            </p>
          </SectionCard>

          <SectionCard title="Core Philosophy" eyebrow="How I work">
            <div style={{ display: "grid", gap: "16px" }}>
              {[
                { title: "Empathetic Problem Solving", desc: "Understanding the end-user's pain points before writing a single line of code." },
                { title: "Data Integrity Above All", desc: "A perfectly tuned model is useless if the underlying data lacks integrity." },
                { title: "Simplifying the Complex", desc: "Breaking down intricate algorithmic outcomes into simple, business-ready decisions." },
                { title: "Biologically Grounded AI", desc: "Drawing inspiration from neuroscience to build more efficient and explainable learning systems." },
              ].map(item => (
                <div key={item.title} style={{ padding: "16px", background: "var(--bg-surface-soft)", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "4px" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Comprehensive Skills" eyebrow="Technical Toolkit">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Programming Languages", items: ["Python", "SQL", "Java", "JavaScript", "HTML/CSS"] },
                { label: "ML, Deep Learning & Neuroscience", items: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Brian2", "SNN", "STDP", "R-STDP"] },
                { label: "Data Science & Computing", items: ["NumPy", "Pandas", "SciPy", "Matplotlib", "Seaborn", "Feature Engineering"] },
                { label: "Big Data & Engineering", items: ["PySpark", "Spark SQL", "Apache Kafka", "Hadoop (HDFS)", "MapReduce", "HBase", "Hive"] },
                { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle"] },
                { label: "Visualisation & BI", items: ["Power BI", "Tableau", "Streamlit", "Plotly", "Excel"] },
                { label: "Computer Vision & NLP", items: ["OpenCV", "CNNs for Image Classification"] },
                { label: "Web & Backend", items: ["React", "Angular", "Node.js", "Next.js", "Spring Boot", "ASP.NET Core", "Django"] },
                { label: "DevOps & Tools", items: ["Docker", "Docker Compose", "Kubernetes", "Git", "GitHub"] },
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

        {/* Right Col */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <SectionCard title="Education Background" eyebrow="Academic Journey">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>
                    Master&apos;s Degree in Data Science <span style={{ fontWeight: 400, fontSize: "0.82rem", color: "var(--text-secondary)" }}>(Ongoing)</span>
                  </h3>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap" }}>2024 &ndash; 2026</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>Universit&agrave; degli Studi di Messina, Italy</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>BSc in Business Information Technology</h3>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap" }}>2020 &ndash; 2023</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>Nkumba University, Uganda &mdash; CGPA: 4.45 / 5.00</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Certifications & Training" eyebrow="Professional Development">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ padding: "14px", background: "var(--bg-surface-soft)", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>AI &amp; Business Automation</h3>
                  <span style={{ fontSize: "0.70rem", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap" }}>2025 &ndash; 2026</span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", margin: "0 0 4px 0" }}>Academic Rapido TechFloor &mdash; <em>Funded by the Accenture Foundation</em></p>
                <span style={{ fontSize: "0.65rem", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px", background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--border-subtle)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  In Progress
                </span>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "8px" }}>
                  AI-powered business process automation, workflow optimisation, prompt engineering, and AI integration for enterprise contexts.
                </p>
              </div>

              <div style={{ padding: "14px", background: "var(--bg-surface-soft)", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-main)", margin: 0 }}>Next.js App Router Fundamentals</h3>
                  <span style={{ fontSize: "0.70rem", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap" }}>Aug 2025</span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", margin: "0 0 4px 0" }}>Vercel &mdash; <em>Certificate of Completion, issued by Guillermo Rauch (CEO, Vercel)</em></p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "8px" }}>
                  Hands-on training in Next.js App Router architecture, server components, routing, data fetching, and full-stack deployment on Vercel.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Languages" eyebrow="Communication">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "English", level: "Full Professional", pct: 97 },
                { name: "Kinyarwanda", level: "Full Professional", pct: 95 },
                { name: "Luganda", level: "Full Professional", pct: 92 },
                { name: "Swahili", level: "Intermediate", pct: 65 },
                { name: "Italian", level: "Intermediate", pct: 55 },
              ].map(l => (
                <div key={l.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                    <span style={{ fontSize: "0.83rem", fontWeight: 600, color: "var(--text-main)" }}>{l.name}</span>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>{l.level}</span>
                  </div>
                  <div style={{ height: "5px", borderRadius: "9999px", background: "var(--border-subtle)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${l.pct}%`, borderRadius: "9999px", background: "var(--gradient-hero)", transition: "width 1s ease" }} />
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
