import Image from "next/image";
import React from "react";

type SocialProvidersProps = {
  variant?: "sign-in" | "sign-up";
};

export default function SocialProviders({
  variant = "sign-in",
}: SocialProvidersProps) {
  return (
    <div className="space-y-6">
      <button
        type="button"
        aria-label={`${variant === "sign-in" ? "Continue" : "Sign up"} with Google`}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body-medium text-dark-900 hover:bg-light-200 focus:ring-2 focus:ring-dark-900/10"
      >
        <Image src="/google.svg" alt="google image" width={18} height={18} />
        <span>Continue with Google</span>
      </button>
      <button
        type="button"
        aria-label={`${variant === "sign-in" ? "Continue" : "Sign up"} with Apple`}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body-medium text-dark-900 hover:bg-light-200 focus:ring-2 focus:ring-dark-900/10"
      >
        <Image src="/apple.svg" alt="google image" width={18} height={18} />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}
