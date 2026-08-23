"use client";

import { useCallback, useEffect, useId, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/cn";
import { NAV_PAGES, ROUTES, useLanguage, type NavKey } from "@/lib/i18n";

const navItems: Array<{ key: NavKey; href: string }> = NAV_PAGES.map((page) => ({
  key: page,
  href: ROUTES[page].en,
}));

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 24;
}

export function Navbar() {
  const pathname = usePathname();
  const { t, href } = useLanguage();
  const scrolled = useSyncExternalStore(subscribeScroll, getScrollSnapshot, () => false);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();
  const reduced = useReducedMotion();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 overflow-x-clip transition-all duration-500",
        scrolled
          ? "nav-scrolled border-b border-line bg-ink/92 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="nav-inner container-main flex h-16 min-w-0 items-center justify-between gap-2 transition-[height] duration-500 lg:h-[4.25rem] lg:gap-3">
        <Logo className="min-w-0 max-w-[calc(100%-9.5rem)] lg:max-w-none" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.nav.primary}>
          {navItems.map((link) => (
            <a
              key={link.key}
              href={href(link.href)}
              className="nav-link text-cream/60 transition-colors hover:text-cream"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:gap-3">
          <LanguageSwitcher className="max-lg:hidden lg:inline-flex" />

          <Button
            href={href("/quote")}
            className="nav-header-cta min-h-11 px-4 py-2.5 text-xs lg:min-h-12 lg:px-6 lg:text-sm"
          >
            {t.nav.startProject}
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line text-cream lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-current transition-transform",
                  open ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-current transition-transform",
                  open ? "top-1.5 -rotate-45" : "top-2.5",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            className="border-b border-line bg-surface lg:hidden"
          >
            <nav aria-label={t.nav.mobile} className="container-main flex flex-col gap-1 py-6">
              {navItems.map((link) => (
                <a
                  key={link.key}
                  href={href(link.href)}
                  className="font-display py-3 text-2xl font-semibold tracking-tight"
                  onClick={() => setOpen(false)}
                >
                  {t.nav[link.key]}
                </a>
              ))}

              <div className="mt-6 border-t border-line pt-6">
                <p className="eyebrow text-muted">{t.nav.language}</p>
                <LanguageSwitcher
                  className="mt-3"
                  onSelect={() => setOpen(false)}
                />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
