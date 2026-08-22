import { cn } from "@/lib/cn";
import type { PreviewId } from "@/lib/site";
import {
  AtelierPreview,
  NovaPreview,
} from "@/components/previews/concepts/atelier-nova";
import {
  FormPreview,
  LandingPreview,
  MonoPreview,
  OrbitPreview,
  PulsePreview,
} from "@/components/previews/concepts/form-mono-orbit-pulse";

type WebsitePreviewProps = {
  id: PreviewId;
  className?: string;
  large?: boolean;
};

const shells: Record<PreviewId, string> = {
  atelier: "bg-[#120e0a]",
  nova: "bg-[#faf8f5]",
  form: "bg-[#0e0e0e]",
  mono: "bg-[#080a10]",
  orbit: "bg-white",
  pulse: "bg-[#061018]",
  business: "bg-[#080a10]",
  corporate: "bg-[#080a10]",
  ecommerce: "bg-white",
  restaurant: "bg-[#120e0a]",
  landing: "bg-[#050608]",
  custom: "bg-[#061018]",
};

export function WebsitePreview({ id, className, large }: WebsitePreviewProps) {
  return (
    <div
      className={cn("relative overflow-hidden", shells[id], className)}
      aria-hidden="true"
    >
      {id === "atelier" && <AtelierPreview large={large} />}
      {id === "nova" && <NovaPreview large={large} />}
      {id === "form" && <FormPreview large={large} />}
      {id === "mono" && <MonoPreview large={large} />}
      {id === "orbit" && <OrbitPreview large={large} />}
      {id === "pulse" && <PulsePreview large={large} />}
      {id === "business" && <MonoPreview large={large} />}
      {id === "corporate" && <MonoPreview large={large} />}
      {id === "ecommerce" && <OrbitPreview large={large} />}
      {id === "restaurant" && <AtelierPreview large={large} />}
      {id === "landing" && <LandingPreview large={large} />}
      {id === "custom" && <PulsePreview large={large} />}
    </div>
  );
}
