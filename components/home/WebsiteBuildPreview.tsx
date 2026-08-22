"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { conceptImages } from "@/lib/images";
import { buildPipeline } from "@/lib/site";
import { cn } from "@/lib/cn";

type BuildStageIndex = 0 | 1 | 2 | 3 | 4;

type HeroConcept = {
  id: string;
  brand: string;
  nav: [string, string, string];
  eyebrow: string;
  headline: string;
  subline: string;
  cta: string;
  image: string;
  secondaryImage: string;
  dark: boolean;
  accent: string;
  muted: string;
  surface: string;
  border: string;
};

const HERO_CONCEPTS: HeroConcept[] = [
  {
    id: "architecture",
    brand: "FORM",
    nav: ["Projects", "Studio", "Material"],
    eyebrow: "Architecture",
    headline: "Built with intent.",
    subline: "Form · Space · Material",
    cta: "View Projects",
    image: conceptImages.form.hero,
    secondaryImage: conceptImages.form.project,
    dark: true,
    accent: "#e8a020",
    muted: "rgba(255,255,255,0.45)",
    surface: "#0e0e0e",
    border: "rgba(255,255,255,0.08)",
  },
  {
    id: "fashion",
    brand: "NØVA",
    nav: ["Collection", "Editorial", "Studio"],
    eyebrow: "New Season",
    headline: "New Collection",
    subline: "Lookbook · Editorial · Craft",
    cta: "Explore Collection",
    image: conceptImages.nova.hero,
    secondaryImage: conceptImages.nova.gallery[1],
    dark: false,
    accent: "#111111",
    muted: "rgba(17,17,17,0.5)",
    surface: "#faf8f5",
    border: "rgba(0,0,0,0.08)",
  },
  {
    id: "product",
    brand: "ORBIT",
    nav: ["Collection", "Movement", "About"],
    eyebrow: "Precision",
    headline: "Precision in motion.",
    subline: "Timepieces · Materials · Design",
    cta: "Shop Collection",
    image: conceptImages.orbit.hero,
    secondaryImage: conceptImages.orbit.gallery[0],
    dark: false,
    accent: "#18181b",
    muted: "rgba(24,24,27,0.5)",
    surface: "#f4f4f2",
    border: "rgba(0,0,0,0.08)",
  },
];

const STAGE_LABELS = ["IDEA", "STRUCTURE", "DESIGN", "BUILD", "LIVE"] as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function delay(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const id = window.setTimeout(resolve, ms);
    signal.addEventListener("abort", () => {
      window.clearTimeout(id);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}

function BrowserChrome({ conceptLabel }: { conceptLabel: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-white/[0.06] bg-[#06080d] px-3 py-2 sm:px-4 sm:py-2.5">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="h-[7px] w-[7px] rounded-full bg-white/10" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/10" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/10" />
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center">
        <span className="truncate rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[9px] tracking-[0.14em] text-white/35 sm:text-[10px]">
          {conceptLabel.toLowerCase()} · sitepromy.build
        </span>
      </div>
      <span className="hidden text-[9px] tracking-[0.18em] text-accent/70 sm:inline">
        CANVAS
      </span>
    </div>
  );
}

function BuildStatus({
  stage,
  buildProgress,
}: {
  stage: BuildStageIndex;
  buildProgress: number;
}) {
  const label = STAGE_LABELS[stage];

  return (
    <div className="flex shrink-0 items-center justify-between border-t border-white/[0.06] bg-[#06080d] px-3 py-2 sm:px-4">
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "text-[9px] font-medium tracking-[0.22em] sm:text-[10px]",
            stage === 4 ? "text-accent" : "text-white/50",
          )}
        >
          {label}
        </span>
        {stage === 3 ? (
          <span className="flex items-center gap-1" aria-hidden="true">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="h-1 w-1 rounded-full bg-accent/80"
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: dot * 0.18,
                  ease: "easeInOut",
                }}
              />
            ))}
          </span>
        ) : null}
        {stage === 4 ? (
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,128,255,0.55)]" />
            <span className="text-[9px] tracking-[0.16em] text-accent/80">ONLINE</span>
          </span>
        ) : null}
      </div>
      {stage === 3 ? (
        <span className="text-[9px] tracking-[0.14em] text-white/30">
          BUILD {buildProgress}%
        </span>
      ) : (
        <span className="text-[9px] tracking-[0.14em] text-white/20">SitePro Studio</span>
      )}
    </div>
  );
}

function LayoutGuides({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[1]"
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,128,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,128,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute left-[8%] top-[18%] h-[42%] w-[34%] border border-dashed border-accent/20" />
      <div className="absolute right-[8%] top-[16%] h-[48%] w-[44%] border border-dashed border-white/10" />
      <div className="absolute inset-x-[8%] bottom-[12%] h-[14%] border border-dashed border-white/[0.07]" />
      <span className="absolute left-[8%] top-[14%] text-[7px] tracking-[0.2em] text-accent/40">
        01
      </span>
      <span className="absolute right-[8%] top-[12%] text-[7px] tracking-[0.2em] text-white/20">
        02
      </span>
    </motion.div>
  );
}

function DesignCursor({
  stage,
  reduced,
  dark,
}: {
  stage: BuildStageIndex;
  reduced: boolean | null;
  dark: boolean;
}) {
  if (reduced || stage === 0 || stage === 4) return null;

  const positions: Record<BuildStageIndex, { x: string; y: string }> = {
    0: { x: "12%", y: "18%" },
    1: { x: "28%", y: "22%" },
    2: { x: "52%", y: "38%" },
    3: { x: "72%", y: "32%" },
    4: { x: "86%", y: "24%" },
  };

  const pos = positions[stage];

  return (
    <motion.div
      className="pointer-events-none absolute z-30"
      initial={false}
      animate={{ left: pos.x, top: pos.y }}
      transition={{ duration: 1.4, ease: EASE }}
      aria-hidden="true"
    >
      <svg width="14" height="18" viewBox="0 0 14 18" className="drop-shadow-sm">
        <path
          d="M1 1L1 13.5L4.5 10.5L7.5 16.5L9.5 15.5L6.5 9.5L11 9.5L1 1Z"
          fill={dark ? "#ffffff" : "#111111"}
          stroke={dark ? "rgba(0,128,255,0.5)" : "rgba(0,128,255,0.35)"}
          strokeWidth="0.75"
        />
      </svg>
      {stage >= 2 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-4 top-3 h-8 w-14 border border-accent/40 bg-accent/[0.06]"
        />
      ) : null}
    </motion.div>
  );
}

function ConceptSite({
  concept,
  stage,
  reduced,
}: {
  concept: HeroConcept;
  stage: BuildStageIndex;
  reduced: boolean | null;
}) {
  const showStructure = stage >= 1;
  const showDesign = stage >= 2;
  const showBuild = stage >= 3;
  const showLive = stage >= 4;
  const wireframe = stage < 2;

  return (
    <div
      className="relative flex min-h-[220px] flex-1 flex-col overflow-hidden sm:min-h-[280px]"
      style={{
        background: concept.surface,
        color: concept.dark ? "#fff" : concept.accent,
      }}
    >
      <LayoutGuides visible={stage === 0 && !reduced} />

      <motion.header
        className="relative z-10 flex shrink-0 items-center justify-between border-b px-4 py-2.5 sm:px-5 sm:py-3"
        style={{ borderColor: concept.border }}
        initial={false}
        animate={{
          opacity: showStructure ? 1 : 0,
          y: showStructure ? 0 : -8,
        }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        {wireframe ? (
          <div className="flex items-center gap-2">
            <span className="h-2 w-12 rounded-sm bg-current/10" />
            <span className="hidden h-1.5 w-8 rounded-sm bg-current/10 sm:block" />
          </div>
        ) : (
          <span className="font-display text-[10px] font-bold tracking-[0.22em] sm:text-[11px]">
            {concept.brand}
          </span>
        )}

        <div className="hidden items-center gap-3 sm:flex">
          {concept.nav.map((link, index) => (
            <motion.span
              key={link}
              className="text-[8px] tracking-[0.12em]"
              style={{ color: concept.muted }}
              initial={false}
              animate={{ opacity: showDesign ? 1 : 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
            >
              {wireframe ? "—" : link}
            </motion.span>
          ))}
        </div>

        <motion.span
          className="rounded-full px-2.5 py-1 text-[8px] font-medium tracking-[0.1em] sm:text-[9px]"
          style={{
            background: showDesign ? concept.accent : "transparent",
            color: showDesign ? (concept.dark ? "#111" : "#fff") : concept.muted,
            border: showDesign ? "none" : `1px solid ${concept.border}`,
          }}
          initial={false}
          animate={{ opacity: showStructure ? 1 : 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {wireframe ? "—" : concept.nav[2]}
        </motion.span>
      </motion.header>

      <div className="relative z-10 flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-5">
        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:gap-4">
          <motion.div
            className="flex flex-col justify-center"
            initial={false}
            animate={{ opacity: showStructure ? 1 : 0, x: showStructure ? 0 : -12 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {wireframe ? (
              <div className="space-y-2">
                <span className="block h-1.5 w-16 rounded-sm bg-current/10" />
                <span className="block h-3 w-[70%] rounded-sm bg-current/10" />
                <span className="block h-2 w-[55%] rounded-sm bg-current/10" />
              </div>
            ) : (
              <>
                <motion.p
                  className="text-[8px] tracking-[0.24em] sm:text-[9px]"
                  style={{ color: concept.muted }}
                  initial={false}
                  animate={{ opacity: showDesign ? 1 : 0 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  {concept.eyebrow.toUpperCase()}
                </motion.p>
                <motion.h4
                  className="mt-2 font-display text-lg font-semibold leading-[1.05] tracking-tight sm:text-2xl"
                  initial={false}
                  animate={{ opacity: showDesign ? 1 : 0, y: showDesign ? 0 : 10 }}
                  transition={{ duration: 0.65, ease: EASE }}
                >
                  {concept.headline}
                </motion.h4>
                <motion.p
                  className="mt-2 text-[9px] leading-relaxed sm:text-[10px]"
                  style={{ color: concept.muted }}
                  initial={false}
                  animate={{ opacity: showDesign ? 1 : 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
                >
                  {concept.subline}
                </motion.p>
                <motion.div
                  className="mt-3 flex flex-wrap gap-2"
                  initial={false}
                  animate={{ opacity: showBuild ? 1 : 0, y: showBuild ? 0 : 8 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <span
                    className="rounded-full px-3 py-1.5 text-[8px] font-medium tracking-[0.08em] sm:text-[9px]"
                    style={{
                      background: concept.accent,
                      color: concept.dark ? "#111" : "#fff",
                    }}
                  >
                    {concept.cta}
                  </span>
                  <span
                    className="rounded-full border px-3 py-1.5 text-[8px] tracking-[0.08em] sm:text-[9px]"
                    style={{ borderColor: concept.border, color: concept.muted }}
                  >
                    Journal
                  </span>
                </motion.div>
              </>
            )}
          </motion.div>

          <motion.div
            className="relative min-h-[120px] overflow-hidden rounded-md sm:min-h-[160px]"
            style={{ border: `1px solid ${concept.border}` }}
            initial={false}
            animate={{
              opacity: showStructure ? 1 : 0,
              scale: showStructure ? 1 : 0.98,
            }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            {wireframe ? (
              <div className="absolute inset-0 bg-current/[0.04]" />
            ) : (
              <>
                <motion.img
                  src={concept.image}
                  alt=""
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                  initial={false}
                  animate={{
                    opacity: showDesign ? 1 : 0,
                    scale: showDesign ? 1 : 1.04,
                    clipPath: showDesign
                      ? "inset(0% 0% 0% 0%)"
                      : "inset(0% 100% 0% 0%)",
                  }}
                  transition={{ duration: 0.9, ease: EASE }}
                />
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: concept.dark
                      ? "linear-gradient(to top, rgba(14,14,14,0.55), transparent 55%)"
                      : "linear-gradient(to top, rgba(250,248,245,0.35), transparent 55%)",
                  }}
                  initial={false}
                  animate={{ opacity: showBuild ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              </>
            )}
          </motion.div>
        </div>

        <motion.div
          className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3"
          initial={false}
          animate={{ opacity: showStructure ? 1 : 0, y: showStructure ? 0 : 10 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          {[concept.secondaryImage, concept.image, concept.secondaryImage].map((src, index) => (
            <div
              key={`${concept.id}-${index}`}
              className="overflow-hidden rounded-sm"
              style={{ border: `1px solid ${concept.border}` }}
            >
              {wireframe ? (
                <div className="aspect-[4/3] bg-current/[0.04]" />
              ) : (
                <motion.img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-full w-full object-cover"
                    initial={false}
                    animate={{
                      opacity: showBuild ? 1 : 0,
                      y: showBuild ? 0 : 6,
                    }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
                  />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {showLive ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/[0.08] px-2.5 py-1 sm:right-4 sm:top-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,128,255,0.5)]" />
            <span className="text-[8px] font-semibold tracking-[0.2em] text-accent sm:text-[9px]">
              LIVE
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <DesignCursor stage={stage} reduced={reduced} dark={concept.dark} />
    </div>
  );
}

function WebsiteCanvas({
  concept,
  stage,
  reduced,
  buildProgress,
}: {
  concept: HeroConcept;
  stage: BuildStageIndex;
  reduced: boolean | null;
  buildProgress: number;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[inherit]">
      <BrowserChrome conceptLabel={concept.brand} />
      <ConceptSite concept={concept} stage={stage} reduced={reduced} />
      <BuildStatus stage={stage} buildProgress={buildProgress} />
    </div>
  );
}

function useBuildTimeline(reduced: boolean | null) {
  const isReduced = reduced === true;
  const [stage, setStage] = useState<BuildStageIndex>(isReduced ? 4 : 0);
  const [conceptIndex, setConceptIndex] = useState(0);
  const [buildProgress, setBuildProgress] = useState(isReduced ? 100 : 0);

  useEffect(() => {
    if (isReduced) return;

    const controller = new AbortController();

    const run = async () => {
      let idx = 0;
      try {
        while (!controller.signal.aborted) {
          setConceptIndex(idx);
          setStage(0);
          setBuildProgress(0);
          await delay(1200, controller.signal);

          setStage(1);
          await delay(1300, controller.signal);

          setStage(2);
          await delay(1500, controller.signal);

          setStage(3);
          setBuildProgress(48);
          await delay(700, controller.signal);
          setBuildProgress(72);
          await delay(800, controller.signal);

          setStage(4);
          setBuildProgress(100);
          await delay(2800, controller.signal);

          idx = (idx + 1) % HERO_CONCEPTS.length;
        }
      } catch {
        /* aborted */
      }
    };

    void run();
    return () => controller.abort();
  }, [isReduced]);

  return { stage, conceptIndex, buildProgress };
}

export function WebsiteBuildPreview() {
  const reduced = useReducedMotion();
  const { stage, conceptIndex, buildProgress } = useBuildTimeline(reduced);
  const concept = HERO_CONCEPTS[conceptIndex];
  const containerRef = useRef<HTMLDivElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 120,
    damping: 22,
  });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const activePipelineIndex = Math.min(stage, buildPipeline.length - 1);

  return (
    <div className="relative w-full">
      <div
        className="pointer-events-none absolute -inset-6 hidden opacity-60 lg:block"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,128,255,0.08), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative [perspective:1400px]"
      >
        <motion.div
          style={reduced ? undefined : { rotateX, rotateY }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#05070c] shadow-[0_40px_100px_rgba(0,0,0,0.55)] sm:shadow-[0_56px_120px_rgba(0,0,0,0.6)]"
        >
          <div className="aspect-[16/11] w-full sm:aspect-[16/10]">
            <AnimatePresence mode="wait">
              <motion.div
                key={concept.id}
                className="h-full"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.85, ease: EASE }}
              >
                <WebsiteCanvas
                  concept={concept}
                  stage={stage}
                  reduced={reduced}
                  buildProgress={buildProgress}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <div className="motion-safe-only mt-4 flex flex-wrap items-center gap-1.5 sm:mt-5 sm:gap-2">
        {buildPipeline.map((pipelineStage, index) => (
          <span
            key={pipelineStage.key}
            className={cn(
              "rounded-full px-2.5 py-1 text-[9px] font-medium tracking-[0.12em] transition-all duration-700 sm:px-3 sm:py-1.5 sm:text-[10px]",
              activePipelineIndex >= index
                ? "bg-accent-dim text-accent"
                : "bg-white/[0.04] text-muted",
            )}
          >
            {pipelineStage.label}
          </span>
        ))}
      </div>
    </div>
  );
}
