import "./globals.css"
import "@mathtechlab/design-system/styles.css"
import "@mathtechlab/ui/styles.css"
import type { Metadata } from "next"
import { ReactNode } from 'react';
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Turborepo with Tailwind Version 4",
  description: "Updated Turborepo with Tailwind Version 4",
}

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow container mx-auto p-4">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white text-center p-4 mt-8">
            <p>&copy; {new Date().getFullYear()} MathTechLab. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

