"use client";

import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export function FooterMap() {
  const { t } = useLanguage();
  const { address } = SITE;

  return (
    <div className="footer-map mt-6 w-full max-w-[420px]">
      <div className="footer-map-frame group relative w-full overflow-hidden">
        <iframe
          title={address.mapIframeTitle}
          src={address.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="footer-map-iframe pointer-events-none absolute inset-0 h-full w-full border-0"
          tabIndex={-1}
        />
        <span className="footer-map-veil pointer-events-none absolute inset-0" aria-hidden="true" />
        <span
          className="footer-map-pin pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        <span className="footer-map-overlay pointer-events-none absolute inset-x-0 bottom-0 px-3.5 pb-3.5 pt-10">
          <span className="block font-display text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-cream">
            {address.mapOverlayBrand}
          </span>
          <span className="mt-1 block text-[0.625rem] uppercase tracking-[0.16em] text-cream/55">
            {address.mapOverlayLocation}
          </span>
        </span>
        <a
          href={address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.footer.mapsAria}
          className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
      </div>
    </div>
  );
}
