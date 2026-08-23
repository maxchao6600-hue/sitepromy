"use client";

import { Logo } from "@/components/layout/Logo";
import { SITE } from "@/lib/site";
import { NAV_PAGES, ROUTES, useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t, href } = useLanguage();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-main flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between sm:py-16">
        <div>
          <Logo variant="footer" />
          <p className="mt-3 text-sm text-cream/50 sm:mt-4">{t.footer.tagline}</p>
          <p className="mt-2 text-sm text-muted">{SITE.domain}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_PAGES.filter((page) => page !== "home").map((page) => (
              <li key={page}>
                <a
                  href={href(ROUTES[page].en)}
                  className="inline-flex min-h-12 items-center text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {t.nav[page as "services" | "work" | "process" | "contact"]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-main py-5 text-xs text-muted">{t.footer.rights}</div>
      </div>
    </footer>
  );
}
