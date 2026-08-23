"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const GOAL_KEYS = ["01", "02", "03", "04"] as const;

const goalVisuals: Record<(typeof GOAL_KEYS)[number], string> = {
  "01": "linear-gradient(135deg, rgba(0,128,255,0.15), transparent 60%)",
  "02": "linear-gradient(180deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
  "03": "radial-gradient(circle at 30% 50%, rgba(0,128,255,0.12), transparent 55%)",
  "04": "linear-gradient(90deg, rgba(0,128,255,0.08) 1px, transparent 1px)",
};

export function BusinessGoalsSection() {
  const { t } = useLanguage();
  const bg = t.businessGoals;

  return (
    <section className="scene-business scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={bg.scene} label={bg.index} />

          <p className="eyebrow mt-6 text-accent lg:mt-8">{bg.eyebrow}</p>
          <h2 className="display-lg mt-3 text-cream">
            {bg.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5">
            {GOAL_KEYS.map((key) => {
              const goal = bg.goals[key];
              return (
                <article
                  key={key}
                  className="group relative overflow-hidden border border-line bg-surface-2/30 p-5 transition-colors duration-300 hover:border-accent/30 lg:p-6"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: goalVisuals[key] }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <span className="meta-label text-accent">{key}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-[0.08em] text-cream">
                      {goal.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-secondary">{goal.description}</p>
                    <span
                      className={cn(
                        "mt-4 block h-px w-0 origin-left bg-accent transition-all duration-500 group-hover:w-12",
                      )}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
