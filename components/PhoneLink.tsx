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

export function PhoneLink({ href, location, className, children, ariaLabel }: Props) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => track("phone_click", { location })}
    >
      {children}
    </a>
  );
}
