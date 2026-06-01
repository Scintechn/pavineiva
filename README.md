# Pavineiva — site

Marketing site for **Pavineiva – Pinheiro, Rocha & Reis, Lda.**, manufacturer of precast and
prestressed concrete in Neiva, Viana do Castelo, Portugal — in business since 1978.

Built with Next.js 16 (App Router), React 19, Tailwind v4, TypeScript. Statically generated, two
locales (`pt` default + `en`), Telegram-powered contact form, Vercel-ready.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000 — redirects to /pt
```

## Project layout

```
app/
  layout.tsx                 # Root: html/body, fonts, default lang
  page.tsx                   # Redirects "/" → "/{defaultLocale}"
  robots.ts  sitemap.ts      # SEO files
  [locale]/
    layout.tsx               # Locale shell: header, footer, JSON-LD, Analytics, FAB
    page.tsx                 # Home
    produtos/page.tsx        # Catalogue
    empresa/page.tsx         # Company
    contactos/
      page.tsx               # Contact page
      actions.ts             # Server Action — Telegram delivery
    privacidade/page.tsx     # Privacy
    termos/page.tsx          # Terms
    opengraph-image.tsx      # Dynamic OG image (next/og)
components/
  ui/                        # Button, Container, Section primitives
  Header.tsx  Footer.tsx
  ContactForm.tsx            # Stateful form (client island)
  WhatsAppFab.tsx            # Hidden until business.whatsapp.number is set
  RatingBadge.tsx            # Static "4.4 ★ Google" badge → Maps
  ServiceCard.tsx  Logo.tsx  LocaleSwitcher.tsx
  PhoneLink.tsx  DirectionsLink.tsx   # Tiny client islands for analytics events
  JsonLd.tsx                 # LocalBusiness schema
lib/
  business.ts                # Single source of truth — business FACTS
  products.ts                # Product family/item IDs (translations in i18n dicts)
  i18n/                      # pt.ts, en.ts, types.ts, index.ts
  cn.ts
proxy.ts                     # Locale-prefix redirect (Next 16 replaces middleware.ts)
next.config.ts               # Security headers
vercel.json                  # Pins framework: nextjs (belt-and-suspenders)
.env.example                 # Telegram + site URL placeholders
```

## Editing content

- **Business facts** (phone, address, hours, emails) live in `lib/business.ts`. Change once, change
  everywhere.
- **All user-facing strings** live in `lib/i18n/pt.ts` and `lib/i18n/en.ts`. TypeScript flags missing
  keys at build time.
- **Adding a product**: add the id to `lib/products.ts` AND its `{name, description}` entry to both
  `pt.ts` and `en.ts` under `products.items`.

## Required environment variables

| Name | Where | What |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | Vercel → Production | Bot token from @BotFather |
| `TELEGRAM_CHAT_ID` | Vercel → Production | Result of `getUpdates` → `result[].message.chat.id` |
| `NEXT_PUBLIC_SITE_URL` | Vercel (Production) | e.g. `https://pavineiva.vercel.app` or final domain |

See `AGENTS.md` for the Telegram setup walk-through.

## Deploy

```bash
# from this folder
vercel link        # framework = Next.js
vercel env add TELEGRAM_BOT_TOKEN production
vercel env add TELEGRAM_CHAT_ID  production
vercel env add NEXT_PUBLIC_SITE_URL production
vercel --prod
```

Then test the contact form end-to-end (UI submit → server log → Telegram message) before declaring
launch.

## Pending owner confirmation

- Opening hours per day (Google only confirmed "closes 6 pm" — assumed standard PT industrial).
- WhatsApp number (not publicly listed; FAB hidden until set).
- Exact geo pin + Maps Embed API key (currently using a postal-code centroid + a directions link).
