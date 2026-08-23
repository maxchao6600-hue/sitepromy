"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
import { PreviewFrame } from "@/components/ui/PreviewFrame";
import { usePortraitMobile } from "@/lib/useMediaQuery";
import type { PreviewId } from "@/lib/site";

const SHOWCASE_SITES: ReadonlyArray<{
  id: PreviewId;
  brand: string;
  url: string;
}> = [
  { id: "atelier", brand: "ATELIER", url: "atelier.sitepromy.com" },
  { id: "nova", brand: "NØVA", url: "nova.sitepromy.com" },
  { id: "form", brand: "FORM", url: "form.sitepromy.com" },
  { id: "orbit", brand: "ORBIT", url: "orbit.sitepromy.com" },
  { id: "pulse", brand: "PULSE", url: "pulse.sitepromy.com" },
];

const PORTRAIT_SHOWCASE_ID: PreviewId = "atelier";

const INTERVAL_MS = 5200;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function WebsiteShowcase() {
  const reduced = useReducedMotion();
  const isPortraitMobile = usePortraitMobile();
  const [index, setIndex] = useState(0);
  const active = isPortraitMobile
    ? SHOWCASE_SITES.find((site) => site.id === PORTRAIT_SHOWCASE_ID) ?? SHOWCASE_SITES[0]
    : SHOWCASE_SITES[index];
  const shouldRotate = !reduced && !isPortraitMobile;

  useEffect(() => {
    if (!shouldRotate) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SHOWCASE_SITES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [shouldRotate]);

  return (
    <div className="w-full">
      <PreviewFrame url={active.url} variant="hero">
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
              scale: siteIndex === index ? 1 : 1.015,
              y: siteIndex === index ? 0 : 6,
            }}
            transition={{
              duration: reduced ? 0 : 0.85,
              ease: EASE,
            }}
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

      <div className="mt-4 flex items-center justify-between gap-4 lg:mt-5">
        <p className="meta-label text-muted">{active.brand}</p>
        {shouldRotate ? (
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {SHOWCASE_SITES.map((site, siteIndex) => (
              <span
                key={site.id}
                className={
                  siteIndex === index
                    ? "h-1.5 w-1.5 rounded-full bg-accent"
                    : "h-1.5 w-1.5 rounded-full bg-white/15"
                }
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
