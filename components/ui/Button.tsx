import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  tone?: "dark" | "light";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  tone = "dark",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variant === "primary" &&
      tone === "dark" &&
      "bg-cream text-ink ring-offset-ink hover:bg-white",
    variant === "primary" &&
      tone === "light" &&
      "bg-ink text-cream ring-offset-paper hover:bg-black",
    variant === "secondary" &&
      tone === "dark" &&
      "border border-white/15 bg-transparent text-cream ring-offset-ink hover:border-white/30 hover:bg-white/5",
    variant === "secondary" &&
      tone === "light" &&
      "border border-ink/15 bg-transparent text-ink ring-offset-paper hover:border-ink/30 hover:bg-ink/[0.03]",
    variant === "ghost" &&
      tone === "dark" &&
      "text-cream/80 ring-offset-ink hover:text-cream",
    variant === "ghost" &&
      tone === "light" &&
      "text-ink/70 ring-offset-paper hover:text-ink",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
