import { cn } from "@/lib/cn";
import { conceptImages } from "@/lib/images";
import type { PreviewId } from "@/lib/site";

type ServicePreviewProps = {
  preview: PreviewId;
  className?: string;
};

type ServiceDemo = {
  label: string;
  nav: string[];
  eyebrow: string;
  headline: string;
  image: string;
  traits: string[];
  dark?: boolean;
};

const serviceDemos: Partial<Record<PreviewId, ServiceDemo>> = {
  business: {
    label: "Business Website",
    nav: ["Home", "About", "Services", "Projects", "Contact"],
    eyebrow: "Homepage",
    headline: "Professional presence for your business",
    image: conceptImages.mono.hero,
    traits: ["Professional", "Modern", "Responsive"],
  },
  ecommerce: {
    label: "E-Commerce",
    nav: ["Shop", "Products", "Collections", "Cart"],
    eyebrow: "Product Page",
    headline: "Clear paths to purchase",
    image: conceptImages.orbit.hero,
    traits: ["Product-led", "Conversion", "Mobile-ready"],
    dark: false,
  },
  landing: {
    label: "Landing Page",
    nav: ["Overview", "Benefits", "Pricing"],
    eyebrow: "Campaign",
    headline: "One page. One clear action.",
    image: conceptImages.atelier.hero,
    traits: ["Focused", "High-impact", "Fast to launch"],
  },
  corporate: {
    label: "Corporate Website",
    nav: ["Company", "Services", "Leadership", "Contact"],
    eyebrow: "Corporate",
    headline: "Credibility, clarity and structure",
    image: conceptImages.mono.caseStudy,
    traits: ["Trustworthy", "Structured", "Scalable"],
  },
  nova: {
    label: "Portfolio Website",
    nav: ["Work", "Studio", "Archive", "Contact"],
    eyebrow: "Showcase",
    headline: "Editorial work that stands out",
    image: conceptImages.nova.hero,
    traits: ["Editorial", "Visual", "Memorable"],
    dark: false,
  },
  pulse: {
    label: "Custom Web Solution",
    nav: ["Platform", "Features", "Insights", "Contact"],
    eyebrow: "Custom Build",
    headline: "Tailored digital experiences",
    image: conceptImages.pulse.hero,
    traits: ["Flexible", "Purpose-built", "Scalable"],
  },
  mono: {
    label: "Corporate Website",
    nav: ["Company", "Services", "Leadership", "Contact"],
    eyebrow: "Corporate",
    headline: "Credibility, clarity and structure",
    image: conceptImages.mono.caseStudy,
    traits: ["Trustworthy", "Structured", "Scalable"],
  },
  orbit: {
    label: "E-Commerce",
    nav: ["Shop", "Products", "Collections", "Cart"],
    eyebrow: "Product Page",
    headline: "Clear paths to purchase",
    image: conceptImages.orbit.hero,
    traits: ["Product-led", "Conversion", "Mobile-ready"],
    dark: false,
  },
};

const defaultDemo = serviceDemos.business!;

function resolveDemo(preview: PreviewId): ServiceDemo {
  return serviceDemos[preview] ?? defaultDemo;
}

export function ServicePreview({ preview, className }: ServicePreviewProps) {
  const demo = resolveDemo(preview);
  const dark = demo.dark !== false;

  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border shadow-[0_24px_64px_rgba(0,0,0,0.4)]",
        dark
          ? "border-white/10 bg-[#080a10] text-white"
          : "border-black/8 bg-[#f7f6f3] text-zinc-900",
        className,
      )}
    >
      <div
        className={cn(
          "border-b px-4 py-3",
          dark ? "border-white/10" : "border-black/8",
        )}
      >
        <p className="meta-label text-accent">{demo.label}</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {demo.nav.map((item, index) => (
            <span
              key={item}
              className={cn(
                "rounded-full px-2.5 py-1 text-[0.6875rem] font-medium tracking-wide",
                index === 0
                  ? "bg-accent text-white"
                  : dark
                    ? "bg-white/[0.06] text-white/55"
                    : "bg-black/[0.05] text-zinc-600",
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={demo.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div
          className={cn(
            "absolute inset-0",
            dark
              ? "bg-gradient-to-t from-[#080a10] via-[#080a10]/55 to-transparent"
              : "bg-gradient-to-t from-[#f7f6f3] via-[#f7f6f3]/50 to-transparent",
          )}
        />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-accent">
            {demo.eyebrow}
          </p>
          <p className="mt-1 font-display text-[1.05rem] font-semibold leading-snug sm:text-lg">
            {demo.headline}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-wrap gap-2 border-t px-4 py-3",
          dark ? "border-white/10" : "border-black/8",
        )}
      >
        {demo.traits.map((trait) => (
          <span
            key={trait}
            className={cn(
              "rounded-full border px-2.5 py-1 text-[0.6875rem] font-medium tracking-wide",
              dark
                ? "border-white/12 text-white/65"
                : "border-black/10 text-zinc-600",
            )}
          >
            {trait}
          </span>
        ))}
      </div>
    </div>
  );
}
