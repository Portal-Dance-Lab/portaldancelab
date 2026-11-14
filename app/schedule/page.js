import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GymMasterCalendar from "./GymMasterCalendar";
import PricingPicker from "./PricingPicker";
import { SCHEDULE, PRICING, BOOKING_URL } from "../../content";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Class Schedule & Pricing",
  description:
    "Browse the full Portal Dance Lab class schedule. Hip hop, lyrical, technique, adult classes, and competitive team training in Richmond, TX. Book your spot today.",
  path: "/schedule",
});

export default function SchedulePage() {
  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="page-header-inner">
          <p className="section-eyebrow">{SCHEDULE.eyebrow}</p>
          <h1 className="page-header-title">{SCHEDULE.title}</h1>
          <p className="page-header-sub">{SCHEDULE.sub}</p>
          <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: 32, display: "inline-block" }}>
            Book a Free Trial
          </a>
        </div>
      </div>

      <section className="schedule-section">
        <div className="schedule-inner">
          <GymMasterCalendar />
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div className="section-inner">
          <p className="section-eyebrow">{PRICING.eyebrow}</p>
          <h2 className="section-title">{PRICING.title}</h2>
          <p className="pricing-sub">{PRICING.sub}</p>
          <PricingPicker />
        </div>
      </section>

      <Footer />
    </>
  );
}
