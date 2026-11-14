// SEO baseline from source. Resolves titles the way Next 14 does
// (root title.template "%s | Portal Dance Lab" applied to child string titles).
// Usage: node scripts/seo-baseline.mjs > seo/baseline-YYYY-MM-DD.json
import { readFileSync } from "node:fs";
import { CITIES, ABOUT, CLASSES, TEAMS, SCHEDULE, HERO } from "../content.js";

const BASE = "https://www.portaldancelab.com";
const TEMPLATE = "%s | Portal Dance Lab";
const ROOT_TITLE = "Portal Dance Lab — Richmond, TX | Where Champions Are Made";
const ROOT_DESC =
  "11x National Champions. Competitive and recreational dance training for all ages in Richmond, TX. Hip hop, ballet, contemporary, jazz, drill team prep, and adult classes. Book your free first class today.";

const meta = (file) => {
  const src = readFileSync(new URL(`../app/${file}`, import.meta.url), "utf8");
  const title = src.match(/title:\s*"([^"]+)"/)?.[1] ?? null;
  const description = src.match(/description:\s*\n?\s*"([^"]+)"/)?.[1] ?? null;
  const canonical = /alternates\s*:/.test(src) ? "set" : null;
  return { title, description, canonical };
};

const applyTemplate = (t) => (t ? TEMPLATE.replace("%s", t) : ROOT_TITLE);

const pages = [
  { path: "/", title: ROOT_TITLE, description: ROOT_DESC, h1: HERO.headline.join(" "), canonical: null },
  ...[
    ["/about", "about/page.js", ABOUT.title],
    ["/classes", "classes/page.js", CLASSES.title],
    ["/teams", "teams/page.js", TEAMS.title],
    ["/schedule", "schedule/page.js", SCHEDULE.title],
    ["/privacy", "privacy/page.js", "Privacy Policy"],
  ].map(([path, file, h1]) => {
    const m = meta(file);
    return { path, title: applyTemplate(m.title), description: m.description, h1, canonical: m.canonical };
  }),
  ...CITIES.map((c) => ({
    path: `/locations/${c.slug}`,
    title: applyTemplate(c.metaTitle),
    description: c.metaDesc,
    h1: c.headline,
    canonical: null,
  })),
].map((p) => ({ ...p, url: BASE + (p.path === "/" ? "" : p.path), robots: "index,follow" }));

process.stdout.write(JSON.stringify({ generatedFrom: "source", base: BASE, pages }, null, 2) + "\n");
