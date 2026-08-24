"use client";

import { cn } from "@/lib/cn";
import { conceptImages } from "@/lib/images";
import type { PreviewId } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

type ServicePreviewProps = {
  preview: PreviewId;
  url?: string;
  className?: string;
};

const imageMap: Partial<Record<PreviewId, string>> = {
  business: conceptImages.mono.hero,
  ecommerce: conceptImages.orbit.hero,
  landing: conceptImages.hero.build,
  corporate: conceptImages.mono.caseStudy,
  restaurant: conceptImages.atelier.hero,
  custom: conceptImages.pulse.hero,
  nova: conceptImages.nova.hero,
  pulse: conceptImages.pulse.hero,
  mono: conceptImages.mono.hero,
  orbit: conceptImages.orbit.hero,
  atelier: conceptImages.atelier.hero,
  form: conceptImages.form.hero,
};

export function ServicePreview({ preview, url, className }: ServicePreviewProps) {
  const { t } = useLanguage();
  const image = imageMap[preview] ?? conceptImages.mono.hero;
  const displayUrl = url ?? `${preview}.sitepromy.com`;

  return (
    <div
      className={cn(
        "overflow-hidden border border-line bg-[#07090e]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-[7px] w-[7px] rounded-full bg-white/10" />
          <span className="h-[7px] w-[7px] rounded-full bg-white/10" />
          <span className="h-[7px] w-[7px] rounded-full bg-white/10" />
        </div>
        <div className="flex min-w-0 flex-1 justify-center">
          <span className="truncate rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] tracking-[0.08em] text-white/40 sm:px-3 sm:text-[10px]">
            {displayUrl}
          </span>
        </div>
        <span className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
          <span className="text-[9px] tracking-[0.18em] text-white/30">
            {t.services.liveLabel}
          </span>
        </span>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/8] lg:aspect-[16/7] lg:max-h-[520px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
