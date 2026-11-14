"use client";

import { useState } from "react";
import { BOOKING_URL } from "../../content";

/**
 * @typedef {{ name: string, ages: string, why: string, href: string, compete: boolean }} Match
 */

const QUESTIONS = [
  {
    key: "age",
    q: "How old is your dancer?",
    opts: [
      { v: "little", label: "3 to 7", sub: "Tiny & Mini" },
      { v: "kid", label: "8 to 12", sub: "Youth" },
      { v: "teen", label: "13 to 18", sub: "Junior & Senior" },
      { v: "adult", label: "It's me, I'm an adult", sub: "18 and up" },
    ],
  },
  {
    key: "vibe",
    q: "What gets them moving?",
    opts: [
      { v: "energy", label: "Big energy and beats", sub: "Hip hop, freestyle" },
      { v: "graceful", label: "Graceful and expressive", sub: "Jazz, contemporary, lyrical" },
      { v: "unsure", label: "Not sure yet", sub: "That's totally fine" },
    ],
  },
  {
    key: "goal",
    q: "Anything specific in mind?",
    opts: [
      { v: "fun", label: "Just for fun and fitness", sub: "Build confidence, make friends" },
      { v: "drill", label: "School drill team tryouts", sub: "Pom, kick, precision" },
      { v: "compete", label: "Curious about competing", sub: "Teams and nationals" },
    ],
  },
];

/** @param {Record<string, string>} a @returns {Match} */
function match(a) {
  if (a.age === "adult") {
    return { name: "Adult Hip Hop", ages: "18 and up", href: "/classes/hip-hop", compete: false,
      why: "You don't have to have started young. Hip hop and conditioning taught by pros, whether you're brand new or coming back after years away." };
  }
  if (a.age === "little") {
    return { name: a.vibe === "graceful" ? "Tiny & Mini Jazz" : "Tiny & Mini Hip Hop", ages: "Ages 3 to 7", href: "/classes/kids", compete: false,
      why: "Small classes and big energy, built to make little ones love dance first. The skills follow fast." };
  }
  if (a.goal === "drill") {
    return { name: "Drill Team Prep", ages: "Middle and high school", href: "/classes/drill-team-prep", compete: false,
      why: "Pom and kick technique, precision, and performance quality: what tryout panels look for. Year-round, so dancers peak before tryouts." };
  }
  const graceful = a.vibe === "graceful";
  return {
    name: graceful ? "Jazz & Contemporary" : "Hip Hop",
    ages: a.age === "kid" ? "Ages 8 to 12" : "Ages 13 to 18",
    href: graceful ? "/classes" : "/classes/hip-hop",
    compete: a.goal === "compete",
    why: graceful
      ? "Technique, artistry, and expression. A great fit for dancers who love music they can feel."
      : "High energy, real foundations, and choreography that feels like a performance. The most popular place to start.",
  };
}

export default function Quiz() {
  /** @type {[Record<string, string>, Function]} */
  const [answers, setAnswers] = useState({});

  // Adults skip straight to a match; little ones skip the goal question.
  const steps = QUESTIONS.filter((q) => {
    if (q.key === "vibe") return answers.age !== "adult";
    if (q.key === "goal") return !answers.age || answers.age === "kid" || answers.age === "teen";
    return true;
  });
  const current = steps.find((q) => !(q.key in answers));
  const stepIndex = current ? steps.indexOf(current) : steps.length;
  const result = current ? null : match(answers);

  return (
    <div className="quiz" aria-live="polite">
      <div className="quiz-progress" aria-hidden="true">
        <div style={{ width: `${Math.round((stepIndex / steps.length) * 100)}%` }} />
      </div>

      {current ? (
        <div className="quiz-step">
          <p className="section-eyebrow">Question {stepIndex + 1} of {steps.length}</p>
          <h2 className="quiz-q">{current.q}</h2>
          <div className="quiz-opts">
            {current.opts.map((o) => (
              <button key={o.v} type="button" className="quiz-opt" onClick={() => setAnswers({ ...answers, [current.key]: o.v })}>
                <span>{o.label}</span>
                <small>{o.sub}</small>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <p className="section-eyebrow quiz-match-label">Your Match</p>
          <h2 className="quiz-result-name">{result.name}</h2>
          <p className="quiz-result-ages">{result.ages}</p>
          <p className="quiz-result-why">{result.why}</p>
          {result.compete && (
            <p className="quiz-result-note">Curious about competing? Teams audition at the end of each season, and anyone can try out. No rush.</p>
          )}
          <a href={BOOKING_URL} className="btn-primary btn-lg quiz-cta" target="_blank" rel="noopener noreferrer">
            Book a Free Trial Class
          </a>
          <p className="quiz-result-foot">
            Mention &ldquo;{result.name}&rdquo; when we reach out. We&apos;ll confirm the best class and time.
          </p>
          <p className="quiz-result-links">
            <a href={result.href}>Learn more about {result.name}</a>
            <button type="button" className="quiz-restart" onClick={() => setAnswers({})}>Start over</button>
          </p>
        </div>
      )}
    </div>
  );
}
