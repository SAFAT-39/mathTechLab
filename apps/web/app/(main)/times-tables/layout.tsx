import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Times Tables – Learn & Practice Multiplication | MathTechLab",
  description:
    "Master multiplication with our interactive Times Tables at MathTechLab! Learn 1 to 12 times tables using games, visuals, audio, and downloadable charts. Perfect for kids and beginners.",
  keywords: [
    "times tables",
    "multiplication tables",
    "learn multiplication",
    "math practice",
    "math tables for kids",
    "interactive multiplication",
    "multiplication games",
    "1 to 12 times tables",
    "math learning",
    "MathTechLab",
  ],
  authors: [{ name: "MathTechLab", url: "https://mathtechlab.com" }],
  openGraph: {
    title: "Times Tables – Learn & Practice Multiplication | MathTechLab",
    description:
      "Explore fun and effective multiplication learning with Times Tables at MathTechLab. Includes drag-and-drop games, audio playback, and downloadable resources for kids.",
    url: "https://mathtechlab.com/times-tables",
    siteName: "MathTechLab",
    images: [
      {
        url: "https://mathtechlab.com/static/image/timesTable/multiplicationTables.webp",
        width: 1200,
        height: 630,
        alt: "Times Tables Learning Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mathtechlab",
    title: "Times Tables – Fun Multiplication Practice | MathTechLab",
    description:
      "Practice multiplication with interactive Times Tables at MathTechLab. Great for kids learning 1 to 12 times tables with games, audio, and visual tools.",
    images: [
      "https://mathtechlab.com/static/image/timesTable/multiplicationTables.webp",
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
