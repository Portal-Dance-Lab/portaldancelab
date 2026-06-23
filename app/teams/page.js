import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { TEAMS, BOOKING_URL } from "../../content";

export const metadata = {
  title: "Competitive Teams — Portal Dance Lab | Richmond, TX",
  description:
    "11x National Champions. Four competitive teams training at the highest level in Richmond, TX. Portal Dance Lab.",
};

export default function TeamsPage() {
  const regularTeams = TEAMS.teams;

  return (
    <>
      <Nav />

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="section-eyebrow">{TEAMS.eyebrow}</p>
          <h1 className="page-header-title">{TEAMS.title}</h1>
          <p className="page-header-sub">{TEAMS.sub}</p>
        </div>
      </div>

      {/* COMPETITION PHOTO */}
      <div className="teams-photo-strip">
        <img
          src="/assets/6.png"
          alt="Portal Dance Lab MonStarz competing at nationals"
          className="teams-photo-img"
        />
        <div className="teams-photo-overlay">
          <p className="teams-photo-stat">Super Nationals.</p>
        </div>
      </div>

      {/* PROGRAM OVERVIEW STRIP */}
      <div className="program-strip">
        <div className="program-strip-inner">
          {TEAMS.programDetails.map((item, i) => (
            <div className="program-strip-item" key={i}>
              <span className="program-strip-label">{item.label}</span>
              <span className="program-strip-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM CARDS */}
      <section className="teams-section">
        <div className="section-inner">
          <div className="teams-grid">
            {regularTeams.map((team, i) => (
              <div className="team-card" key={i}>
                <p className="team-age">{team.age}</p>
                <p className="team-tagline">{team.tagline}</p>
                <h3 className="team-name">{team.name}</h3>
                <p className="team-desc">{team.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="training-section">
        <div className="section-inner">
          <p className="section-eyebrow">What to Expect</p>
          <h2 className="section-title">This Is What Serious Looks Like.</h2>
          <div className="training-grid">
            {TEAMS.training.map((item, i) => (
              <div className="training-item" key={i}>
                <h4 className="training-heading">{item.heading}</h4>
                <p className="training-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div className="szn3-banner">
        <p className="szn3-eyebrow">Season III · Underway</p>
        <h2 className="szn3-title">
          Start Training <span className="accent">Now.</span>
        </h2>
        <p className="szn3-sub">The standard gets set in the building, not on the stage. Come take class with us and see what Portal is about.</p>
        <a href={BOOKING_URL} className="btn-coral" target="_blank" rel="noopener noreferrer">
          Book a Free Trial Class
        </a>
      </div>

      <Footer />
    </>
  );
}
