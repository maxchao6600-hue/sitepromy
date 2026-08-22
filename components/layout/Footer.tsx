import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import { SITE, footerLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface">
      <div className="container-main grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div className="max-w-md">
          <Logo />
          <p className="mt-5 text-sm leading-7 text-cream/55">
            Professional websites built around your business — fast, flexible
            and ready to grow.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="SitePro logo"
              width={48}
              height={48}
              className="rounded-lg object-cover object-top"
            />
            <span className="text-xs text-muted">{SITE.fullName}</span>
          </div>
        </div>

        <div>
          <p className="eyebrow text-muted">Navigate</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-main flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {SITE.fullName}. All rights reserved.</p>
          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
