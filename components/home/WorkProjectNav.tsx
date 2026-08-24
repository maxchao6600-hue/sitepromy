"use client";

import { projects } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export function WorkProjectNav() {
  const { t } = useLanguage();

  return (
    <nav
      aria-label={t.portfolio.navLabel}
      className="border-b border-line bg-ink/80"
    >
      <div className="container-main flex gap-2 overflow-x-auto py-4 scrollbar-none">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`#portfolio-${project.slug}`}
            className="meta-label inline-flex shrink-0 items-center gap-2 border border-line px-3 py-2 text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <span className="text-accent">{project.number}</span>
            {project.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
