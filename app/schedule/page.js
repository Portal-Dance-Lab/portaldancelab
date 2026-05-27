import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GymMasterCalendar from "./GymMasterCalendar";
import { SCHEDULE, PRICING, BOOKING_URL, AUDITIONS_URL } from "../../content";

export const metadata = {
  title: "Class Schedule — Portal Dance Lab | Richmond, TX",
  description:
    "Browse the full Portal Dance Lab class schedule. Hip hop, lyrical, technique, adult classes, and competitive team training in Richmond, TX. Book your spot today.",
};

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
          <div className="pricing-groups">
            {PRICING.groups.map((group, i) => (
              <div className="pricing-group" key={i}>
                <div className="pricing-group-header">
                  <h3 className="pricing-group-label">{group.label}</h3>
                  <span className="pricing-group-note">{group.note}</span>
                  {group.note2 && <span className="pricing-group-note2">{group.note2}</span>}
                </div>
                <div className="pricing-items">
                  {group.items.map((item, j) => (
                    <div className="pricing-item" key={j}>
                      <div className="pricing-item-left">
                        <span className="pricing-item-name">{item.name}</span>
                        <span className="pricing-item-desc">{item.desc}</span>
                      </div>
                      <div className="pricing-item-price">
                        <span className="pricing-amount">{item.price}</span>
                        {item.per && <span className="pricing-per">{item.per}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                {group.label === "Competitive Team" && (
                  <a href={AUDITIONS_URL} className="btn-coral" style={{ marginTop: 24, display: "inline-block" }} target="_blank" rel="noopener noreferrer">
                    Register for Auditions
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="pricing-discounts">{PRICING.discounts}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
