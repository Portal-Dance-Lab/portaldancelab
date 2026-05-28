import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { ABOUT, BOOKING_URL } from "../../content";

export const metadata = {
  title: "About — Portal Dance Lab | Richmond, TX",
  description:
    "Founded in 2023 by Andrew Ton and Taylor Everett. Portal Dance Lab is Richmond, TX's competitive dance home — 11x national champions, built on discipline, culture, and a love for the craft.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="section-eyebrow">{ABOUT.eyebrow}</p>
          <h1 className="page-header-title">{ABOUT.title}</h1>
          <p className="page-header-sub">{ABOUT.sub}</p>
        </div>
      </div>

      {/* ORIGIN STORY */}
      <section className="about-origin">
        <div className="section-inner">
          <div className="about-origin-grid">
            <div className="about-origin-copy">
              <p className="section-eyebrow">{ABOUT.origin.eyebrow}</p>
              <h2 className="section-title">{ABOUT.origin.title}</h2>
              {ABOUT.origin.body.map((para, i) => (
                <p key={i} className="about-body">{para}</p>
              ))}
            </div>
            <div className="about-origin-accent">
              <div className="about-portal-ring">
                <div className="about-ring-inner">
                  <span className="about-ring-year">Est.</span>
                  <span className="about-ring-num">2023</span>
                  <span className="about-ring-label">Richmond, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION PILLARS */}
      <section className="about-mission">
        <div className="section-inner">
          <p className="section-eyebrow">{ABOUT.mission.eyebrow}</p>
          <h2 className="section-title">{ABOUT.mission.title}</h2>
          <div className="about-pillars">
            {ABOUT.mission.pillars.map((p, i) => (
              <div className="about-pillar" key={i}>
                <span className="about-pillar-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="about-pillar-heading">{p.heading}</h3>
                <p className="about-pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO DNA */}
      <div className="about-dna">
        <div className="about-dna-inner">
          <p className="section-eyebrow">{ABOUT.identity.eyebrow}</p>
          {ABOUT.identity.lines.map((line, i) => (
            <p className="about-dna-line" key={i}>
              <span className="about-dna-stat">{line.stat}</span>
              <span className="about-dna-label"> {line.label}</span>
            </p>
          ))}
        </div>
      </div>

      {/* FOUNDERS */}
      <section className="about-founders">
        <div className="section-inner">
          <p className="section-eyebrow">The Coaches</p>
          <h2 className="section-title">Who We Are.</h2>
          <div className="founders-grid">
            {ABOUT.founders.map((f, i) => (
              <div className="founder-card" key={i}>
                <div className="founder-photo-placeholder">
                  <span>{f.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div className="founder-copy">
                  <h3 className="founder-name">{f.name}</h3>
                  <p className="founder-title">{f.title}</p>
                  <p className="founder-bio">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SZN II RESULTS */}
      <div className="about-hardware">
        <div className="about-hardware-inner">
          <p className="section-eyebrow">{ABOUT.szn2.eyebrow}</p>
          <h2 className="about-hardware-title">{ABOUT.szn2.title}</h2>
          <div className="about-hardware-stats">
            {ABOUT.szn2.stats.map((s, i) => (
              <div className="about-hardware-stat" key={i}>
                <span className="about-hardware-number">{s.number}</span>
                <span className="about-hardware-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="about-cta">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Come See It For Yourself</p>
          <h2 className="section-title" style={{ marginBottom: 16 }}>First Class Is On Us.</h2>
          <p style={{ color: "var(--muted)", marginBottom: 36, fontSize: 16 }}>
            No forms, no sales pitch. Just come dance with us.
          </p>
          <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Book a Free Trial Class
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
