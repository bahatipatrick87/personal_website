# Deploy on Vercel (safe setup)

## First-time deploy (step by step)

1. **Push your code to GitHub**  
   Repo should contain `package.json` and `src/` at the root (e.g. `github.com/bahatipatrick87/personal_website`).

2. **Open Vercel**  
   Go to [vercel.com](https://vercel.com) → sign in with **GitHub**.

3. **Import the project**  
   **Add New… → Project** → select **`personal_website`** (or your repo) → **Import**.

4. **Configure the project**  
   - **Framework Preset:** Next.js (auto-detected).  
   - **Root Directory:** leave **empty** unless your app is in a subfolder (then set e.g. `my-website`).  
   - **Build Command:** `npm run build` (default).  
   - **Output:** default (do not override for App Router).

5. **Environment variables (before or right after first deploy)**  
   Expand **Environment Variables** and add:

   | Name | Value |
   |------|--------|
   | `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | From [Clerk](https://dashboard.clerk.com) → **API Keys** → Publishable key (`pk_…`) |
   | `CLERK_SECRET_KEY` | Same page → Secret key (`sk_…`) |
   | `NEXT_PUBLIC_SITE_URL` | After first deploy, set to your **production** URL, e.g. `https://personal-website-xxx.vercel.app` (no trailing slash) |

   For **each** variable, select **both** **Production** and **Preview** (checkboxes).  
   Optional: `DASHBOARD_ALLOWED_USER_IDS` (same environments).

6. **Deploy**  
   Click **Deploy**. Wait for the build to finish.

7. **Clerk: allow your Vercel URL**  
   In [Clerk Dashboard](https://dashboard.clerk.com) → your application → **Configure → Domains** (and any **redirect / allowed origins** settings) add:
   - Your production `https://….vercel.app` URL (and custom domain if you add one later).

8. **Fix site URL if needed**  
   Copy the **production** URL from Vercel (**Deployments** → open the **Production** deployment → visit). Set `NEXT_PUBLIC_SITE_URL` to that exact `https://…` value → **Save** → **Deployments → … → Redeploy**.

9. **Optional: custom domain**  
   Vercel → **Settings → Domains** → add your domain and follow DNS instructions.

Your detailed troubleshooting guide for **500 / Preview URLs** is below.

---

An **Internal Server Error** on Vercel is almost always missing or wrong **environment variables**, or **Clerk** not allowing your Vercel URL.

## Preview URL looks like `…-git-main-….vercel.app` → 500

That is a **Preview** deployment (every git branch gets its own URL), **not** your Production domain.

**Cause 1 — Env vars only on Production (most common)**  
In Vercel, each variable has checkboxes: **Production**, **Preview**, **Development**.  
If you only ticked **Production**, Preview builds run **without** `CLERK_SECRET_KEY` / `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` → Clerk throws → **Internal Server Error**.

**Fix:** **Settings → Environment Variables** → open each of `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, and (optional) `NEXT_PUBLIC_SITE_URL`, `DASHBOARD_ALLOWED_USER_IDS` → enable **Preview** (and Production). Save → **Redeploy** that preview.

**Cause 2 — Clerk does not allow this host**  
Clerk must allow your app’s origin.

**Fix:** [Clerk Dashboard](https://dashboard.clerk.com) → your app → **Configure** → **Domains** (or **Paths / Authorized redirect URLs**, depending on UI) → add:

- Your **production** URL, and  
- Either your exact preview host, or a pattern Clerk supports for Vercel (see [Clerk + Vercel](https://clerk.com/docs/guides/development/deployment/vercel) and their **preview environment** guide).

Using **Development** API keys for Vercel **Preview** and **Production** keys only for **Production** is recommended in [Clerk’s Vercel docs](https://clerk.com/docs/guides/development/deployment/vercel).

**Quick test:** Open your **Production** deployment URL in Vercel (the one without `git-main` in the name). If Production works but Preview does not, it is almost always **Preview env vars** or **Clerk domain** settings.

## 1. Correct project root

- If your GitHub repo **only** contains this Next.js app (you see `package.json` and `src/` at the repo root), leave **Root Directory** empty in Vercel.
- If the app lives in a subfolder (e.g. `my-website/`), set **Root Directory** to that folder in  
  **Project → Settings → General → Root Directory**.

## 2. Required environment variables

In **Project → Settings → Environment Variables**, add these for **Production** (and **Preview** if you use preview deployments).

| Name | Value | Notes |
|------|--------|--------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | From [Clerk Dashboard](https://dashboard.clerk.com) → API Keys | Starts with `pk_` |
| `CLERK_SECRET_KEY` | Same place | Starts with `sk_`. **Server only** — never expose in client code. |
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` or your custom domain | **Include `https://`**, no trailing slash. Example: `https://bahati-portfolio.vercel.app` |

Optional:

| Name | Value |
|------|--------|
| `DASHBOARD_ALLOWED_USER_IDS` | Your Clerk user id(s), comma-separated |

**Important**

- Add variables for **Production** and **Preview** (and **Development** if you use Vercel CLI).
- After changing env vars, trigger a **new deployment** (Redeploy) so the build and runtime pick them up.

## 3. Clerk: allow your Vercel URL

Without this, sign-in can break and you can see errors.

1. Open [Clerk Dashboard](https://dashboard.clerk.com) → your application.
2. Go to **Configure → Paths** (or **Domains / URLs**, depending on Clerk UI version).
3. Add:
   - **Production**: `https://your-domain.com` (or your `*.vercel.app` URL).
4. Go to **Configure → Sessions** / **Allowed origins** (or **Frontend API**):
   - Allow your Vercel URL (e.g. `https://xxx.vercel.app`).

If you use **separate Clerk “Development” and “Production”** instances, use **production** keys in Vercel Production env vars.

## 4. Deploy

1. Push to GitHub (Vercel auto-builds), or **Deployments → Redeploy** after fixing env.
2. Open **Deployments → [latest] → Build Logs** if the build fails.
3. If the build succeeds but the site shows **500**, open **Deployments → [latest] → Functions** (or **Runtime Logs**) and look for the stack trace (often “Clerk” or “secret key”).

## 5. Quick checklist

- [ ] `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` are set on Vercel (not only in `.env.local` on your laptop).
- [ ] `NEXT_PUBLIC_SITE_URL` matches how users open the site (`https://...`).
- [ ] Clerk allows that same URL for redirects / allowed origins.
- [ ] Root Directory matches where `package.json` lives in the repo.
- [ ] Redeploy after any env change.

## 6. Local production check (optional)

```bash
cp .env.example .env.local
# fill in real keys and NEXT_PUBLIC_SITE_URL=http://localhost:3000
npm run build && npm run start
```

Visit `http://localhost:3000`. If that works but Vercel fails, the problem is almost certainly Vercel env vars or Clerk domain settings.
