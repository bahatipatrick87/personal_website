# Bahati Patrick — Portfolio

Personal portfolio and profile site built with [Next.js](https://nextjs.org) (App Router) and
[Tailwind CSS](https://tailwindcss.com). Contact-form messages are stored permanently in a
Postgres database and viewable in a private `/admin` inbox, with [Resend](https://resend.com)
email notifications as an optional bonus channel.

The public site (home, about, experience, projects, contact) needs no account to view. The
`/admin` inbox is private, protected by HTTP Basic Auth.

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
| `POSTGRES_URL` | Postgres connection string — stores every contact-form message. See [Database](#database--admin-inbox) below |
| `ADMIN_USER` / `ADMIN_PASSWORD` | Login for the `/admin` inbox (HTTP Basic Auth) |
| `RESEND_API_KEY` | Optional. From [resend.com/api-keys](https://resend.com/api-keys) — also emails you each message |
| `CONTACT_TO_EMAIL` | Inbox that receives emailed messages (defaults to `bahatipatrick87@gmail.com`) |
| `CONTACT_FROM_EMAIL` | Sender identity on outgoing emails (defaults to Resend's sandbox address) |

## Database & admin inbox

Every message submitted on `/contact` is saved to a `messages` table in Postgres by
`src/lib/db.ts`, and listed at **`/admin`** (newest first, with read/unread and delete
controls). This works independently of email — even with no `RESEND_API_KEY` set, messages
are never lost.

1. **Attach a database** — in Vercel: **Project → Storage → Create Database → Postgres**
   (built on [Neon](https://neon.tech), free tier available) → **Connect to Project**. Vercel
   adds `POSTGRES_URL` for you automatically; no copy-pasting required.
   For local development, point `POSTGRES_URL` in `.env.local` at any Postgres instance (a
   free [Neon](https://neon.tech) branch works well).
2. **Set an admin login** — pick `ADMIN_USER` / `ADMIN_PASSWORD` and set them in Vercel
   (**Settings → Environment Variables**) and/or `.env.local`. Visiting `/admin` will prompt
   for these credentials via the browser's built-in Basic Auth dialog.
3. The `messages` table is created automatically on first use — no manual migration step.

If `POSTGRES_URL` isn't set yet, `/admin` shows a setup notice instead of erroring, and the
contact form still works via email (if configured).

## Email notifications (optional, via Resend)

The `/contact` page posts to `src/app/api/contact/route.ts`, which — if `RESEND_API_KEY` is
set — also sends an email via [Resend](https://resend.com) to `CONTACT_TO_EMAIL`, with the
visitor's address set as `reply-to` so you can reply directly. This is additive: messages are
saved to the database regardless of whether email is configured or succeeds.

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
- `src/app/api/contact/` — Contact form handler (saves to database, emails via Resend)
- `src/app/admin/` — Private inbox for contact-form messages (`/admin`, Basic Auth via `src/middleware.ts`)
- `src/lib/db.ts` — Postgres access layer for stored messages

## License

Private / all rights reserved unless you add a license file.
