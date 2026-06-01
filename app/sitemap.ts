import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? business.siteUrl;
  const paths = ["", "/produtos", "/empresa", "/contactos", "/privacidade", "/termos"];
  const now = new Date();

  return locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${base}/${locale}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l === "pt" ? "pt-PT" : l, `${base}/${l}${p}`]),
        ),
      },
    })),
  );
}
