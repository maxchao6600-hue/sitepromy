import Image from "next/image";
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
      className={cn("inline-block shrink-0", className)}
      aria-label="SitePro Malaysia Web Design"
    >
      <span
        className={cn(
          "relative block overflow-hidden",
          variant === "header" &&
            "h-10 w-[108px] sm:h-11 sm:w-[118px]",
          variant === "footer" && "h-[120px] w-[120px]",
        )}
      >
        <Image
          src="/logo.jpg"
          alt="SitePro"
          fill
          className="object-cover object-top"
          sizes={variant === "header" ? "118px" : "120px"}
          priority={variant === "header"}
        />
      </span>
    </Link>
  );
}
