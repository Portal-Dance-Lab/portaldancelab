import Link from "next/link";
import { BOOKING_URL } from "../../content";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <img src="/brand/pdl-logo-horizontal.svg" alt="Portal Dance Lab" style={{ height: 36, display: "block" }} />
      </Link>
      <div className="nav-links">
        <a href="#">Classes</a>
        <a href="#">Teams</a>
        <Link href="/schedule">Schedule</Link>
        <a href="#">About</a>
        <a href="#">Shop</a>
        <a href={BOOKING_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
          Book a Free Trial
        </a>
      </div>
    </nav>
  );
}
