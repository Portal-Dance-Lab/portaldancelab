"use client";

import { useEffect, useState } from "react";
import { FLASH_SALE } from "../../content";

const toMs = (iso) => (iso ? new Date(iso).getTime() : null);

// phase: "tease" (no date yet) | "countdown" (before drop) | "live" | "over"
function useFlashSale() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const drop = toMs(FLASH_SALE.dropDate);
  const end = toMs(FLASH_SALE.endDate);
  const t = now ?? 0;

  let phase = "tease";
  let target = null;
  if (end && now && t >= end) phase = "over";
  else if (drop && now && t >= drop) { phase = "live"; target = end; }
  else if (drop) { phase = "countdown"; target = drop; }

  const left = target && now ? Math.max(0, target - t) : null;
  return { phase, left, ready: now !== null };
}

function split(ms) {
  const s = Math.floor(ms / 1000);
  return [
    { label: "Days", value: Math.floor(s / 86400) },
    { label: "Hrs", value: Math.floor((s % 86400) / 3600) },
    { label: "Min", value: Math.floor((s % 3600) / 60) },
    { label: "Sec", value: s % 60 },
  ];
}

export function FlashSaleBadge() {
  const { phase } = useFlashSale();
  if (phase === "over") return null;
  const b = FLASH_SALE.badge;
  return (
    <a href="#merch" className="hero-badge hero-badge-link">
      <div className="hero-badge-icon">{b.icon}</div>
      <div className="hero-badge-text">
        <strong>{phase === "live" ? b.liveLabel : b.label}</strong>
        {b.sub}
      </div>
    </a>
  );
}

export function FlashSaleBanner() {
  const { phase, left } = useFlashSale();
  if (phase === "over") return null;

  const fs = FLASH_SALE;
  const live = phase === "live" && fs.saleUrl;
  const href = live ? fs.saleUrl : fs.teaseHref;
  const cta = live ? fs.liveCta : fs.teaseCta;

  return (
    <div className="szn3-banner" id="merch">
      <p className="szn3-eyebrow">
        {phase === "live" && <span className="flash-live-dot" />}
        {phase === "live" ? `${fs.eyebrow} · Live Now` : fs.eyebrow}
      </p>
      <h2 className="szn3-title">
        {fs.title.map((line, i) => (
          <span key={i}>
            {line.includes(fs.accentWord) ? (
              <>
                {line.replace(fs.accentWord, "")}
                <span className="accent">{fs.accentWord}</span>
              </>
            ) : (
              line
            )}
            <br />
          </span>
        ))}
      </h2>
      <p className="szn3-sub">{phase === "live" ? fs.liveSub : fs.sub}</p>

      {left !== null && (
        <div className="flash-countdown" aria-label="Time remaining">
          {split(left).map((u) => (
            <div className="flash-unit" key={u.label}>
              <span className="flash-num">{String(u.value).padStart(2, "0")}</span>
              <span className="flash-label">{u.label}</span>
            </div>
          ))}
        </div>
      )}

      <a href={href} className="btn-coral" target="_blank" rel="noopener noreferrer">
        {cta}
      </a>
      {!live && <p className="flash-note">{fs.teaseNote}</p>}
    </div>
  );
}
