import type { Metadata } from "next";
import { SectionCard } from "../page";
import { SocialContactList } from "@/components/social-contact-list";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bahati Patrick for freelance, full-time roles, or exciting collaboration opportunities.",
};

const EMAIL = "bahatipatrick87@gmail.com";

export default function ContactPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px", paddingBottom: "60px" }}>
      {/* Page Hero */}
      <section className="page-hero animate-fade-up" style={{ backgroundImage: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow" style={{ color: "#fff", marginBottom: "8px", opacity: 0.85 }}>
            Get in touch
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "16px" }}>
            Contact Me
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 500, opacity: 0.9, maxWidth: "600px", lineHeight: 1.6 }}>
            I am currently open to new opportunities, freelance work, and exciting collaborations worldwide.
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <div style={{ display: "grid", gap: "28px" }} className="lg-two-col anim-group">
        <style>{`
          @media (min-width: 1024px) {
            .lg-two-col { grid-template-columns: 1fr 1.5fr !important; align-items: start; }
          }
          .anim-group > *:nth-child(1) { animation: fadeUp 0.6s ease both; animation-delay: 0.1s; }
          .anim-group > *:nth-child(2) { animation: fadeUp 0.6s ease both; animation-delay: 0.2s; }
        `}</style>

        {/* Info Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <SectionCard title="Contact Info" eyebrow="Reach Out">
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href={`mailto:${EMAIL}`} className="contact-item">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.2rem" }}>✉</span>
                  <span style={{ fontWeight: 600 }}>Email</span>
                </div>
                <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--accent)" }}>{EMAIL}</span>
              </a>
              <a href="tel:+393925473237" className="contact-item">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.2rem" }}>📞</span>
                  <span style={{ fontWeight: 600 }}>Phone</span>
                </div>
                <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "var(--accent)" }}>+39 392 547 3237</span>
              </a>
              <SocialContactList iconSize="1.2rem" />
            </div>
          </SectionCard>
        </div>

        {/* Message Form (Visual Only for now) */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SectionCard title="Send a Message" eyebrow="Direct Line">
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                marginBottom: "16px",
                lineHeight: 1.6,
              }}
            >
              Fill in the form and we&apos;ll open your email app with everything
              ready to send.
            </p>
            <ContactForm email={EMAIL} />
          </SectionCard>
        </div>

      </div>
    </div>
  );
}
