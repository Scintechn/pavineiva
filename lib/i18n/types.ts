// The Dictionary shape is the contract every locale file must satisfy.
// TypeScript flags missing keys at build time, so adding a new locale is
// "mirror the shape and translate" rather than "hope you caught every string".

export type Dictionary = {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  nav: {
    home: string;
    products: string;
    company: string;
    contact: string;
    quote: string;
  };
  common: {
    callNow: string;
    requestQuote: string;
    getDirections: string;
    openOnGoogleMaps: string;
    learnMore: string;
    contactUs: string;
    sinceYear: (year: number) => string;
    yearsExperience: (years: number) => string;
    closed: string;
    monFri: string;
    saturday: string;
    sunday: string;
    rating: (stars: number, count: number) => string;
    skipToContent: string;
    switchLanguageTo: string;
  };
  home: {
    meta: { title: string; description: string };
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    trustStrip: {
      foundedLabel: string;
      coverageLabel: string;
      coverageValue: string;
      memberLabel: string;
    };
    productsSection: {
      eyebrow: string;
      title: string;
      lead: string;
      viewAll: string;
    };
    whyUs: {
      eyebrow: string;
      title: string;
      lead: string;
      points: Array<{ title: string; body: string }>;
    };
    coverage: {
      eyebrow: string;
      title: string;
      body: string;
    };
    ctaSection: {
      title: string;
      body: string;
      primary: string;
      secondary: string;
    };
  };
  products: {
    meta: { title: string; description: string };
    title: string;
    lead: string;
    families: Record<
      "lajes" | "alvenarias" | "caixas-estore" | "esteios" | "vacarias",
      { name: string; description: string }
    >;
    items: Record<string, { name: string; description: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  company: {
    meta: { title: string; description: string };
    title: string;
    lead: string;
    storyTitle: string;
    storyBody: string[];
    valuesTitle: string;
    values: Array<{ title: string; body: string }>;
    teamTitle: string;
    teamLead: string;
    team: Array<{ name: string; role: string }>;
    membershipTitle: string;
    membershipBody: string;
  };
  contact: {
    meta: { title: string; description: string };
    title: string;
    lead: string;
    departmentsTitle: string;
    departments: Array<{ name: string; emailKey: "general" | "quotes" | "quality" | "commercial" | "accounting" | "finance" }>;
    addressTitle: string;
    hoursTitle: string;
    locationTitle: string;
    form: {
      title: string;
      lead: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      subject: string;
      subjectOptions: Array<{ value: string; label: string }>;
      message: string;
      messagePlaceholder: string;
      consent: string;
      consentLink: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
      requiredFieldsMissing: string;
      invalidEmail: string;
      messageTooShort: string;
    };
  };
  footer: {
    tagline: string;
    sections: {
      navigation: string;
      products: string;
      contacts: string;
      legal: string;
    };
    rightsReserved: string;
    privacy: string;
    terms: string;
    cofinanciadoPor: string;
    cofinanciamentoAlt: string;
    fichaOperacao: string;
    livroReclamacoesAlt: string;
  };
  privacy: {
    meta: { title: string; description: string };
    title: string;
    updated: string;
    body: string[];
  };
  terms: {
    meta: { title: string; description: string };
    title: string;
    updated: string;
    body: string[];
  };
};
