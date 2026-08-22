"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { conceptImages } from "@/lib/images";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

const BUILD_STEPS = [
  { id: 0, label: "Frame" },
  { id: 1, label: "Navbar" },
  { id: 2, label: "Layout" },
  { id: 3, label: "Type" },
  { id: 4, label: "Content" },
  { id: 5, label: "CTA" },
  { id: 6, label: "Live" },
];

function BuildingUI({ step }: { step: number }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080a0f]">
      <AnimatePresence mode="wait">
        {step >= 1 ? (
          <motion.div
            key="nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3 sm:px-6"
          >
            <span className="font-display text-[11px] font-bold sm:text-xs">
              Brand<span className="text-accent">.</span>
            </span>
            <div className="flex gap-2">
              <span className="h-1 w-6 rounded-full bg-white/20" />
              <span className="h-1 w-6 rounded-full bg-white/20" />
              <span className="h-3 w-10 rounded-full bg-accent/80" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="grid h-[calc(100%-44px)] grid-cols-1 gap-4 p-5 sm:grid-cols-[1fr_42%] sm:p-6">
        <div className="flex flex-col justify-center">
          {step >= 2 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-3 h-24 rounded-lg border border-dashed border-white/10 sm:h-32"
            />
          ) : null}

          {step >= 3 ? (
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}>
              <span className="block h-3 w-3/4 max-w-[220px] rounded-full bg-white/85" />
              <span className="mt-2 block h-3 w-1/2 max-w-[160px] rounded-full bg-white/85" />
              <span className="mt-3 block h-1.5 w-full max-w-[240px] rounded-full bg-white/20" />
              <span className="mt-1.5 block h-1.5 w-4/5 max-w-[200px] rounded-full bg-white/15" />
            </motion.div>
          ) : null}

          {step >= 5 ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex gap-2"
            >
              <span className="rounded-full bg-accent px-4 py-1.5 text-[10px] font-medium">Get started</span>
              <span className="rounded-full border border-white/15 px-4 py-1.5 text-[10px]">Learn more</span>
            </motion.div>
          ) : null}
        </div>

        <div className="relative hidden sm:block">
          {step >= 4 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 overflow-hidden rounded-lg border border-white/[0.08]"
            >
              <Image
                src={conceptImages.hero.build}
                alt=""
                fill
                sizes="(max-width: 1024px) 50vw, 420px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2">
                <span className="rounded bg-white/15 backdrop-blur-sm" />
                <span className="rounded bg-white/10 backdrop-blur-sm" />
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>

      {step >= 6 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-[#28c840]/30 bg-[#28c840]/10 px-3 py-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          <span className="text-[10px] font-semibold tracking-widest text-[#28c840]">LIVE</span>
        </motion.div>
      ) : null}
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(reduced ? 6 : 0);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setStep((s) => (s >= 6 ? 0 : s + 1));
    }, 1400);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-[4.25rem]">
      <div className="container-main flex min-h-[calc(100svh-4.25rem)] flex-col justify-center section-y">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow text-accent">{SITE.descriptor}</p>
            <h1 className="display-xl mt-6">
              WE BUILD
              <br />
              WEBSITES THAT
              <br />
              <span className="text-accent">STAND OUT.</span>
            </h1>
            <ul className="mt-8 space-y-1 text-sm text-cream/55 sm:text-base">
              <li>Fast execution.</li>
              <li>Professional design.</li>
              <li>Built around your business.</li>
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote">Start a Project →</Button>
              <Button href="/#portfolio" variant="secondary">
                Explore Our Work →
              </Button>
            </div>
          </div>

          <div className="relative w-full">
            <div className="overflow-hidden rounded-xl border border-line bg-surface-2 shadow-[0_48px_96px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 flex-1 text-center text-[10px] tracking-wide text-muted">
                  sitepromy.com — building…
                </span>
              </div>
              <BuildingUI step={step} />
            </div>

            <div className="motion-safe-only mt-4 flex flex-wrap gap-2">
              {BUILD_STEPS.map((s) => (
                <span
                  key={s.id}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[10px] tracking-wide transition-colors",
                    step >= s.id
                      ? "bg-accent-dim text-accent"
                      : "bg-white/[0.04] text-muted",
                  )}
                >
                  {String(s.id).padStart(2, "0")} {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
