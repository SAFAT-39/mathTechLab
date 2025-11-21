"use client";

import GoogleOneTap from "./GoogleOneTap";
import { authClient } from "@/lib/auth-client";

export default function GoogleOneTapWrapper() {
  const { data: session, isPending } = authClient.useSession();
  if (session?.user || isPending) return null;
  return <GoogleOneTap />;
}
