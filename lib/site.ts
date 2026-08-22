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
  { key: "code", label: "CODE" },
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
    type: "Restaurant / Digital Experience",
    category: "Concept Project",
    summary:
      "Luxury fine dining — editorial food photography, reservations and an immersive menu experience.",
    preview: "atelier" as PreviewId,
    theme: "warm",
  },
  {
    number: "02",
    slug: "nova",
    name: "NØVA",
    type: "Fashion / E-Commerce",
    category: "Concept Project",
    summary:
      "Luxury fashion brand — editorial campaigns, collections and a refined product grid.",
    preview: "nova" as PreviewId,
    theme: "editorial",
  },
  {
    number: "03",
    slug: "form",
    name: "FORM",
    type: "Architecture / Construction",
    category: "Concept Project",
    summary:
      "Modern architecture studio — bold typography, project showcase and material-led storytelling.",
    preview: "form" as PreviewId,
    theme: "concrete",
  },
  {
    number: "04",
    slug: "mono",
    name: "MONO",
    type: "Corporate / Technology",
    category: "Concept Project",
    summary:
      "Premium corporate presence — workspace photography, case studies and clear service structure.",
    preview: "mono" as PreviewId,
    theme: "mono",
  },
  {
    number: "05",
    slug: "orbit",
    name: "ORBIT",
    type: "Product / E-Commerce",
    category: "Concept Project",
    summary:
      "Premium product brand — studio photography, editorial composition and a clean shopping interface.",
    preview: "orbit" as PreviewId,
    theme: "clean",
  },
  {
    number: "06",
    slug: "pulse",
    name: "PULSE",
    type: "Professional Service",
    category: "Concept Project",
    summary:
      "Trust-first advisory — sophisticated workspace visuals, services and a strong enquiry flow.",
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
