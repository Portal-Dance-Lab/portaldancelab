// LocalBusiness structured data for Google rich results + map pack eligibility.
// Schema type: DanceSchool (subtype of LocalBusiness).
// TODO: Add telephone field when phone number is confirmed.
// TODO: Swap og-image.jpg for final 1200x630 crop once agency delivers it.

export default function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: "Portal Dance Lab",
    description:
      "Richmond, TX's competitive dance studio. 11x National Champions. Competitive and recreational training for all ages — hip hop, jazz, contemporary, ballet, drill team prep, and adult classes.",
    url: "https://www.portaldancelab.com",
    logo: "https://www.portaldancelab.com/brand/pdl-logo-horizontal.svg",
    image: "https://www.portaldancelab.com/assets/og-image.jpg",
    email: "info@portaldancelab.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2441 Precinct Line Dr",
      addressLocality: "Richmond",
      addressRegion: "TX",
      postalCode: "77406",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: [
      "Richmond, TX",
      "Rosenberg, TX",
      "Sugar Land, TX",
      "Missouri City, TX",
      "Stafford, TX",
      "Katy, TX",
      "Pearland, TX",
      "Fulshear, TX",
      "Fort Bend County, TX",
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/portaldancelab",
      "https://www.tiktok.com/@portaldancelab",
      "https://www.facebook.com/p/Portal-Dance-Lab-61554361072668/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "26",
    },
    foundingDate: "2023",
    founder: [
      { "@type": "Person", name: "Andrew Ton" },
      { "@type": "Person", name: "Taylor Everett" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
