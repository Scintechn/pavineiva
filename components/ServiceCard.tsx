import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  icon?: LucideIcon;
  className?: string;
};

export function ServiceCard({ title, description, href, ctaLabel, icon: Icon, className }: Props) {
  const inner = (
    <div
      className={cn(
        "h-full rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(15,29,52,0.18)] hover:border-[var(--color-primary-300)]",
        className,
      )}
    >
      {Icon && (
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-primary-50)] text-[var(--color-primary-700)]">
          <Icon size={20} aria-hidden="true" />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
        {description}
      </p>
      {href && ctaLabel && (
        <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-700)]">
          {ctaLabel}
          <ArrowRight size={16} aria-hidden="true" />
        </p>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block focus:outline-none" aria-label={title}>
        {inner}
      </Link>
    );
  }
  return inner;
}
