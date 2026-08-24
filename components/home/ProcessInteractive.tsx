"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { SubtleGrid } from "@/components/ui/SubtleGrid";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { processSteps } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ProcessKey } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STAGE_PREVIEWS = ["wireframe", "layout", "design", "build", "test", "live"] as const;

function StagePreview({ stage }: { stage: number }) {
  const reduced = useReducedMotion();
  const previewType = STAGE_PREVIEWS[stage] ?? "wireframe";

  if (previewType === "build" || previewType === "live") {
    return (
      <PreviewFrame url="nova.sitepromy.com" fixedAspect={false}>
        <WebsitePreview
          id="nova"
          large={previewType === "live"}
          className="aspect-[16/10] min-h-[220px] w-full sm:min-h-[280px] lg:min-h-[360px]"
        />
      </PreviewFrame>
    );
  }

  if (previewType === "test") {
    return (
      <PreviewFrame url="launch.sitepromy.com" fixedAspect={false}>
        <WebsitePreview
          id="landing"
          className="aspect-[16/10] min-h-[220px] w-full sm:min-h-[280px] lg:min-h-[360px]"
        />
      </PreviewFrame>
    );
  }

  return (
    <div className="relative aspect-[16/10] min-h-[220px] overflow-hidden rounded-lg border border-line bg-[#07090e] sm:min-h-[280px] lg:min-h-[360px]">
      <SubtleGrid className="opacity-50" />
      <motion.div
        className="absolute inset-x-[10%] top-[16%] h-[12%] border border-dashed border-accent/35"
        animate={{ opacity: stage >= 0 ? 1 : 0 }}
        transition={{ duration: reduced ? 0 : 0.5, ease: EASE }}
      />
      <motion.div
        className="absolute inset-x-[10%] top-[34%] h-[36%] border border-white/12"
        animate={{ opacity: stage >= 1 ? 0.7 : 0 }}
        transition={{ duration: reduced ? 0 : 0.5, ease: EASE }}
      />
      <motion.div
        className="absolute inset-x-[10%] top-[36%] h-[5%] bg-white/18"
        animate={{ opacity: stage >= 2 ? 1 : 0 }}
        transition={{ duration: reduced ? 0 : 0.55, ease: EASE }}
      />
      <motion.div
        className="absolute inset-x-[10%] top-[46%] h-[22%] bg-accent/18"
        animate={{ opacity: stage >= 2 ? 1 : 0, scale: stage >= 2 ? 1 : 0.96 }}
        transition={{ duration: reduced ? 0 : 0.55, ease: EASE }}
      />
      <p className="absolute bottom-4 left-4 meta-label text-muted">
        {STAGE_PREVIEWS[stage]?.toUpperCase()}
      </p>
    </div>
  );
}

export function ProcessInteractive() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="scene-process scene-noise relative scroll-mt-24 overflow-x-clip border-y border-line">
      <SubtleGrid />
      <div className="container-main relative z-10 section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.process.scene} label={t.process.index} />

          <h2 className="display-lg mt-6 text-cream lg:mt-8">
            {t.process.titleLines.map((line, index) => (
              <span
                key={line}
                className={cn(
                  "block",
                  index === t.process.accentLineIndex && "text-accent",
                )}
              >
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-2xl body-lg text-secondary lg:mt-5">{t.process.intro}</p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-10">
            <ol className="flex flex-col gap-2 lg:col-span-4">
              {processSteps.map((step, index) => {
                const copy = t.process.steps[step.number as ProcessKey];
                const isActive = active === index;

                return (
                  <li key={step.number}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className={cn(
                        "w-full border px-4 py-4 text-left transition-all duration-300 lg:px-5 lg:py-5",
                        isActive
                          ? "border-accent/40 bg-accent/[0.06]"
                          : "border-line bg-surface-2/20 hover:border-white/15",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-display text-sm tracking-[0.24em]",
                            isActive ? "text-accent" : "text-muted",
                          )}
                        >
                          {step.number}
                        </span>
                        <span className="h-px flex-1 bg-line" />
                        <span className="meta-label text-muted">{copy.label}</span>
                      </div>
                      <h3
                        className={cn(
                          "mt-3 font-display text-xl font-bold uppercase tracking-tight transition-colors lg:text-2xl",
                          isActive ? "text-cream" : "text-cream/50",
                        )}
                      >
                        {copy.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-2 text-sm leading-7 transition-colors duration-300",
                          isActive ? "text-secondary" : "text-muted",
                        )}
                      >
                        {copy.description}
                      </p>
                      <span
                        className={cn(
                          "mt-3 block h-px origin-left bg-accent transition-transform duration-500",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <StagePreview stage={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
