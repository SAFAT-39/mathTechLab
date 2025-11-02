import { Metadata } from "next";

export const metadata: Metadata = {
  title: "8 Times Table – Learn and Practice Multiplication | MathTechLab",
  description:
    "Practice the 8 Times Table with MathTechLab’s fun and interactive tools! Visual learning, audio support, games, and downloadable charts make mastering multiplication easy and enjoyable.",
  keywords: [
    "8 times table",
    "learn 8 times table",
    "practice 8 multiplication table",
    "8 multiplication table for kids",
    "interactive 8 times table",
    "8 times table chart",
    "fun math for kids",
    "times tables games",
    "math learning",
    "MathTechLab",
  ],
  authors: [{ name: "MathTechLab", url: "https://mathtechlab.com" }],
  openGraph: {
    title: "8 Times Table – Learn and Practice Multiplication | MathTechLab",
    description:
      "Master the 8 Times Table at MathTechLab with visual aids, drag-and-drop games, audio playback, and downloadable resources. Designed for young learners and beginners.",
    url: "https://mathtechlab.com/times-tables/8-times-table",
    siteName: "MathTechLab",
    images: [
      {
        url: "https://mathtechlab.com/static/image/allTimesTable/8-times-table.webp",
        width: 1200,
        height: 630,
        alt: "8 Times Table Learning Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mathtechlab",
    title: "8 Times Table – Practice Multiplication Easily | MathTechLab",
    description:
      "Learn the 8 Times Table in a fun and effective way with MathTechLab. Play games, listen to equations, and download the chart for offline learning!",
    images: [
      "https://mathtechlab.com/static/image/allTimesTable/8-times-table.webp",
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
