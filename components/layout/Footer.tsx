"use client";

import { Logo } from "@/components/layout/Logo";
import { SITE } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const footerItems = [
  { href: "/#services", key: "services" as const },
  { href: "/#portfolio", key: "work" as const },
  { href: "/#process", key: "process" as const },
  { href: "/contact", key: "contact" as const },
];

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
            {footerItems.map((link) => (
              <li key={link.href}>
                <a
                  href={href(link.href)}
                  className="inline-flex min-h-12 items-center text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {t.nav[link.key]}
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
