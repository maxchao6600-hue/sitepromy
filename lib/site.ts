export const SITE = {
  name: "SitePro",
  shortName: "SitePro",
  descriptor: "Malaysia Web Design Studio",
  fullName: "SitePro Malaysia Web Design",
  tagline: "Fast. Professional. Flexible.",
  description:
    "SitePro is a Malaysia web design studio creating fast, professional and responsive websites for businesses, brands and entrepreneurs.",
  url: "https://sitepromy.com",
  domain: "sitepromy.com",
  locale: "en_MY",
  /** Official WhatsApp contact — single source of truth (wasap.my short link). */
  whatsappUrl: "https://sitepromy.wasap.my",
  address: {
    line1: "16A, Jln Austin Heights 8/2",
    line2: "81100 Johor Bahru, Johor",
    line3: "Darul Ta'zim, Malaysia",
    streetAddress: "16A, Jln Austin Heights 8/2",
    addressLocality: "Johor Bahru",
    addressRegion: "Johor",
    postalCode: "81100",
    addressCountry: "MY",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=16A%2C%20Jln%20Austin%20Heights%208%2F2%2C%2081100%20Johor%20Bahru%2C%20Johor%20Darul%20Ta%27zim%2C%20Malaysia",
    /** Keyless Google Maps embed (q + output=embed). No Maps JavaScript API required. */
    mapsEmbedUrl:
      "https://www.google.com/maps?q=16A%2C%20Jln%20Austin%20Heights%208%2F2%2C%2081100%20Johor%20Bahru%2C%20Johor%20Darul%20Ta%27zim%2C%20Malaysia&hl=en&z=16&output=embed",
    mapOverlayBrand: "SITEPRO MY",
    mapOverlayLocation: "JOHOR BAHRU, MALAYSIA",
    mapIframeTitle: "SitePro location in Johor Bahru",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

export type PreviewId =
  | "business"
  | "ecommerce"
  | "restaurant"
  | "corporate"
  | "landing"
  | "custom"
  | "atelier"
  | "nova"
  | "form"
  | "mono"
  | "orbit"
  | "pulse";

export const services = [
  {
    number: "01",
    title: "Business Websites",
    description: "Professional sites built around how your business actually works.",
    preview: "business" as PreviewId,
  },
  {
    number: "02",
    title: "E-Commerce",
    description: "Product-led storefronts with clear paths to purchase.",
    preview: "orbit" as PreviewId,
  },
  {
    number: "03",
    title: "Landing Pages",
    description: "One focused page. One clear action. Built to convert.",
    preview: "landing" as PreviewId,
  },
  {
    number: "04",
    title: "Custom Web Design",
    description: "Tailored design built around your brand and business goals.",
    preview: "pulse" as PreviewId,
  },
  {
    number: "05",
    title: "Website Redesign",
    description: "Refresh outdated sites with modern structure, design and performance.",
    preview: "mono" as PreviewId,
  },
  {
    number: "06",
    title: "Ongoing Support",
    description: "Updates, improvements and support after launch.",
    preview: "business" as PreviewId,
  },
] as const;

export const speedPillars = [
  {
    title: "Fast Execution",
    description: "Clear timelines. No unnecessary delays.",
  },
  {
    title: "Professional Design",
    description: "Modern, responsive and polished from day one.",
  },
  {
    title: "Flexible Solutions",
    description: "Built around your business — not a template.",
  },
  {
    title: "Built For Your Business",
    description: "Every decision serves your goals and your customers.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    label: "DISCOVERY",
    description: "Understand the business, audience and goals.",
  },
  {
    number: "02",
    title: "Direction",
    label: "DIRECTION",
    description: "Define structure, priorities and visual direction.",
  },
  {
    number: "03",
    title: "Design",
    label: "DESIGN",
    description: "Create the interface and responsive experience.",
  },
  {
    number: "04",
    title: "Build",
    label: "BUILD",
    description: "Develop the approved direction.",
  },
  {
    number: "05",
    title: "Test",
    label: "TEST",
    description: "Check responsiveness, interactions, forms, performance and SEO basics.",
  },
  {
    number: "06",
    title: "Live",
    label: "LIVE",
    description: "Deploy and prepare the website for launch.",
  },
] as const;

export const projects = [
  {
    number: "01",
    slug: "atelier",
    name: "ATELIER",
    subtitle: "Fine Dining Digital Experience",
    type: "Restaurant / Digital Experience",
    category: "Concept Experience",
    industry: "Hospitality",
    direction: "Editorial / Luxury",
    focus: ["Brand Experience", "Reservations", "Mobile UX"],
    summary: "Concept hospitality experience focused on atmosphere and reservations.",
    preview: "atelier" as PreviewId,
    theme: "warm",
  },
  {
    number: "02",
    slug: "nova",
    name: "NØVA",
    subtitle: "Fashion Editorial Commerce",
    type: "Fashion / E-Commerce",
    category: "Concept Experience",
    industry: "Fashion",
    direction: "Editorial / Commerce",
    focus: ["Collection Discovery", "Lookbook", "Mobile UX"],
    summary: "Concept fashion commerce experience built around visual storytelling.",
    preview: "nova" as PreviewId,
    theme: "editorial",
  },
  {
    number: "03",
    slug: "orbit",
    name: "ORBIT ONE",
    subtitle: "Premium Audio E-Commerce",
    type: "Premium Audio / E-Commerce",
    category: "Concept Experience",
    industry: "Consumer Electronics",
    direction: "Luxury / Product-Led",
    focus: ["Product Storytelling", "E-Commerce UX", "Brand System"],
    summary: "Concept premium audio e-commerce with product-led storytelling and conversion.",
    preview: "orbit" as PreviewId,
    theme: "clean",
  },
  {
    number: "04",
    slug: "pulse",
    name: "PULSE",
    subtitle: "Professional Services Platform",
    type: "Professional Service",
    category: "Concept Experience",
    industry: "Professional Services",
    direction: "Trust / Expertise",
    focus: ["Service Clarity", "Advisory Flow", "Credibility"],
    summary: "Concept professional services website communicating expertise with clarity.",
    preview: "pulse" as PreviewId,
    theme: "navy",
  },
  {
    number: "05",
    slug: "mono",
    name: "MONO",
    subtitle: "Corporate Digital Experience",
    type: "Corporate / Technology",
    category: "Concept Experience",
    industry: "Corporate",
    direction: "Clarity / Credibility",
    focus: ["Service Structure", "Case Studies", "Conversion"],
    summary: "Concept corporate website designed around clarity, credibility and conversion.",
    preview: "mono" as PreviewId,
    theme: "mono",
  },
  {
    number: "06",
    slug: "launch",
    name: "LAUNCH",
    subtitle: "Campaign Landing Experience",
    type: "Landing / Conversion",
    category: "Concept Experience",
    industry: "Product Launch",
    direction: "Focus / Conversion",
    focus: ["Single CTA", "Campaign Clarity", "Mobile UX"],
    summary: "Concept landing experience built around one clear action and a focused message.",
    preview: "landing" as PreviewId,
    theme: "concrete",
  },
] as const;

export const websiteTypes = [
  "Business Website",
  "Landing Page",
  "E-Commerce",
  "Website Redesign",
  "Custom Website",
  "Not Sure Yet",
] as const;

export const budgetRanges = [
  "Not sure yet",
  "Starting website / landing page",
  "Full business website",
  "E-commerce or custom project",
  "Prefer to discuss",
] as const;
