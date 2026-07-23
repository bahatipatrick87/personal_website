import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of projects spanning computational neuroscience, Big Data, Machine Learning, deep learning, and full-stack development.",
};

export default function ProjectsPage() {
  const projects = [
    {
      name: "Reward-Modulated Spiking Neural Network (R-STDP)",
      tech: "Brian2, Python, Computational Neuroscience",
      tag: "Neuroscience",
      tagColor: "#1e5091",
      highlights: [
        "Designed a full conductance-based LIF neural network with excitatory and inhibitory synapse populations.",
        "Implemented STDP and reward-modulated synaptic plasticity (R-STDP) with eligibility traces.",
        "Simulated spike-timing-dependent learning dynamics and visualised LTP/LTD weight evolution.",
        "Produced publication-quality figures of membrane voltage, firing rates, and synaptic conductance.",
      ]
    },
    {
      name: "Plant Disease Detection Using CNN",
      tech: "TensorFlow, Keras, Python",
      tag: "Deep Learning",
      tagColor: "#2d6a4f",
      highlights: [
        "Built a CNN-based deep learning model for multi-class plant disease classification.",
        "Trained on the PlantVillage dataset: 70,000+ images across 38 disease classes.",
        "Applied data augmentation, dropout regularisation, batch normalisation, and early stopping.",
        "Achieved ~91% test accuracy on held-out images.",
      ]
    },
    {
      name: "Real-Time Credit Card Fraud Detection System",
      tech: "Apache Spark (PySpark), Kafka, Hadoop (HDFS), Python, Docker, Streamlit, Plotly",
      tag: "Big Data & ML",
      tagColor: "#404040",
      highlights: [
        "Architected a production-style Lambda Architecture pipeline processing over 280,000 credit card transactions for both real-time monitoring and historical analytics.",
        "Implemented a streaming layer with Spark Structured Streaming and Kafka achieving sub‑2‑second latency for fraud alerts and risk scores.",
        "Trained and tuned distributed ML models (Random Forest, Logistic Regression) on imbalanced data using Spark MLlib, improving recall on fraudulent transactions.",
        "Delivered an interactive monitoring dashboard using Streamlit and Plotly; containerised with Docker Compose.",
      ]
    },
    {
      name: "Big Data Analytics — Apache HBase & FDA CAERS Dataset",
      tech: "Hadoop, HBase, Docker, Python",
      tag: "Big Data",
      tagColor: "#5c4b1e",
      link: "https://github.com/bahatipatrick87/hbase_project_big_data",
      highlights: [
        "Designed and deployed a multi-node Hadoop/HBase cluster (HDFS, YARN, ZooKeeper) using Docker to store and query real-world FDA adverse-event data.",
        "Built a Python ETL pipeline converting 149,945 raw JSON adverse-event reports (233,821 linked product records) into HBase-ready TSV files, bulk-loaded via MapReduce ImportTsv.",
        "Designed a normalised HBase schema (namespaces, column families, versioning, compression) and implemented DDL, CRUD/DML, and cluster administration via the HBase Shell.",
      ]
    },
    {
      name: "AI Customer Support Automation Platform",
      tech: "n8n, OpenAI, Supabase, Airtable, Zendesk",
      tag: "AI Automation",
      tagColor: "#1e5091",
      highlights: [
        "Designed an AI-powered customer support workflow integrating semantic search, automated ticket classification, and Zendesk escalation.",
        "Built a Retrieval-Augmented Generation (RAG) chatbot using a Supabase Vector Store, with automated Airtable logging and HTML/CSS analytics dashboards.",
      ]
    },
    {
      name: "Multi-Agent Marketing Campaign Generator",
      tech: "n8n, Google Gemini, Google Docs",
      tag: "AI Automation",
      tagColor: "#1e5091",
      highlights: [
        "Developed a multi-agent AI system with specialised agents for campaign planning, content generation, and quality review.",
        "Automated brand strategy and editorial plan generation with consistent tone enforcement via Google Docs integration.",
      ]
    },
    {
      name: "Eventligo — Event Discovery Platform",
      tech: "Web Application, React, Node.js, Data Integration",
      tag: "Full-Stack Web",
      tagColor: "#525252",
      link: "https://github.com/bahatipatrick87/EventLingo-plateform",
      highlights: [
        "Co-designed and implemented a web platform that allows users to discover, create, and manage events in a unified interface.",
        "Built backend and data-handling components to support user registration, event workflows, and analytics-ready logging.",
        "Applied version control (Git) and iterative agile development practices within a cross-functional team.",
      ]
    },
    {
      name: "Real-Time Operational Monitoring Dashboard",
      tech: "Python, Power BI, SQL",
      tag: "Analytics",
      tagColor: "#737373",
      highlights: [
        "Designed an interactive, real-time dashboard to support operational decision-making and KPI tracking.",
        "Aggregated live operational data into intuitive visualisations for decision-makers.",
      ]
    },
    {
      name: "Image Processing Manipulation Tool",
      tech: "Python, NumPy, OpenCV, Matplotlib",
      tag: "Computer Vision",
      tagColor: "#525252",
      link: "https://github.com/bahatipatrick87/ImageProcessingManipulator",
      highlights: [
        "Developed a Python-based image processing application supporting filtering, transformation, and feature extraction.",
        "Showcased frequency-domain transformations and structural manipulation algorithms.",
      ]
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px", paddingBottom: "60px" }}>
      {/* Page Hero */}
      <section className="page-hero animate-fade-up">
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow" style={{ color: "#fff", marginBottom: "8px", opacity: 0.85 }}>
            Portfolio Showcase
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "16px" }}>
            Featured Projects
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 500, opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
            A curated selection spanning computational neuroscience, Big Data, deep learning, full-stack development, and analytics.
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

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "16px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
