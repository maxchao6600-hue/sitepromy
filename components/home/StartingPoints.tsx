"use client";

import Link from "next/link";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { useLanguage } from "@/lib/i18n";

export function StartingPoints() {
  const { t, href } = useLanguage();

  return (
    <section className="scene-starting-points scene-noise relative overflow-x-clip border-y border-line">
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.startingPoints.scene} label={t.startingPoints.index} />
          <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight text-cream lg:mt-8">
            {t.startingPoints.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-secondary">
            {t.startingPoints.intro}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-10">
            {t.startingPoints.items.map((item) => (
              <article
                key={item.title}
                className="border border-line bg-surface-2/20 p-5 transition-colors duration-300 hover:border-accent/30 lg:p-6"
              >
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.1em] text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-secondary">{item.description}</p>
              </article>
            ))}
          </div>

          <Link
            href={href("/quote")}
            className="group mt-8 inline-flex items-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-cream"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              {t.startingPoints.cta}
            </span>
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
}
