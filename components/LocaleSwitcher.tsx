"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { locales, otherLocale, type Locale } from "@/lib/i18n";

type Props = { locale: Locale };

export function LocaleSwitcher({ locale }: Props) {
  const pathname = usePathname() ?? `/${locale}`;
  const target = otherLocale(locale);

  // Swap the leading locale segment in the current path.
  const segments = pathname.split("/").filter(Boolean);
  if (locales.includes(segments[0] as Locale)) segments[0] = target;
  else segments.unshift(target);
  const href = `/${segments.join("/")}`;

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-primary-700)] hover:bg-[var(--color-surface-muted)] transition-colors"
      aria-label={target === "en" ? "Switch to English" : "Mudar para Português"}
      hrefLang={target === "pt" ? "pt-PT" : "en"}
    >
      <Languages size={16} aria-hidden="true" />
      <span className="uppercase">{target}</span>
    </Link>
  );
}
