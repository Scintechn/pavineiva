import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, ChevronRight, Factory } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { business, yearsActive } from "@/lib/business";
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
    title: dict.company.meta.title,
    description: dict.company.meta.description,
    alternates: {
      canonical: `/${locale}/empresa`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}/empresa`]),
      ),
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const t = getDictionary(raw);

  return (
    <>
      {/* Hero with real aerial photo of the Neiva facility */}
      <section className="relative overflow-hidden bg-[var(--color-primary-800)] text-white">
        <Image
          src="/photos/aerial.jpg"
          alt="Vista aérea da fábrica Pavineiva em Neiva, Viana do Castelo"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)]/95 via-[var(--color-primary-800)]/75 to-transparent"
        />
        <Container className="relative py-20 sm:py-28">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-300)]">
            {t.common.sinceYear(business.foundedYear)} · {t.common.yearsExperience(yearsActive())}
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-3xl">
            {t.company.title}
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-2xl leading-relaxed">
            {t.company.lead}
          </p>
        </Container>
      </section>

      {/* Story */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)]">
                {t.company.storyTitle}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-[var(--color-ink-muted)] leading-relaxed text-lg">
              {t.company.storyBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <Container>
          <SectionHeader
            eyebrow={t.company.valuesTitle}
            title={t.company.valuesTitle}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.company.values.map((v) => (
              <div
                key={v.title}
                className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <Factory
                  size={22}
                  className="text-[var(--color-primary-700)]"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow={t.company.teamTitle}
            title={t.company.teamTitle}
            lead={t.company.teamLead}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.company.team.map((p) => (
              <li
                key={p.name}
                className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              >
                <div className="h-12 w-12 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center font-display font-bold">
                  {p.name
                    .split(" ")
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">
                  {p.name}
                </h3>
                <p className="text-sm text-[var(--color-ink-muted)]">{p.role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Membership */}
      <Section variant="muted">
        <Container>
          <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="h-14 w-14 rounded-md bg-[var(--color-primary-50)] text-[var(--color-primary-700)] flex items-center justify-center shrink-0">
              <BadgeCheck size={28} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                {t.company.membershipTitle}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-ink-muted)] max-w-3xl">
                {t.company.membershipBody}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                {t.home.ctaSection.title}
              </h2>
              <p className="mt-3 text-lg text-white/85 leading-relaxed">
                {t.home.ctaSection.body}
              </p>
            </div>
            <Button href={`/${raw}/contactos`} variant="accent" size="lg">
              {t.home.ctaSection.primary}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

void ChevronRight;
