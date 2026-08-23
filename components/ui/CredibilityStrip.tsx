import { cn } from "@/lib/cn";

type CredibilityStripProps = {
  items: string[];
  className?: string;
};

export function CredibilityStrip({ items, className }: CredibilityStripProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-2",
        className,
      )}
      aria-label="Capabilities"
    >
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-6">
          <span className="meta-label text-muted/80">{item}</span>
          {index < items.length - 1 ? (
            <span className="hidden h-px w-6 bg-line sm:block" aria-hidden="true" />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
