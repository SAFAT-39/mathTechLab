import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24 Game – Solve the Math Puzzle Online | MathTechLab",
  description:
    "Play the 24 Game online! Use four numbers and basic arithmetic to make 24. Challenge yourself with this fun math puzzle at MathTechLab.",
  keywords: [
    "24 Game",
    "math game",
    "arithmetic puzzle",
    "online math challenge",
  ],
  authors: [{ name: "MathTechLab", url: "https://mathtechlab.com" }],
  openGraph: {
    title: "24 Game – Solve the Math Puzzle Online | MathTechLab",
    description:
      "Test your math skills with the 24 Game! Use four numbers and basic operations to reach 24. Try it now at MathTechLab!",
    url: "https://mathtechlab.com/games/24-game",
    siteName: "MathTechLab",
    images: [
      {
        url: "https://mathtechlab.com/images/24-game-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "24 Game Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mathtechlab",
    title: "24 Game – Fun Math Challenge | MathTechLab",
    description:
      "Solve the 24 Game online! Use four numbers to make 24 with arithmetic operations. Play now at MathTechLab!",
    images: ["https://mathtechlab.com/images/24-game-thumbnail.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
