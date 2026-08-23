"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { steps } from "@/lib/site";

function ProcessStepCard({
  step,
  className,
}: {
  step: (typeof steps)[number];
  className?: string;
}) {
  return (
    <article className={className}>
      <span className="font-display text-sm tracking-[0.24em] text-accent">
        {step.number}
      </span>
      <h3 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:mt-4 lg:text-6xl">
        {step.title}
      </h3>
      <p className="mt-3 max-w-sm body-lg text-secondary lg:mt-4">
        {step.description}
      </p>
    </article>
  );
}

function ProcessStepHorizontal({
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
    reduced ? [1, 1] : [0.35, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [start, end],
    reduced ? [0, 0] : [16, 0],
  );

  return (
    <motion.article
      style={{ opacity: reduced ? 1 : opacity, x: reduced ? 0 : x }}
      className="w-[min(88vw,440px)] shrink-0 border-t border-line pt-8 lg:w-[520px]"
    >
      <ProcessStepCard step={step} />
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
            <p className="eyebrow text-accent">Process</p>
            <h2 className="display-lg mt-5 lg:mt-6">
              FROM BRIEF
              <br />
              <span className="text-accent">TO LIVE.</span>
            </h2>
            <p className="mt-4 body-lg text-secondary lg:mt-5">
              Five focused stages — from understanding the brief to launching a
              polished website ready for your audience.
            </p>
          </MotionReveal>

          <div className="relative mt-10 hidden h-px bg-line lg:mt-12 lg:block">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute inset-y-0 left-0 bg-accent"
            />
          </div>
        </div>

        <div className="container-main flex flex-col gap-10 pb-14 pt-8 lg:hidden">
          {steps.map((step) => (
            <ProcessStepCard
              key={step.number}
              step={step}
              className="border-t border-line pt-6"
            />
          ))}
        </div>

        <div className="h-scroll container-main hidden pb-24 pt-12 lg:block">
          {steps.map((step, index) => (
            <ProcessStepHorizontal
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
