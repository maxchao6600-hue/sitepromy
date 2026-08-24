"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";

const KEYS = ["01", "02", "03", "04", "05"] as const;

export function SiteProStandard() {
  const { t } = useLanguage();

  return (
    <section className="scene-standard scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.standard.scene} label={t.standard.index} />
          <h2 className="display-lg mt-6 max-w-3xl text-cream lg:mt-8">
            {t.standard.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <ol className="mt-10 border-t border-line lg:mt-14">
            {KEYS.map((key) => {
              const item = t.standard.items[key];
              return (
                <li
                  key={key}
                  className="group grid grid-cols-[auto_1fr] gap-5 border-b border-line py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-8 sm:py-8 lg:grid-cols-[5rem_minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-10"
                >
                  <span className="meta-label text-accent">{key}</span>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-cream sm:text-2xl">
                    {item.title}
                    <span className="mt-3 block h-px w-0 bg-accent transition-all duration-300 group-hover:w-10" />
                  </h3>
                  <p className="col-span-2 max-w-xl text-sm leading-7 text-secondary lg:col-span-1 lg:pt-1">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ol>
        </MotionReveal>
      </div>
    </section>
  );
}
