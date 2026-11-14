import Link from "next/link";
import { BOOKING_URL, PHONE, CONTACT, HERO } from "../../content";

const LINKS = [
  { href: "/classes", label: "Classes", note: "Ages 3 to Adult" },
  { href: "/teams", label: "Teams", note: "Competitive" },
  { href: "/schedule", label: "Schedule", note: "and pricing" },
  { href: "/about", label: "About" },
];

// Mobile menu is a native <details>, so it works with zero JavaScript and
// every link stays in the server-rendered HTML. Plain <a> tags make each tap
// a fresh page load, which also closes the menu.
export default function Nav() {
  return (
    <nav className="main-nav" aria-label="Main">
      <Link href="/" className="nav-logo">
        <img
          src="/brand/pdl-logo-horizontal.svg"
          alt="Portal Dance Lab"
          width={64}
          height={36}
          style={{ height: 36, width: "auto", display: "block" }}
        />
      </Link>

      <div className="nav-links">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
        <a href={BOOKING_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
          Book a Free Trial
        </a>
      </div>

      <details className="nav-menu">
        <summary aria-label="Menu">
          <svg className="nav-menu-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          <svg className="nav-menu-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </summary>
        <div className="nav-menu-panel">
          <div className="nav-menu-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-menu-link">
                {l.label}
                {l.note && <span>{l.note}</span>}
              </a>
            ))}
          </div>
          {HERO.quizEnabled && (
            <a href="/find-your-class" className="nav-menu-quiz">{HERO.quizCta} &rarr;</a>
          )}
          <div className="nav-menu-foot">
            <a href={BOOKING_URL} className="btn-primary nav-menu-cta" target="_blank" rel="noopener noreferrer">
              Book a Free Trial Class
            </a>
            <div className="nav-menu-contact">
              <a href={`tel:${PHONE.tel}`}>{PHONE.display}</a>
              <a href="https://maps.google.com/?q=Portal+Dance+Lab+2441+Precinct+Line+Rd+Richmond+TX" target="_blank" rel="noopener noreferrer">Directions</a>
            </div>
            <p className="nav-menu-address">{CONTACT.address}</p>
          </div>
        </div>
      </details>
    </nav>
  );
}
