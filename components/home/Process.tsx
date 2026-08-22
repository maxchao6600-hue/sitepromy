"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { steps } from "@/lib/site";

function ProcessStep({
  step,
  index,
  scrollYProgress,
  reduced,
}: {
  step: (typeof steps)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean | null;
}) {
  const start = index / steps.length;
  const end = (index + 1) / steps.length;
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    reduced ? [1, 1] : [0.4, 1],
  );

  return (
    <motion.article
      style={{ opacity: reduced ? 1 : opacity }}
      className="w-[min(85vw,420px)] border-t border-line pt-8 lg:w-[480px]"
    >
      <span className="font-display text-sm tracking-[0.2em] text-accent">
        {step.number}
      </span>
      <h3 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        {step.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-cream/50 sm:text-base">
        {step.description}
      </p>
      <div className="mt-8 aspect-[4/3] rounded-lg border border-line bg-surface-2 p-6">
        <div className="h-full rounded border border-dashed border-white/10" />
      </div>
    </motion.article>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="process" className="scroll-mt-24 bg-ink">
      <div ref={containerRef} className="relative">
        <div className="container-main section-y pb-0">
          <MotionReveal>
            <p className="eyebrow text-accent">Process</p>
          </MotionReveal>
        </div>

        <div className="h-scroll container-main pb-16 pt-4 lg:pb-24">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              scrollYProgress={scrollYProgress}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
