import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 Times Table – Learn and Practice Multiplication | MathTechLab",
  description:
    "Practice the 1 Times Table with MathTechLab’s fun and interactive tools! Visual learning, audio support, games, and downloadable charts make mastering multiplication easy and enjoyable.",
  keywords: [
    "1 times table",
    "learn 1 times table",
    "practice 1 multiplication table",
    "1 multiplication table for kids",
    "interactive 1 times table",
    "1 times table chart",
    "fun math for kids",
    "times tables games",
    "math learning",
    "MathTechLab",
  ],
  authors: [{ name: "MathTechLab", url: "https://mathtechlab.com" }],
  openGraph: {
    title: "1 Times Table – Learn and Practice Multiplication | MathTechLab",
    description:
      "Master the 1 Times Table at MathTechLab with visual aids, drag-and-drop games, audio playback, and downloadable resources. Designed for young learners and beginners.",
    url: "https://mathtechlab.com/times-tables/1-times-table",
    siteName: "MathTechLab",
    images: [
      {
        url: "https://mathtechlab.com/static/image/allTimesTable/1-times-table.webp",
        width: 1200,
        height: 630,
        alt: "1 Times Table Learning Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mathtechlab",
    title: "1 Times Table – Practice Multiplication Easily | MathTechLab",
    description:
      "Learn the 1 Times Table in a fun and effective way with MathTechLab. Play games, listen to equations, and download the chart for offline learning!",
    images: [
      "https://mathtechlab.com/static/image/allTimesTable/1-times-table.webp",
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
