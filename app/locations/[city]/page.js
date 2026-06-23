import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { CITIES, BOOKING_URL, REVIEWS } from "../../../content";

export async function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }) {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDesc,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDesc,
      url: `https://www.portaldancelab.com/locations/${city.slug}`,
    },
  };
}

export default function CityPage({ params }) {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) notFound();

  return (
    <>
      <Nav />

      {/* CITY HERO */}
      <div
        className="city-hero"
        style={city.image ? { backgroundImage: `url(${city.image})` } : {}}
      >
        <div className="city-hero-overlay" />
        <div className="city-hero-content">
          <p className="section-eyebrow">Portal Dance Lab · Richmond, TX</p>
          <h1 className="city-hero-title">{city.headline}</h1>
          <p className="city-hero-sub">{city.sub}</p>
          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Book a Free Trial Class
            </a>
          </div>
        </div>
      </div>

      {/* BODY COPY */}
      <section className="city-body">
        <div className="section-inner city-body-inner">
          <div className="city-copy">
            {city.paras.map((para, i) => (
              <p key={i} className="city-para">{para}</p>
            ))}
          </div>

          {/* QUICK FACTS */}
          <aside className="city-aside">
            <div className="city-aside-card">
              <p className="city-aside-label">Studio Location</p>
              <p className="city-aside-value">2441 Precinct Line Dr<br />Richmond, TX 77406</p>
            </div>
            <div className="city-aside-card">
              <p className="city-aside-label">Hours</p>
              <p className="city-aside-value">Mon – Fri: 4PM – 9PM<br />Sat: 9AM – 2PM</p>
            </div>
            <div className="city-aside-card">
              <p className="city-aside-label">First Class</p>
              <p className="city-aside-value city-aside-value--highlight">Always Free</p>
            </div>
            <div className="city-aside-card">
              <p className="city-aside-label">Programs</p>
              <p className="city-aside-value">Ages 3 – Adult<br />Recreational + Competitive</p>
            </div>
            <a href={BOOKING_URL} className="btn-primary city-aside-cta" target="_blank" rel="noopener noreferrer">
              Book a Free Trial
            </a>
          </aside>
        </div>
      </section>

      {/* OFFERINGS STRIP */}
      <div className="city-offerings">
        <div className="city-offerings-inner">
          <p className="section-eyebrow" style={{ marginBottom: 32 }}>What We Teach</p>
          <div className="city-offerings-grid">
            {["Hip Hop", "Jazz", "Contemporary", "Lyrical", "Ballet", "Technique", "Drill Team Prep", "Adult Classes"].map((style) => (
              <div className="city-offering-item" key={style}>{style}</div>
            ))}
          </div>
        </div>
      </div>

      {/* PROOF — REVIEWS */}
      <section className="city-reviews">
        <div className="section-inner">
          <p className="section-eyebrow">{REVIEWS.eyebrow}</p>
          <h2 className="section-title">{REVIEWS.title}</h2>
          <div className="city-reviews-grid">
            {REVIEWS.cards.map((review, i) => (
              <div className="proof-card" key={i}>
                <div className="proof-stars">★★★★★</div>
                <p className="proof-quote">"{review.quote}"</p>
                <p className="proof-author">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="city-cta">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Come See It For Yourself</p>
          <h2 className="section-title" style={{ marginBottom: 16 }}>First Class Is On Us.</h2>
          <p style={{ color: "var(--muted)", marginBottom: 36, fontSize: 16, maxWidth: 480, margin: "0 auto 36px" }}>
            No forms, no sales pitch. Just come dance. One free trial class, any style, any age group.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Book a Free Trial Class
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
