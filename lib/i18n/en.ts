import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    siteTitle: "PAVINEIVA · Precast Concrete since 1978",
    siteDescription:
      "Pavineiva — Portuguese manufacturer of prestressed joists, hollow-core slabs, concrete blocks, posts and livestock products. Based in Neiva, Viana do Castelo. National delivery and export.",
  },
  nav: {
    home: "Home",
    products: "Products",
    company: "Company",
    contact: "Contact",
    quote: "Request a quote",
  },
  common: {
    callNow: "Call now",
    requestQuote: "Request a quote",
    getDirections: "Get directions",
    openOnGoogleMaps: "Open in Google Maps",
    learnMore: "Learn more",
    contactUs: "Talk to us",
    sinceYear: (year: number) => `Since ${year}`,
    yearsExperience: (years: number) => `${years} years building trust`,
    closed: "Closed",
    monFri: "Mon–Fri",
    saturday: "Saturday",
    sunday: "Sunday",
    rating: (stars: number, count: number) =>
      `${stars.toFixed(1)} ★ on Google · ${count} reviews`,
    skipToContent: "Skip to content",
    switchLanguageTo: "PT",
  },
  home: {
    meta: {
      title: "PAVINEIVA · Precast Concrete · Neiva, Viana do Castelo",
      description:
        "Prestressed joists, hollow-core slabs, concrete blocks and high-reliability precast products. Family-run manufacturer since 1978. Quote within 24 business hours.",
    },
    heroEyebrow: "Precast Concrete · Since 1978",
    heroTitle: "Precast solutions for building work that lasts.",
    heroLead:
      "From single-family homes to public works, Pavineiva manufactures prestressed joists, slabs, blocks and concrete elements with tested reliability and nationwide delivery.",
    heroPrimaryCta: "Request a quote",
    heroSecondaryCta: "See products",
    trustStrip: {
      foundedLabel: "Founded",
      coverageLabel: "Coverage",
      coverageValue: "Portugal + export",
      memberLabel: "Member of",
    },
    productsSection: {
      eyebrow: "Catalogue",
      title: "Five product families",
      lead: "Everything your site needs in precast concrete, manufactured in-house under continuous quality control.",
      viewAll: "View the full catalogue",
    },
    whyUs: {
      eyebrow: "Why Pavineiva",
      title: "Reliability measured in decades",
      lead: "Our business stands on four principles: functionality, physical properties, aesthetic value and the importance of lower costs in construction materials.",
      points: [
        {
          title: "Owned production",
          body: "Production lines in Neiva. We control every step, from raw material to finished product.",
        },
        {
          title: "Verified quality",
          body: "Mechanical properties are checked periodically by a qualified technical team.",
        },
        {
          title: "Nationwide delivery",
          body: "We supply public works, contractors, architects and private clients across Portugal — and export abroad.",
        },
        {
          title: "Prestressed expertise",
          body: "Prestressed joists and hollow-core slabs for demanding spans, engineered for high structural reliability.",
        },
      ],
    },
    coverage: {
      eyebrow: "Where we deliver",
      title: "National coverage and export",
      body: "From Neiva, in Viana do Castelo, we ship precast and prestressed products to projects across mainland Portugal and to international customers. For loads and lead times, request a quote with project details.",
    },
    ctaSection: {
      title: "Got a project coming up?",
      body: "Send us the spec or the technical description. We reply with a quote and lead time within 24 business hours.",
      primary: "Request a quote",
      secondary: "Call now",
    },
  },
  products: {
    meta: {
      title: "Products · Pavineiva · Precast concrete catalogue",
      description:
        "Pavineiva catalogue: prestressed joists, hollow-core slabs, vault blocks, concrete blocks, BlocoTherm, acoustic blocks, formwork blocks, thermal shutter boxes, posts and livestock products.",
    },
    title: "Product catalogue",
    lead: "Five families, dozens of solutions. Every product is manufactured by Pavineiva in Neiva, under continuous quality control.",
    families: {
      lajes: {
        name: "Prestressed slabs",
        description:
          "Joists, vault blocks and hollow-core slabs for prestressed floors and roofs.",
      },
      alvenarias: {
        name: "Masonry blocks",
        description:
          "Concrete blocks for every requirement: structural, lightweight, acoustic, thermal and formwork.",
      },
      "caixas-estore": {
        name: "Shutter boxes",
        description: "Precast concrete shutter boxes with integrated thermal insulation.",
      },
      esteios: {
        name: "Posts and supports",
        description: "Precast concrete posts for vineyards, fencing and auxiliary structures.",
      },
      vacarias: {
        name: "Livestock products",
        description: "Cattle and calf grids, hollow-core bedding and stable solutions.",
      },
    },
    items: {
      "vigotas-preesforcadas": {
        name: "Prestressed joists",
        description:
          "Prestressed concrete joists with bonded wires, optimised cross-section for common spans in housing and construction.",
      },
      "abobadilhas-betao-leve": {
        name: "Lightweight vault blocks",
        description:
          "Lightweight formwork blocks for prestressed floors, reducing structural dead-load.",
      },
      "lajes-alveoladas": {
        name: "Hollow-core slabs",
        description:
          "Prestressed slabs with longitudinal cores for large spans in floors, roofs and car parks.",
      },
      "bloco-betao-normal": {
        name: "Standard concrete block",
        description:
          "Concrete block for everyday masonry, with conventional aggregates.",
      },
      "bloco-betao-leve": {
        name: "Lightweight concrete block",
        description:
          "Block made with lightweight expanded-clay aggregates — better insulation, lower dead-load.",
      },
      blocotherm: {
        name: "BlocoTherm",
        description:
          "High thermal performance block for exterior walls that don't require additional insulation.",
      },
      "blocos-acusticos": {
        name: "Acoustic blocks",
        description:
          "Blocks designed for partition walls with sound-insulation requirements.",
      },
      "bloco-cofragem": {
        name: "Formwork block",
        description:
          "Permanent-formwork concrete block for retaining walls, load-bearing walls and reinforced structures.",
      },
      "caixa-estore-termica": {
        name: "Thermal shutter box",
        description:
          "Precast concrete shutter box with integrated thermal insulation, ready to install on site.",
      },
      "esteios-postes": {
        name: "Posts and supports",
        description:
          "Precast posts for vineyards, agricultural fencing, supports and general construction use.",
      },
      "grelhas-vitelos": {
        name: "Calf grids",
        description:
          "Precast concrete grids sized for calf areas, with efficient drainage and high durability.",
      },
      "grelhas-bovinos": {
        name: "Cattle grids",
        description:
          "High-strength concrete grids for adult cattle areas, in stables and feedlots.",
      },
      "camas-alveoladas": {
        name: "Hollow-core bedding",
        description:
          "Precast hollow-core bedding for animal welfare and easier handling in dairy farms.",
      },
    },
    ctaTitle: "Need a quote for one of these products?",
    ctaBody:
      "Tell us the product, the quantity and the project location. We reply with price and lead time within 24 business hours.",
    ctaButton: "Request a quote",
  },
  company: {
    meta: {
      title: "Company · Pavineiva · Precast since 1978",
      description:
        "Pavineiva (Pinheiro, Rocha & Reis, Lda.) is a Portuguese manufacturer of precast and prestressed concrete products since 1978, headquartered in Neiva, Viana do Castelo.",
    },
    title: "Pavineiva, on the job since 1978.",
    lead: "Pinheiro, Rocha & Reis, Lda. — a Minho family business that grew by manufacturing reliable solutions for construction.",
    storyTitle: "Our story",
    storyBody: [
      "Founded in 1978, Pavineiva has reached an enviable stability and earned a privileged status, as our clients and completed projects attest.",
      "We manufacture high-reliability prestressed products and a broad range of concrete elements, fit for the most diverse requirements — ensuring nationwide coverage and export.",
      "We continue, at an increasing pace, to deliver diversified solutions for construction — from private homes and offices to public works and equipment.",
    ],
    valuesTitle: "How we work",
    values: [
      {
        title: "Functionality",
        body: "Every product is designed for the structural or utility role it will play on site.",
      },
      {
        title: "Physical properties",
        body: "Mechanical properties are checked periodically, with rigour.",
      },
      {
        title: "Aesthetic value",
        body: "Finishes and tolerances are designed for the final result, not just for the catalogue.",
      },
      {
        title: "Optimised cost",
        body: "We invest in quality raw materials to deliver better prices without compromising reliability.",
      },
    ],
    teamTitle: "The people you'll talk to",
    teamLead: "A qualified technical team — real people you can call when you need them.",
    team: [
      { name: "José Manuel Rocha", role: "Quality & Quotations Engineer" },
      { name: "Paulo Reis", role: "Commercial Department" },
      { name: "Bruno Figueiredo", role: "Certified Accountant" },
      { name: "Daniela Martins", role: "Production Supervisor" },
    ],
    membershipTitle: "ANIPB member",
    membershipBody:
      "Pavineiva is a member of ANIPB — the Portuguese National Association of Precast Concrete Manufacturers, the representative body of the sector in Portugal.",
  },
  contact: {
    meta: {
      title: "Contact · Pavineiva · Neiva, Viana do Castelo",
      description:
        "Contact Pavineiva for quote requests, technical information or commercial support. Phone +351 258 350 480, Zona Industrial de Neiva, Viana do Castelo.",
    },
    title: "Talk to Pavineiva",
    lead: "Any technical question, quote request or other matter can be sent through the form below — or through any of the contacts on this page.",
    departmentsTitle: "Departments",
    departments: [
      { name: "General", emailKey: "general" },
      { name: "Quotations", emailKey: "quotes" },
      { name: "Quality", emailKey: "quality" },
      { name: "Commercial — Paulo Reis", emailKey: "commercial" },
      { name: "Accounting", emailKey: "accounting" },
      { name: "Finance", emailKey: "finance" },
    ],
    addressTitle: "Address",
    hoursTitle: "Hours",
    locationTitle: "Where to find us",
    form: {
      title: "Request a quote",
      lead: "Tell us about the project, the product and the quantity. We reply within 24 business hours.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      phone: "Phone",
      phonePlaceholder: "+351 …",
      company: "Company (optional)",
      companyPlaceholder: "Company name",
      subject: "Subject",
      subjectOptions: [
        { value: "quote", label: "Quote request" },
        { value: "technical", label: "Technical information" },
        { value: "commercial", label: "Commercial" },
        { value: "other", label: "Other" },
      ],
      message: "Message",
      messagePlaceholder:
        "Describe the product, the quantity, the project location and the planned date.",
      consent: "I have read and accept the",
      consentLink: "Privacy Policy",
      submit: "Send request",
      submitting: "Sending…",
      successTitle: "Request sent",
      successBody:
        "Thank you. We've received your request and will reply within 24 business hours. For urgent matters, please call +351 258 350 480.",
      errorTitle: "Could not send",
      errorBody:
        "Something went wrong sending your request. Please try again, or call +351 258 350 480.",
      requiredFieldsMissing: "Please fill in the required fields.",
      invalidEmail: "Invalid email address.",
      messageTooShort: "Your message is too short.",
    },
  },
  footer: {
    tagline:
      "Precast concrete for construction work that lasts. On the job since 1978.",
    sections: {
      navigation: "Navigation",
      products: "Products",
      contacts: "Contacts",
      legal: "Legal",
    },
    rightsReserved: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    cofinanciadoPor: "Co-financed by",
    cofinanciamentoAlt:
      "Co-financed by the Northern Regional Programme (Norte 2030), Portugal 2030 and the European Union",
    fichaOperacao: "Norte 2030 operation summary (PDF)",
    livroReclamacoesAlt: "Portuguese electronic Complaint Book",
  },
  privacy: {
    meta: {
      title: "Privacy Policy · Pavineiva",
      description:
        "Privacy Policy of Pavineiva – Pinheiro, Rocha & Reis, Lda.",
    },
    title: "Privacy Policy",
    updated: "Updated on June 1, 2026.",
    body: [
      "Pavineiva – Pinheiro, Rocha & Reis, Lda. (Portuguese tax ID 500678189), with registered office at Zona Industrial 2.ª fase, 4935-232 Neiva – Viana do Castelo, is the controller for personal data collected through this website.",
      "Data we process: the data you send through the contact form (name, email, phone, company, message) is used exclusively to respond to your request and, where applicable, to issue a quote and manage the subsequent commercial relationship. The legal bases are your consent and our legitimate interest in answering you.",
      "Retention: we keep the data for the time strictly necessary to handle the request and, afterwards, for the legal periods applicable to commercial and accounting documents.",
      "Your rights: under the GDPR you may exercise the rights of access, rectification, objection, restriction, erasure and portability of your data by writing to geral@pavineiva.com.",
      "Cookies and analytics: this site uses anonymous, cookieless traffic statistics. No personal data is shared with third parties for advertising purposes.",
      "Complaints: you may file a complaint with the Portuguese Data Protection Authority (www.cnpd.pt).",
    ],
  },
  terms: {
    meta: {
      title: "Terms & Conditions · Pavineiva",
      description: "Terms and conditions of use for the Pavineiva website.",
    },
    title: "Terms & Conditions",
    updated: "Updated on June 1, 2026.",
    body: [
      "This website is owned by Pavineiva – Pinheiro, Rocha & Reis, Lda. (Portuguese tax ID 500678189), with registered office at Zona Industrial 2.ª fase, 4935-232 Neiva – Viana do Castelo.",
      "The content is provided for information purposes. Technical specifications, dimensions and product characteristics may be adjusted depending on the project; for binding information, please request a written quote.",
      "All graphical and textual elements on this site are property of Pavineiva and may not be reproduced without written authorisation.",
      "Alternative consumer-dispute resolution: under Portuguese Law 144/2015, in case of a dispute the consumer may turn to an alternative dispute-resolution body. You can also access the European Online Dispute Resolution Platform at https://ec.europa.eu/consumers/odr.",
      "Use of this website implies acceptance of these terms.",
    ],
  },
};
