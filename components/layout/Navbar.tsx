"use client";

import { useCallback, useEffect, useId, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/site";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 20;
}

export function Navbar() {
  const pathname = usePathname();
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-ink/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-main flex h-[4.25rem] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-cream/60 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/quote" className="hidden sm:inline-flex">
            Start Your Project
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-current transition-transform duration-300",
                  open ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-current transition-transform duration-300",
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
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-b border-white/[0.06] bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Mobile" className="container-main flex flex-col gap-1 py-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={reduced ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="font-display py-2.5 text-3xl font-semibold tracking-tight text-cream"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-6">
                <Button href="/quote" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
