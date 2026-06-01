import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  defaultLocale,
  getDictionary,
  hreflangMap,
  isLocale,
  locales,
} from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: dict.privacy.meta.title,
    description: dict.privacy.meta.description,
    alternates: {
      canonical: `/${locale}/privacidade`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}/privacidade`]),
      ),
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const t = getDictionary(raw);

  return (
    <Section variant="default">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
          {t.privacy.title}
        </h1>
        <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{t.privacy.updated}</p>
        <div className="mt-8 space-y-5 text-[var(--color-ink)] leading-relaxed">
          {t.privacy.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
