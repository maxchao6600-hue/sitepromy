"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/lib/i18n";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function Logo({ className, variant = "header" }: LogoProps) {
  const { href } = useLanguage();

  return (
    <Link
      href={href("/")}
      className={cn(
        "inline-flex shrink-0 items-center",
        variant === "header" && "gap-1.5 sm:gap-2 lg:gap-3",
        className,
      )}
      aria-label="SitePro home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.jpg"
        alt="SitePro"
        width={160}
        height={48}
        className={cn(
          "site-logo-img h-auto w-auto max-w-none object-contain",
          variant === "header" ? "h-8 lg:h-9" : "h-10 sm:h-11",
        )}
      />
      {variant === "header" ? (
        <span
          className="site-logo-wordmark font-display text-sm font-semibold uppercase tracking-[0.08em] text-cream lg:text-[0.9375rem] lg:tracking-[0.14em]"
          aria-hidden="true"
        >
          SITEPRO<span className="text-accent">MY</span>
        </span>
      ) : null}
    </Link>
  );
}

export function SiteProMarkIcon({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.jpg"
      alt=""
      aria-hidden="true"
      className={cn("h-9 w-auto object-contain", className)}
    />
  );
}

export function SiteProMarkSvg({ size = 48 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.jpg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="object-contain"
      style={{ height: size, width: "auto", maxWidth: size * 2.5 }}
    />
  );
}
