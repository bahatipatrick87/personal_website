/**
 * Clerk proxy: only /dashboard requires sign-in. All other routes (home, about,
 * contact, projects, etc.) stay fully public — no account needed to browse.
 */
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isDashboard = createRouteMatcher(["/dashboard(.*)"]);

function parseAllowedDashboardUserIds(): string[] {
  const raw = process.env.DASHBOARD_ALLOWED_USER_IDS;
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

export default clerkMiddleware(async (auth, req) => {
  // Public traffic: no sign-in, no redirects — exit immediately.
  if (!isDashboard(req)) return;

  await auth.protect();
  const allowed = parseAllowedDashboardUserIds();
  if (allowed.length === 0) return;

  const { userId } = await auth();
  if (userId && !allowed.includes(userId)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
