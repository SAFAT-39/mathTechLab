// components/GoogleSignInButton.tsx
'use client';

import { authClient } from '@/lib/auth-client'; // Your configured authClient
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';


const GoogleSignInButton = () => {
  const router = useRouter();

  const handleGooglePopupLogin = useCallback(async () => {

    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: `${window.location.origin}/auth/popup-callback`,
      disableRedirect: true,
    });

    if (error) {
      console.error("Error getting sign-in URL:", error);
      alert("Could not start Google sign-in process.");
      return;
    }

    console.log({ data });

    // if (data?.url) {
    //   popup.location.href = data.url;
    // }


    const popupWidth = 600;
    const popupHeight = 600;
    const left = (window.screen.width / 2) - (popupWidth / 2);
    const top = (window.screen.height / 2) - (popupHeight / 2);

    const popup = window.open(
      data?.url,
      'GoogleSignIn',
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`
    );
    console.log({ popup });

    if (!popup) {
      alert("Popup blocked by browser. Please allow popups for this site to login.");
      return;
    }

  }, [router]);

  useEffect(() => {
    const handler = (event: StorageEvent) => {
      if (event.key === "betterauth-login") {
        // Login completed in popup — refresh session
        window.location.reload();

      }
    };

    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  return (
    <button
      onClick={handleGooglePopupLogin}
      className="flex justify-center items-center p-2 font-medium text-base rounded-md border border-gray-500 text-black hover:border-black hover:bg-black hover:text-white transition-colors"
    >
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Sign In
    </button>
  );
};

export default GoogleSignInButton;
