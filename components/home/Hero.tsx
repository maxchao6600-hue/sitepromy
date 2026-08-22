"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { SITE } from "@/lib/site";

function BrowserPreview() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
      <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-accent/10 blur-3xl" />
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-2 shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
        initial={reduced ? false : { opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1200 }}
      >
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 rounded-full bg-white/[0.05] px-3 py-1 text-[10px] tracking-wide text-muted">
            sitepromy.com
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0d14] p-5 sm:p-6">
          <motion.div
            className="mb-4 flex items-center justify-between"
            animate={reduced ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-display text-xs font-bold text-cream">
              Site<span className="text-accent">Pro</span>
            </span>
            <span className="flex gap-3">
              <span className="h-1 w-8 rounded-full bg-white/20" />
              <span className="h-1 w-8 rounded-full bg-white/20" />
              <span className="h-4 w-12 rounded-full bg-accent/80" />
            </span>
          </motion.div>

          <motion.div
            className="max-w-[55%]"
            animate={reduced ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <p className="font-display text-lg font-bold leading-tight text-cream sm:text-2xl">
              Your idea.
              <br />
              <span className="text-accent">Our craft.</span>
            </p>
            <p className="mt-2 text-[10px] leading-relaxed text-muted sm:text-xs">
              Modern websites designed around your business.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="h-5 w-16 rounded-full bg-accent" />
              <span className="h-5 w-14 rounded-full border border-white/15" />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-5 top-16 w-[38%] overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03] sm:right-6 sm:top-14 sm:w-[42%]"
            animate={reduced ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 via-transparent to-white/5 p-3">
              <div className="grid h-full grid-cols-2 gap-2">
                <span className="rounded bg-white/10" />
                <span className="rounded bg-white/5" />
                <span className="col-span-2 rounded bg-white/[0.07]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 sm:bottom-6 sm:left-6 sm:right-6"
            animate={reduced ? undefined : { y: [0, 4, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2"
              >
                <span className="block h-1.5 w-8 rounded-full bg-white/30" />
                <span className="mt-2 block h-8 rounded bg-white/[0.05]" />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="absolute right-8 top-[52%] w-16 rounded-xl border border-white/10 bg-surface p-1.5 shadow-xl sm:w-[72px]"
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-white/15" />
            <div className="aspect-[9/16] rounded-md bg-gradient-to-b from-accent/30 to-white/5" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[4.25rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,128,255,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--ink)_100%)]" />

      <div className="container-main section-pad grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <FadeIn>
          <p className="eyebrow text-accent">{SITE.descriptor}</p>
          <h1 className="heading-display mt-6 text-[clamp(2.75rem,8vw,5.5rem)]">
            {SITE.heroTitle[0]}
            <br />
            <span className="text-gradient">{SITE.heroTitle[1]}</span>
          </h1>
          <p className="mt-6 text-lg font-medium tracking-tight text-accent">
            {SITE.tagline}
          </p>
          <p className="mt-3 max-w-md text-base leading-7 text-cream/60">
            {SITE.supporting}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/quote">
              Start Your Project →
            </Button>
            <Button href="/#showcase" variant="secondary">
              Explore Our Work →
            </Button>
          </div>
        </FadeIn>

        <BrowserPreview />
      </div>
    </section>
  );
}
