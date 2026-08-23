"use client";

import { cn } from "@/lib/cn";
import { conceptImages } from "@/lib/images";
import type { PreviewId } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ServicePreviewKey } from "@/lib/i18n/types";

type ServicePreviewProps = {
  preview: PreviewId;
  className?: string;
};

const previewKeyMap: Partial<Record<PreviewId, ServicePreviewKey>> = {
  business: "business",
  ecommerce: "ecommerce",
  landing: "landing",
  corporate: "corporate",
  nova: "nova",
  pulse: "pulse",
  mono: "mono",
  orbit: "orbit",
};

const imageMap: Partial<Record<PreviewId, string>> = {
  business: conceptImages.mono.hero,
  ecommerce: conceptImages.orbit.hero,
  landing: conceptImages.atelier.hero,
  corporate: conceptImages.mono.caseStudy,
  nova: conceptImages.nova.hero,
  pulse: conceptImages.pulse.hero,
  mono: conceptImages.mono.caseStudy,
  orbit: conceptImages.orbit.hero,
};

export function ServicePreview({ preview, className }: ServicePreviewProps) {
  const { t } = useLanguage();
  const key = previewKeyMap[preview] ?? "business";
  const demo = t.servicePreview[key];
  const image = imageMap[preview] ?? conceptImages.mono.hero;
  const dark = key !== "ecommerce" && key !== "nova" && key !== "orbit";

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
          src={image}
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
