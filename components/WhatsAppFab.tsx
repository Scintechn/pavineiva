"use client";

import { MessageCircle } from "lucide-react";
import { track } from "@vercel/analytics";
import { business, whatsappEnabled, whatsappLink } from "@/lib/business";

type Props = { label: string };

export function WhatsAppFab({ label }: Props) {
  if (!whatsappEnabled()) return null;

  return (
    <a
      href={whatsappLink(`Olá Pavineiva, gostaria de pedir um orçamento.`)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location: "fab" })}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 px-4 py-3 hover:bg-[#1ebe57] transition-colors"
      aria-label={label}
      title={business.whatsapp.display || "WhatsApp"}
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span className="hidden sm:inline font-medium">{label}</span>
    </a>
  );
}
