import {
  BOOKING_URL,
  HERO,
  STATS,
  PATHWAYS,
  TRIAL,
  VIDEO,
  REVIEWS,
  SZN3,
  FOOTER,
} from "../content";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <img src="/brand/pdl-logo-horizontal.svg" alt="Portal Dance Lab" style={{ height: 36, display: "block" }} />
        </a>
        <div className="nav-links">
          <a href="#">Classes</a>
          <a href="#">Teams</a>
          <a href="#">Schedule</a>
          <a href="#">About</a>
          <a href="#">Shop</a>
          <a href={BOOKING_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Book a Free Trial
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-stars" />
        <div className="portal-ring" />
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="hero-eyebrow">{HERO.eyebrow}</p>
          <h1 className="hero-title">
            {HERO.headline.map((line, i) =>
              line === HERO.accentLine ? (
                <span key={i}>
                  <span className="accent">{line}</span>
                  <br />
                </span>
              ) : (
                <span key={i}>
                  {line}
                  <br />
                </span>
              )
            )}
          </h1>
          <p className="hero-sub">{HERO.sub}</p>
          <div className="hero-actions">
            <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              {HERO.primaryCta}
            </a>
            <a href="#" className="btn-ghost">
              {HERO.secondaryCta} &rarr;
            </a>
          </div>
          <div className="hero-badge">
            <div className="hero-badge-icon">🏆</div>
            <div className="hero-badge-text">
              <strong>{HERO.badge.label}</strong>
              {HERO.badge.sub}
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-inner">
          {STATS.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-number">
                {s.number}
                {s.unit && <span className="unit">{s.unit}</span>}
              </span>
              <span className="stat-label">{s.label}</span>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PATHWAYS */}
      <section className="pathways">
        <div className="section-inner">
          <div className="pathways-header">
            <p className="section-eyebrow">{PATHWAYS.eyebrow}</p>
            <h2 className="section-title">{PATHWAYS.title}</h2>
          </div>
          <div className="pathways-grid">
            {PATHWAYS.cards.map((card, i) => (
              <div className={`pathway-card ${card.variant}-card`} key={i}>
                <p className="pathway-who">{card.who}</p>
                <h3 className="pathway-heading">{card.heading}</h3>
                <p className="pathway-desc">{card.desc}</p>
                <a href={BOOKING_URL} className="pathway-link" target="_blank" rel="noopener noreferrer">
                  {card.link} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE TRIAL */}
      <section className="trial">
        <div className="trial-inner">
          <div className="trial-copy">
            <p className="section-eyebrow">{TRIAL.eyebrow}</p>
            <h2 className="section-title">{TRIAL.title}</h2>
            <p>{TRIAL.body}</p>
            <ul className="trial-list">
              {TRIAL.checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              {TRIAL.cta}
            </a>
          </div>
          <div className="trial-photo">
            <img src="/assets/competition-shot-fixed.jpg" alt="PDL dancer performing on stage" />
            <div className="trial-photo-overlay" />
            <div className="trial-photo-badge">
              <div className="badge-stat">{TRIAL.badgeStat}</div>
              <div className="badge-label">{TRIAL.badgeLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <div className="video-inner">
          <div className="video-header">
            <p className="section-eyebrow">{VIDEO.eyebrow}</p>
            <h2 className="section-title">{VIDEO.title}</h2>
          </div>
          {VIDEO.youtubeId ? (
            <div className="video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO.youtubeId}`}
                title="PDL Competition Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="video-placeholder">
              <div className="play-btn">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="video-label">{VIDEO.label}</div>
              <div className="video-sub">[ Paste YouTube ID in content.js to activate ]</div>
            </div>
          )}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="social-proof">
        <div className="section-inner">
          <p className="section-eyebrow">{REVIEWS.eyebrow}</p>
          <h2 className="section-title">{REVIEWS.title}</h2>
          <div className="proof-grid">
            {REVIEWS.cards.map((card, i) => (
              <div className="proof-card" key={i}>
                <div className="proof-stars">★★★★★</div>
                <p className="proof-quote">&ldquo;{card.quote}&rdquo;</p>
                <div className="proof-author">{card.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SZN3 BANNER */}
      <div className="szn3-banner">
        <p className="szn3-eyebrow">{SZN3.eyebrow}</p>
        <h2 className="szn3-title">
          {SZN3.title.map((line, i) =>
            line.includes(SZN3.accentWord) ? (
              <span key={i}>
                {line.replace(SZN3.accentWord, "")}
                <span className="accent">{SZN3.accentWord}</span>
                <br />
              </span>
            ) : (
              <span key={i}>
                {line}
                <br />
              </span>
            )
          )}
        </h2>
        <p className="szn3-sub">{SZN3.sub}</p>
        <a href={BOOKING_URL} className="btn-coral" target="_blank" rel="noopener noreferrer">
          {SZN3.cta}
        </a>
        <div className="szn3-dates">{SZN3.dates}</div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <img
                src="/brand/pdl-logo-white-transparent.png"
                alt="Portal Dance Lab"
                style={{ height: 40, marginBottom: 12, display: "block" }}
              />
              <p className="footer-brand-desc">{FOOTER.desc}</p>
            </div>
            {FOOTER.columns.map((col, i) => (
              <div className="footer-col" key={i}>
                <div className="footer-col-title">{col.title}</div>
                <ul>
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <div className="footer-legal">{FOOTER.legal}</div>
            <div className="footer-address">{FOOTER.domain}</div>
          </div>
        </div>
      </footer>
    </>
  );
}
