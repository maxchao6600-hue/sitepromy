"use client";

import { MotionReveal } from "@/components/ui/Motion";
import { speedPillars } from "@/lib/site";

export function SpeedSection() {
  return (
    <section className="bg-ink">
      <div className="container-main section-y">
        <MotionReveal>
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
            <div className="font-display text-[clamp(4rem,14vw,11rem)] font-bold leading-[0.85] tracking-tight">
              <span className="block text-cream">FAST</span>
              <span className="block text-accent">≠</span>
              <span className="block text-cream/25">BASIC</span>
            </div>
            <div>
              <p className="eyebrow text-accent">Our approach</p>
              <p className="mt-4 max-w-xl body-lg text-secondary">
                Speed doesn&apos;t mean cutting corners. SitePro delivers
                professional design with efficient workflows — so your website
                goes live without the wait.
              </p>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {speedPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface p-8 transition-colors hover:bg-surface-2 lg:p-10"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-7 text-secondary sm:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
