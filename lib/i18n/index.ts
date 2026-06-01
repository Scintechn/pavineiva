import { pt } from "./pt";
import { en } from "./en";
import type { Dictionary } from "./types";

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const hreflangMap: Record<Locale, string> = {
  pt: "pt-PT",
  en: "en",
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export const otherLocale = (locale: Locale): Locale =>
  locale === "pt" ? "en" : "pt";
