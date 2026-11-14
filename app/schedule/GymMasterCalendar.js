"use client";
import { useEffect } from "react";
import { SCHEDULE_EMBED_URL } from "../../content";

// GymMaster's hostpage.js only auto-sizes the iframe, but on phones it was
// sending visitors to the GymMaster site. So: load it on desktop only, and
// sandbox the iframe without allow-top-navigation so the embed can never
// replace this page. Popups stay allowed for booking/login windows.
export default function GymMasterCalendar() {
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const loadScript = (src, onLoad) => {
      const s = document.createElement("script");
      s.src = src;
      s.type = "text/javascript";
      if (onLoad) s.onload = onLoad;
      document.body.appendChild(s);
      return s;
    };

    loadScript(
      "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",
      () => loadScript("https://portaldancelab.gymmasteronline.com/portal/static/js/hostpage.js")
    );
  }, []);

  return (
    <div className="gymmaster-wrapper">
      <iframe
        className="gmiframe"
        title="Portal Dance Lab class schedule"
        src={SCHEDULE_EMBED_URL}
        width="100%"
        frameBorder="0"
        allow="camera *"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        style={{ minHeight: 700, display: "block", border: "none" }}
      />
    </div>
  );
}
