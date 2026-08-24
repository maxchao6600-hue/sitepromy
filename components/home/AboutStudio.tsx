"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export function AboutStudio() {
  const { t } = useLanguage();

  return (
    <section className="scene-about scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.about.scene} label={t.about.index} />
          <h2 className="display-lg mt-6 text-cream lg:mt-8">
            {t.about.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-secondary lg:mt-8 lg:text-base lg:leading-8">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {t.about.profile.map((item) => (
              <div key={item.label} className="border border-line bg-surface-2/20 p-4">
                <dt className="meta-label text-muted">{item.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-cream">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 max-w-md border-t border-line pt-8">
            <p className="meta-label text-accent">{t.footer.visitTitle}</p>
            <address className="mt-4 not-italic text-sm leading-7 text-cream/70">
              <span className="block">{SITE.address.line1}</span>
              <span className="block">{SITE.address.line2}</span>
              <span className="block">{SITE.address.line3}</span>
            </address>
            <a
              href={SITE.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.mapsAria}
              className="group mt-5 inline-flex max-w-full items-center gap-2 text-sm text-accent transition-colors duration-300 hover:text-cream"
            >
              <span className="relative min-w-0">
                <span className="break-words">{t.footer.mapsLink}</span>
                <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
              <span
                aria-hidden="true"
                className="inline-block shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
