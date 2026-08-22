import { Button } from "@/components/ui/Button";
import { ProjectMockup } from "@/components/home/ProjectMockup";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { projects } from "@/lib/site";

type WorkProps = {
  compact?: boolean;
  hideIntro?: boolean;
};

export function Work({ compact = false, hideIntro = false }: WorkProps) {
  const items = projects;

  return (
    <section id="work" className="scroll-mt-20 bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {hideIntro ? null : (
          <Reveal className="flex max-w-3xl flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-mist">
                Selected work
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Built for Different Businesses.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-ink/65">
              Concept designs showing the range of styles SitePro can create.
              Real client projects will replace these as they launch.
            </p>
          </Reveal>
        )}

        <div className={cn("grid gap-6 md:grid-cols-2", hideIntro ? "mt-0" : "mt-12")}>
          {items.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <article>
                <ProjectMockup theme={project.theme} className="rounded-xl" />
                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-mist">
                    {project.category} design
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-2 max-w-md text-sm leading-6 text-ink/62">
                  {project.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {compact ? (
          <Reveal className="mt-12">
            <Button href="/work" tone="light">
              View Our Work
            </Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
