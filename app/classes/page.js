import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { CLASSES, BOOKING_URL, AUDITIONS_URL } from "../../content";

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

      {/* THE PORTAL PATHWAY */}
      <section className="pipeline-section">
        <div className="section-inner">
          <p className="section-eyebrow">{CLASSES.pipeline.eyebrow}</p>
          <h2 className="section-title">{CLASSES.pipeline.title}</h2>
          <p className="pipeline-sub">{CLASSES.pipeline.sub}</p>
          <div className="pipeline-steps">
            {CLASSES.pipeline.steps.map((step, i) => (
              <>
                <div className={`pipeline-step pipeline-step--${step.accent}`} key={i}>
                  <span className="pipeline-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="pipeline-step-label">{step.label}</h3>
                  <p className="pipeline-step-age">{step.age}</p>
                  <p className="pipeline-step-desc">{step.desc}</p>
                </div>
                {i < CLASSES.pipeline.steps.length - 1 && (
                  <div className="pipeline-arrow" key={`arrow-${i}`}>→</div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section className="programs-section">
        <div className="section-inner">
          <div className="programs-grid">
            {CLASSES.programs.map((prog, i) => (
              <div className={`program-card program-card--${prog.accent}`} key={i}>
                <p className="program-eyebrow">{prog.eyebrow}</p>
                <h3 className="program-heading">{prog.heading}</h3>
                <p className="program-desc">{prog.desc}</p>
                <div className="style-tags">
                  {prog.styles.map((s, j) => (
                    <span className="style-tag" key={j}>{s}</span>
                  ))}
                </div>
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
            <a href={AUDITIONS_URL} className="btn-coral" target="_blank" rel="noopener noreferrer">
              Register for Auditions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
