"use client";

import type { ReactNode } from "react";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { SubtleGrid } from "@/components/ui/SubtleGrid";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function DesignSystemSection() {
  const { t } = useLanguage();
  const ds = t.designSystem;

  return (
    <section className="scene-design-system scene-noise relative overflow-x-clip border-y border-line">
      <SubtleGrid />
      <div className="container-main relative z-10 section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={ds.scene} label={ds.index} />

          <div className="mt-6 lg:mt-8">
            <h2 className="display-lg text-cream">{ds.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary lg:text-base">
              {ds.subtitle}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-10 lg:grid-cols-5 lg:gap-4">
            <SystemTile label={ds.type.label}>
              <span className="font-display text-5xl font-bold tracking-tight text-cream lg:text-6xl">
                {ds.type.sample}
              </span>
              <span className="mt-2 block text-xs text-muted">Inter / Space Grotesk</span>
            </SystemTile>

            <SystemTile label={ds.color.label}>
              <div className="flex gap-2">
                <span className="h-8 w-8 rounded-full bg-accent" />
                <span className="h-8 w-8 rounded-full border border-line bg-ink" />
                <span className="h-8 w-8 rounded-full border border-line bg-cream" />
              </div>
              <span className="mt-3 block text-xs leading-5 text-secondary">{ds.color.values}</span>
            </SystemTile>

            <SystemTile label={ds.grid.label}>
              <div
                className="h-16 w-full opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,128,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "calc(100% / 12) 100%",
                }}
                aria-hidden="true"
              />
              <span className="mt-2 block text-xs text-muted">{ds.grid.value}</span>
            </SystemTile>

            <SystemTile label={ds.components.label} className="col-span-2 sm:col-span-1">
              <ul className="space-y-1.5">
                {ds.components.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-cream/80">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </SystemTile>

            <SystemTile label={ds.motion.label} className="col-span-2 sm:col-span-3 lg:col-span-1">
              <ul className="flex flex-wrap gap-2">
                {ds.motion.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line px-2.5 py-1 text-xs uppercase tracking-wider text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SystemTile>
          </div>

          <div className="mt-6 hidden border border-line bg-surface-2/30 p-4 lg:block">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                Button
              </span>
              <span className="rounded border border-line px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream">
                Secondary
              </span>
              <div className="h-px flex-1 bg-line" />
              <span className="meta-label text-muted">NAV · CARD · FORM</span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

function SystemTile({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex flex-col border border-line bg-surface-2/40 p-4 transition-colors duration-300 hover:border-accent/25 lg:p-5",
        className,
      )}
    >
      <p className="meta-label text-accent">{label}</p>
      <div className="mt-4 flex flex-1 flex-col justify-end">{children}</div>
    </article>
  );
}
