import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Printer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { business, formattedAddress } from "@/lib/business";
import { getDictionary, type Locale } from "@/lib/i18n";

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-900)] text-white/80 mt-16">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-xs text-white/50">
              {business.legalName} · NIF {business.taxId}
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              {t.footer.sections.navigation}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}`} className="hover:text-white">{t.nav.home}</Link></li>
              <li><Link href={`/${locale}/produtos`} className="hover:text-white">{t.nav.products}</Link></li>
              <li><Link href={`/${locale}/empresa`} className="hover:text-white">{t.nav.company}</Link></li>
              <li><Link href={`/${locale}/contactos`} className="hover:text-white">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              {t.footer.sections.products}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>{t.products.families.lajes.name}</li>
              <li>{t.products.families.alvenarias.name}</li>
              <li>{t.products.families["caixas-estore"].name}</li>
              <li>{t.products.families.esteios.name}</li>
              <li>{t.products.families.vacarias.name}</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              {t.footer.sections.contacts}
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" aria-hidden="true" />
                <span>{formattedAddress()}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} aria-hidden="true" />
                <a href={business.phone.landline.href} className="hover:text-white">
                  {business.phone.landline.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Printer size={14} aria-hidden="true" />
                <span>{business.fax.display}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} aria-hidden="true" />
                <a href={business.email.general.href} className="hover:text-white">
                  {business.email.general.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Cofinanciamento (EU Regulation 2021/1060 Art. 50 publicity requirement)
            + Livro de Reclamações (PT Decreto-Lei n.º 74/2017) */}
        <div className="mt-12 border-t border-white/10 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-9">
            <p className="text-xs uppercase tracking-wider text-white/55 mb-3">
              {t.footer.cofinanciadoPor}
            </p>
            <a
              href="/legal/ficha-operacao-norte-2030.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white rounded-md p-3 hover:opacity-90 transition-opacity"
              title={t.footer.fichaOperacao}
            >
              <Image
                src="/legal/cofinanciamento.png"
                alt={t.footer.cofinanciamentoAlt}
                width={520}
                height={64}
                className="h-12 sm:h-14 w-auto"
              />
            </a>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <a
              href="https://www.livroreclamacoes.pt/inicio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
              title={t.footer.livroReclamacoesAlt}
            >
              <Image
                src="/legal/livro-reclamacoes.png"
                alt={t.footer.livroReclamacoesAlt}
                width={120}
                height={50}
                className="h-12 w-auto bg-white rounded-md p-1"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/60">
          <p>© {year} {business.brandName}. {t.footer.rightsReserved}</p>
          <nav className="flex gap-5">
            <Link href={`/${locale}/privacidade`} className="hover:text-white">
              {t.footer.privacy}
            </Link>
            <Link href={`/${locale}/termos`} className="hover:text-white">
              {t.footer.terms}
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
