import "./globals.css";
import "@mathtechlab/design-system/styles.css";
import "@mathtechlab/ui/styles.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "MathTechLab - Explore Math, Games, and Technology",
  description:
    "MathTechLab offers interactive math learning content, engaging games, powerful tools, and insightful blogs connecting mathematics with technology, including machine learning.",
  keywords: [
    "math learning",
    "math games",
    "math tools",
    "mathematics in technology",
    "machine learning and math",
    "times tables",
    "advanced mathematics",
    "math education",
  ],
  openGraph: {
    title: "MathTechLab - Explore Math, Games, and Technology",
    description:
      "Discover math from basic to advanced levels with interactive games, tools, and insightful blogs connecting mathematics to modern technology.",
    url: "https://mathtechlab.com",
    type: "website",
    images: [
      {
        url: "https://mathtechlab.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MathTechLab Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MathTechLab",
    title: "MathTechLab - Explore Math, Games, and Technology",
    description:
      "Join MathTechLab to explore interactive math content, games, tools, and the connection between math and technology.",
    images: ["https://mathtechlab.com/twitter-image.jpg"],
  },
};

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
          <footer className="bg-gray-900 text-center p-4 mt-8 text-white">
            <p>
              &copy; {new Date().getFullYear()} MathTechLab. All rights
              reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
