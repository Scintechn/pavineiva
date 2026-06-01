import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Layers3,
  MapPin,
  Phone,
  ShieldCheck,
  Tractor,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { RatingBadge } from "@/components/RatingBadge";
import { DirectionsLink } from "@/components/DirectionsLink";
import { PhoneLink } from "@/components/PhoneLink";
import { business, yearsActive, formattedAddress } from "@/lib/business";
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
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}`]),
      ),
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const t = getDictionary(raw);

  const families = [
    { id: "lajes", icon: Layers3 },
    { id: "alvenarias", icon: Building2 },
    { id: "caixas-estore", icon: ShieldCheck },
    { id: "esteios", icon: Factory },
    { id: "vacarias", icon: Tractor },
  ] as const;

  const whyIcons = [Factory, ShieldCheck, Truck, Layers3] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary-800)] via-[var(--color-primary-700)] to-[var(--color-primary-900)] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-accent-300)]">
              {t.home.heroEyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
              {t.home.heroLead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={`/${raw}/contactos`} variant="accent" size="lg">
                {t.home.heroPrimaryCta}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href={`/${raw}/produtos`} variant="secondary" size="lg">
                {t.home.heroSecondaryCta}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <RatingBadge ratingLabel={t.common.rating(business.rating.stars, business.rating.count)} />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/85">
                <CheckCircle2 size={14} aria-hidden="true" className="text-[var(--color-accent-300)]" />
                {t.common.yearsExperience(yearsActive())}
              </span>
            </div>
          </div>
        </Container>

        {/* Trust strip */}
        <div className="relative border-t border-white/10 bg-[var(--color-primary-900)]/60">
          <Container className="py-5">
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
              <div>
                <dt className="text-white/55 uppercase tracking-wider text-xs">
                  {t.home.trustStrip.foundedLabel}
                </dt>
                <dd className="mt-1 font-display text-white font-semibold">
                  {t.common.sinceYear(business.foundedYear)}
                </dd>
              </div>
              <div>
                <dt className="text-white/55 uppercase tracking-wider text-xs">
                  {t.home.trustStrip.coverageLabel}
                </dt>
                <dd className="mt-1 font-display text-white font-semibold">
                  {t.home.trustStrip.coverageValue}
                </dd>
              </div>
              <div>
                <dt className="text-white/55 uppercase tracking-wider text-xs">
                  {t.home.trustStrip.memberLabel}
                </dt>
                <dd className="mt-1 font-display text-white font-semibold">
                  {business.memberships.join(" · ")}
                </dd>
              </div>
            </dl>
          </Container>
        </div>
      </section>

      {/* Products */}
      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow={t.home.productsSection.eyebrow}
            title={t.home.productsSection.title}
            lead={t.home.productsSection.lead}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {families.map(({ id, icon }) => (
              <ServiceCard
                key={id}
                title={t.products.families[id].name}
                description={t.products.families[id].description}
                href={`/${raw}/produtos#${id}`}
                ctaLabel={t.common.learnMore}
                icon={icon}
              />
            ))}
            <div className="rounded-[var(--radius-card)] border border-dashed border-[var(--color-primary-300)] bg-[var(--color-primary-50)] p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-[var(--color-primary-800)]">
                  {t.home.productsSection.viewAll}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-primary-800)]/80">
                  {t.home.productsSection.lead}
                </p>
              </div>
              <Button href={`/${raw}/produtos`} variant="primary" size="sm" className="mt-4 w-fit">
                {t.home.productsSection.viewAll}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section variant="muted">
        <Container>
          <SectionHeader
            eyebrow={t.home.whyUs.eyebrow}
            title={t.home.whyUs.title}
            lead={t.home.whyUs.lead}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.home.whyUs.points.map((p, i) => {
              const Icon = whyIcons[i] ?? Factory;
              return (
                <ServiceCard
                  key={p.title}
                  title={p.title}
                  description={p.body}
                  icon={Icon}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Coverage / Location */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--color-primary-700)]">
                {t.home.coverage.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-ink)]">
                {t.home.coverage.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)] max-w-xl">
                {t.home.coverage.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <DirectionsLink
                  href={business.mapDirectionsUrl}
                  location="home_coverage"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--color-primary-700)] px-5 py-2.5 text-base font-medium text-white hover:bg-[var(--color-primary-800)] transition-colors"
                >
                  <MapPin size={18} aria-hidden="true" />
                  {t.common.getDirections}
                </DirectionsLink>
                <PhoneLink
                  href={business.phone.landline.href}
                  location="home_coverage"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-base font-medium text-[var(--color-primary-800)] border border-[var(--color-primary-700)] hover:bg-[var(--color-primary-50)] transition-colors"
                >
                  <Phone size={18} aria-hidden="true" />
                  {business.phone.landline.display}
                </PhoneLink>
              </div>
            </div>

            <div className="rounded-[var(--radius-card)] bg-[var(--color-primary-800)] text-white p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold">{t.contact.locationTitle}</h3>
              <p className="mt-4 text-white/85 leading-relaxed">{formattedAddress()}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/85">
                <div>
                  <dt className="text-white/60 text-xs uppercase tracking-wider">
                    {t.common.monFri}
                  </dt>
                  <dd className="mt-1">
                    {business.hours.weekdays.morning.open}–
                    {business.hours.weekdays.morning.close}
                    <br />
                    {business.hours.weekdays.afternoon.open}–
                    {business.hours.weekdays.afternoon.close}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/60 text-xs uppercase tracking-wider">
                    {t.common.saturday} / {t.common.sunday}
                  </dt>
                  <dd className="mt-1">{t.common.closed}</dd>
                </div>
              </dl>
              <DirectionsLink
                href={business.mapDirectionsUrl}
                location="home_card"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-300)] hover:text-white"
              >
                {t.common.openOnGoogleMaps}
                <ArrowRight size={16} aria-hidden="true" />
              </DirectionsLink>
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
            <div className="flex flex-wrap gap-3">
              <Button href={`/${raw}/contactos`} variant="accent" size="lg">
                {t.home.ctaSection.primary}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <PhoneLink
                href={business.phone.landline.href}
                location="home_cta"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                {t.home.ctaSection.secondary}
              </PhoneLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

