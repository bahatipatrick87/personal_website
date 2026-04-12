# Bahati Patrick — Portfolio

Personal portfolio and profile site built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com), and [Clerk](https://clerk.com) for an optional signed-in dashboard.

The portfolio (home, about, experience, projects, contact) is **fully public**. Visitors do not need an account.

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
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://yourdomain.com`) for Open Graph, sitemap, and robots |
| `DASHBOARD_ALLOWED_USER_IDS` | Optional. Comma-separated Clerk user IDs allowed on `/dashboard`. Omit to allow any signed-in user. |

## Scripts

```bash
npm run dev        # development server → http://localhost:3000
npm run build      # production build
npm run start      # run production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript (no emit)
```

## Continuous integration

On GitHub, **Actions** runs `lint` and `typecheck` on pushes and pull requests to `main` / `master`. A full `npm run build` still needs your Clerk and site URL variables (see Setup).

## Deploy (e.g. Vercel)

1. Push this repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Set the same environment variables in the Vercel project settings (no need to commit `.env.local`).
3. Add your production URL in the [Clerk Dashboard](https://dashboard.clerk.com) under **Domains** / allowed origins and redirect URLs.

## Project layout

- `src/app/(public)/` — Public marketing pages
- `src/app/(auth)/` — Sign-in and sign-up (Clerk)
- `src/app/dashboard/` — Protected dashboard (optional for you)
- `src/proxy.ts` — Clerk proxy; only `/dashboard` requires authentication

## License

Private / all rights reserved unless you add a license file.
