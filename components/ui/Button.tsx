import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary-700)] text-white hover:bg-[var(--color-primary-800)] border border-[var(--color-primary-700)]",
  accent:
    "bg-[var(--color-accent-500)] text-[#1a0f00] hover:bg-[var(--color-accent-600)] hover:text-white border border-[var(--color-accent-500)] font-semibold",
  secondary:
    "bg-white text-[var(--color-primary-800)] hover:bg-[var(--color-primary-50)] border border-[var(--color-primary-700)]",
  ghost:
    "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)] border border-transparent",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-5 py-2.5 text-base rounded-md",
  lg: "px-6 py-3 text-base rounded-md",
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
  ariaLabel?: string;
};

type AsButton = CommonProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export function Button(props: AsLink | AsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={props.ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} aria-label={props.ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
      aria-label={props.ariaLabel}
    >
      {children}
    </button>
  );
}
