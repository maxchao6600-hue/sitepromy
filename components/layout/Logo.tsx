import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showDescriptor?: boolean;
  compact?: boolean;
};

export function Logo({
  className,
  showDescriptor = true,
  compact = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="SitePro home"
    >
      <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-lg">
        <Image
          src="/logo.jpg"
          alt=""
          fill
          className="object-cover object-top scale-[2.2] translate-y-[8%]"
          sizes="36px"
          priority
        />
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display font-bold tracking-tight text-cream",
            compact ? "text-sm" : "text-base sm:text-[17px]",
          )}
        >
          Site<span className="text-accent">Pro</span>
        </span>
        {showDescriptor && !compact ? (
          <span className="hidden text-[9px] font-medium uppercase tracking-[0.22em] text-muted sm:block">
            Malaysia Web Design
          </span>
        ) : null}
      </span>
    </Link>
  );
}
