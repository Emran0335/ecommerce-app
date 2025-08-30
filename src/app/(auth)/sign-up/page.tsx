import { AuthForm } from "@/components";
import { signUp } from "@/lib/auth/actions";
import React from "react";

export default function Page() {
  return <AuthForm mode="sign-up" onSubmit={signUp} />;
}
