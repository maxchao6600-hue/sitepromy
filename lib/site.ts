export const SITE = {
  name: "SitePro",
  shortName: "SitePro",
  descriptor: "Malaysia Web Design Studio",
  fullName: "SitePro Malaysia Web Design",
  tagline: "Fast. Professional. Flexible.",
  description:
    "Fast, professional and flexible website design for businesses in Malaysia. SitePro turns your idea into a website you can launch.",
  url: "https://sitepromy.com",
  domain: "sitepromy.com",
  locale: "en_MY",
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
    title: "Corporate Websites",
    description: "Credibility, clarity and structure for growing companies.",
    preview: "mono" as PreviewId,
  },
  {
    number: "05",
    title: "Portfolio Websites",
    description: "Editorial showcases that make your work impossible to ignore.",
    preview: "nova" as PreviewId,
  },
  {
    number: "06",
    title: "Custom Web Solutions",
    description: "Tailored builds when your project needs something unique.",
    preview: "pulse" as PreviewId,
  },
] as const;

export const buildPipeline = [
  { key: "idea", label: "IDEA" },
  { key: "structure", label: "STRUCTURE" },
  { key: "design", label: "DESIGN" },
  { key: "build", label: "BUILD" },
  { key: "live", label: "LIVE" },
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

export const processStages = [
  {
    number: "01",
    label: "BRIEF",
    description: "We understand what you're building.",
  },
  {
    number: "02",
    label: "DIRECTION",
    description: "We define the visual and structural direction.",
  },
  {
    number: "03",
    label: "DESIGN",
    description: "We turn the direction into a polished interface.",
  },
  {
    number: "04",
    label: "BUILD",
    description: "We develop the experience into a responsive website.",
  },
  {
    number: "05",
    label: "LIVE",
    description: "We launch and refine.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Brief",
    description: "We understand what you're building — goals, audience and scope.",
  },
  {
    number: "02",
    title: "Direction",
    description: "We define the visual and structural direction for the project.",
  },
  {
    number: "03",
    title: "Design",
    description: "We turn the direction into a polished, intentional interface.",
  },
  {
    number: "04",
    title: "Build",
    description: "We develop the experience into a fast, responsive website.",
  },
  {
    number: "05",
    title: "Live",
    description: "We launch, refine and hand over a site ready for your customers.",
  },
] as const;

export const projects = [
  {
    number: "01",
    slug: "atelier",
    name: "ATELIER",
    subtitle: ["Fine Dining", "Digital Experience"],
    type: "Restaurant / Digital Experience",
    category: "Concept Website",
    industry: "Hospitality",
    direction: "Editorial / Luxury",
    focus: ["Brand Experience", "Reservations", "Mobile UX"],
    summary:
      "Editorial hospitality experience focused on atmosphere, menu discovery and reservations.",
    preview: "atelier" as PreviewId,
    theme: "warm",
  },
  {
    number: "02",
    slug: "nova",
    name: "NØVA",
    subtitle: ["Fashion", "Editorial Commerce"],
    type: "Fashion / E-Commerce",
    category: "Concept Website",
    industry: "Fashion",
    direction: "Editorial / Commerce",
    focus: ["Collection Discovery", "Lookbook", "Mobile UX"],
    summary:
      "A fashion-forward commerce experience built around visual storytelling and collection discovery.",
    preview: "nova" as PreviewId,
    theme: "editorial",
  },
  {
    number: "03",
    slug: "form",
    name: "FORM",
    subtitle: ["Architecture", "Digital Portfolio"],
    type: "Architecture / Construction",
    category: "Concept Website",
    industry: "Architecture",
    direction: "Material / Spatial",
    focus: ["Project Showcase", "Studio Identity", "Case Studies"],
    summary:
      "A structured architectural experience balancing material, space and project storytelling.",
    preview: "form" as PreviewId,
    theme: "concrete",
  },
  {
    number: "04",
    slug: "mono",
    name: "MONO",
    subtitle: ["Corporate", "Digital Experience"],
    type: "Corporate / Technology",
    category: "Concept Website",
    industry: "Corporate",
    direction: "Clarity / Credibility",
    focus: ["Service Structure", "Case Studies", "Conversion"],
    summary:
      "A refined corporate platform designed around clarity, credibility and conversion.",
    preview: "mono" as PreviewId,
    theme: "mono",
  },
  {
    number: "05",
    slug: "orbit",
    name: "ORBIT",
    subtitle: ["Premium Product", "E-Commerce"],
    type: "Premium Audio / E-Commerce",
    category: "Concept Website",
    industry: "Consumer Electronics",
    direction: "Luxury / Product-Led",
    focus: ["Product Storytelling", "E-Commerce UX", "Brand System"],
    summary:
      "A focused product experience built around premium hardware, product storytelling and conversion.",
    preview: "orbit" as PreviewId,
    theme: "clean",
  },
  {
    number: "06",
    slug: "pulse",
    name: "PULSE",
    subtitle: ["Consulting", "Professional Services"],
    type: "Professional Service",
    category: "Concept Website",
    industry: "Professional Services",
    direction: "Trust / Expertise",
    focus: ["Service Clarity", "Advisory Flow", "Credibility"],
    summary:
      "A modern professional platform designed to communicate expertise with clarity and confidence.",
    preview: "pulse" as PreviewId,
    theme: "navy",
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
