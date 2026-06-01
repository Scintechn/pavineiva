import { business, formattedAddress } from "@/lib/business";

// Schema.org LocalBusiness — adequate for a precast manufacturer with a public
// office. We intentionally do NOT include AggregateRating: Google has excluded
// self-serving LocalBusiness reviews from review snippets since 2019, and
// inflated aggregates risk a manual action. Reviews live on-page for trust,
// not in schema.
export function LocalBusinessJsonLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.brandName,
    legalName: business.legalName,
    url: business.siteUrl,
    telephone: business.phone.landline.display,
    foundingDate: String(business.foundedYear),
    description:
      "Fabricante português de pré-esforçados e artefactos de betão desde 1978.",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.registeredOffice.street,
      postalCode: business.registeredOffice.postalCode,
      addressLocality: business.registeredOffice.locality,
      addressRegion: business.registeredOffice.region,
      addressCountry: business.registeredOffice.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: business.hours.weekdays.morning.open,
        closes: business.hours.weekdays.afternoon.close,
      },
    ],
    sameAs: [],
    areaServed: "Portugal",
    knowsAbout: [
      "Precast Concrete",
      "Prestressed Concrete",
      "Hollow-core Slabs",
      "Concrete Blocks",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}

// Acknowledged-but-unused helper to silence lint if formattedAddress is removed
// from elsewhere later. Schema uses structured fields directly.
void formattedAddress;
