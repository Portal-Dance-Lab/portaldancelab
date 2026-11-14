// SEO baseline from source. Resolves titles the way Next 14 does: the root
// layout's title.template applies to child-segment string titles, but not to
// app/page.js (same segment as the layout) or to { absolute } titles.
// Usage: node scripts/seo-baseline.mjs > seo/baseline-YYYY-MM-DD.json
import { existsSync, readFileSync } from "node:fs";
import { CITIES, ABOUT, CLASSES, TEAMS, SCHEDULE, HERO } from "../content.js";

const BASE = "https://www.portaldancelab.com";
const read = (rel) => readFileSync(new URL(`../${rel}`, import.meta.url), "utf8");

const layout = read("app/layout.js");
const hasHelper = existsSync(new URL("../app/lib/seo.js", import.meta.url));
const SUFFIX = hasHelper ? read("app/lib/seo.js").match(/TITLE_SUFFIX = "([^"]+)"/)[1] : null;
const TEMPLATE = hasHelper ? `%s | ${SUFFIX}` : layout.match(/template:\s*"([^"]+)"/)[1];
const ROOT_TITLE = layout.match(/default:\s*"([^"]+)"/)[1];

const applyTemplate = (t) => TEMPLATE.replace("%s", t);
const descOf = (src) => src.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? null;
const canonicalOf = (src) =>
  src.match(/path:\s*"([^"]+)"/)?.[1] ?? (/alternates\s*:/.test(src) ? "set" : null);

function staticPage(path, file, h1) {
  const src = read(`app/${file}`);
  const t = src.match(/title:\s*"([^"]+)"/)?.[1];
  return { path, title: t ? applyTemplate(t) : ROOT_TITLE, description: descOf(src), h1, canonical: canonicalOf(src) };
}

function homePage() {
  const src = read("app/page.js");
  const abs = src.match(/absolute:\s*`([^`]+)`/)?.[1];
  const title = abs ? abs.replace("${TITLE_SUFFIX}", SUFFIX) : ROOT_TITLE;
  const description = descOf(src) ?? descOf(layout);
  return { path: "/", title, description, h1: HERO.headline.join(" "), canonical: canonicalOf(src) };
}

const citySrc = read("app/locations/[city]/page.js");
const cityAbsolute = /absolute:\s*city\.metaTitle/.test(citySrc);
const cityCanonical = /path:\s*`\/locations\//.test(citySrc);

const pages = [
  homePage(),
  staticPage("/about", "about/page.js", ABOUT.title),
  staticPage("/classes", "classes/page.js", CLASSES.title),
  staticPage("/teams", "teams/page.js", TEAMS.title),
  staticPage("/schedule", "schedule/page.js", SCHEDULE.title),
  staticPage("/privacy", "privacy/page.js", "Privacy Policy"),
  ...CITIES.map((c) => ({
    path: `/locations/${c.slug}`,
    title: cityAbsolute ? c.metaTitle : applyTemplate(c.metaTitle),
    description: c.metaDesc,
    h1: c.headline,
    canonical: cityCanonical ? `/locations/${c.slug}` : null,
  })),
].map((p) => ({ ...p, url: BASE + (p.path === "/" ? "" : p.path), robots: "index,follow" }));

process.stdout.write(JSON.stringify({ generatedFrom: "source", base: BASE, pages }, null, 2) + "\n");
