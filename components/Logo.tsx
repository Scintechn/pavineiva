import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  variant?: "default" | "light";
};

// SVG wordmark — derived from the existing Pavineiva grey wordmark, redrawn
// crisply for any size. Inherits color from the surrounding text via
// currentColor, so the same component works on dark and light backgrounds.
export function Logo({ className, variant = "default" }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display font-extrabold tracking-tight",
        variant === "light" ? "text-white" : "text-[var(--color-primary-800)]",
        className,
      )}
      aria-label="Pavineiva"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="3" y="3" width="22" height="22" rx="3" fill="currentColor" opacity="0.12" />
        <path
          d="M7 21V7h7a4.5 4.5 0 1 1 0 9h-3"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        <path
          d="M16 7l5 14"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
          fill="none"
        />
      </svg>
      <span className="text-[1.05rem] sm:text-[1.15rem]">Pavineiva</span>
    </span>
  );
}
