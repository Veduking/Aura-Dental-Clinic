# Aura Dental Studio

A modern, fast, responsive dental clinic website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Free to build and free to host.

## What's included

- Hero, Why Choose Us (with animated counters), Services, About, Meet the Dentist, Gallery, Reviews, Appointment form, Google Map, Footer
- Floating Call / WhatsApp / Appointment buttons
- SEO: metadata, Open Graph tags, JSON-LD `Dentist` schema, `robots.txt`, `sitemap.xml`, favicon
- Smooth scroll-triggered animations, hover effects, and a smile-shaped scroll-progress indicator
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`

## 1. Install & run locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Connect the appointment form (EmailJS — free tier)

The form sends appointment requests straight to your inbox with no backend server.

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Email Services** → Add Service (e.g. Gmail) → copy the **Service ID**.
3. **Email Templates** → create a template using these variable names: `name`, `phone`, `email`, `treatment`, `date`, `message` → copy the **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Copy `.env.local.example` to `.env.local` and fill in the three values:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Restart `npm run dev` after adding these. EmailJS's free tier covers 200 emails/month, which is plenty for a small clinic.

## 3. Update clinic details

All clinic info (phone, WhatsApp, address, hours, services, gallery images, testimonials, stats) lives in one file:

```
lib/constants.ts
```

Edit `SITE.mapEmbedSrc` with your real Google Maps embed link: on Google Maps, search your clinic → **Share** → **Embed a map** → copy the `src` URL.

Once you have real photos of the clinic and doctor, drop them in `public/images/` and swap the Unsplash placeholder URLs in `lib/constants.ts`, `Hero.tsx`, `About.tsx`, and `Doctor.tsx` for local paths (e.g. `/images/reception.jpg`).

Replace the sample reviews in `Testimonials.tsx`/`lib/constants.ts` with real Google Reviews once you're ready (or embed a Google Reviews widget).

## 4. Free hosting on Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo (free Hobby tier).
3. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings.
4. Deploy. You'll get a free `*.vercel.app` URL, or connect your own domain for free (domain purchase itself is separate).

## 5. SEO checklist (already wired up)

- `app/layout.tsx` — title template, meta description, Open Graph/Twitter cards, canonical URL, `Dentist` JSON-LD schema
- `app/robots.ts` and `app/sitemap.ts` — auto-generated `robots.txt` / `sitemap.xml`
- `public/favicon.ico`
- Update `SITE.url` in `lib/constants.ts` to your real domain before launch, and update the address/coordinates in the JSON-LD block in `app/layout.tsx`
- After deploying, submit the sitemap in [Google Search Console](https://search.google.com/search-console)

## 6. Hitting a 95+ Lighthouse score

This starter is already tuned for it:

- `next/image` for all images (automatic lazy-loading, responsive sizes, modern formats)
- `next/font` for Poppins/Inter (self-hosted, no render-blocking font requests)
- Minimal client-side JS — only interactive pieces (`"use client"`) ship extra JS
- Once you swap in your own photos, compress them (e.g. via [Squoosh](https://squoosh.app)) and keep hero/gallery images under ~200KB
- Run a production build before checking scores — dev mode is not representative:

```bash
npm run build
npm run start
```

Then run Lighthouse in Chrome DevTools against `localhost:3000`, or via `npx unlighthouse --site http://localhost:3000` after deploying.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom theme colors (`primary` #0EA5E9, `accent` #14B8A6, `mint` #ECFDF5, `ink` #1E293B) and fonts (Poppins/Inter)
- **Framer Motion** — scroll reveals, hover states, animated counters, the smile-shaped scroll progress bar
- **EmailJS** — free appointment-form email delivery
- **lucide-react** — icon set
