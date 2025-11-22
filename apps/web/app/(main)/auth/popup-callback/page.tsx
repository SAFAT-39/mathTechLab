'use client'

import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

export default function PopupCallbackPage() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending) return;

    if (session?.user) {
      // Notify all tabs that login was completed
      localStorage.setItem("betterauth-login", Date.now().toString());
    }

    window.close();
  }, [session, isPending]);

  return <div className="min-h-screen flex justify-center items-center">Finishing login…</div>;
}
