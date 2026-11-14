import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Quiz from "./Quiz";
import { CLASS_PAGES } from "../../content";
import { pageMetadata } from "../lib/seo";

// Shareable quiz (Instagram bio, flyers). Kept out of search results: it is
// mostly buttons, and the class info lives on real, indexable pages.
export const metadata = {
  ...pageMetadata({
    title: "Find Your First Class",
    description: "Answer 3 quick questions and we'll recommend a first dance class at Portal Dance Lab in Richmond, TX. Your first class is free.",
    path: "/find-your-class",
  }),
  robots: { index: false, follow: true },
};

export default function FindYourClassPage() {
  return (
    <>
      <Nav />
      <div className="page-header quiz-header">
        <div className="page-header-inner">
          <p className="section-eyebrow">30-Second Quiz</p>
          <h1 className="page-header-title">Find Your First Class.</h1>
          <p className="page-header-sub">Three quick questions. Then book a free trial and we&apos;ll handle the rest.</p>
        </div>
      </div>
      <section className="quiz-section">
        <div className="section-inner">
          <Quiz />
          <noscript>
            <p className="quiz-noscript">
              Browse our classes:{" "}
              {CLASS_PAGES.map((c) => (
                <a key={c.slug} href={`/classes/${c.slug}`}>{c.h1.replace(/ in Richmond, TX$/, "")} </a>
              ))}
            </p>
          </noscript>
        </div>
      </section>
      <Footer />
    </>
  );
}
