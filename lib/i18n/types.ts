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
  pageMeta: Record<
    "home" | "services" | "work" | "process" | "contact" | "quote",
    { title: string; description: string }
  >;
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
    language: string;
  };
  hero: {
    eyebrow: string;
    lines: string[];
    accentLineIndex: number;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scene: string;
    livePreview: string;
    metaLabels: {
      status: string;
      format: string;
      discipline: string;
    };
  };
  selectedWork: {
    scene: string;
    index: string;
    projectLabel: string;
    viewProject: string;
    prev: string;
    next: string;
    live: string;
  };
  studioStatement: {
    scene: string;
    index: string;
    lines: string[];
    body: string;
    pillars: string[];
    annotations: string[];
    previewLabel: string;
  };
  detailStrips: {
    capabilities: string[];
    disciplines: string[];
  };
  designSystem: {
    scene: string;
    index: string;
    title: string;
    subtitle: string;
    type: { label: string; sample: string };
    color: { label: string; values: string };
    grid: { label: string; value: string };
    components: { label: string; items: string[] };
    motion: { label: string; items: string[] };
  };
  businessGoals: {
    scene: string;
    index: string;
    eyebrow: string;
    titleLines: string[];
    goals: Record<"01" | "02" | "03" | "04", { title: string; description: string }>;
  };
  services: {
    eyebrow: string;
    titleLines: string[];
    scene: string;
    index: string;
    metaLabels: {
      type: string;
      role: string;
      focus: string;
      deliverable: string;
    };
    items: Record<
      ServiceKey,
      {
        title: string;
        description: string;
        type: string;
        role: string;
        focus: string;
        deliverable: string;
      }
    >;
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
    scene: string;
    index: string;
    projectLabel: string;
    conceptWebsite: string;
    conceptEcommerce: string;
    industry: string;
    direction: string;
    focus: string;
    caseStudy: {
      designDirection: string;
      experience: string;
      system: string;
    };
    detailStrip: {
      typography: string;
      imageDirection: string;
      navigation: string;
      mobile: string;
    };
    projects: Record<
      ProjectSlug,
      {
        subtitle: string;
        summary: string;
        industry: string;
        direction: string;
        focus: string[];
        category: string;
        designDetail: string;
        experienceDetail: string;
        systemDetail: string;
      }
    >;
  };
  speed: {
    fast: string;
    notEqual: string;
    basic: string;
    eyebrow: string;
    scene: string;
    index: string;
    body: string;
    stages: string[];
    sampleProgression: string;
    preview: string;
    live: string;
    designDirection: string;
    builtWithIntent: string;
    sampleExperience: string;
    tagline: string;
    technical: string[];
    pillars: Record<SpeedPillarKey, { title: string; description: string }>;
  };
  process: {
    eyebrow: string;
    titleLines: string[];
    accentLineIndex: number;
    intro: string;
    scene: string;
    index: string;
    steps: Record<ProcessKey, { title: string; label: string; description: string }>;
  };
  cta: {
    eyebrow: string;
    titleLines: string[];
    headlineLines: string[];
    prompt: string;
    action: string;
    actionShort: string;
    body: string;
    offerings: string[];
    scene: string;
    credibility: string[];
  };
  footer: {
    descriptor: string;
    statementLines: string[];
    exploreTitle: string;
    navTitle: string;
    servicesTitle: string;
    startTitle: string;
    contactTitle: string;
    serviceLinks: string[];
    startProject: string;
    requestQuote: string;
    tagline: string;
    rights: string;
  };
  workPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  processPage: {
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
