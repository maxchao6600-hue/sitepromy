import { Logo } from "@/components/layout/Logo";
import { SITE, footerLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div className="max-w-md">
          <Logo inverted />
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-cream/45">
            {SITE.descriptor}
          </p>
          <p className="mt-5 text-sm leading-7 text-cream/68">
            Professional websites built around your business — fast, flexible and
            ready to grow.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/40">
            Navigate
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/78 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-cream/42 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {SITE.fullName}. All rights reserved.</p>
          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
