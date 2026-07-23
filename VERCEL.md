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
   | `NEXT_PUBLIC_SITE_URL` | After first deploy, set to your **production** URL, e.g. `https://personal-website-xxx.vercel.app` (no trailing slash) |
   | `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) — powers the contact form |
   | `CONTACT_TO_EMAIL` | Inbox that receives contact-form messages |
   | `CONTACT_FROM_EMAIL` | Optional — sender identity (defaults to Resend's sandbox address) |

   For **each** variable, select **both** **Production** and **Preview** (checkboxes).

6. **Deploy**
   Click **Deploy**. Wait for the build to finish.

7. **Fix site URL if needed**
   Copy the **production** URL from Vercel (**Deployments** → open the **Production** deployment → visit). Set `NEXT_PUBLIC_SITE_URL` to that exact `https://…` value → **Save** → **Deployments → … → Redeploy**.

8. **Optional: custom domain**
   Vercel → **Settings → Domains** → add your domain and follow DNS instructions.

Your detailed troubleshooting guide for **500 / Preview URLs** is below.

---

An **Internal Server Error** on Vercel is almost always missing or wrong **environment variables**.

## Preview URL looks like `…-git-main-….vercel.app` → 500

That is a **Preview** deployment (every git branch gets its own URL), **not** your Production domain.

**Cause — Env vars only on Production (most common)**
In Vercel, each variable has checkboxes: **Production**, **Preview**, **Development**.
If you only ticked **Production**, Preview builds run **without** `RESEND_API_KEY` → the contact
form returns a 500 on that deployment (the rest of the site still renders fine, since it doesn't
depend on the env var).

**Fix:** **Settings → Environment Variables** → open `RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
`CONTACT_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL` → enable **Preview** (and Production). Save →
**Redeploy** that preview.

**Quick test:** Open your **Production** deployment URL in Vercel (the one without `git-main` in
the name). If Production works but Preview does not, it is almost always missing **Preview env
vars**.

## 1. Correct project root

- If your GitHub repo **only** contains this Next.js app (you see `package.json` and `src/` at the repo root), leave **Root Directory** empty in Vercel.
- If the app lives in a subfolder (e.g. `my-website/`), set **Root Directory** to that folder in
  **Project → Settings → General → Root Directory**.

## 2. Required environment variables

In **Project → Settings → Environment Variables**, add these for **Production** (and **Preview** if you use preview deployments).

| Name | Value | Notes |
|------|--------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` or your custom domain | **Include `https://`**, no trailing slash. |
| `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) | **Server only** — never expose in client code. |
| `CONTACT_TO_EMAIL` | Your email address | Defaults to `bahatipatrick87@gmail.com` if unset. |
| `CONTACT_FROM_EMAIL` | Sender shown on outgoing emails | Optional — defaults to Resend's sandbox sender. |

**Important**

- Add variables for **Production** and **Preview** (and **Development** if you use Vercel CLI).
- After changing env vars, trigger a **new deployment** (Redeploy) so the build and runtime pick them up.

## 3. Deploy

1. Push to GitHub (Vercel auto-builds), or **Deployments → Redeploy** after fixing env.
2. Open **Deployments → [latest] → Build Logs** if the build fails.
3. If the build succeeds but the contact form fails, open **Deployments → [latest] → Functions**
   (or **Runtime Logs**) and look for the stack trace (often "RESEND_API_KEY").

## 4. Quick checklist

- [ ] `RESEND_API_KEY` is set on Vercel (not only in `.env.local` on your laptop).
- [ ] `NEXT_PUBLIC_SITE_URL` matches how users open the site (`https://...`).
- [ ] Root Directory matches where `package.json` lives in the repo.
- [ ] Redeploy after any env change.

## 5. Local production check (optional)

```bash
cp .env.example .env.local
# fill in real RESEND_API_KEY and NEXT_PUBLIC_SITE_URL=http://localhost:3000
npm run build && npm run start
```

Visit `http://localhost:3000`. If that works but Vercel fails, the problem is almost certainly
missing Vercel env vars.
