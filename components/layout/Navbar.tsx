"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/site";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 24;
}

export function Navbar() {
  const scrolled = useSyncExternalStore(subscribeScroll, getScrollSnapshot, () => false);

  return (
    <header
      className={cn(
        "site-header z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-main flex h-[4.25rem] items-center justify-between gap-4">
        <Logo />

        <nav className="flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-cream/60 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/quote" className="inline-flex">
            Start a Project
          </Button>
        </div>
      </div>
    </header>
  );
}
