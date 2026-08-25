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
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    "site-button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-60",
    variant === "primary" &&
      "bg-accent text-cream hover:bg-[#0070e0]",
    variant === "secondary" &&
      "border border-line bg-transparent text-cream hover:border-cream/25 hover:bg-white/[0.04]",
    variant === "ghost" && "text-cream/70 hover:text-cream",
    variant === "outline-dark" &&
      "border border-ink/15 bg-transparent text-ink hover:border-ink/30 hover:bg-ink/[0.04]",
    className,
  );

  if (href) {
    const isExternal = Boolean(target) || /^https?:\/\//i.test(href);

    if (isExternal) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }

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
