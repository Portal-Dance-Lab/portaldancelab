import Link from "next/link";
import { FOOTER } from "../../content";

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
