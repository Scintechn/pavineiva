import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { PhoneLink } from "@/components/PhoneLink";
import { business } from "@/lib/business";
import { getDictionary, type Locale } from "@/lib/i18n";

type Props = { locale: Locale };

export function Header({ locale }: Props) {
  const t = getDictionary(locale);
  const nav = [
    { label: t.nav.home, href: `/${locale}` },
    { label: t.nav.products, href: `/${locale}/produtos` },
    { label: t.nav.company, href: `/${locale}/empresa` },
    { label: t.nav.contact, href: `/${locale}/contactos` },
  ];

  return (
    <header className="bg-[var(--color-surface)]/95 backdrop-blur border-b border-[var(--color-line)] sticky top-0 z-40">
      <Container className="flex items-center justify-between py-3 sm:py-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2"
          aria-label="Pavineiva — início"
        >
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary-700)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleSwitcher locale={locale} />
          <PhoneLink
            location="header"
            href={business.phone.landline.href}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]"
          >
            <Phone size={16} aria-hidden="true" />
            <span>{business.phone.landline.display}</span>
          </PhoneLink>
          <Button href={`/${locale}/contactos`} variant="accent" size="sm">
            {t.nav.quote}
          </Button>
        </div>
      </Container>
    </header>
  );
}
