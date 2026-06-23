import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { CLASSES, BOOKING_URL } from "../../content";

export const metadata = {
  title: "Classes & Programs — Portal Dance Lab | Richmond, TX",
  description:
    "Hip hop, jazz, contemporary, ballet, drill team prep, adult classes, and competitive team training in Richmond, TX. All ages, all levels. First class is free.",
};

export default function ClassesPage() {
  return (
    <>
      <Nav />

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="section-eyebrow">{CLASSES.eyebrow}</p>
          <h1 className="page-header-title">{CLASSES.title}</h1>
          <p className="page-header-sub">{CLASSES.sub}</p>
          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Book a Free Trial
            </a>
            <Link href="/schedule" className="btn-ghost">
              View Full Schedule &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* TWO TRACKS */}
      <section className="tracks-section">
        <div className="section-inner">
          <p className="section-eyebrow">{CLASSES.tracks.eyebrow}</p>
          <h2 className="section-title">{CLASSES.tracks.title}</h2>
          <p className="tracks-sub">{CLASSES.tracks.sub}</p>
          <div className="tracks-grid">
            {/* Recreational */}
            <div className="track-card track-card--rec">
              <p className="track-label">{CLASSES.tracks.rec.label}</p>
              <h3 className="track-heading">{CLASSES.tracks.rec.heading}</h3>
              <p className="track-desc">{CLASSES.tracks.rec.desc}</p>
              <ul className="track-details">
                {CLASSES.tracks.rec.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <Link href={CLASSES.tracks.rec.ctaHref} className="btn-primary" style={{ marginTop: 32, display: "inline-block" }}>
                {CLASSES.tracks.rec.cta}
              </Link>
            </div>
            {/* Competitive */}
            <div className="track-card track-card--comp">
              <p className="track-label">{CLASSES.tracks.competitive.label}</p>
              <h3 className="track-heading">{CLASSES.tracks.competitive.heading}</h3>
              <p className="track-desc">{CLASSES.tracks.competitive.desc}</p>
              <ul className="track-details">
                {CLASSES.tracks.competitive.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <Link href={CLASSES.tracks.competitive.ctaHref} className="btn-coral" style={{ marginTop: 32, display: "inline-block" }}>
                {CLASSES.tracks.competitive.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <div className="classes-photo-strip">
        <img
          src="/assets/photo-7.png"
          alt="Portal Dance Lab dancers performing on stage"
          className="classes-photo-img"
        />
        <div className="classes-photo-overlay">
          <p className="classes-photo-label">This is where it goes.</p>
        </div>
      </div>

      {/* PROGRAM CARDS */}
      <section className="programs-section">
        <div className="section-inner">
          <div className="programs-grid">
            {CLASSES.programs.map((prog, i) => (
              <div className={`program-card program-card--${prog.accent}`} key={i}>
                <p className="program-eyebrow">{prog.eyebrow}</p>
                <h3 className="program-heading">{prog.heading}</h3>
                <p className="program-desc">{prog.desc}</p>
                <a href={BOOKING_URL} className="program-cta" target="_blank" rel="noopener noreferrer">
                  Book a Free Trial &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRILL TEAM PREP */}
      <section className="drill-section">
        <div className="section-inner">
          <div className="drill-inner">
            <div className="drill-copy">
              <p className="section-eyebrow">{CLASSES.drillTeam.eyebrow}</p>
              <h2 className="section-title">{CLASSES.drillTeam.title}</h2>
              <p className="drill-desc">{CLASSES.drillTeam.desc}</p>
              <ul className="drill-list">
                {CLASSES.drillTeam.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <Link href="/schedule" className="btn-primary" style={{ marginTop: 32, display: "inline-block" }}>
                {CLASSES.drillTeam.cta}
              </Link>
            </div>
            <div className="drill-badge">
              <div className="drill-badge-inner">
                <span className="drill-badge-state">Texas</span>
                <span className="drill-badge-label">Fort Bend County</span>
                <span className="drill-badge-sub">Drill Team Capital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE TRAINING */}
      <section className="private-section">
        <div className="section-inner">
          <p className="section-eyebrow">{CLASSES.privateTraining.eyebrow}</p>
          <h2 className="section-title">{CLASSES.privateTraining.title}</h2>
          <p className="private-desc">{CLASSES.privateTraining.desc}</p>
          <div className="private-grid">
            {CLASSES.privateTraining.offerings.map((o, i) => (
              <div className="private-card" key={i}>
                <h4 className="private-name">{o.name}</h4>
                <p className="private-offering-desc">{o.desc}</p>
              </div>
            ))}
          </div>
          <div className="private-cta-row">
            <a href={CLASSES.privateTraining.ctaHref} className="btn-primary">
              {CLASSES.privateTraining.cta}
            </a>
            <p className="private-note">{CLASSES.privateTraining.note}</p>
          </div>
        </div>
      </section>

      {/* FIT GUIDE */}
      <section className="guide-section">
        <div className="section-inner">
          <p className="section-eyebrow">{CLASSES.guide.eyebrow}</p>
          <h2 className="section-title">{CLASSES.guide.title}</h2>
          <div className="guide-grid">
            {CLASSES.guide.options.map((opt, i) => (
              <div className="guide-item" key={i}>
                <p className="guide-situation">{opt.situation}</p>
                <p className="guide-rec">{opt.rec}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Book a Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
