import { cn } from "@/lib/cn";

type ProjectStatusMetaProps = {
  items: Array<{ label: string; value: string }>;
  className?: string;
};

export function ProjectStatusMeta({ items, className }: ProjectStatusMetaProps) {
  return (
    <dl className={cn("grid grid-cols-2 gap-3 sm:grid-cols-4", className)}>
      {items.map((item) => (
        <div key={item.label} className="border border-line bg-ink/40 px-3 py-2.5">
          <dt className="meta-label text-muted">{item.label}</dt>
          <dd className="mt-1 text-xs leading-5 text-cream/80 sm:text-sm">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
