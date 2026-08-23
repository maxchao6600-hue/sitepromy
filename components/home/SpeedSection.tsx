"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
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
    <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-line bg-[#07090e]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,128,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,255,0.08) 1px, transparent 1px)",
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

        <motion.div
          className="mt-3 flex gap-2"
          initial={false}
          animate={{ opacity: showBuild ? 1 : 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <span className="rounded-full bg-accent px-3 py-1.5 text-[10px] text-white">
            {t.speed.sampleExperience}
          </span>
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

function SpeedPillar({ pillarKey, index }: { pillarKey: SpeedPillarKey; index: number }) {
  const { t } = useLanguage();
  const pillar = t.speed.pillars[pillarKey];

  return (
    <article className="min-w-0 border-t border-line pt-6 lg:pt-8">
      <span className="meta-label text-accent">0{index + 1}</span>
      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
        {pillar.title}
      </h3>
      <p className="mt-2 max-w-xs text-[0.9375rem] leading-7 text-secondary sm:text-base">
        {pillar.description}
      </p>
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
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.85], reduced ? ["100%"] : ["0%", "100%"]);

  useEffect(() => {
    if (reduced) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % 5);
    }, VISUAL_CYCLE_MS);

    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section ref={sectionRef} className="overflow-x-clip bg-ink">
      <div className="container-main section-y">
        <MotionReveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
            <div className="font-display text-[clamp(3rem,14vw,11rem)] font-bold leading-[0.85] tracking-tight">
              <span className="block text-cream">{t.speed.fast}</span>
              <span className="block text-accent">{t.speed.notEqual}</span>
              <span className="block text-cream/25">{t.speed.basic}</span>
            </div>
            <div>
              <p className="eyebrow text-accent">{t.speed.eyebrow}</p>
              <p className="mt-4 max-w-xl body-lg text-secondary">{t.speed.body}</p>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-14">
          <div>
            <div className="relative mb-6 hidden h-px bg-line lg:mb-8 lg:block">
              <motion.div
                style={{ width: lineWidth }}
                className="absolute inset-y-0 left-0 bg-accent"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-8">
              {PILLAR_KEYS.map((pillarKey, index) => (
                <SpeedPillar key={pillarKey} pillarKey={pillarKey} index={index} />
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <ProcessVisual activeIndex={activeIndex} />
            <p className="meta-label mt-4 text-muted">{t.speed.sampleProgression}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
