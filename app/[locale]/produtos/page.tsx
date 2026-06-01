import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { productFamilies, type FamilyId } from "@/lib/products";
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
    title: dict.products.meta.title,
    description: dict.products.meta.description,
    alternates: {
      canonical: `/${locale}/produtos`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}/produtos`]),
      ),
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const t = getDictionary(raw);

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--color-primary-800)] text-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-300)]">
            {t.nav.products}
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
            {t.products.title}
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">
            {t.products.lead}
          </p>
        </Container>
      </section>

      {/* Families */}
      {productFamilies.map((family, idx) => {
        const familyData = t.products.families[family.id as FamilyId];
        return (
          <Section
            key={family.id}
            id={family.id}
            variant={idx % 2 === 0 ? "default" : "muted"}
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <header className="lg:col-span-4">
                  <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--color-primary-700)]">
                    {String(idx + 1).padStart(2, "0")} /{" "}
                    {productFamilies.length.toString().padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                    {familyData.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)]">
                    {familyData.description}
                  </p>
                </header>

                <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {family.items.map((it) => {
                    const item = t.products.items[it.id];
                    if (!item) return null;
                    return (
                      <li
                        key={it.id}
                        className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
                      >
                        <h3 className="font-display text-base font-semibold text-[var(--color-ink)]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                          {item.description}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* CTA */}
      <Section variant="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              {t.products.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-white/85 leading-relaxed">
              {t.products.ctaBody}
            </p>
            <div className="mt-7">
              <Button href={`/${raw}/contactos`} variant="accent" size="lg">
                {t.products.ctaButton}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
