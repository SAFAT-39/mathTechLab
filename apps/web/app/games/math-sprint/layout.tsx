import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Math Sprint Game - Test Your Speed and Accuracy!",
  description:
    "Play the Math Sprint Game on MathTechLab! Solve as many math expressions as possible within the time limit and set a new high score. Train your brain and boost your math speed today!",
  keywords: [
    "Math Sprint Game",
    "mental math",
    "math speed test",
    "arithmetic game",
    "math challenge",
    "brain training",
    "math practice",
    "online math games",
    "math learning",
  ],
  alternates: {
    canonical: "https://mathtechlab.com/games/math-sprint",
  },
  openGraph: {
    title: "Math Sprint Game - Test Your Speed and Accuracy!",
    description:
      "Play the Math Sprint Game on MathTechLab! Solve as many math expressions as possible within the time limit and set a new high score.",
    url: "https://mathtechlab.com/games/math-sprint",
    siteName: "MathTechLab",
    type: "website",
    images: [
      {
        url: "https://mathtechlab.com/images/math-sprint-thumbnail.png", // Update with actual image URL
        width: 1200,
        height: 630,
        alt: "Math Sprint Game Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Math Sprint Game - Test Your Speed and Accuracy!",
    description:
      "Challenge your mental math skills with the Math Sprint Game. Solve as many expressions as possible before time runs out!",
    images: ["https://mathtechlab.com/images/math-sprint-thumbnail.png"], // Update with actual image URL
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
