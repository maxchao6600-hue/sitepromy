"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { CredibilityStrip } from "@/components/ui/CredibilityStrip";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Manifesto() {
  const { t } = useLanguage();

  return (
    <section className="scene-manifesto scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.manifesto.scene} label={t.manifesto.index} />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <h2 className="type-editorial text-cream">
                {t.manifesto.lines.map((line, index) => (
                  <span
                    key={line}
                    className={cn(
                      "block",
                      index === t.manifesto.accentLineIndex && "text-accent",
                    )}
                  >
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-md text-[0.9375rem] leading-8 text-secondary sm:text-base lg:mt-8">
                {t.manifesto.body}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="max-w-md border-l-2 border-accent/40 pl-5 text-lg leading-8 text-cream/90 lg:text-xl lg:leading-9">
                {t.manifesto.sideBody}
              </p>

              <div>
                <p className="meta-label mb-3 text-muted">{t.manifesto.previewLabel}</p>
                <PreviewFrame url="form.sitepromy.com" fixedAspect={false}>
                  <WebsitePreview
                    id="form"
                    className="aspect-[16/11] min-h-[200px] w-full sm:min-h-[240px] lg:min-h-[280px]"
                  />
                </PreviewFrame>
              </div>
            </div>
          </div>

          <CredibilityStrip
            items={t.manifesto.credibility}
            className="mt-8 border-t border-line pt-8 lg:mt-10 lg:pt-10"
          />
        </MotionReveal>
      </div>
    </section>
  );
}
