// Product catalog — verified against the current site /produtos.
// Five families. Names are in PT (the source); translations live in lib/i18n/{pt,en}.ts
// keyed by `id`, so SKUs map cleanly across locales.

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
      { id: "bloco-betao-normal" },
      { id: "bloco-betao-leve" },
      { id: "blocotherm" },
      { id: "blocos-acusticos" },
      { id: "bloco-cofragem" },
    ],
  },
  {
    id: "caixas-estore",
    items: [
      { id: "caixa-estore-termica" },
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
