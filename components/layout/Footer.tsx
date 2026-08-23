"use client";

import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { SITE } from "@/lib/site";
import { NAV_PAGES, ROUTES, useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t, href } = useLanguage();

  return (
    <footer className="scene-footer scene-noise relative border-t border-line">
      <div className="container-main section-y-compact pb-8 lg:pb-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo variant="footer" />
            <p className="mt-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-cream">
              SITEPRO<span className="text-accent">MY</span>
            </p>
            <p className="meta-label mt-3 text-accent">{t.footer.descriptor}</p>
            <h2 className="type-editorial mt-6 max-w-md text-cream">
              {t.footer.statementLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-sm text-secondary">{t.footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
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

            <div>
              <p className="meta-label text-muted">{t.footer.servicesTitle}</p>
              <ul className="mt-4 space-y-2">
                {t.footer.serviceLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href={href("/services")}
                      className="group inline-flex min-h-10 items-center text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="meta-label text-muted">{t.footer.contactTitle}</p>
              <div className="mt-4 space-y-3">
                <Link
                  href={href("/contact")}
                  className="block text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {t.nav.contact}
                </Link>
                <Link
                  href={href("/quote")}
                  className="block text-sm text-accent transition-colors hover:text-cream"
                >
                  {t.nav.startProject}
                </Link>
                <p className="text-sm text-muted">{SITE.domain}</p>
              </div>
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
