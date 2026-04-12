import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import { clerkAppearance } from "@/lib/clerk-appearance";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <div className="animate-fade-up w-full max-w-md">
      <p className="eyebrow mb-3 text-center">Welcome back</p>
      <SignIn
        appearance={clerkAppearance}
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}
