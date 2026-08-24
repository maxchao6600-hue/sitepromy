"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { processSteps } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ProcessKey } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

const STAGE_LABELS = [
  "Discovery",
  "Direction",
  "Design",
  "Build",
  "Test",
  "Live",
] as const;

function ProcessVisualCue({ stage }: { stage: number }) {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative mt-6 aspect-[16/10] overflow-hidden rounded-lg border border-line bg-[#07090e]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,128,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,255,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <motion.div
        className="absolute inset-x-[10%] top-[18%] h-[14%] border border-dashed border-accent/30"
        animate={{ opacity: stage >= 0 ? 1 : 0 }}
        transition={{ duration: reduced ? 0 : 0.5 }}
      />
      <motion.div
        className="absolute inset-x-[10%] top-[38%] h-[32%] border border-white/10"
        animate={{ opacity: stage >= 1 ? 0.6 : 0 }}
        transition={{ duration: reduced ? 0 : 0.5 }}
      />
      <motion.div
        className="absolute inset-x-[10%] top-[40%] h-[4%] bg-white/20"
        animate={{ opacity: stage >= 2 ? 1 : 0 }}
        transition={{ duration: reduced ? 0 : 0.5 }}
      />
      <motion.div
        className="absolute inset-x-[10%] top-[48%] h-[20%] bg-accent/20"
        animate={{ opacity: stage >= 3 ? 1 : 0, scale: stage >= 3 ? 1 : 0.96 }}
        transition={{ duration: reduced ? 0 : 0.55 }}
      />
      <motion.div
        className="absolute inset-0 bg-accent/10"
        animate={{ opacity: stage >= 4 ? 1 : 0 }}
        transition={{ duration: reduced ? 0 : 0.45 }}
      />
      <p className="absolute bottom-3 left-3 meta-label text-muted">
        {STAGE_LABELS[stage]}
      </p>
    </div>
  );
}

function ProcessStepItem({
  stepNumber,
  index,
  scrollYProgress,
  reduced,
  animate,
}: {
  stepNumber: ProcessKey;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean | null;
  animate: boolean;
}) {
  const { t } = useLanguage();
  const step = t.process.steps[stepNumber];
  const start = index / processSteps.length;
  const end = (index + 1) / processSteps.length;
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    reduced ? [1, 1] : [0.35, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [start, end],
    reduced ? [0, 0] : [16, 0],
  );

  return (
    <motion.article
      style={{
        opacity: animate && !reduced ? opacity : 1,
        x: animate && !reduced ? x : 0,
      }}
      className="w-full shrink-0 border-t border-line pt-6 lg:w-[min(88vw,440px)] lg:pt-8 xl:w-[520px]"
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-sm tracking-[0.24em] text-accent">
          {stepNumber}
        </span>
        <span className="h-px flex-1 bg-line" />
        <span className="meta-label text-muted">{step.label}</span>
      </div>
      <h3 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:mt-5 lg:text-6xl">
        {step.title}
      </h3>
      <p className="mt-3 max-w-sm text-[0.9375rem] leading-7 text-secondary sm:text-base lg:mt-4">
        {step.description}
      </p>
      <ProcessVisualCue stage={index} />
    </motion.article>
  );
}

export function Process() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const lineWidth = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["100%"] : ["0%", "100%"],
  );

  return (
    <section id="process" className="scene-process scene-noise relative scroll-mt-24">
      <div ref={containerRef} className="relative">
        <div className="container-main section-y-compact pb-0 lg:section-y lg:pb-0">
          <MotionReveal className="max-w-5xl">
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
            <p className="mt-4 body-lg text-secondary lg:mt-5">{t.process.intro}</p>

            <ol className="mt-8 hidden items-center gap-2 lg:flex" aria-hidden="true">
              {processSteps.map((step, index) => (
                <li key={step.number} className="flex items-center gap-2">
                  <span className="meta-label text-muted">{step.label}</span>
                  {index < processSteps.length - 1 ? (
                    <span className="text-muted">→</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </MotionReveal>

          <div className="relative mt-10 hidden h-px bg-line lg:mt-12 lg:block">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute inset-y-0 left-0 bg-accent"
            />
          </div>
        </div>

        <div className="container-main flex flex-col gap-10 pb-14 pt-8 lg:h-scroll lg:flex-row lg:gap-6 lg:pb-24 lg:pt-12">
          {processSteps.map((step, index) => (
            <ProcessStepItem
              key={step.number}
              stepNumber={step.number as ProcessKey}
              index={index}
              scrollYProgress={scrollYProgress}
              reduced={reduced}
              animate={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
