import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function Logo({ className, variant = "header" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="SitePro home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.jpg"
        alt="SitePro"
        width={160}
        height={48}
        className={cn(
          "h-auto w-auto max-w-none object-contain",
          variant === "header" ? "h-8 sm:h-9" : "h-10 sm:h-11",
        )}
      />
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
