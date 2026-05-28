import Link from "next/link";
import { FOOTER, SOCIALS } from "../../content";

function SocialIcon({ icon }) {
  if (icon === "instagram") return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
    </svg>
  );
  if (icon === "tiktok") return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.74a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z"/>
    </svg>
  );
  if (icon === "facebook") return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
  return null;
}

export default function Footer() {
  return (
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
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
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
          <Link href="/privacy" className="footer-privacy">Privacy Policy</Link>
          <div className="footer-address">{FOOTER.domain}</div>
        </div>
      </div>
    </footer>
  );
}
