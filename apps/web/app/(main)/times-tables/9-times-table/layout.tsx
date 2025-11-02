import { Metadata } from "next";

export const metadata: Metadata = {
  title: "9 Times Table – Learn and Practice Multiplication | MathTechLab",
  description:
    "Practice the 9 Times Table with MathTechLab’s fun and interactive tools! Visual learning, audio support, games, and downloadable charts make mastering multiplication easy and enjoyable.",
  keywords: [
    "9 times table",
    "learn 9 times table",
    "practice 9 multiplication table",
    "9 multiplication table for kids",
    "interactive 9 times table",
    "9 times table chart",
    "fun math for kids",
    "times tables games",
    "math learning",
    "MathTechLab",
  ],
  authors: [{ name: "MathTechLab", url: "https://mathtechlab.com" }],
  openGraph: {
    title: "9 Times Table – Learn and Practice Multiplication | MathTechLab",
    description:
      "Master the 9 Times Table at MathTechLab with visual aids, drag-and-drop games, audio playback, and downloadable resources. Designed for young learners and beginners.",
    url: "https://mathtechlab.com/times-tables/9-times-table",
    siteName: "MathTechLab",
    images: [
      {
        url: "https://mathtechlab.com/static/image/allTimesTable/9-times-table.webp",
        width: 1200,
        height: 630,
        alt: "9 Times Table Learning Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mathtechlab",
    title: "9 Times Table – Practice Multiplication Easily | MathTechLab",
    description:
      "Learn the 9 Times Table in a fun and effective way with MathTechLab. Play games, listen to equations, and download the chart for offline learning!",
    images: [
      "https://mathtechlab.com/static/image/allTimesTable/9-times-table.webp",
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
