"use client";

import { useState } from "react";
import Image from "next/image";
import { PRICING, PRICING_PICKER, BOOKING_URL } from "../../content";

const ITEMS = PRICING.groups.flatMap((g) => g.items);

/** "$200" -> 200 */
const dollars = (price) => Number(String(price).replace(/[^0-9.]/g, ""));

/** 16.666 -> "$16.67", 25 -> "$25" */
const money = (n) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`);

/**
 * @param {{ item: string, perWeek?: number }} plan
 * @returns {{ monthly: string, perClass: string }}
 */
function priceFor(plan) {
  const item = ITEMS.find((i) => i.name === plan.item);
  if (!item) return { monthly: "", perClass: "" };
  if (!plan.perWeek) return { monthly: "", perClass: item.price };
  return { monthly: `${item.price}${item.per}`, perClass: money(dollars(item.price) / (plan.perWeek * 4)) };
}

// Every tab's content is in the server HTML (inactive ones use `hidden`), so
// all prices stay crawlable; the picker only changes which plan is highlighted.
export default function PricingPicker() {
  const [tab, setTab] = useState(PRICING_PICKER.tabs[0].key);
  const [picks, setPicks] = useState(
    Object.fromEntries(PRICING_PICKER.tabs.map((t) => [t.key, t.defaultPick]))
  );

  return (
    <div className="pp">
      <div className="pp-free">
        <span>{PRICING_PICKER.freeLabel}</span>
        <strong>{PRICING_PICKER.freeValue}</strong>
      </div>

      <div className="pp-tabs" role="tablist" aria-label="Program">
        {PRICING_PICKER.tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`pp-tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls={`pp-panel-${t.key}`}
            className={`pp-tab${tab === t.key ? " is-active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {PRICING_PICKER.tabs.map((t) => (
        <div
          key={t.key}
          id={`pp-panel-${t.key}`}
          role="tabpanel"
          aria-labelledby={`pp-tab-${t.key}`}
          hidden={tab !== t.key}
          className="pp-panel"
        >
          {t.comp ? (
            <div className="pp-comp">
              <div className="pp-comp-photo">
                <Image src={t.comp.image} alt={t.comp.imageAlt} fill sizes="(max-width: 768px) 100vw, 560px" />
              </div>
              <div className="pp-comp-body">
                <p className="pp-comp-eyebrow">{t.comp.eyebrow}</p>
                <h3 className="pp-comp-title">{t.comp.title}</h3>
                <p className="pp-comp-text">{t.comp.body}</p>
                <p className="pp-comp-teaser">{t.comp.teaser}</p>
                <a href={t.comp.ctaHref} className="pp-comp-cta">{t.comp.cta}</a>
                <a href={t.comp.linkHref} className="pp-comp-link">{t.comp.link}</a>
              </div>
            </div>
          ) : (
            <>
              <p className="pp-question">{t.question}</p>
              <div className="pp-options">
                {t.options.map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    aria-pressed={picks[t.key] === o.key}
                    className={`pp-option${picks[t.key] === o.key ? " is-active" : ""}`}
                    onClick={() => setPicks({ ...picks, [t.key]: o.key })}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              <div className="pp-plans">
                {t.plans.map((p) => {
                  const mine = picks[t.key] === p.key;
                  const { monthly, perClass } = priceFor(p);
                  return (
                    <div key={p.key} className={`pp-plan${mine ? " is-mine" : ""}`}>
                      {(mine || p.best) && (
                        <div className="pp-badges">
                          {mine && <span className="pp-badge pp-badge--mine">Your Plan</span>}
                          {p.best && <span className="pp-badge pp-badge--best">Best Value</span>}
                        </div>
                      )}
                      <div className="pp-plan-copy">
                        <span className="pp-plan-name">{p.name ?? p.item}</span>
                        <span className="pp-plan-detail">{monthly ? `${monthly} · ${p.detail}` : p.detail}</span>
                      </div>
                      <div className="pp-plan-price">
                        <span className="pp-plan-num">{perClass}</span>
                        <span className="pp-plan-unit">per class</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      ))}

      <p className="pp-foot">{PRICING.discounts}</p>
      {PRICING.effective && <p className="pp-foot">{PRICING.effective}</p>}
      <a href={BOOKING_URL} className="btn-primary btn-lg pp-cta" target="_blank" rel="noopener noreferrer">
        Book a Free Trial Class
      </a>
    </div>
  );
}
