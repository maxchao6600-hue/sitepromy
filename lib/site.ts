export const SITE = {
  name: "SitePro",
  shortName: "SitePro",
  descriptor: "Malaysia Web Design",
  fullName: "SitePro Malaysia Web Design",
  tagline: "Fast. Professional. Flexible.",
  description:
    "SitePro provides professional web design and development in Malaysia. Fast, flexible and modern websites built around your business needs.",
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
    title: "Business Website",
    preview: "business" as PreviewId,
  },
  {
    number: "02",
    title: "E-Commerce",
    preview: "orbit" as PreviewId,
  },
  {
    number: "03",
    title: "Restaurant Website",
    preview: "atelier" as PreviewId,
  },
  {
    number: "04",
    title: "Corporate Website",
    preview: "mono" as PreviewId,
  },
  {
    number: "05",
    title: "Landing Page",
    preview: "landing" as PreviewId,
  },
  {
    number: "06",
    title: "Custom Website",
    preview: "pulse" as PreviewId,
  },
] as const;

export const brandPipeline = [
  { key: "idea", label: "Idea", sub: "Sketch" },
  { key: "wireframe", label: "Wireframe", sub: "Structure" },
  { key: "design", label: "Design", sub: "UI" },
  { key: "build", label: "Build", sub: "Code" },
  { key: "live", label: "Live", sub: "Website" },
] as const;

export const speedStages = [
  { key: "idea", label: "IDEA" },
  { key: "design", label: "DESIGN" },
  { key: "build", label: "BUILD" },
  { key: "live", label: "LIVE" },
] as const;

export const speedStatus = [
  { key: "discovery", label: "DISCOVERY" },
  { key: "designing", label: "DESIGNING" },
  { key: "building", label: "BUILDING" },
  { key: "ready", label: "READY" },
] as const;

export const values = [
  {
    title: "FAST",
    description: "Efficient workflows and clear communication.",
  },
  {
    title: "PROFESSIONAL",
    description: "Modern responsive design and clean development.",
  },
  {
    title: "FLEXIBLE",
    description: "Solutions built around different businesses.",
  },
  {
    title: "BUSINESS-FIRST",
    description: "Every website is designed around the actual business.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Idea",
    description: "We understand your business, goals and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "We turn your idea into a modern visual experience.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop a fast, responsive and scalable website.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Your website goes live, ready for your customers.",
  },
] as const;

export const projects = [
  {
    number: "01",
    slug: "atelier",
    name: "ATELIER",
    type: "Restaurant Website",
    category: "Concept Website",
    summary: "Editorial restaurant experience — menu, booking and location.",
    preview: "atelier" as PreviewId,
  },
  {
    number: "02",
    slug: "nova",
    name: "NØVA",
    type: "Fashion / Brand",
    category: "Concept Website",
    summary: "Refined brand world with editorial typography and product focus.",
    preview: "nova" as PreviewId,
  },
  {
    number: "03",
    slug: "form",
    name: "FORM",
    type: "Construction",
    category: "Concept Website",
    summary: "Bold industrial presence — projects, capability and contact.",
    preview: "form" as PreviewId,
  },
  {
    number: "04",
    slug: "mono",
    name: "MONO",
    type: "Corporate",
    category: "Concept Website",
    summary: "Clean corporate structure — credibility, clarity and scale.",
    preview: "mono" as PreviewId,
  },
  {
    number: "05",
    slug: "orbit",
    name: "ORBIT",
    type: "E-Commerce",
    category: "Concept Website",
    summary: "Product-led storefront — browse, discover and buy with ease.",
    preview: "orbit" as PreviewId,
  },
  {
    number: "06",
    slug: "pulse",
    name: "PULSE",
    type: "Professional Service",
    category: "Concept Website",
    summary: "Trust-first service website — expertise, proof and enquiry.",
    preview: "pulse" as PreviewId,
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
