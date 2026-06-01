// Single source of truth for business FACTS.
// Verified against the current site, Google Maps, ANIPB, and decoded from the old Joomla
// email-cloak. Any future fact change happens here, in one place.
//
// PENDING OWNER CONFIRMATION:
//   - hours: per-day breakdown (Google only confirmed "closes 6 pm"; assumed standard PT industrial)
//   - whatsapp.number: not publicly listed; FAB stays hidden until owner provides a number
//   - geo.lat / geo.lng: approximate from the postal code centroid; refine with the exact pin
//     when the Google Maps Embed key is provisioned

export const business = {
  legalName: "Pavineiva – Pinheiro, Rocha & Reis, Lda.",
  brandName: "PAVINEIVA",
  brandShort: "Pavineiva",
  siteUrl: "https://pavineiva.vercel.app",
  taxId: "500678189",
  foundedYear: 1978,

  registeredOffice: {
    street: "Zona Industrial 2.ª fase",
    postalCode: "4935-232",
    locality: "Neiva",
    region: "Viana do Castelo",
    country: "PT",
    countryName: "Portugal",
  },

  phone: {
    landline: { display: "+351 258 350 480", href: "tel:+351258350480" },
  },

  fax: { display: "+351 258 350 489" },

  // WhatsApp FAB and inline buttons read `whatsapp.number`. When it's an empty string,
  // every WhatsApp surface (FAB + buttons) is hidden. Set the digits-only number here
  // (e.g. "351912345678") to enable.
  whatsapp: {
    number: "",
    display: "",
  },

  email: {
    general: { display: "geral@pavineiva.com", href: "mailto:geral@pavineiva.com" },
    quotes: { display: "propostas@pavineiva.com", href: "mailto:propostas@pavineiva.com" },
    quality: { display: "qualidade@pavineiva.com", href: "mailto:qualidade@pavineiva.com" },
    commercial: { display: "pauloreis@pavineiva.com", href: "mailto:pauloreis@pavineiva.com" },
    accounting: { display: "contabilidade@pavineiva.com", href: "mailto:contabilidade@pavineiva.com" },
    finance: { display: "figueiredo@pavineiva.com", href: "mailto:figueiredo@pavineiva.com" },
  },

  hours: {
    // Mon-Fri 08:00-12:30 / 13:30-18:00, weekends closed (pending owner confirmation)
    weekdays: { morning: { open: "08:00", close: "12:30" }, afternoon: { open: "13:30", close: "18:00" } },
    saturday: null,
    sunday: null,
  },

  // Approximate centroid of the Neiva 4935-232 postal area; replace with the exact pin.
  geo: { lat: 41.6772, lng: -8.7681 },

  // mapEmbedSrc: filled in when NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY is provisioned.
  // For now the contact page uses a static map link + a "Get directions" CTA.
  mapEmbedSrc: "",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Pavineiva+Pinheiro+Rocha+%26+Reis+Neiva+Viana+do+Castelo",
  mapPlaceUrl: "https://maps.app.goo.gl/?q=Pavineiva+Neiva",

  rating: {
    stars: 4.4,
    count: 25,
    source: "Google",
    href: "https://www.google.com/maps/place/?q=place_id:Pavineiva",
  },

  // Industry membership — adds B2B credibility.
  memberships: ["ANIPB"],

  // For an export-friendly precast supplier, two locales are enough. Add more in
  // lib/i18n/index.ts (and a new dictionary file) if needed.
} as const;

export type Business = typeof business;

// ---- helpers --------------------------------------------------------------

export const formattedAddress = () => {
  const o = business.registeredOffice;
  return `${o.street}, ${o.postalCode} ${o.locality} – ${o.region}, ${o.countryName}`;
};

export const oneLineAddress = () => {
  const o = business.registeredOffice;
  return `${o.street}, ${o.postalCode} ${o.locality}`;
};

export const whatsappEnabled = () => business.whatsapp.number.length > 0;

export const whatsappLink = (text?: string) => {
  if (!whatsappEnabled()) return "";
  const base = `https://wa.me/${business.whatsapp.number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};

export const yearsActive = (now: number = new Date().getFullYear()) =>
  now - business.foundedYear;
