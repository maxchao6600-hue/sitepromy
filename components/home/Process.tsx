"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { processSteps } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ProcessKey } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

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
      <span className="font-display text-sm tracking-[0.24em] text-accent">
        {stepNumber}
      </span>
      <h3 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:mt-4 lg:text-6xl">
        {step.title}
      </h3>
      <p className="mt-3 max-w-sm text-[0.9375rem] leading-7 text-secondary sm:text-base lg:mt-4">
        {step.description}
      </p>
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
    <section id="process" className="scroll-mt-24 bg-surface">
      <div ref={containerRef} className="relative">
        <div className="container-main section-y pb-0">
          <MotionReveal className="max-w-3xl">
            <p className="eyebrow text-accent">{t.process.eyebrow}</p>
            <h2 className="display-lg mt-5 lg:mt-6">
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
