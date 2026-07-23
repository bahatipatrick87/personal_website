# Bahati Patrick — Portfolio

Personal portfolio and profile site built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com), and [Resend](https://resend.com) for the contact form.

The entire site (home, about, experience, projects, contact) is **fully public**. Visitors do not need an account.

## Requirements

- Node.js 20+
- npm (or pnpm / yarn)

## Setup

```bash
cd my-website
npm install
cp .env.example .env.local
```

Edit `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://yourdomain.com`) for Open Graph, sitemap, and robots |
| `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) — powers the `/contact` page |
| `CONTACT_TO_EMAIL` | Inbox that receives contact-form messages (defaults to `bahatipatrick87@gmail.com`) |
| `CONTACT_FROM_EMAIL` | Sender identity on outgoing emails (defaults to Resend's sandbox address) |

## Contact form (Resend)

The `/contact` page posts to `src/app/api/contact/route.ts`, which sends an email via
[Resend](https://resend.com) to `CONTACT_TO_EMAIL`, with the visitor's address set as
`reply-to` so you can reply directly.

1. Sign up at [resend.com](https://resend.com) with the same email you want messages
   delivered to (no domain verification needed to get started — Resend's sandbox sender
   `onboarding@resend.dev` can email your own account).
2. Create an API key at **API Keys** → copy it into `RESEND_API_KEY`.
3. To send from your own domain later, verify it in Resend and update `CONTACT_FROM_EMAIL`.

## Scripts

```bash
npm run dev        # development server → http://localhost:3000
npm run build      # production build
npm run start      # run production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript (no emit)
```

## Continuous integration

On GitHub, **Actions** runs `lint` and `typecheck` on pushes and pull requests to `main` / `master`.

## Deploy (e.g. Vercel)

1. Push this repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Set the same environment variables in the Vercel project settings (no need to commit `.env.local`).

**If you see Internal Server Error on Vercel**, follow **[VERCEL.md](./VERCEL.md)** (env vars, root directory, redeploy).

## Project layout

- `src/app/(public)/` — Public marketing pages
- `src/app/api/contact/` — Contact form email delivery (Resend)

## License

Private / all rights reserved unless you add a license file.
