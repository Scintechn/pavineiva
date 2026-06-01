"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";

type Props = {
  href: string;
  location: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function DirectionsLink({
  href,
  location,
  className,
  children,
  ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => track("directions_click", { location })}
    >
      {children}
    </a>
  );
}
