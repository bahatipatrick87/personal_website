import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
