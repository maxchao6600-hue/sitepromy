"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { StagePipeline } from "@/components/ui/StagePipeline";
import { conceptImages } from "@/lib/images";
import { useLanguage } from "@/lib/i18n";
import type { SpeedPillarKey } from "@/lib/i18n/types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VISUAL_CYCLE_MS = 3200;
const PILLAR_KEYS: SpeedPillarKey[] = ["01", "02", "03", "04"];

function ProcessVisual({ activeIndex }: { activeIndex: number }) {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const showStructure = activeIndex >= 1;
  const showDesign = activeIndex >= 2;
  const showBuild = activeIndex >= 3;
  const showLive = activeIndex >= 4;

  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-line bg-[#07090e] shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,128,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-x-[8%] top-[14%] h-[18%] border border-dashed border-accent/25"
        initial={false}
        animate={{ opacity: activeIndex === 0 ? 1 : showStructure ? 0.25 : 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-x-[8%] top-[36%] h-[38%] border border-dashed border-white/10"
        initial={false}
        animate={{ opacity: showStructure ? 0.45 : 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5"
        initial={false}
        animate={{ opacity: showStructure ? 1 : 0, y: showStructure ? 0 : -8 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <span className="font-display text-[10px] font-bold tracking-[0.16em] text-white/70">
          SITEPRO
        </span>
        <span className="rounded-full bg-accent/90 px-2.5 py-1 text-[9px] text-white">
          {t.speed.preview}
        </span>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 top-10 flex flex-col p-4 sm:p-5">
        <motion.div
          className="relative flex-1 overflow-hidden rounded-md border border-white/[0.08]"
          initial={false}
          animate={{
            opacity: showDesign ? 1 : showStructure ? 0.35 : 0,
            scale: showDesign ? 1 : 0.98,
          }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <motion.img
            src={conceptImages.form.hero}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            initial={false}
            animate={{
              opacity: showBuild ? 1 : showDesign ? 0.55 : 0,
              clipPath: showDesign
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 100% 0% 0%)",
            }}
            transition={{ duration: 0.85, ease: EASE }}
          />
        </motion.div>

        <motion.div
          className="mt-3 space-y-2"
          initial={false}
          animate={{ opacity: showDesign ? 1 : 0, y: showDesign ? 0 : 8 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="text-[10px] tracking-[0.2em] text-accent/80">
            {t.speed.designDirection}
          </p>
          <p className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">
            {t.speed.builtWithIntent}
          </p>
        </motion.div>
      </div>

      {showLive ? (
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.08] px-2.5 py-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[9px] font-semibold tracking-[0.18em] text-accent">
            {t.speed.live}
          </span>
        </motion.div>
      ) : null}
    </div>
  );
}

function SpeedPillar({
  pillarKey,
  index,
}: {
  pillarKey: SpeedPillarKey;
  index: number;
}) {
  const { t } = useLanguage();
  const pillar = t.speed.pillars[pillarKey];

  return (
    <article className="border border-line bg-surface-2/30 p-4">
      <span className="meta-label text-accent">0{index + 1}</span>
      <h3 className="mt-2 font-display text-base font-semibold uppercase tracking-[0.08em] text-cream">
        {pillar.title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-secondary">{pillar.description}</p>
    </article>
  );
}

export function SpeedSection() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    reduced ? ["100%"] : ["0%", "100%"],
  );

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % 5);
    }, VISUAL_CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section ref={sectionRef} className="scene-speed scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.speed.scene} label={t.speed.index} />

          <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="type-poster">
                <span className="block text-cream">{t.speed.fast}</span>
                <span className="block text-accent">{t.speed.notEqual}</span>
                <span className="block text-cream/20">{t.speed.basic}</span>
              </div>
              <p className="eyebrow mt-6 text-accent">{t.speed.eyebrow}</p>
              <p className="mt-3 text-sm leading-7 text-secondary lg:text-base">
                {t.speed.body}
              </p>
              <StagePipeline
                stages={t.speed.stages}
                activeIndex={activeIndex}
                className="mt-8 hidden lg:flex"
              />
            </div>

            <div className="lg:col-span-8">
              <ProcessVisual activeIndex={activeIndex} />
              <p className="meta-label mt-3 text-muted">{t.speed.sampleProgression}</p>

              <div className="relative mt-6 hidden h-px bg-line lg:mb-6 lg:block">
                <motion.div
                  style={{ width: lineWidth }}
                  className="absolute inset-y-0 left-0 bg-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
                {PILLAR_KEYS.map((pillarKey, index) => (
                  <SpeedPillar key={pillarKey} pillarKey={pillarKey} index={index} />
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
