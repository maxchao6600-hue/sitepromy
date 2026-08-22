import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showDescriptor?: boolean;
};

export function Logo({ className, showDescriptor = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="SitePro home"
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l5.5 3.4v6.8L12 18.8 6.5 14.4V7.6L12 4.2z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-bold tracking-tight text-cream">
          Site<span className="text-accent">Pro</span>
        </span>
        {showDescriptor ? (
          <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.22em] text-muted sm:block">
            Malaysia Web Design
          </span>
        ) : null}
      </span>
    </Link>
  );
}
