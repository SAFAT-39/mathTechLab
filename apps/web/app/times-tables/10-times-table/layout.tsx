import { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Times Table – Learn and Practice Multiplication | MathTechLab",
  description:
    "Practice the 10 Times Table with MathTechLab’s fun and interactive tools! Visual learning, audio support, games, and downloadable charts make mastering multiplication easy and enjoyable.",
  keywords: [
    "10 times table",
    "learn 10 times table",
    "practice 10 multiplication table",
    "10 multiplication table for kids",
    "interactive 10 times table",
    "10 times table chart",
    "fun math for kids",
    "times tables games",
    "math learning",
    "MathTechLab",
  ],
  authors: [{ name: "MathTechLab", url: "https://mathtechlab.com" }],
  openGraph: {
    title: "10 Times Table – Learn and Practice Multiplication | MathTechLab",
    description:
      "Master the 10 Times Table at MathTechLab with visual aids, drag-and-drop games, audio playback, and downloadable resources. Designed for young learners and beginners.",
    url: "https://mathtechlab.com/times-tables/10-times-table",
    siteName: "MathTechLab",
    images: [
      {
        url: "https://mathtechlab.com/static/image/allTimesTable/10-times-table.webp",
        width: 1200,
        height: 630,
        alt: "10 Times Table Learning Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mathtechlab",
    title: "10 Times Table – Practice Multiplication Easily | MathTechLab",
    description:
      "Learn the 10 Times Table in a fun and effective way with MathTechLab. Play games, listen to equations, and download the chart for offline learning!",
    images: [
      "https://mathtechlab.com/static/image/allTimesTable/10-times-table.webp",
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
