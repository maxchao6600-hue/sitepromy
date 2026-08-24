"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MotionReveal } from "@/components/ui/Motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { ServicePreview } from "@/components/home/ServicePreview";
import { services } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export function Services() {
  const { t, href } = useLanguage();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = services[active];
  const activeCopy = t.services.items[current.number as ServiceKey];

  return (
    <section
      id="services"
      className="scene-services scene-noise relative scroll-mt-24 overflow-x-clip border-y border-line"
    >
      <div className="container-main section-y-compact lg:section-y">
        <MotionReveal>
          <SectionIndex index={t.services.scene} label={t.services.index} />

          <div className="mt-8 grid grid-cols-1 gap-10 lg:mt-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-14 xl:gap-16">
            <div className="min-w-0">
              <h2 className="display-lg text-cream">
                {t.services.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            <div
              className="min-w-0"
              role="listbox"
              aria-label={t.services.index}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                  event.preventDefault();
                  setActive((current) => (current + 1) % services.length);
                } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  setActive(
                    (current) => (current - 1 + services.length) % services.length,
                  );
                }
              }}
            >
              {services.map((service, index) => {
                const copy = t.services.items[service.number as ServiceKey];
                const isActive = active === index;

                return (
                  <button
                    key={service.number}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={cn(
                      "group flex w-full flex-col border-b border-line py-4 text-left transition-colors duration-300 first:border-t lg:py-5",
                      isActive ? "border-b-accent/30" : "hover:border-b-white/15",
                    )}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={cn(
                          "meta-label w-8 shrink-0 transition-colors duration-300",
                          isActive ? "text-accent" : "text-muted group-hover:text-accent/70",
                        )}
                      >
                        {service.number}
                      </span>
                      <span
                        className={cn(
                          "min-w-0 flex-1 font-display text-base font-semibold uppercase tracking-[0.06em] transition-colors duration-300 sm:text-lg lg:text-xl",
                          isActive ? "text-cream" : "text-cream/40 group-hover:text-cream/70",
                        )}
                      >
                        {copy.title}
                      </span>
                      <span
                        className={cn(
                          "shrink-0 text-sm transition-all duration-300",
                          isActive
                            ? "translate-x-0 text-accent"
                            : "translate-x-0 text-muted group-hover:translate-x-1 group-hover:text-accent/70",
                        )}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300",
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 max-w-md pl-12 text-sm leading-7 text-secondary sm:pl-14">
                          {copy.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 border-t border-line pt-8 lg:mt-16 lg:pt-10">
            <p className="meta-label text-accent">{t.services.selectedLabel}</p>

            <div
              className={cn(
                "mt-5 overflow-hidden transition-[opacity,transform] duration-300 lg:mt-6",
                reduced ? "" : "will-change-transform",
              )}
              key={current.number}
              style={{
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <ServicePreview
                preview={current.preview}
                url={`${current.preview}.sitepromy.com`}
                className="w-full"
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div className="min-w-0 max-w-xl">
                <h3 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-cream sm:text-2xl">
                  {activeCopy.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-secondary sm:text-[0.9375rem]">
                  {activeCopy.description}
                </p>
              </div>
              <Link
                href={href("/quote")}
                className="group inline-flex shrink-0 items-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-cream"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  {t.services.viewLabel}
                </span>
              </Link>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
