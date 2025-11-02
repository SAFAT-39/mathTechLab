import "../globals.css";
import "@mathtechlab/design-system/styles.css";
import "@mathtechlab/ui/styles.css";
import type { Metadata } from "next";
import { ReactNode } from "react";



export default function TelegramLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-black">
        {children}
      </body>
    </html>
  );
}
