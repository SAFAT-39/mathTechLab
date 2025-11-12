"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <span className="text-gray-500 text-xl font-semibold">Loading...</span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <span className="text-pink-600 text-2xl font-bold mb-4">
          You are not logged in.
        </span>
        <a
          href="/auth/login"
          className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition"
        >
          Sign In
        </a>
      </div>
    );
  }

  const { name, username, email } = session.user || {};

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center border border-gray-200">
        <div
          className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white font-bold text-5xl shadow-lg mb-6"
          title={name}
        >
          {name ? name.charAt(0).toUpperCase() : "?"}
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-gray-800">
          {name || "No Name"}
        </h2>
        <p className="text-lg text-gray-600 mb-1">
          <span className="font-semibold text-gray-700">Username:</span>{" "}
          {username || "N/A"}
        </p>
        <p className="text-lg text-gray-600 mb-6">
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          {email || "N/A"}
        </p>
        <button
          className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow hover:scale-105 transition"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
