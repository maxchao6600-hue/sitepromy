export const SITE = {
  name: "SitePro",
  shortName: "SitePro",
  descriptor: "Malaysia Web Design",
  fullName: "SitePro Malaysia Web Design",
  tagline: "Fast. Professional. Flexible.",
  heroTitle: ["YOUR IDEA.", "OUR CRAFT."],
  supporting:
    "Modern websites designed and built around your business.",
  description:
    "SitePro provides professional web design and development in Malaysia. Fast, flexible and modern websites built around your business needs.",
  url: "https://sitepromy.com",
  domain: "sitepromy.com",
  locale: "en_MY",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#showcase", label: "Our Work" },
  { href: "/#process", label: "Process" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#showcase", label: "Our Work" },
  { href: "/#process", label: "Process" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites for companies and local businesses that need a credible, clear online presence.",
    theme: "corporate" as const,
  },
  {
    number: "02",
    title: "E-Commerce",
    description:
      "Online stores designed to present products clearly and help customers buy with confidence.",
    theme: "ecommerce" as const,
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "Focused pages built for campaigns, launches and offers — one clear path to action.",
    theme: "landing" as const,
  },
  {
    number: "04",
    title: "Corporate Websites",
    description:
      "Structured, established websites for companies that need to look professional at scale.",
    theme: "corporate" as const,
  },
  {
    number: "05",
    title: "Portfolio Websites",
    description:
      "Showcase-led websites for creatives, agencies and professionals who lead with their work.",
    theme: "beauty" as const,
  },
  {
    number: "06",
    title: "Custom Web Solutions",
    description:
      "Tailored websites when your business needs something beyond a standard template.",
    theme: "professional" as const,
  },
] as const;

export const values = [
  {
    number: "01",
    title: "Fast Execution",
    description:
      "We move projects forward efficiently — clear communication, focused workflows and less unnecessary waiting.",
  },
  {
    number: "02",
    title: "Professional Design",
    description:
      "Every website is designed around your brand and business — not a one-size-fits-all template.",
  },
  {
    number: "03",
    title: "Flexible Solutions",
    description:
      "From a simple business website to a custom build — we adapt to what you actually need.",
  },
  {
    number: "04",
    title: "Built For Your Business",
    description:
      "We design around your customers, goals and industry — not just to make pages look good.",
  },
] as const;

export const brandSteps = [
  {
    number: "01",
    title: "Idea",
    visual: "idea",
    description: "Your business, goals and vision — captured clearly.",
  },
  {
    number: "02",
    title: "Design",
    visual: "design",
    description: "Wireframes and UI direction shaped into a modern experience.",
  },
  {
    number: "03",
    title: "Build",
    visual: "build",
    description: "Clean, responsive development — optimised for every device.",
  },
  {
    number: "04",
    title: "Launch",
    visual: "launch",
    description: "Your website goes live — ready for customers.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Idea",
    description:
      "We understand your business, goals and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn your idea into a modern visual experience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop a fast, responsive and scalable website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Your website goes live, ready for your customers.",
  },
] as const;

export const projects = [
  {
    slug: "corporate",
    title: "Business / Corporate",
    category: "SitePro Concept",
    summary:
      "Clean, structured and professional — built for companies that need to look established and trustworthy.",
    theme: "corporate" as const,
  },
  {
    slug: "restaurant",
    title: "Restaurant",
    category: "SitePro Concept",
    summary:
      "Immersive, image-led and warm — designed to capture atmosphere and drive reservations.",
    theme: "restaurant" as const,
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    category: "SitePro Concept",
    summary:
      "Product-focused and modern — a storefront that makes browsing and buying feel effortless.",
    theme: "ecommerce" as const,
  },
  {
    slug: "construction",
    title: "Construction",
    category: "SitePro Concept",
    summary:
      "Bold, reliable and industrial — a website that communicates strength and capability.",
    theme: "construction" as const,
  },
  {
    slug: "beauty",
    title: "Beauty / Fashion",
    category: "SitePro Concept",
    summary:
      "Refined, spacious and elegant — premium aesthetics with careful typography and whitespace.",
    theme: "beauty" as const,
  },
  {
    slug: "professional",
    title: "Professional Service",
    category: "SitePro Concept",
    summary:
      "Credible, concise and clear — designed to build trust and win enquiries.",
    theme: "professional" as const,
  },
] as const;

export type ProjectTheme =
  | "corporate"
  | "restaurant"
  | "ecommerce"
  | "construction"
  | "beauty"
  | "professional"
  | "landing"
  | "service";

export const pricingTiers = [
  {
    name: "Starter",
    price: "Custom Quote",
    description: "A focused starting point for getting online professionally.",
    features: [
      "Small businesses",
      "Personal brands",
      "Simple company websites",
    ],
    cta: "Get a Quote",
    href: "/quote",
    featured: false,
  },
  {
    name: "Business",
    price: "Custom Quote",
    description: "Our recommended path for growing companies that need more structure.",
    features: [
      "Growing businesses",
      "Professional companies",
      "Service businesses",
    ],
    cta: "Get a Quote",
    href: "/quote",
    featured: true,
  },
  {
    name: "E-Commerce",
    price: "Custom Quote",
    description: "Online stores built to present products and serve customers.",
    features: [
      "Online stores",
      "Product businesses",
      "Online selling",
    ],
    cta: "Get a Quote",
    href: "/quote",
    featured: false,
  },
  {
    name: "Custom",
    price: "Custom Quote",
    description: "When your project needs something entirely your own.",
    features: [
      "Unique requirements",
      "Advanced functionality",
      "Custom solutions",
    ],
    cta: "Let's Talk",
    href: "/contact",
    featured: false,
  },
] as const;

export const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "It depends on the scope, how ready your content is, and how much customisation you need. A landing page can move faster than a full e-commerce build. After we understand your requirements, we'll give you a clear timeline before work begins.",
  },
  {
    question: "Do I need to provide the design?",
    answer:
      "No. We handle design and development. Share your ideas, brand direction or references — even if they're rough — and we'll shape them into a practical website plan.",
  },
  {
    question: "Can you build an e-commerce website?",
    answer:
      "Yes. We build online stores that help businesses present products, handle orders and serve customers online.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Every SitePro website is designed mobile-first — readable, usable and professional on phones, tablets and desktops.",
  },
  {
    question: "Can you help with domain and hosting?",
    answer:
      "Yes. We can advise on domain and hosting, and help you get set up if you don't already have them.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "Yes. We build websites with SEO-ready structure — clean headings, semantic HTML, fast performance and proper metadata. Ongoing SEO strategy can be discussed separately.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Yes. If your business needs specific functionality — booking, integrations, custom layouts — we'll plan a solution that fits.",
  },
  {
    question: "How do I start?",
    answer:
      "Tell us about your project using the quote form. We'll review your requirements and follow up with a clear next step.",
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
