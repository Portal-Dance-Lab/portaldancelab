import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { TEAMS, AUDITIONS_URL } from "../../content";

export const metadata = {
  title: "Competitive Teams — Portal Dance Lab | Richmond, TX",
  description:
    "11x National Champions. Five competitive teams training at the highest level in Richmond, TX. SZN III auditions open June 8–10. Portal Dance Lab.",
};

export default function TeamsPage() {
  const regularTeams = TEAMS.teams.filter((t) => !t.featured);
  const featuredTeam = TEAMS.teams.find((t) => t.featured);

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

      {/* AUDITIONS BANNER */}
      <div className="auditions-banner">
        <div className="auditions-inner">
          <div className="auditions-copy">
            <p className="auditions-eyebrow">{TEAMS.auditions.eyebrow}</p>
            <h2 className="auditions-title">{TEAMS.auditions.title}</h2>
            <p className="auditions-sub">{TEAMS.auditions.sub}</p>
            <p className="auditions-dates">{TEAMS.auditions.dates}</p>
            <p className="auditions-fee">{TEAMS.auditions.fee}</p>
          </div>
          <div className="auditions-action">
            <a href={AUDITIONS_URL} className="btn-coral" target="_blank" rel="noopener noreferrer">
              {TEAMS.auditions.cta}
            </a>
            <p className="auditions-workshop-note">{TEAMS.auditions.workshopNote}</p>
            <p className="auditions-note">{TEAMS.auditions.note}</p>
          </div>
        </div>
      </div>

      {/* COMPETITION PHOTO */}
      <div className="teams-photo-strip">
        <img
          src="/assets/photo-9.png"
          alt="Portal Dance Lab dancer at Super Nationals"
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

          {featuredTeam && (
            <div className="team-card team-card-featured">
              <div className="featured-badge">Flagship Team</div>
              <p className="team-age">{featuredTeam.age}</p>
              <p className="team-tagline">{featuredTeam.tagline}</p>
              <h3 className="team-name">{featuredTeam.name}</h3>
              <p className="team-desc">{featuredTeam.desc}</p>
            </div>
          )}
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
        <p className="szn3-eyebrow">Ready to Compete?</p>
        <h2 className="szn3-title">
          Auditions are <span className="accent">Open.</span>
        </h2>
        <p className="szn3-sub">{TEAMS.auditions.dates}</p>
        <a href={AUDITIONS_URL} className="btn-coral" target="_blank" rel="noopener noreferrer">
          {TEAMS.auditions.cta}
        </a>
      </div>

      <Footer />
    </>
  );
}
