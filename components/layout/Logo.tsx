import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  markClassName?: string;
  inverted?: boolean;
};

export function Logo({ className, markClassName, inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 tracking-tight",
        inverted ? "text-cream" : "text-ink",
        className,
      )}
      aria-label="SitePro home"
    >
      <span
        className={cn(
          "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md",
          inverted ? "bg-accent" : "bg-ink",
          markClassName,
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            "font-display text-[13px] font-bold leading-none",
            inverted ? "text-ink" : "text-accent",
          )}
        >
          S
        </span>
      </span>
      <span className="font-display text-[15px] font-bold uppercase tracking-[0.18em]">
        Sitepro
      </span>
    </Link>
  );
}
