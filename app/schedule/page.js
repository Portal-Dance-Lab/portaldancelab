import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GymMasterCalendar from "./GymMasterCalendar";
import { SCHEDULE, BOOKING_URL } from "../../content";

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

      <Footer />
    </>
  );
}
