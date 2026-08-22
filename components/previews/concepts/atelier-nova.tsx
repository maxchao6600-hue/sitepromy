import { conceptImages } from "@/lib/images";
import {
  PreviewBody,
  PreviewButton,
  PreviewEyebrow,
  PreviewFooter,
  PreviewHero,
  PreviewHeroSide,
  PreviewNav,
  PreviewPhoto,
  PreviewRoot,
  PreviewTitle,
} from "@/components/previews/shared";

export function AtelierPreview({ large }: { large?: boolean }) {
  const { hero, gallery, story } = conceptImages.atelier;
  const dishes = [
    { src: gallery[0], name: "Signature", label: "Sea bass · citrus beurre blanc" },
    { src: gallery[1], name: "Seasonal menu", label: "Dry-aged ribeye · root vegetables" },
    { src: gallery[2], name: "Chef's selection", label: "Seven-course tasting menu" },
  ];

  return (
    <PreviewRoot className="bg-[#120e0a] text-[#f4eadc]">
      <PreviewNav
        brand="ATELIER"
        links={["Menu", "Chef", "Reservations"]}
        cta="Book"
      />

      <PreviewHero
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-t from-[#120e0a] via-[#120e0a]/55 to-transparent"
      >
        <PreviewEyebrow className="text-[#c9a882]">Fine Dining</PreviewEyebrow>
        <PreviewTitle large={large}>ATELIER</PreviewTitle>
        <PreviewBody className="max-w-[85%] text-[#f4eadc]/70">
          A modern dining experience shaped by craft, season and detail.
        </PreviewBody>
        <PreviewButton className="bg-[#b85c32] text-[#f4eadc]">Reserve a Table</PreviewButton>
      </PreviewHero>

      <section className="shrink-0 border-t border-[#f4eadc]/10 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-[#c9a882]">Signature</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-3 gap-[2.5%]">
          {dishes.map((dish) => (
            <div key={dish.name} className="min-w-0">
              <PreviewPhoto src={dish.src} className="aspect-[4/5]" alt={dish.name} />
              <p className="mt-[0.5em] text-[0.82em] font-medium">{dish.name}</p>
              <p className="mt-[0.25em] text-[0.72em] leading-relaxed text-[#f4eadc]/55">
                {dish.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-[1fr_42%] gap-[3%] border-t border-[#f4eadc]/10 px-[4%] py-[3.5%]">
        <div className="flex flex-col justify-center pr-[2%]">
          <PreviewEyebrow className="text-[#c9a882]">The Kitchen</PreviewEyebrow>
          <PreviewBody className="text-[#f4eadc]/60">
            Chef-led fine dining with seasonal produce, intimate service and a wine
            program built around each course.
          </PreviewBody>
        </div>
        <PreviewPhoto src={story} className="aspect-[4/3]" alt="Atelier dining room" />
      </section>

      <PreviewFooter text="Jalan Ampang · Open Tue–Sun" />
    </PreviewRoot>
  );
}

export function NovaPreview({ large }: { large?: boolean }) {
  const { hero, gallery, collection } = conceptImages.nova;

  return (
    <PreviewRoot className="bg-[#faf8f5] text-[#111]">
      <PreviewNav
        brand="NØVA"
        dark={false}
        links={["Collection", "Editorial", "Studio"]}
        cta="Shop"
      />

      <PreviewHeroSide
        src={hero}
        priority={large}
        gradientClass="bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/45 to-transparent"
        side="left"
      >
        <PreviewEyebrow className="text-zinc-500">New Season</PreviewEyebrow>
        <PreviewTitle large={large} className="font-light tracking-[0.22em]">
          NØVA
        </PreviewTitle>
        <PreviewBody className="text-zinc-600">New Collection</PreviewBody>
        <PreviewButton variant="underline" className="border-[#111] text-[#111]">
          Explore Collection
        </PreviewButton>
      </PreviewHeroSide>

      <section className="shrink-0 px-[4%] py-[3.5%]">
        <PreviewEyebrow className="text-zinc-400">Lookbook</PreviewEyebrow>
        <div className="mt-[2%] grid grid-cols-3 gap-[2.5%]">
          {gallery.map((src, i) => (
            <div key={src} className="min-w-0">
              <PreviewPhoto src={src} className="aspect-[3/4]" alt={`Look ${i + 1}`} />
              <p className="mt-[0.5em] text-[0.75em] tracking-[0.14em] text-zinc-500">
                LOOK 0{i + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid shrink-0 grid-cols-2 gap-[3%] border-t border-black/8 px-[4%] py-[3.5%]">
        <PreviewPhoto src={collection} className="aspect-[16/11]" alt="Nova editorial" />
        <div className="flex flex-col justify-center">
          <PreviewEyebrow className="text-zinc-400">Studio</PreviewEyebrow>
          <p className="mt-[0.5em] font-display text-[1.15em] font-medium leading-tight">
            Structured silhouettes for the new season
          </p>
          <PreviewButton className="bg-[#111] text-white">View Lookbook</PreviewButton>
        </div>
      </section>

      <PreviewFooter text="Free shipping · KL & SG" dark={false} />
    </PreviewRoot>
  );
}
