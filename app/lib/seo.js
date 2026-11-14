// Per-page SEO metadata. Next's child `openGraph` replaces the parent's
// object wholesale, so every page needs its own full block (url, title,
// image) or it silently inherits the homepage's.

export const SITE_URL = "https://www.portaldancelab.com";
export const SITE_NAME = "Portal Dance Lab";
export const TITLE_SUFFIX = "Portal Dance Lab, Richmond TX";
export const TITLE_TEMPLATE = `%s | ${TITLE_SUFFIX}`;

export const OG_IMAGE = {
  url: "/assets/og-image-1200x630.jpg",
  width: 1200,
  height: 630,
  alt: "Portal Dance Lab national champions in Richmond, TX",
};

/**
 * @param {object} p
 * @param {string | { absolute: string }} p.title  String gets TITLE_TEMPLATE; `{absolute}` is used as-is.
 * @param {string} p.description
 * @param {string} p.path  Route path starting with "/", e.g. "/classes".
 * @returns {import("next").Metadata}
 */
export function pageMetadata({ title, description, path }) {
  const fullTitle =
    typeof title === "string" ? TITLE_TEMPLATE.replace("%s", title) : title.absolute;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
