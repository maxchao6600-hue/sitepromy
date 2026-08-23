import { cn } from "@/lib/cn";

type SectionIndexProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionIndex({ index, label, className }: SectionIndexProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-muted",
        className,
      )}
      aria-hidden="true"
    >
      <span className="section-index font-display text-xs font-medium tracking-[0.3em] text-accent/80">
        {index}
      </span>
      <span className="h-px w-8 bg-line" />
      <span className="meta-label">{label}</span>
    </div>
  );
}
