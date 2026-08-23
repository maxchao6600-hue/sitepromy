export type Language = "en" | "zh";

export const LANGUAGE_STORAGE_KEY = "sitepro-language";

export type ServiceKey =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06";

export type ProjectSlug =
  | "atelier"
  | "nova"
  | "form"
  | "mono"
  | "orbit"
  | "pulse";

export type ProcessKey = "01" | "02" | "03" | "04" | "05";

export type SpeedPillarKey = "01" | "02" | "03" | "04";

export type ServicePreviewKey =
  | "business"
  | "ecommerce"
  | "landing"
  | "corporate"
  | "nova"
  | "pulse"
  | "mono"
  | "orbit";

export type SiteCopy = {
  meta: {
    title: string;
    description: string;
  };
  skipLink: string;
  nav: {
    home: string;
    services: string;
    work: string;
    process: string;
    contact: string;
    startProject: string;
    openMenu: string;
    closeMenu: string;
    mobile: string;
    primary: string;
  };
  hero: {
    eyebrow: string;
    lines: string[];
    accentLineIndex: number;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    eyebrow: string;
    titleLines: string[];
    items: Record<ServiceKey, { title: string; description: string }>;
  };
  servicePreview: Record<
    ServicePreviewKey,
    {
      label: string;
      nav: string[];
      eyebrow: string;
      headline: string;
      traits: string[];
    }
  >;
  portfolio: {
    eyebrow: string;
    titleLines: string[];
    accentLineIndex: number;
    intro: string;
    projectLabel: string;
    conceptWebsite: string;
    conceptEcommerce: string;
    industry: string;
    direction: string;
    focus: string;
    projects: Record<
      ProjectSlug,
      {
        subtitle: string;
        summary: string;
        industry: string;
        direction: string;
        focus: string[];
        category: string;
      }
    >;
  };
  speed: {
    fast: string;
    notEqual: string;
    basic: string;
    eyebrow: string;
    body: string;
    sampleProgression: string;
    preview: string;
    live: string;
    designDirection: string;
    builtWithIntent: string;
    sampleExperience: string;
    pillars: Record<SpeedPillarKey, { title: string; description: string }>;
  };
  process: {
    eyebrow: string;
    titleLines: string[];
    accentLineIndex: number;
    intro: string;
    steps: Record<ProcessKey, { title: string; label: string; description: string }>;
  };
  cta: {
    eyebrow: string;
    titleLines: string[];
    action: string;
    body: string;
    offerings: string[];
  };
  footer: {
    tagline: string;
    rights: string;
  };
  workPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    aside: string;
  };
  quotePage: {
    eyebrow: string;
    title: string;
    description: string;
    nextTitle: string;
    steps: string[];
  };
  form: {
    name: string;
    businessName: string;
    email: string;
    phone: string;
    websiteType: string;
    budget: string;
    project: string;
    submit: string;
    submitting: string;
    successEyebrow: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    error: string;
    required: string;
    invalidEmail: string;
    selectOption: string;
    projectPlaceholder: string;
    footerNote: string;
    errors: {
      name: string;
      nameTooLong: string;
      businessNameTooLong: string;
      email: string;
      phoneTooLong: string;
      websiteType: string;
      budget: string;
      project: string;
      projectTooLong: string;
    };
    websiteTypes: string[];
    budgetRanges: string[];
  };
  concepts: {
    shared: {
      conceptWebsite: string;
      conceptEcommerce: string;
      contact: string;
      book: string;
      shop: string;
      view: string;
      services: string;
      sampleExperience: string;
      designDirection: string;
    };
    atelier: {
      nav: string[];
      eyebrow: string;
      body: string;
      cta: string;
      signature: string;
      dishes: Array<{ name: string; label: string }>;
      kitchen: string;
      kitchenBody: string;
      footer: string;
    };
    nova: {
      nav: string[];
      eyebrow: string;
      body: string;
      cta: string;
      lookbook: string;
      looks: string[];
      studio: string;
      studioBody: string;
      footer: string;
    };
    form: {
      nav: string[];
      eyebrow: string;
      body: string;
      cta: string;
      projects: string;
      projectLabels: string[];
      services: string[];
      serviceBody: string;
      footer: string;
    };
    mono: {
      nav: string[];
      eyebrow: string;
      body: string;
      cta: string;
      serviceItems: string[];
      leadership: string;
      leadershipBody: string;
      footer: string;
    };
    orbit: {
      nav: string[];
      eyebrow: string;
      tagline: string;
      body: string;
      cta: string;
      line: string;
      products: Array<{ note: string; tagline?: string }>;
      specs: Array<{ label: string; value: string }>;
      pricingNote: string;
      shopCta: string;
      footer: string;
    };
    pulse: {
      nav: string[];
      body: string;
      cta: string;
      serviceItems: Array<{ title: string; desc: string }>;
      footer: string;
    };
    landing: {
      nav: string[];
      title: string;
      body: string;
      primary: string;
      secondary: string;
    };
  };
};
