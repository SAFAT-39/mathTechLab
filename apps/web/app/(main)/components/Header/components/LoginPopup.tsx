"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function LoginPopup({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {

  const handleLogin = async () => {
    try {
      authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      setIsOpen(false);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-lg font-bold mb-4">Sign in with Google</h2>
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Continue with Google
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 text-gray-500 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
