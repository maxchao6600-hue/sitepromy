export const SITE = {
  name: "SITEPRO",
  shortName: "SitePro",
  descriptor: "Malaysia Web Design",
  fullName: "SitePro Malaysia Web Design",
  tagline: "From Idea to Website, Fast.",
  supporting:
    "Professional websites built around your needs — fast, efficient and flexible.",
  description:
    "SitePro provides professional web design and development in Malaysia. Fast, flexible and modern websites built around your business needs.",
  url: "https://sitepromy.com",
  domain: "sitepromy.com",
  locale: "en_MY",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/work", label: "Our Work" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const footerLinks = [
  ...navLinks,
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites for companies, brands and local businesses that need a clear, credible presence online.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages designed to present your business, service or campaign clearly — and help people take the next step.",
  },
  {
    title: "E-Commerce Websites",
    description:
      "Online stores designed to help businesses sell products, present catalogues and manage customers online.",
  },
  {
    title: "Custom Websites",
    description:
      "Tailored website solutions for businesses with specific requirements, workflows or more complex needs.",
  },
  {
    title: "Website Redesign",
    description:
      "Modernise outdated websites with a cleaner design, clearer structure and a better experience on every device.",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing updates, improvements and technical support so your website stays current after launch.",
  },
] as const;

export const values = [
  {
    eyebrow: "01",
    title: "Fast execution",
    description:
      "We focus on efficient workflows and clear communication so your project keeps moving.",
  },
  {
    eyebrow: "02",
    title: "Professional quality",
    description:
      "Modern responsive design, clean development and a professional user experience across devices.",
  },
  {
    eyebrow: "03",
    title: "Flexible solutions",
    description:
      "Every business is different. Choose a solution that fits your goals, budget and requirements.",
  },
  {
    eyebrow: "04",
    title: "Built around your needs",
    description:
      "We don’t force every business into the same website. Your website is planned around what you actually need.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Tell Us Your Idea",
    description:
      "Tell us what your business does, what you need and what you want your website to achieve — even if the idea is still rough.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We turn your requirements into a clear website structure and a modern design direction that fits your brand.",
  },
  {
    number: "03",
    title: "Build & Refine",
    description:
      "We develop the website, optimise it for mobile and refine the experience based on your feedback.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Once everything is ready, your website goes live — and your business is ready to grow online.",
  },
] as const;

export const solutions = [
  {
    title: "Small Business",
    description: "A clear, professional website for local and growing businesses.",
  },
  {
    title: "Company Website",
    description: "A structured online presence for teams that need to look established.",
  },
  {
    title: "Restaurant",
    description: "Menus, atmosphere and booking-ready pages designed to convert visitors.",
  },
  {
    title: "Service Business",
    description: "Explain what you do, who you help and how to get in touch.",
  },
  {
    title: "Personal Brand",
    description: "A focused site for consultants, creators and independent professionals.",
  },
  {
    title: "Online Store",
    description: "Product-led websites built to present and sell with clarity.",
  },
  {
    title: "Professional Services",
    description: "Credible websites for firms that need trust, clarity and contact.",
  },
  {
    title: "Campaign / Landing Page",
    description: "A single, sharp page for a launch, offer or specific campaign.",
  },
  {
    title: "Custom Business Platform",
    description: "When a standard brochure site isn’t enough, we plan a tailored solution.",
  },
] as const;

export const projects = [
  {
    slug: "corporate",
    title: "Corporate Website",
    category: "Concept",
    summary:
      "A structured, professional presence for companies that need to look established, clear and easy to navigate.",
    theme: "corporate",
  },
  {
    slug: "restaurant",
    title: "Restaurant Website",
    category: "Concept",
    summary:
      "A warm, editorial layout for F&B brands — atmosphere first, with menu and visit information close at hand.",
    theme: "restaurant",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    category: "Concept",
    summary:
      "A product-led storefront designed to present catalogues cleanly and make purchasing feel straightforward.",
    theme: "ecommerce",
  },
  {
    slug: "service",
    title: "Service Business",
    category: "Concept",
    summary:
      "A direct, trust-building website for service providers who need to explain their offer and win enquiries.",
    theme: "service",
  },
  {
    slug: "landing",
    title: "Landing Page",
    category: "Concept",
    summary:
      "A focused campaign page with a strong headline, a clear offer and a single path to contact.",
    theme: "landing",
  },
  {
    slug: "brand",
    title: "Modern Brand Website",
    category: "Concept",
    summary:
      "A more expressive layout for brands that want distinctive typography and a memorable first impression.",
    theme: "brand",
  },
] as const;

export type ProjectTheme = (typeof projects)[number]["theme"];

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the type of website, how ready your content is, and how much customisation you need. A focused landing page can move faster than a custom or e-commerce site. After we understand your requirements, we’ll give you a clear timeline before work begins.",
  },
  {
    question: "Can you build a website based on my own idea?",
    answer:
      "Yes. That’s how we prefer to work. Share what you have in mind — even if it’s rough — and we’ll help shape it into a practical website plan.",
  },
  {
    question: "Do you provide custom designs?",
    answer:
      "Yes. We design around your business rather than forcing a one-size-fits-all template. The visual direction is planned according to your brand, audience and goals.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can modernise an outdated site with a cleaner design, clearer structure and a stronger experience on mobile — while keeping what already works.",
  },
  {
    question: "Do you build mobile-friendly websites?",
    answer:
      "Yes. Every SitePro website is designed mobile-first, so it stays readable, usable and professional on phones, tablets and desktops.",
  },
  {
    question: "Can you build e-commerce websites?",
    answer:
      "Yes. We build online stores that help businesses present products, handle orders and serve customers online.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing updates, improvements and technical support after launch so your website stays in good shape as your business changes.",
  },
  {
    question: "Do I need to prepare the content myself?",
    answer:
      "You can share existing content, or we can help you structure what the website needs to say. You don’t need everything ready before we start — we’ll guide you on what’s needed.",
  },
  {
    question: "Can you help with domain and hosting?",
    answer:
      "Yes. We can advise on domain and hosting, and help you get set up if you don’t already have them.",
  },
  {
    question: "What happens after I contact SitePro?",
    answer:
      "We’ll review your request and follow up to understand your business, goals and timeline. From there, we’ll recommend a suitable approach and provide a quote.",
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
