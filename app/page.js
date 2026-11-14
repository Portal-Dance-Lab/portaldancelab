import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LocalBusinessJsonLd from "./components/LocalBusinessJsonLd";
import { FlashSaleBadge, FlashSaleBanner } from "./components/FlashSale";
import Odometer from "./components/Odometer";
import { BOOKING_URL, HERO, STATS, TRIAL, HOME_PROOF, HARDWARE } from "../content";
import { pageMetadata, TITLE_SUFFIX } from "./lib/seo";

export const metadata = pageMetadata({
  // Root page shares the layout's segment, so the title template does not apply here.
  title: { absolute: `Competitive Dance Studio | ${TITLE_SUFFIX}` },
  description:
    "11x National Champions. Competitive and recreational dance training for all ages in Richmond, TX. Hip hop, ballet, contemporary, jazz, drill team prep, and adult classes. Book your free first class today.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/assets/mkd_1274_fixed.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg-img"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-stars" />
        <div className="portal-ring" />
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="hero-title">
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
          </p>
          <h1 className="hero-h1">{HERO.h1}</h1>
          <div className="hero-actions">
            <a href={BOOKING_URL} className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              {HERO.primaryCta}
            </a>
            <a href="/teams" className="btn-ghost hero-secondary">
              {HERO.secondaryCta} &rarr;
            </a>
          </div>
          <p className="hero-note">
            {HERO.ctaNote}
            {HERO.quizEnabled && (
              <>
                <span aria-hidden="true"> · </span>
                <a href="/find-your-class">{HERO.quizCta}</a>
              </>
            )}
          </p>
          <FlashSaleBadge />
        </div>
      </section>

      {/* STATS STRIP (numbers roll up like a slot machine when scrolled into view) */}
      <div className="stats-strip">
        <div className="stats-inner">
          {STATS.map((s) => (
            <div className="stat-item" key={s.label}>
              <Odometer value={`${s.number}${s.unit}`} className="stat-number" />
              <span className="stat-label">{s.label}</span>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT FAMILIES SAY */}
      <section className="home-proof">
        <div className="section-inner">
          <p className="section-eyebrow home-proof-eyebrow">{HOME_PROOF.eyebrow}</p>
          <div className="home-proof-rating">
            <span className="home-proof-score">{HOME_PROOF.rating}</span>
            <span className="home-proof-stars">
              <span aria-label="5 out of 5 stars">★★★★★</span>
              <span className="home-proof-note">{HOME_PROOF.ratingNote}</span>
            </span>
          </div>
        </div>
        <div className="home-proof-track">
          {HOME_PROOF.reviews.map((r) => (
            <figure className="home-proof-card" key={r.author}>
              <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption>{r.author}</figcaption>
            </figure>
          ))}
        </div>
        <p className="home-proof-swipe">{HOME_PROOF.swipeNote}</p>
      </section>

      {/* THE HARDWARE */}
      <section className="hardware">
        <div className="section-inner">
          <p className="section-eyebrow hardware-eyebrow">{HARDWARE.eyebrow}</p>
          <h2 className="section-title">{HARDWARE.title}</h2>
          <div className="hardware-photos">
            {HARDWARE.photos.map((ph, i) => (
              <div className={`hardware-photo${i === 0 ? " hardware-photo--wide" : ""}`} key={ph.src}>
                <Image src={ph.src} alt={ph.alt} fill sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"} />
              </div>
            ))}
          </div>
          <p className="hardware-competed">{HARDWARE.competedAt}</p>
        </div>
      </section>

      {/* FREE TRIAL */}
      <section className="trial" id="trial">
        <div className="section-inner trial-simple">
          <h2 className="section-title">{TRIAL.title}</h2>
          <p className="trial-simple-body">{TRIAL.bodyShort}</p>
          <ol className="trial-steps">
            {TRIAL.steps.map((step, i) => (
              <li key={i}>
                <span className="trial-step-num">{i + 1}</span>
                <span><strong>{step.heading}</strong> {step.desc}</span>
              </li>
            ))}
          </ol>
          <a href={BOOKING_URL} className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            {TRIAL.cta}
          </a>
        </div>
      </section>

      <FlashSaleBanner />

      <Footer />
    </>
  );
}
