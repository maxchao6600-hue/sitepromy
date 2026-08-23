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
      className="w-[520px] shrink-0 border-t border-line pt-8"
    >
      <span className="font-display text-sm tracking-[0.24em] text-accent">
        {step.number}
      </span>
      <h3 className="mt-4 font-display text-6xl font-bold uppercase tracking-tight">
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
              FROM BRIEF
              <br />
              <span className="text-accent">TO LIVE.</span>
            </h2>
            <p className="mt-5 body-lg text-secondary">
              Five focused stages — from understanding the brief to launching a
              polished website ready for your audience.
            </p>
          </MotionReveal>

          <div className="relative mt-12 h-px bg-line">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute inset-y-0 left-0 bg-accent"
            />
          </div>
        </div>

        <div className="h-scroll container-main pb-24 pt-12">
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
