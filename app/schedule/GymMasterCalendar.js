"use client";
import { useEffect } from "react";
import { SCHEDULE_EMBED_URL } from "../../content";

export default function GymMasterCalendar() {
  useEffect(() => {
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
        src={SCHEDULE_EMBED_URL}
        width="100%"
        frameBorder="0"
        allow="camera *"
        style={{ minHeight: 700, display: "block", border: "none" }}
      />
    </div>
  );
}
