import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import {
  defaultLocale,
  getDictionary,
  hreflangMap,
  isLocale,
  locales,
} from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: { default: dict.meta.siteTitle, template: `%s · PAVINEIVA` },
    description: dict.meta.siteDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}`]),
      ),
    },
    openGraph: {
      type: "website",
      siteName: "PAVINEIVA",
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      url: `/${locale}`,
      locale: hreflangMap[locale].replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const t = getDictionary(raw);

  return (
    <div lang={hreflangMap[raw]} className="flex flex-col flex-1">
      <a href="#main-content" className="skip-link">
        {t.common.skipToContent}
      </a>
      <Header locale={raw} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={raw} />
      <WhatsAppFab label="WhatsApp" />
      <LocalBusinessJsonLd />
      <Analytics />
    </div>
  );
}

// Tell Next this layout uses the locale segment so it generates the static pages.
export const dynamicParams = false;
