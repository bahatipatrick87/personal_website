import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of projects involving Big Data, Machine Learning, Web platforms, and Data Collection tools.",
};

export default function ProjectsPage() {
  const projects = [
    {
      name: "Real-Time Credit Card Fraud Detection System",
      tech: "Apache Spark (PySpark), Kafka, Hadoop (HDFS), Python, Docker, Streamlit, Plotly",
      tag: "Big Data & ML",
      tagColor: "#6366f1",
      highlights: [
        "Architected a production-style Lambda Architecture pipeline processing over 280,000 credit card transactions for both real-time monitoring and historical analytics.",
        "Implemented a streaming layer with Spark Structured Streaming and Kafka achieving sub‑2‑second latency for fraud alerts and risk scores.",
        "Trained and tuned distributed ML models (Random Forest, Logistic Regression) on imbalanced data using Spark MLlib, improving recall on fraudulent transactions.",
      ]
    },
    {
      name: "Eventligo Platform",
      tech: "Web Application, React, Node.js, Data Integration",
      tag: "Full-Stack Web",
      tagColor: "#8b5cf6",
      highlights: [
        "Co-designed and implemented a web platform that allows users to discover, create, and manage events in a unified interface.",
        "Built backend and data-handling components to support user registration, event workflows, and analytics-ready logging."
      ]
    },
    {
      name: "Real-Time Monitoring Dashboard",
      tech: "Python, Power BI, SQL",
      tag: "Analytics",
      tagColor: "#06b6d4",
      highlights: [
        "Developed an interactive monitoring dashboard that aggregates live operational data into intuitive KPIs and visualizations for decision-makers.",
      ]
    },
    {
      name: "Image Processing Manipulation Tool",
      tech: "Python, NumPy, OpenCV, Matplotlib",
      tag: "Computer Vision",
      tagColor: "#ec4899",
      highlights: [
        "Built an image processing application showcasing frequency-domain transformations and structural manipulation algorithms.",
      ]
    },
    {
      name: "Data Collection & Visualization System",
      tech: "Python, MongoDB, REST API",
      tag: "Infrastructure",
      tagColor: "#10b981",
      highlights: [
        "Developed a lightweight platform for structured data collection and visualization specifically tailored for field project applications.",
      ]
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px", paddingBottom: "60px" }}>
      {/* Page Hero */}
      <section className="page-hero animate-fade-up" style={{ backgroundImage: "linear-gradient(135deg, #0891b2 0%, #2563eb 100%)" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow" style={{ color: "#fff", marginBottom: "8px", opacity: 0.85 }}>
            Portfolio Showcase
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "16px" }}>
            Featured Projects
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 500, opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
            A curated deeply technical selection of Big Data, Full-Stack, Machine Learning, and Analytics projects.
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <div className="animate-fade-up delay-100">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "28px" }} className="projects-grid">
          <style>{`
            @media (min-width: 1024px) {
              .projects-grid { grid-template-columns: 1fr 1fr; }
            }
          `}</style>
          {projects.map((proj, i) => (
            <div 
              key={i} 
              className="card"
              style={{
                display: "flex", flexDirection: "column",
                animationDelay: `${0.1 * i}s`
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", marginBottom: "12px", alignItems: "flex-start" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>{proj.name}</h3>
                <span style={{ 
                  fontSize: "0.7rem", fontWeight: 700, padding: "4px 10px", borderRadius: "99px",
                  background: `${proj.tagColor}1a`, color: proj.tagColor, border: `1px solid ${proj.tagColor}40`,
                  whiteSpace: "nowrap", flexShrink: 0
                }}>
                  {proj.tag}
                </span>
              </div>
              
              <div style={{ marginBottom: "16px" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Tech Stack
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--accent)", fontWeight: 500, marginTop: "2px", margin: 0 }}>
                  {proj.tech}
                </p>
              </div>

              <div style={{ flex: 1 }}>
                <ul style={{ paddingLeft: "18px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {proj.highlights.map((h, j) => (
                    <li key={j} style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
