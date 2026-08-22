import { Logo } from "@/components/layout/Logo";
import { SITE, footerLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-main flex flex-col gap-10 py-12 sm:flex-row sm:items-start sm:justify-between sm:py-16">
        <div>
          <Logo showDescriptor={false} />
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted">
            {SITE.descriptor}
          </p>
          <p className="mt-4 text-sm text-cream/50">{SITE.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-main py-5 text-xs text-muted">
          © 2026 {SITE.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
