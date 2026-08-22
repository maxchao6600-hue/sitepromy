import { cn } from "@/lib/cn";
import { conceptImages } from "@/lib/images";
import { PreviewFooter, PreviewNav, PreviewPhoto } from "@/components/previews/shared";

export function AtelierPreview({ large }: { large?: boolean }) {
  const { hero, gallery, story } = conceptImages.atelier;
  const dishes = [
    { src: gallery[0], name: "Sea bass" },
    { src: gallery[1], name: "Dry-aged ribeye" },
    { src: gallery[2], name: "Seasonal tasting" },
  ];

  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[#120e0a] text-[#f4eadc]">
      <PreviewNav
        brand="ATELIER"
        links={["Menu", "Story", "Reservations"]}
        cta="Book"
      />
      <div className="relative min-h-[38%] flex-1">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] via-[#120e0a]/35 to-black/20" />
        <div className="absolute inset-x-[5%] bottom-[10%] max-w-[70%]">
          <p className="text-[clamp(5px,0.85vw,10px)] tracking-[0.32em] text-[#c9a882]">
            FINE DINING · KUALA LUMPUR
          </p>
          <h3
            className={cn(
              "mt-[2%] font-display font-semibold leading-[0.95]",
              large ? "text-3xl sm:text-5xl" : "text-base sm:text-2xl",
            )}
          >
            Taste the craft
          </h3>
          <p className="mt-[2%] text-[clamp(5px,0.9vw,10px)] text-[#f4eadc]/60">
            Seasonal menu · Private dining · Wine pairings
          </p>
          <span className="mt-[4%] inline-block rounded-full bg-[#b85c32] px-[5%] py-[2%] text-[clamp(5px,0.85vw,9px)]">
            Reserve a table
          </span>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-[1fr_42%] gap-[2%] border-t border-[#f4eadc]/10 p-[3%]">
        <div className="flex flex-col justify-center pr-[2%]">
          <p className="text-[clamp(5px,0.75vw,9px)] tracking-[0.2em] text-[#c9a882]">
            OUR STORY
          </p>
          <p className="mt-[3%] text-[clamp(5px,0.85vw,10px)] leading-relaxed text-[#f4eadc]/55">
            A kitchen where technique meets terroir — every plate composed with
            precision and warmth.
          </p>
        </div>
        <PreviewPhoto src={story} className="aspect-[4/3]" />
      </div>
      <div className="shrink-0 border-t border-[#f4eadc]/10 px-[3%] py-[2.5%]">
        <p className="mb-[2%] text-[clamp(5px,0.75vw,9px)] tracking-[0.2em] text-[#c9a882]">
          SIGNATURE DISHES
        </p>
        <div className="grid grid-cols-3 gap-[2%]">
          {dishes.map((dish) => (
            <div key={dish.name}>
              <PreviewPhoto src={dish.src} className="aspect-[4/5]" />
              <p className="mt-[3%] text-[clamp(5px,0.75vw,8px)] text-[#f4eadc]/70">
                {dish.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <PreviewFooter text="Jalan Ampang · Open Tue–Sun" />
    </div>
  );
}

export function NovaPreview({ large }: { large?: boolean }) {
  const { hero, gallery, collection } = conceptImages.nova;

  return (
    <div className="flex h-full min-h-[320px] flex-col bg-[#faf8f5] text-[#111]">
      <PreviewNav
        brand="NØVA"
        dark={false}
        links={["Collection", "Editorial", "About"]}
        cta="Shop"
      />
      <div className="relative min-h-[42%] flex-1">
        <PreviewPhoto src={hero} className="absolute inset-0" priority={large} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/40 to-transparent" />
        <div className="absolute inset-y-0 left-[5%] flex w-[55%] flex-col justify-center">
          <p className="text-[clamp(5px,0.85vw,10px)] tracking-[0.35em] text-zinc-500">
            SS26 COLLECTION
          </p>
          <h3
            className={cn(
              "mt-[3%] font-display font-light tracking-[0.28em]",
              large ? "text-4xl sm:text-6xl" : "text-xl sm:text-3xl",
            )}
          >
            NØVA
          </h3>
          <p className="mt-[4%] text-[clamp(5px,0.9vw,10px)] leading-relaxed text-zinc-600">
            Editorial fashion · Minimal luxury · Studio crafted
          </p>
          <span className="mt-[5%] inline-flex w-fit border-b border-[#111] pb-[1%] text-[clamp(5px,0.85vw,9px)] tracking-[0.22em]">
            EXPLORE COLLECTION
          </span>
        </div>
      </div>
      <div className="grid shrink-0 grid-cols-3 gap-[2%] p-[3%]">
        {gallery.map((src, i) => (
          <div key={src}>
            <PreviewPhoto src={src} className="aspect-[3/4]" />
            <p className="mt-[3%] text-[clamp(5px,0.75vw,8px)] tracking-[0.12em] text-zinc-500">
              LOOK 0{i + 1}
            </p>
          </div>
        ))}
      </div>
      <div className="grid shrink-0 grid-cols-2 gap-[2%] border-t border-black/8 px-[3%] py-[2.5%]">
        <PreviewPhoto src={collection} className="aspect-[16/11]" />
        <div className="flex flex-col justify-center">
          <p className="text-[clamp(5px,0.75vw,9px)] tracking-[0.2em] text-zinc-400">
            NEW ARRIVALS
          </p>
          <p className="mt-[3%] font-display text-[clamp(10px,1.8vw,18px)] font-medium">
            Structured silhouettes
          </p>
          <span className="mt-[4%] inline-flex w-fit bg-[#111] px-[5%] py-[2%] text-[clamp(5px,0.85vw,9px)] text-white">
            Shop collection
          </span>
        </div>
      </div>
      <PreviewFooter text="Free shipping · KL & SG" dark={false} />
    </div>
  );
}
