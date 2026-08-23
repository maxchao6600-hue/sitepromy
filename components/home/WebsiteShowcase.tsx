"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { usePortraitMobile } from "@/lib/useMediaQuery";
import { useLanguage } from "@/lib/i18n";
import type { ProjectSlug } from "@/lib/i18n/types";
import type { PreviewId } from "@/lib/site";
import { cn } from "@/lib/cn";

const SHOWCASE_SITES: ReadonlyArray<{
  id: PreviewId;
  brand: string;
  url: string;
  slug: ProjectSlug;
  number: string;
}> = [
  { id: "atelier", brand: "ATELIER", url: "atelier.sitepromy.com", slug: "atelier", number: "01" },
  { id: "nova", brand: "NØVA", url: "nova.sitepromy.com", slug: "nova", number: "02" },
  { id: "form", brand: "FORM", url: "form.sitepromy.com", slug: "form", number: "03" },
  { id: "mono", brand: "MONO", url: "mono.sitepromy.com", slug: "mono", number: "04" },
  { id: "orbit", brand: "ORBIT", url: "orbit.sitepromy.com", slug: "orbit", number: "05" },
  { id: "pulse", brand: "PULSE", url: "pulse.sitepromy.com", slug: "pulse", number: "06" },
];

const PORTRAIT_SHOWCASE_ID: PreviewId = "atelier";
const INTERVAL_MS = 5200;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function WebsiteShowcase() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const isPortraitMobile = usePortraitMobile();
  const [index, setIndex] = useState(0);
  const active = isPortraitMobile
    ? SHOWCASE_SITES.find((site) => site.id === PORTRAIT_SHOWCASE_ID) ?? SHOWCASE_SITES[0]
    : SHOWCASE_SITES[index];
  const activeCopy = t.portfolio.projects[active.slug];
  const shouldRotate = !reduced && !isPortraitMobile;

  useEffect(() => {
    if (!shouldRotate) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SHOWCASE_SITES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [shouldRotate]);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="pointer-events-none absolute -left-1 top-8 z-20 hidden border border-line bg-ink/90 p-4 backdrop-blur-sm lg:-left-6 lg:block xl:-left-10"
        >
          <p className="meta-label text-accent">
            {t.portfolio.projectLabel} {active.number}
          </p>
          <p className="mt-2 font-display text-lg font-bold tracking-tight text-cream">
            {active.brand}
          </p>
          <p className="mt-1 max-w-[10rem] text-xs leading-5 text-secondary">
            {activeCopy.subtitle}
          </p>
          <p className="meta-label mt-3 text-muted">
            {active.number} / {String(SHOWCASE_SITES.length).padStart(2, "0")}
          </p>
        </motion.div>
      </AnimatePresence>

      <PreviewFrame url={active.url} variant="hero" className="lg:scale-[1.02] lg:origin-center">
        {isPortraitMobile ? (
          <WebsitePreview
            id={PORTRAIT_SHOWCASE_ID}
            large
            className="h-full min-h-full w-full max-w-full"
          />
        ) : (
          SHOWCASE_SITES.map((site, siteIndex) => (
            <motion.div
              key={site.id}
              className="absolute inset-0 overflow-hidden"
              initial={false}
              animate={{
                opacity: siteIndex === index ? 1 : 0,
                scale: siteIndex === index ? 1 : 1.008,
                y: siteIndex === index ? 0 : 4,
              }}
              transition={{ duration: reduced ? 0 : 0.75, ease: EASE }}
              style={{
                pointerEvents: siteIndex === index ? "auto" : "none",
                zIndex: siteIndex === index ? 2 : 1,
              }}
              aria-hidden={siteIndex !== index}
            >
              <WebsitePreview
                id={site.id}
                large
                className="h-full min-h-full w-full max-w-full"
              />
            </motion.div>
          ))
        )}

        {shouldRotate ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.5 bg-white/[0.06]"
            aria-hidden="true"
          >
            <motion.div
              key={index}
              className="h-full bg-accent/70"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
            />
          </div>
        ) : null}
      </PreviewFrame>

      <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-4 border-t border-line pt-4 lg:mt-5">
        <div>
          <p className="meta-label text-muted">{activeCopy.category}</p>
          <p className="mt-1 font-display text-sm font-semibold tracking-wide text-cream">
            {active.brand}
          </p>
        </div>
        {shouldRotate ? (
          <div className="flex items-center gap-2" aria-hidden="true">
            {SHOWCASE_SITES.map((site, siteIndex) => (
              <button
                key={site.id}
                type="button"
                onClick={() => setIndex(siteIndex)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  siteIndex === index ? "w-6 bg-accent" : "w-1.5 bg-white/15",
                )}
                aria-label={site.brand}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
