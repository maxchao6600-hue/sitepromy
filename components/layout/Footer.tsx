"use client";

import Link from "next/link";
import { FooterMap } from "@/components/layout/FooterMap";
import { Logo } from "@/components/layout/Logo";
import { StudioExternalLink } from "@/components/ui/StudioExternalLink";
import { SITE } from "@/lib/site";
import { NAV_PAGES, ROUTES, useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t, href } = useLanguage();
  const { address } = SITE;

  return (
    <footer className="scene-footer scene-noise relative border-t border-line">
      <div className="container-main section-y-compact pb-8 lg:pb-10">
        <div className="footer-grid grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.8fr_1.3fr] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <Logo variant="footer" />
            <p className="mt-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-cream">
              SITEPRO<span className="text-accent">MY</span>
            </p>
            <p className="meta-label mt-3 text-accent">{t.footer.descriptor}</p>
            <p className="mt-4 text-sm text-secondary">{t.footer.tagline}</p>
            <p className="mt-6 text-sm text-muted">{SITE.domain}</p>
          </div>

          <div className="min-w-0 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
            <p className="meta-label text-muted">{t.footer.navTitle}</p>
            <ul className="mt-4 space-y-2">
              {NAV_PAGES.map((page) => (
                <li key={page}>
                  <Link
                    href={href(ROUTES[page].en)}
                    className="group inline-flex min-h-10 items-center text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    <span className="relative">
                      {t.nav[page]}
                      <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
            <p className="meta-label text-muted">{t.footer.visitTitle}</p>
            <address className="mt-4 not-italic text-sm leading-7 text-cream/70">
              <span className="block">{address.line1}</span>
              <span className="block">{address.line2}</span>
              <span className="block">{address.line3}</span>
            </address>

            <FooterMap />

            <StudioExternalLink
              href={address.mapsUrl}
              label={t.footer.mapsLink}
              ariaLabel={t.footer.mapsAria}
              className="mt-5"
            />

            <div className="mt-8 border-t border-line pt-6">
              <p className="meta-label text-muted">{t.footer.whatsappLabel}</p>
              <StudioExternalLink
                href={SITE.whatsappUrl}
                label={t.footer.whatsappLink}
                ariaLabel={t.footer.whatsappAria}
                className="mt-3"
              />
            </div>

            <div className="mt-8 border-t border-line pt-6 lg:mt-10">
              <Link
                href={href("/quote")}
                className="group inline-flex items-center gap-2 whitespace-nowrap text-sm text-cream/70 transition-colors duration-300 hover:text-accent"
              >
                <span className="relative">
                  {t.footer.startProject}
                  <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-main py-5 text-xs text-muted">{t.footer.rights}</div>
      </div>
    </footer>
  );
}
