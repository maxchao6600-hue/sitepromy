"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WebsitePreview } from "@/components/previews/WebsitePreview";
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

const INTERVAL_MS = 4500;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-white/[0.06] bg-[#07090e] px-3 py-2 sm:px-4 sm:py-2.5">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="h-[7px] w-[7px] rounded-full bg-white/12" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/12" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/12" />
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center">
        <span className="truncate rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[9px] tracking-[0.12em] text-white/35 sm:px-3 sm:text-[10px] sm:tracking-[0.14em]">
          {url}
        </span>
      </div>
      <span className="hidden text-[9px] tracking-[0.18em] text-white/25 sm:inline">
        SITEPRO
      </span>
    </div>
  );
}

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
    <div className="hero-showcase-frame relative w-full max-w-full">
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#07090e] shadow-[0_24px_64px_rgba(0,0,0,0.45)] sm:rounded-2xl lg:shadow-[0_56px_120px_rgba(0,0,0,0.55)]">
        <BrowserChrome url={active.url} />

        <div className="hero-showcase-stage relative aspect-[16/10] w-full max-w-full overflow-hidden bg-[#07090e]">
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
                  scale: siteIndex === index ? 1 : 1.012,
                }}
                transition={{
                  duration: reduced ? 0 : 0.65,
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
        </div>
      </div>

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
