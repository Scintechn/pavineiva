import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "default" | "surface" | "muted" | "dark";

const surfaces: Record<Variant, string> = {
  default: "",
  surface: "bg-[var(--color-surface)]",
  muted: "bg-[var(--color-surface-muted)]",
  dark: "bg-[var(--color-primary-800)] text-white",
};

type Props = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  id?: string;
};

export function Section({ children, className, variant = "default", id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24",
        surfaces[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <header
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" && "text-center mx-auto max-w-2xl",
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold tracking-[0.18em] uppercase",
            invert ? "text-[var(--color-accent-300)]" : "text-[var(--color-primary-700)]",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight",
          invert ? "text-white" : "text-[var(--color-ink)]",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            invert ? "text-white/80" : "text-[var(--color-ink-muted)]",
          )}
        >
          {lead}
        </p>
      )}
    </header>
  );
}
