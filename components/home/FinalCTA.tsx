"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { CredibilityStrip } from "@/components/ui/CredibilityStrip";
import { GridAccent } from "@/components/ui/GridAccent";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { useLanguage } from "@/lib/i18n";

export function FinalCTA() {
  const { t, href } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <section className="scene-cta scene-noise relative overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 100%, rgba(0,128,255,0.16), transparent 70%)",
        }}
      />

      <div className="container-main relative section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.cta.scene} label={t.cta.eyebrow} />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <h2 className="display-lg text-cream">
                {t.cta.headlineLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-5 max-w-md text-lg text-cream/90">{t.cta.prompt}</p>
              <p className="mt-2 max-w-md body-lg text-secondary">{t.cta.actionShort}</p>
              <CredibilityStrip items={t.cta.credibility} className="mt-6" />
            </div>

            <div>
              <div className="overflow-hidden border border-line">
                <PreviewFrame url="nova.sitepromy.com" fixedAspect={false}>
                  <WebsitePreview
                    id="nova"
                    className="aspect-[16/10] min-h-[200px] w-full sm:min-h-[260px]"
                  />
                </PreviewFrame>
              </div>
              <GridAccent className="mt-4" />
            </div>
          </div>

          <Link
            href={href("/quote")}
            className="group relative mt-8 block border border-line bg-surface-2/40 p-6 transition-colors duration-500 hover:border-accent/30 lg:mt-10 lg:p-8"
          >
            <span className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.92] tracking-tight text-cream transition-transform duration-500 group-hover:translate-x-1">
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

          <ul className="mt-8 grid grid-cols-2 gap-3 border-t border-line pt-8 sm:grid-cols-4 lg:mt-10">
            {t.cta.offerings.map((item) => (
              <li
                key={item}
                className="border border-line px-4 py-3 text-center micro-label text-muted transition-colors hover:border-white/15 hover:text-cream"
              >
                {item}
              </li>
            ))}
          </ul>
        </MotionReveal>
      </div>
    </section>
  );
}
