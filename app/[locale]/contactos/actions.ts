"use server";

import { business, formattedAddress } from "@/lib/business";

// Server Action for the contact form. Telegram is the delivery channel:
// instant phone notification to the owner, zero infra cost, no inbox needed.
// When the env vars are missing, the action returns `{ ok: false, error: "config" }`
// so the form shows a generic failure without leaking server state.

export type ContactSubject = "quote" | "technical" | "commercial" | "other";

export type ContactInput = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: ContactSubject;
  message: string;
  consent: boolean;
  locale: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; error: "validation" | "config" | "delivery" };

const VALID_SUBJECTS: readonly ContactSubject[] = [
  "quote",
  "technical",
  "commercial",
  "other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const tag = "[contact-form]";

// Telegram interprets a small HTML subset; escape user input to avoid breakage.
const esc = (raw: string) =>
  raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function bound(input: string, max: number) {
  return input.trim().slice(0, max);
}

export async function submitContactForm(
  input: ContactInput,
): Promise<ContactResult> {
  // ---- Validate (server-authoritative) ----
  const name = bound(input.name ?? "", 200);
  const email = bound(input.email ?? "", 200);
  const phone = bound(input.phone ?? "", 50);
  const company = bound(input.company ?? "", 200);
  const message = bound(input.message ?? "", 5000);
  const subject = VALID_SUBJECTS.includes(input.subject) ? input.subject : "other";
  const consent = input.consent === true;
  const locale = bound(input.locale ?? "pt", 5);

  if (
    name.length < 1 ||
    !EMAIL_RE.test(email) ||
    message.length < 10 ||
    !consent
  ) {
    return { ok: false, error: "validation" };
  }

  // ---- Read env at call time, not module load ----
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error(`${tag} missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID`);
    return { ok: false, error: "config" };
  }

  const subjectLabels: Record<ContactSubject, string> = {
    quote: "Pedido de orçamento",
    technical: "Informação técnica",
    commercial: "Comercial",
    other: "Outro assunto",
  };

  const lines = [
    `🏗️ <b>${esc(business.brandName)} — novo pedido</b>`,
    `<b>Assunto:</b> ${esc(subjectLabels[subject])}`,
    "",
    `<b>Nome:</b> ${esc(name)}`,
    `<b>Email:</b> ${esc(email)}`,
    phone ? `<b>Telefone:</b> ${esc(phone)}` : null,
    company ? `<b>Empresa:</b> ${esc(company)}` : null,
    `<b>Locale:</b> ${esc(locale)}`,
    "",
    `<b>Mensagem:</b>`,
    esc(message),
  ].filter(Boolean);

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`${tag} telegram ${res.status}: ${detail.slice(0, 200)}`);
      return { ok: false, error: "delivery" };
    }
  } catch (e) {
    console.error(`${tag} telegram fetch failed`, e);
    return { ok: false, error: "delivery" };
  }

  return { ok: true };
}

// Static reference so unused-warning silence isn't needed (we sometimes also
// want to embed the full address in the message body).
void formattedAddress;
