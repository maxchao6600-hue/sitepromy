"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const PRINCIPLE_KEYS = ["01", "02", "03", "04"] as const;

export function WhySitePro() {
  const { t } = useLanguage();

  return (
    <section className="scene-why scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.why.scene} label={t.why.index} />
          <h2 className="display-lg mt-6 max-w-3xl text-cream lg:mt-8">
            {t.why.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-0 border-t border-line sm:grid-cols-2 lg:mt-14">
            {PRINCIPLE_KEYS.map((key) => {
              const item = t.why.principles[key];
              return (
                <article
                  key={key}
                  className={cn(
                    "group border-b border-line p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8",
                    "sm:odd:border-r",
                  )}
                >
                  <span className="meta-label text-accent">{key}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.06em] text-cream sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-cream/80">{item.lead}</p>
                  <p className="mt-2 max-w-sm text-sm leading-7 text-secondary">{item.body}</p>
                  <span className="mt-5 block h-px w-0 bg-accent transition-all duration-300 group-hover:w-12" />
                </article>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
