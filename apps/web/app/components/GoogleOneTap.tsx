"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

const GoogleOneTap = () => {

  useEffect(() => {
    authClient.oneTap();
  }, []);

  return <></>;
}

export default GoogleOneTap;
