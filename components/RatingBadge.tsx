import { Star } from "lucide-react";
import { business } from "@/lib/business";

type Props = {
  ratingLabel: string;
  className?: string;
};

export function RatingBadge({ ratingLabel, className }: Props) {
  const { stars, count, href } = business.rating;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-primary-300)] transition-colors " +
        (className ?? "")
      }
      aria-label={`${stars} stars on Google, ${count} reviews — open Google Maps`}
    >
      <span className="flex items-center gap-0.5 text-[var(--color-accent-500)]" aria-hidden="true">
        <Star size={14} fill="currentColor" stroke="currentColor" />
        <Star size={14} fill="currentColor" stroke="currentColor" />
        <Star size={14} fill="currentColor" stroke="currentColor" />
        <Star size={14} fill="currentColor" stroke="currentColor" />
        <Star size={14} fill="currentColor" stroke="currentColor" />
      </span>
      <span>{ratingLabel}</span>
    </a>
  );
}
