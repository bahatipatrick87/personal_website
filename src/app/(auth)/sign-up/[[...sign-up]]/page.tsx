import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";
import { clerkAppearance } from "@/lib/clerk-appearance";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create an account",
};

export default function SignUpPage() {
  return (
    <div className="animate-fade-up w-full max-w-md">
      <p className="eyebrow mb-3 text-center">Join</p>
      <SignUp
        appearance={clerkAppearance}
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        forceRedirectUrl="/dashboard"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}
