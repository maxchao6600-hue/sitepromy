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
      <path
        d="M20 2L34 10v12L20 38 6 22V10L20 2Z"
        stroke="url(#mark-stroke)"
        strokeWidth="1.5"
        fill="url(#mark-fill)"
      />
      <path
        d="M14 12c2-2 5-2 7 0 2 2 2 5 0 7-2 2-5 2-7 0M22 14c2 2 2 5 0 7-2 2-5 2-7 0"
        stroke="#0080FF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="mark-stroke" x1="6" y1="2" x2="34" y2="38">
          <stop stopColor="#C0C8D4" />
          <stop offset="1" stopColor="#8B93A7" />
        </linearGradient>
        <linearGradient id="mark-fill" x1="20" y1="2" x2="20" y2="38">
          <stop stopColor="#141820" />
          <stop offset="1" stopColor="#0A0C10" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ className, variant = "header" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5",
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
            "font-display font-bold tracking-tight text-cream",
            variant === "header" ? "text-base sm:text-[17px]" : "text-lg",
          )}
        >
          Site<span className="text-accent">Pro</span>
        </span>
        {variant === "footer" ? (
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-muted">
            Malaysia Web Design
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function SiteProMarkIcon({ className }: { className?: string }) {
  return <SiteProMark className={className} />;
}
