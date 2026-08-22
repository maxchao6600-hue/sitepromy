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
      <span className="font-display text-sm tracking-[0.24em] text-accent">
        {step.number}
      </span>
      <h3 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
        {step.title}
      </h3>
      <p className="mt-4 max-w-sm body-lg text-secondary">
        {step.description}
      </p>
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
            <h2 className="display-lg mt-6">
              FROM IDEA
              <br />
              <span className="text-accent">TO WEBSITE.</span>
            </h2>
            <p className="mt-5 body-lg text-secondary">
              A clear path from first conversation to launch — no confusion, no
              unnecessary steps.
            </p>
          </MotionReveal>

          <div className="relative mt-12 hidden h-px bg-line lg:block">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute inset-y-0 left-0 bg-accent"
            />
          </div>
        </div>

        <div className="h-scroll container-main pb-16 pt-8 lg:pb-24 lg:pt-12">
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
