"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectMockup } from "@/components/home/ProjectMockup";
import { MotionReveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import { projects } from "@/lib/site";

function MobilePreview({ theme }: { theme: (typeof projects)[number]["theme"] }) {
  return (
    <div className="absolute -right-3 bottom-4 w-[28%] overflow-hidden rounded-lg border border-white/15 shadow-2xl sm:-right-4 sm:bottom-6 sm:w-[24%]">
      <ProjectMockup theme={theme} compact className="rounded-lg" />
    </div>
  );
}

export function Showcase({ hideIntro = false }: { hideIntro?: boolean }) {
  const reduced = useReducedMotion();

  return (
    <section id="showcase" className="scroll-mt-24 bg-ink">
      <div className="container-main section-pad">
        {hideIntro ? null : (
          <MotionReveal className="max-w-3xl">
            <p className="eyebrow text-accent">Portfolio</p>
            <h2 className="heading-display mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              WHAT CAN WE BUILD?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-cream/55">
              Concept websites showing the range of styles SitePro can create.
              Real client projects will replace these as they launch.
            </p>
          </MotionReveal>
        )}

        <Stagger className={hideIntro ? "space-y-20 sm:space-y-28" : "mt-16 space-y-20 sm:space-y-28"}>
          {projects.map((project, index) => (
            <StaggerItem key={project.slug}>
              <article
                className={
                  index % 2 === 0
                    ? "grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]"
                    : "grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]"
                }
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="eyebrow text-accent">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-cream/55">
                    {project.summary}
                  </p>
                </div>

                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  initial={reduced ? false : { opacity: 0, y: 32 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
                    <ProjectMockup theme={project.theme} className="rounded-2xl" />
                  </div>
                  <MobilePreview theme={project.theme} />
                </motion.div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
