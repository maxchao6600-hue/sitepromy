"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { conceptImages } from "@/lib/images";
import { buildPipeline, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

function BuildStage({ step }: { step: number }) {
  const showNav = step >= 1;
  const showStructure = step >= 2;
  const showType = step >= 3;
  const showImage = step >= 4;
  const showCta = step >= 4;
  const showLive = step >= 5;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07090e]">
      <AnimatePresence>
        {showNav ? (
          <motion.div
            key="nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative z-10 flex items-center justify-between border-b border-white/[0.06] px-5 py-3"
          >
            <span className="font-display text-[11px] font-bold tracking-wide">
              Your<span className="text-accent">Brand</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="hidden h-1 w-5 rounded-full bg-white/20 sm:block" />
              <span className="hidden h-1 w-5 rounded-full bg-white/20 sm:block" />
              <span className="rounded-full bg-accent/90 px-3 py-1 text-[9px] font-medium">
                Contact
              </span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {showStructure ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-x-4 top-14 bottom-4 rounded-lg border border-dashed border-white/[0.08] sm:inset-x-5 sm:top-16"
        />
      ) : null}

      <div className="absolute inset-x-0 bottom-0 top-12 flex flex-col sm:top-14">
        {showImage ? (
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-4 mt-3 flex-1 overflow-hidden rounded-md border border-white/[0.08] sm:mx-5"
          >
            <Image
              src={conceptImages.hero.build}
              alt=""
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/90 via-[#07090e]/20 to-transparent" />
          </motion.div>
        ) : null}

        <div className="relative z-10 p-4 sm:p-5">
          {showType ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-display text-lg font-bold leading-tight sm:text-2xl">
                {showLive ? "Your website." : "Building your layout…"}
              </h4>
              <p className="mt-1 max-w-[280px] text-[10px] leading-relaxed text-white/45 sm:text-[11px]">
                Professional design · Fast delivery · Built for your business
              </p>
            </motion.div>
          ) : null}

          {showCta ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mt-3 flex gap-2"
            >
              <span className="rounded-full bg-accent px-3.5 py-1.5 text-[10px] font-medium">
                Get started
              </span>
              <span className="rounded-full border border-white/15 px-3.5 py-1.5 text-[10px]">
                Learn more
              </span>
            </motion.div>
          ) : null}
        </div>
      </div>

      {showLive ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-[#28c840]/35 bg-[#28c840]/12 px-3 py-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          <span className="text-[10px] font-semibold tracking-[0.18em] text-[#28c840]">
            LIVE
          </span>
        </motion.div>
      ) : null}
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(reduced ? 5 : 0);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setStep((s) => (s >= 5 ? 0 : s + 1));
    }, 1600);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-[4.25rem]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(0,128,255,0.12), transparent 60%)",
        }}
      />

      <div className="container-main relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-center section-y">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow text-accent">{SITE.descriptor}</p>
            <h1 className="display-xl mt-6">
              WE BUILD
              <br />
              WEBSITES
              <br />
              THAT <span className="text-accent">MOVE.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-cream/55 sm:text-lg">
              You have an idea. We turn it into a website you can launch — fast,
              professional and built around your business.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote">Start a Project →</Button>
              <Button href="/#portfolio" variant="secondary">
                View Concept Work →
              </Button>
            </div>
          </div>

          <div className="relative w-full">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-[0_56px_120px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 flex-1 text-center text-[10px] tracking-wide text-muted">
                  sitepromy.com — building your website
                </span>
              </div>
              <BuildStage step={step} />
            </div>

            <div className="motion-safe-only mt-5 flex flex-wrap items-center gap-2">
              {buildPipeline.map((stage, index) => (
                <span
                  key={stage.key}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] transition-all duration-500",
                    step >= index
                      ? "bg-accent-dim text-accent"
                      : "bg-white/[0.04] text-muted",
                  )}
                >
                  {stage.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
