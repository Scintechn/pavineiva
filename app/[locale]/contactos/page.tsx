import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MapPin, Phone, Printer, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { DirectionsLink } from "@/components/DirectionsLink";
import { PhoneLink } from "@/components/PhoneLink";
import { business, formattedAddress } from "@/lib/business";
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
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    alternates: {
      canonical: `/${locale}/contactos`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}/contactos`]),
      ),
    },
  };
}

export default async function ContactPage({
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
            {t.nav.contact}
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
            {t.contact.title}
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">
            {t.contact.lead}
          </p>
        </Container>
      </section>

      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm t={t.contact.form} locale={raw} />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Address + map */}
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
                <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                  {t.contact.addressTitle}
                </h2>
                <p className="mt-3 flex items-start gap-2 text-[var(--color-ink-muted)]">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-primary-700)]" aria-hidden="true" />
                  <span>{formattedAddress()}</span>
                </p>
                <DirectionsLink
                  href={business.mapDirectionsUrl}
                  location="contact_card"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-[var(--color-primary-700)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-primary-800)] transition-colors"
                >
                  <MapPin size={16} aria-hidden="true" />
                  {t.common.getDirections}
                </DirectionsLink>
              </div>

              {/* Phone / fax */}
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 space-y-3">
                <PhoneLink
                  href={business.phone.landline.href}
                  location="contact_sidebar"
                  className="flex items-center gap-3 text-[var(--color-ink)] font-medium hover:text-[var(--color-primary-700)]"
                >
                  <Phone size={18} className="text-[var(--color-primary-700)]" aria-hidden="true" />
                  {business.phone.landline.display}
                </PhoneLink>
                <p className="flex items-center gap-3 text-[var(--color-ink-muted)]">
                  <Printer size={18} className="text-[var(--color-primary-700)]" aria-hidden="true" />
                  {business.fax.display}
                </p>
              </div>

              {/* Hours */}
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-[var(--color-ink)]">
                  <Clock size={18} className="text-[var(--color-primary-700)]" aria-hidden="true" />
                  {t.contact.hoursTitle}
                </h2>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">{t.common.monFri}</dt>
                    <dd className="text-[var(--color-ink)] font-medium text-right">
                      {business.hours.weekdays.morning.open}–{business.hours.weekdays.morning.close}
                      <br />
                      {business.hours.weekdays.afternoon.open}–{business.hours.weekdays.afternoon.close}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">{t.common.saturday}</dt>
                    <dd className="text-[var(--color-ink)] font-medium">{t.common.closed}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">{t.common.sunday}</dt>
                    <dd className="text-[var(--color-ink)] font-medium">{t.common.closed}</dd>
                  </div>
                </dl>
              </div>

              {/* Departments */}
              <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
                <h2 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                  {t.contact.departmentsTitle}
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {t.contact.departments.map((d) => {
                    const e = business.email[d.emailKey];
                    return (
                      <li
                        key={d.emailKey}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
                      >
                        <span className="text-[var(--color-ink-muted)]">{d.name}</span>
                        <a
                          href={e.href}
                          className="inline-flex items-center gap-2 text-[var(--color-primary-700)] hover:underline"
                        >
                          <Mail size={14} aria-hidden="true" />
                          {e.display}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
