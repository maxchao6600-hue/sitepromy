"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { CredibilityStrip } from "@/components/ui/CredibilityStrip";
import { useLanguage } from "@/lib/i18n";

export function FinalCTA() {
  const { t, href } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <section className="scene-cta scene-noise relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 100%, rgba(0,128,255,0.16), transparent 70%)",
        }}
      />

      <div className="container-main relative section-y">
        <MotionReveal className="max-w-6xl">
          <SectionIndex index={t.cta.scene} label={t.cta.eyebrow} />

          <h2 className="display-lg mt-8 text-cream lg:mt-10">
            {t.cta.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <Link
            href={href("/quote")}
            className="group relative mt-10 block max-w-4xl sm:mt-12 lg:mt-16"
          >
            <span
              className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-sm bg-accent/[0.04] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="relative block font-display text-[clamp(2.75rem,9vw,7rem)] font-bold leading-[0.9] tracking-tight text-cream transition-transform duration-500 group-hover:translate-x-1">
              {t.cta.action}
              <motion.span
                className="ml-2 inline-block text-accent"
                initial={false}
                whileHover={reduced ? undefined : { x: 12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                →
              </motion.span>
            </span>
          </Link>

          <p className="mt-8 max-w-md body-lg text-secondary lg:mt-10">{t.cta.body}</p>

          <CredibilityStrip
            items={t.cta.credibility}
            className="mt-8 lg:mt-10"
          />

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-8">
            {t.cta.offerings.map((item) => (
              <li key={item} className="micro-label text-muted">
                {item}
              </li>
            ))}
          </ul>
        </MotionReveal>
      </div>
    </section>
  );
}
