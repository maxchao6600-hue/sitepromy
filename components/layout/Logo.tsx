import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

function SiteProMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="38" height="38" rx="10" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path
        d="M20 4L32 11v10L20 34 8 21V11L20 4Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.25"
      />
      <path
        d="M14 14c2-2 5-2 7 0 2 2 2 5 0 7-2 2-5 2-7 0M22 15c2 2 2 5 0 7-2 2-5 2-7 0"
        stroke="#0080FF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, variant = "header" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-white",
        variant === "footer" && "gap-3",
        className,
      )}
      aria-label="SitePro home"
    >
      <SiteProMark
        className={cn(
          "shrink-0",
          variant === "header" ? "h-9 w-9" : "h-11 w-11",
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-tight text-white",
            variant === "header" ? "text-base sm:text-[17px]" : "text-lg",
          )}
        >
          Site<span className="text-accent">Pro</span>
        </span>
        {variant === "footer" ? (
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-muted">
            Malaysia Web Design Studio
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function SiteProMarkIcon({ className }: { className?: string }) {
  return <SiteProMark className={className} />;
}

export function SiteProMarkSvg({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="38" height="38" rx="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path
        d="M20 4L32 11v10L20 34 8 21V11L20 4Z"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.25"
      />
      <path
        d="M14 14c2-2 5-2 7 0 2 2 2 5 0 7-2 2-5 2-7 0M22 15c2 2 2 5 0 7-2 2-5 2-7 0"
        stroke="#0080FF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
