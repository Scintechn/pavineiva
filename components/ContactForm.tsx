"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitContactForm, type ContactSubject } from "@/app/[locale]/contactos/actions";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  t: Dictionary["contact"]["form"];
  locale: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({ t, locale }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const subject = String(data.get("subject") ?? "quote") as ContactSubject;
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!name || !email || !message) {
      setErrorMsg(t.requiredFieldsMissing);
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setErrorMsg(t.invalidEmail);
      return;
    }
    if (message.length < 10) {
      setErrorMsg(t.messageTooShort);
      return;
    }

    setStatus("submitting");
    startTransition(async () => {
      const result = await submitContactForm({
        name,
        email,
        phone,
        company,
        subject,
        message,
        consent,
        locale,
      });

      if (result.ok) {
        setStatus("success");
        track("contact_form_submit", { subject });
        form.reset();
      } else {
        setStatus("error");
      }
    });
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[var(--radius-card)] border border-emerald-200 bg-emerald-50 p-6"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-[var(--color-success)] mt-0.5 shrink-0" size={22} aria-hidden="true" />
          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
              {t.successTitle}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">
              {t.successBody}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-5"
    >
      <header>
        <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">
          {t.title}
        </h2>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">
          {t.lead}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)]">
            {t.name} <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={200}
            placeholder={t.namePlaceholder}
            className="mt-1 w-full rounded-md border border-[var(--color-line)] bg-white px-3 py-2 text-sm focus:border-[var(--color-primary-500)] focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)]">
            {t.email} <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            placeholder={t.emailPlaceholder}
            className="mt-1 w-full rounded-md border border-[var(--color-line)] bg-white px-3 py-2 text-sm focus:border-[var(--color-primary-500)] focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-ink)]">
            {t.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={50}
            placeholder={t.phonePlaceholder}
            className="mt-1 w-full rounded-md border border-[var(--color-line)] bg-white px-3 py-2 text-sm focus:border-[var(--color-primary-500)] focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[var(--color-ink)]">
            {t.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={200}
            placeholder={t.companyPlaceholder}
            className="mt-1 w-full rounded-md border border-[var(--color-line)] bg-white px-3 py-2 text-sm focus:border-[var(--color-primary-500)] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-ink)]">
          {t.subject}
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue="quote"
          className="mt-1 w-full rounded-md border border-[var(--color-line)] bg-white px-3 py-2 text-sm focus:border-[var(--color-primary-500)] focus:outline-none"
        >
          {t.subjectOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)]">
          {t.message} <span aria-hidden="true" className="text-[var(--color-error)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder={t.messagePlaceholder}
          className="mt-1 w-full rounded-md border border-[var(--color-line)] bg-white px-3 py-2 text-sm focus:border-[var(--color-primary-500)] focus:outline-none resize-y"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-[var(--color-primary-700)]"
        />
        <label htmlFor="consent" className="text-sm text-[var(--color-ink-muted)]">
          {t.consent}{" "}
          <Link
            href={`/${locale}/privacidade`}
            className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-800)]"
          >
            {t.consentLink}
          </Link>
          .
        </label>
      </div>

      {errorMsg && (
        <p role="alert" className="text-sm text-[var(--color-error)]">
          {errorMsg}
        </p>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4"
        >
          <AlertTriangle size={20} className="text-[var(--color-error)] mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-[var(--color-ink)]">{t.errorTitle}</p>
            <p className="text-sm text-[var(--color-ink-muted)]">{t.errorBody}</p>
          </div>
        </div>
      )}

      <Button type="submit" variant="accent" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            {t.submitting}
          </>
        ) : (
          t.submit
        )}
      </Button>
    </form>
  );
}
