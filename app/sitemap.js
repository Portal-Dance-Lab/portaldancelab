import { CITIES } from "../content";

const BASE = "https://www.portaldancelab.com";

export default function sitemap() {
  const now = new Date();

  const corePages = [
    { url: BASE,                     lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/classes`,         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/teams`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/schedule`,        lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/about`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy`,         lastModified: now, changeFrequency: "yearly",  priority: 0.1 },
  ];

  const cityPages = CITIES.map((city) => ({
    url: `${BASE}/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...corePages, ...cityPages];
}
