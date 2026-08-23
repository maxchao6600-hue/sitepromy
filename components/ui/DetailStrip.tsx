import { cn } from "@/lib/cn";

type DetailStripProps = {
  items: string[];
  className?: string;
  numbered?: boolean;
};

export function DetailStrip({ items, className, numbered = false }: DetailStripProps) {
  return (
    <div
      className={cn(
        "border-y border-line bg-surface-2/30",
        className,
      )}
      aria-hidden="true"
    >
      <div className="container-main flex flex-wrap items-center gap-x-6 gap-y-3 py-4 sm:gap-x-10 sm:py-5">
        {items.map((item, index) => (
          <span key={item} className="flex items-center gap-6">
            <span className="meta-label text-muted">
              {numbered ? `${String(index + 1).padStart(2, "0")} / ${item}` : item}
            </span>
            {index < items.length - 1 ? (
              <span className="hidden h-px w-8 bg-line sm:block" />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
