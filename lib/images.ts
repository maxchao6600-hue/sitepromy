export const conceptImages = {
  atelier: {
    hero: "/images/atelier/hero.jpg",
    gallery: [
      "/images/atelier/dish-1.jpg",
      "/images/atelier/dish-2.jpg",
      "/images/atelier/interior.jpg",
    ],
    interior: "/images/atelier/interior.jpg",
    story: "/images/atelier/interior.jpg",
  },
  nova: {
    hero: "/images/nova/hero.jpg",
    gallery: [
      "/images/nova/look-1.jpg",
      "/images/nova/look-2.jpg",
      "/images/nova/look-3.jpg",
    ],
    collection: "/images/nova/look-1.jpg",
  },
  form: {
    hero: "/images/form/hero.jpg",
    gallery: ["/images/form/detail-1.jpg", "/images/form/detail-2.jpg"],
    project: "/images/form/detail-1.jpg",
    material: "/images/form/detail-2.jpg",
  },
  mono: {
    hero: "/images/mono/hero.jpg",
    gallery: ["/images/mono/office-1.jpg", "/images/mono/office-2.jpg"],
    caseStudy: "/images/mono/office-1.jpg",
  },
  orbit: {
    hero: "/images/orbit/hero.jpg",
    gallery: [
      "/images/orbit/product-1.jpg",
      "/images/orbit/product-2.jpg",
      "/images/orbit/product-3.jpg",
    ],
  },
  pulse: {
    hero: "/images/pulse/hero.jpg",
    gallery: ["/images/pulse/space-1.jpg", "/images/pulse/space-2.jpg"],
  },
  hero: {
    build: "/images/hero/build-preview.jpg",
    dining: "/images/atelier/hero.jpg",
  },
} as const;

export type ConceptImageKey = keyof typeof conceptImages;
