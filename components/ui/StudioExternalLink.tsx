import { cn } from "@/lib/cn";

type StudioExternalLinkProps = {
  href: string;
  label: string;
  ariaLabel: string;
  className?: string;
};

/** Editorial text + arrow link for external contacts (Maps, WhatsApp). */
export function StudioExternalLink({
  href,
  label,
  ariaLabel,
  className,
}: StudioExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "group inline-flex max-w-full items-center gap-2 whitespace-nowrap text-sm text-cream/70 transition-colors duration-300 hover:text-accent",
        className,
      )}
    >
      <span className="relative min-w-0">
        <span className="break-words">{label}</span>
        <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
      </span>
      <span
        aria-hidden="true"
        className="inline-block shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
