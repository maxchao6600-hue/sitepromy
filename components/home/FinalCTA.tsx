"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/Motion";
import { cn } from "@/lib/cn";

const offerings = [
  "Business website",
  "E-commerce",
  "Landing page",
  "Custom experience",
];

export function FinalCTA() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,128,255,0.14), transparent 70%)",
        }}
      />

      <div className="container-main relative section-y">
        <MotionReveal className="max-w-5xl">
          <p className="eyebrow text-accent">Start here</p>

          <h2 className="display-lg mt-8 text-cream">
            HAVE A
            <br />
            GOOD IDEA?
          </h2>

          <Link
            href="/quote"
            className="group mt-8 inline-flex min-h-12 flex-col items-start gap-4 sm:mt-10 lg:mt-12"
          >
            <span className="relative font-display text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[0.92] tracking-tight text-cream transition-transform duration-500 group-hover:translate-x-1">
              <span className="relative z-10">
                LET&apos;S BUILD IT.
                <motion.span
                  className="ml-2 inline-block text-accent"
                  initial={false}
                  animate={reduced ? undefined : { x: 0 }}
                  whileHover={reduced ? undefined : { x: 8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  →
                </motion.span>
              </span>
              <span
                className={cn(
                  "absolute -inset-x-3 -inset-y-2 -z-0 scale-x-0 bg-accent/[0.06] transition-transform duration-700 group-hover:scale-x-100",
                )}
                aria-hidden="true"
              />
            </span>
          </Link>

          <p className="mt-8 max-w-md body-lg text-secondary">
            Tell us what you&apos;re building.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {offerings.map((item) => (
              <li key={item} className="micro-label text-muted">
                {item}
              </li>
            ))}
          </ul>
        </MotionReveal>
      </div>
    </section>
  );
}
