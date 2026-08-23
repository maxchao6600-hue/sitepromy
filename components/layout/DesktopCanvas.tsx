"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export const DESIGN_WIDTH = 1440;

type DesktopCanvasProps = {
  children: ReactNode;
};

function subscribeViewport(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange);
  window.addEventListener("orientationchange", onStoreChange);
  return () => {
    window.removeEventListener("resize", onStoreChange);
    window.removeEventListener("orientationchange", onStoreChange);
  };
}

function getViewportWidth() {
  return window.innerWidth;
}

function getServerViewportWidth() {
  return DESIGN_WIDTH;
}

function applyCanvasMetrics(vw: number) {
  const scale = vw >= DESIGN_WIDTH ? 1 : vw / DESIGN_WIDTH;
  const root = document.documentElement;
  root.style.setProperty("--canvas-scale", String(scale));
  root.style.setProperty(
    "--cvw",
    `${(scale < 1 ? DESIGN_WIDTH : vw) / 100}px`,
  );
  root.classList.toggle("canvas-scaled", scale < 1);
  return scale;
}

export function DesktopCanvas({ children }: DesktopCanvasProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const viewportWidth = useSyncExternalStore(
    subscribeViewport,
    getViewportWidth,
    getServerViewportWidth,
  );
  const scale =
    viewportWidth >= DESIGN_WIDTH ? 1 : viewportWidth / DESIGN_WIDTH;
  const scaled = scale < 1;

  useLayoutEffect(() => {
    applyCanvasMetrics(viewportWidth);
  }, [viewportWidth]);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const canvas = canvasRef.current;
    if (!shell || !canvas) return;

    if (scale >= 1) {
      shell.style.height = "";
      return;
    }

    shell.style.height = `${canvas.offsetHeight * scale}px`;
  }, [scale]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shell = shellRef.current;
    if (!canvas || !shell) return;

    const observer = new ResizeObserver(() => {
      if (scale >= 1) {
        shell.style.height = "";
        return;
      }
      shell.style.height = `${canvas.offsetHeight * scale}px`;
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [scale]);

  useEffect(() => {
    return () => {
      const root = document.documentElement;
      root.style.removeProperty("--canvas-scale");
      root.style.removeProperty("--cvw");
      root.classList.remove("canvas-scaled");
    };
  }, []);

  return (
    <div ref={shellRef} className="relative w-full overflow-x-clip">
      <div
        ref={canvasRef}
        className="desktop-canvas bg-ink"
        style={
          scaled
            ? {
                width: DESIGN_WIDTH,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                willChange: "transform",
              }
            : {
                width: "100%",
                transform: "none",
              }
        }
      >
        {children}
      </div>
    </div>
  );
}
