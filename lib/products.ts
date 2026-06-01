// Product catalog — verified against the current site /produtos.
// Five families. Names are in PT (the source); translations live in lib/i18n/{pt,en}.ts
// keyed by `id`, so SKUs map cleanly across locales.
//
// `image` is an optional /public path. When missing, the card renders an icon
// instead of a photo (so we don't have to ship placeholder art for products
// we don't have professional photography for).

export const productFamilies = [
  {
    id: "lajes",
    items: [
      { id: "vigotas-preesforcadas" },
      { id: "abobadilhas-betao-leve" },
      { id: "lajes-alveoladas" },
    ],
  },
  {
    id: "alvenarias",
    items: [
      { id: "bloco-betao-normal", image: "/products/bloco-leve.jpg" },
      { id: "bloco-betao-leve", image: "/products/bloco-leve.jpg" },
      { id: "blocotherm", image: "/products/blocotherm.png" },
      { id: "blocos-acusticos", image: "/products/blocos-acusticos.png" },
      { id: "bloco-cofragem", image: "/products/bloco-cofragem.jpg" },
    ],
  },
  {
    id: "caixas-estore",
    items: [
      { id: "caixa-estore-termica", image: "/products/caixa-estore.png" },
    ],
  },
  {
    id: "esteios",
    items: [
      { id: "esteios-postes" },
    ],
  },
  {
    id: "vacarias",
    items: [
      { id: "grelhas-vitelos" },
      { id: "grelhas-bovinos" },
      { id: "camas-alveoladas" },
    ],
  },
] as const;

export type FamilyId = (typeof productFamilies)[number]["id"];
export type ProductId =
  (typeof productFamilies)[number]["items"][number]["id"];

// Per-family hero image (used on the home page family cards and on /produtos).
export const familyImages: Partial<Record<FamilyId, string>> = {
  alvenarias: "/products/bloco-acustico.jpg",
  blocotherm: "/products/blocotherm.png",
} as Partial<Record<FamilyId, string>>;
