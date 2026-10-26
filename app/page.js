import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LocalBusinessJsonLd from "./components/LocalBusinessJsonLd";
import { FlashSaleBadge, FlashSaleBanner } from "./components/FlashSale";
import {
  BOOKING_URL,
  HERO,
  STATS,
  PATHWAYS,
  TRIAL,
  REVIEWS,
  CONTACT,
} from "../content";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Nav />

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
            <a href="/teams" className="btn-ghost">
              {HERO.secondaryCta} &rarr;
            </a>
          </div>
          <FlashSaleBadge />
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

      {/* HOMEPAGE PHOTO STRIP */}
      <div className="home-photo-strip">
        <img
          src="/assets/IMG_4684.jpeg"
          alt="Portal Dance Lab National Champions celebrating at The Dance Worlds"
          className="home-photo-img"
        />
        <div className="home-photo-overlay">
          <p className="home-photo-stat">11x National Champions.</p>
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
                {card.href && (
                <a href={card.href} className="pathway-link">
                  {card.link} &rarr;
                </a>
              )}
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

      {/* MERCH FLASH SALE TEASER (auto-hides after FLASH_SALE.endDate) */}
      <FlashSaleBanner />

      {/* CONTACT */}
      <section className="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="section-eyebrow">{CONTACT.eyebrow}</p>
              <h2 className="section-title">{CONTACT.title}</h2>
            </div>
            <div className="contact-details">
              <a href={`mailto:${CONTACT.email}`} className="contact-item contact-email">
                <span className="contact-icon">✉</span>
                <span>{CONTACT.email}</span>
              </a>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{CONTACT.address}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <span>{CONTACT.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
