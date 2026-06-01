<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Pavineiva site — agent notes

Production-grade marketing site for **Pavineiva – Pinheiro, Rocha & Reis, Lda.** Built from the
`business-site-builder` skill conventions; see that skill for the rationale behind file layout and
patterns.

## Stack snapshot

- Next.js 16.2 (App Router, Turbopack), React 19.2, Tailwind v4, TypeScript strict.
- Two locales: `pt` (default) and `en`. Every public URL is locale-prefixed; `proxy.ts` redirects
  any unprefixed request to `/pt{path}`.
- Lead delivery: Telegram bot (server action at `app/[locale]/contactos/actions.ts`).
- Analytics: `@vercel/analytics/next`, mounted once in `app/[locale]/layout.tsx`.
- No CMS, no DB, no auth, no SSR data-fetching — everything statically generated.

## Two single sources of truth

- **`lib/business.ts`** — every business fact (legal name, NIF, address, phones, emails, hours,
  geo). Change it here, change it everywhere.
- **`lib/i18n/pt.ts` + `lib/i18n/en.ts`** — every user-facing string. The shape is enforced by
  `lib/i18n/types.ts`; missing keys fail at build time.

## Pending owner confirmation

- **Opening hours**: assumed standard PT industrial (Mon–Fri 08:00–12:30 / 13:30–18:00). Google
  only confirmed "closes 6 pm" — confirm and adjust `business.hours`.
- **WhatsApp number**: currently using the landline `351258350480` as a placeholder so the
  FAB renders. Replace `business.whatsapp.number` + `business.whatsapp.display` with the
  owner's real WhatsApp-Business mobile number when provided (digits-only, country code
  first, e.g. `351912345678`).
- **Exact geo pin + Maps Embed key**: `business.geo` is a postal-code centroid; refine when
  `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` is provisioned and uncomment the embed iframe.

## Telegram setup

1. Create a bot via [@BotFather](https://t.me/BotFather) → copy the token.
2. Send the bot any message, then `curl https://api.telegram.org/bot<TOKEN>/getUpdates` → copy
   `result[].message.chat.id`. (For a Telegram group, the id is negative.)
3. Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` on Vercel.
4. Test end-to-end after deploy: submit the contact form on prod → confirm the message lands in
   Telegram.

## Hosting plan

Deploy to a Vercel preview URL (`pavineiva.vercel.app`) so the owner can review side-by-side with
the existing Joomla site. Swap DNS later. Make sure `NEXT_PUBLIC_SITE_URL` matches the final
production URL once chosen.

## What this site is NOT

- Not a CMS-backed site — content lives in dictionaries, updated via PR.
- Not an e-commerce store — quote requests only.
- Not behind auth — fully public marketing surface.

If those needs emerge, see "When to deviate" in the `business-site-builder` skill before adding
infra.
