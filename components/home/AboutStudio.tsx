"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
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
        </MotionReveal>
      </div>
    </section>
  );
}
