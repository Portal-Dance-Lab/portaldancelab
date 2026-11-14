"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "../../content";

// Mobile-only booking bar. Slides up once the visitor scrolls past the first
// screen, and hides again when the footer (which has its own CTA) is in view.
// Purely an extra CTA: the page's content never depends on this script.
export default function StickyBookBar() {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.querySelector("footer");
    let observer;
    if (footer && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
      observer.observe(footer);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastHero && !footerVisible;

  return (
    <div className={`sticky-book${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <div className="sticky-book-copy">
        <strong>First class free</strong>
        <span>Ages 3 to Adult</span>
      </div>
      <a
        href={BOOKING_URL}
        className="btn-primary sticky-book-cta"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        Book Free Trial
      </a>
    </div>
  );
}
