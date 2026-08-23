"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { SubtleGrid } from "@/components/ui/SubtleGrid";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { conceptImages } from "@/lib/images";
import { useLanguage } from "@/lib/i18n";

export function StudioStatement() {
  const { t } = useLanguage();

  return (
    <section className="scene-studio scene-noise relative overflow-x-clip border-y border-line">
      <SubtleGrid />
      <div className="container-main relative z-10 section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.studioStatement.scene} label={t.studioStatement.index} />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <h2 className="type-editorial text-cream">
                {t.studioStatement.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <p className="max-w-md border-l-2 border-accent/40 pl-5 text-lg leading-8 text-cream/90 lg:text-xl lg:leading-9">
              {t.studioStatement.body}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 lg:mt-10">
            {t.studioStatement.pillars.map((pillar) => (
              <span
                key={pillar}
                className="border border-line bg-surface-2/40 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.16em] text-cream/80"
              >
                {pillar}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <PreviewFrame url="form.sitepromy.com" fixedAspect={false}>
                <WebsitePreview
                  id="form"
                  className="aspect-[16/10] min-h-[220px] w-full sm:min-h-[280px] lg:min-h-[360px]"
                />
              </PreviewFrame>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-4">
              <div className="relative overflow-hidden border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={conceptImages.form.project}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <p className="meta-label absolute bottom-3 left-3 bg-ink/70 px-2 py-1 text-muted backdrop-blur-sm">
                  {t.studioStatement.previewLabel}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {t.studioStatement.annotations.map((label) => (
                  <div
                    key={label}
                    className="border border-line bg-ink/50 px-3 py-2.5"
                  >
                    <p className="meta-label text-accent">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
