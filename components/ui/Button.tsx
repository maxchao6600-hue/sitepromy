import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-dark";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-60",
    variant === "primary" &&
      "bg-accent text-cream shadow-[0_0_0_1px_rgba(0,128,255,0.3)] hover:bg-[#0070e0] hover:shadow-[0_8px_32px_rgba(0,128,255,0.25)]",
    variant === "secondary" &&
      "border border-white/15 bg-white/[0.03] text-cream backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.06]",
    variant === "ghost" &&
      "text-cream/70 hover:text-cream",
    variant === "outline-dark" &&
      "border border-ink/15 bg-transparent text-ink hover:border-ink/30 hover:bg-ink/[0.04]",
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
