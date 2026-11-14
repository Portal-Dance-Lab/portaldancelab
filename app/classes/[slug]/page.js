import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { CLASS_PAGES, PRICING, BOOKING_URL } from "../../../content";
import { pageMetadata, SITE_URL } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CLASS_PAGES.map((c) => ({ slug: c.slug }));
}

/** @param {{ params: { slug: string } }} props */
export function generateMetadata({ params }) {
  const page = CLASS_PAGES.find((c) => c.slug === params.slug);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.metaDesc, path: `/classes/${page.slug}` });
}

const ALL_PRICES = PRICING.groups.flatMap((g) => g.items);

/** @param {{ params: { slug: string } }} props */
export default function ClassPage({ params }) {
  const page = CLASS_PAGES.find((c) => c.slug === params.slug);
  if (!page) notFound();

  const prices = page.prices
    .map((name) => ALL_PRICES.find((item) => item.name === name))
    .filter(Boolean);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Classes", item: `${SITE_URL}/classes` },
      { "@type": "ListItem", position: 3, name: page.h1, item: `${SITE_URL}/classes/${page.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />

      {/* HERO */}
      <div className="city-hero class-hero">
        <Image src={page.image} alt={page.imageAlt} fill priority sizes="100vw" className="city-hero-img" />
        <div className="city-hero-overlay" />
        <div className="city-hero-content">
          <nav aria-label="Breadcrumb" className="class-breadcrumb">
            <a href="/">Home</a> / <a href="/classes">Classes</a> / <span>{page.h1.replace(/ in Richmond, TX$/, "")}</span>
          </nav>
          <h1 className="city-hero-title">{page.h1}</h1>
          <p className="city-hero-sub">{page.intro}</p>
          <div style={{ marginTop: 28 }}>
            <a href={BOOKING_URL} className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              Book a Free Trial Class
            </a>
          </div>
        </div>
      </div>

      {/* AGES */}
      <section className="class-section">
        <div className="section-inner">
          <h2 className="class-section-eyebrow">Age Groups</h2>
          <ul className="class-ages">
            {page.ages.map((a) => (
              <li key={a.label}>
                <strong>{a.label}</strong>
                <span>{a.range}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT THEY LEARN */}
      <section className="class-section">
        <div className="section-inner">
          <h2 className="section-title">{page.learnTitle}</h2>
          <ul className="class-learn">
            {page.learn.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="class-section">
        <div className="section-inner">
          <h2 className="section-title">Pricing</h2>
          <div className="class-prices">
            {prices.map((p) => (
              <div className="class-price" key={p.name}>
                <span className="class-price-num">{p.price}<small>{p.per}</small></span>
                <span className="class-price-name">{p.name}</span>
              </div>
            ))}
          </div>
          <p className="class-price-note">
            Month-to-month. <a href="/schedule">See class times and full pricing</a>
          </p>
        </div>
      </section>

      {/* COMPETING (optional, no pressure) */}
      <section className="class-section">
        <div className="section-inner">
          <a href="/teams" className="class-compete">
            <span className="class-compete-eyebrow">Curious About Competing?</span>
            <span className="class-compete-title">Totally Optional.</span>
            <span className="class-compete-body">Teams audition at the end of each season, and anyone can try out. Meet our competitive teams &rarr;</span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="class-section">
        <div className="section-inner">
          <h2 className="section-title">Parent Questions</h2>
          <div className="class-faq">
            {page.faq.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="city-cta">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Come See It For Yourself</p>
          <h2 className="section-title" style={{ marginBottom: 16 }}>First Class Is On Us.</h2>
          <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 480, margin: "0 auto 32px" }}>
            Sign up in about a minute. Our team will reach out to find the right class and time.
          </p>
          <a href={BOOKING_URL} className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            Book a Free Trial Class
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
