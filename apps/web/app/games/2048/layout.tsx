export const metadata = {
  title: "Play 2048 Game Online – Free, Fun, and Challenging | MathTechLab",
  description:
    "Play the classic 2048 game online for free! Merge tiles strategically to reach 2048. Challenge your brain and improve number skills. No downloads required.",
  keywords: [
    "2048 game",
    "play 2048 online",
    "free puzzle game",
    "merge numbers game",
    "brain training",
    "math puzzle",
    "strategy game",
    "2048 strategy",
    "fun number game",
    "best 2048 game",
  ],
  openGraph: {
    title: "Play 2048 Game Online – Free, Fun, and Challenging | MathTechLab",
    description:
      "Enjoy the classic 2048 puzzle game for free. Merge numbers strategically to reach 2048. Play online with no downloads required!",
    url: "https://mathtechlab.com/games/2048",
    type: "website",
    images: [
      {
        url: "https://mathtechlab.com/images/2048-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Play 2048 Game Online - Merge Tiles to 2048",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Play 2048 Game Online – Free, Fun, and Challenging | MathTechLab",
    description:
      "Challenge yourself with the 2048 game! Merge tiles, strategize, and reach 2048. Play online for free at MathTechLab!",
    images: ["https://mathtechlab.com/images/2048-thumbnail.png"],
  },
  alternates: {
    canonical: "https://mathtechlab.com/games/2048",
  },
  robots: {
    index: true,
    follow: true,
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Play 2048 Game Online",
  url: "https://mathtechlab.com/games/2048",
  description:
    "Enjoy the classic 2048 puzzle game for free. Merge numbers strategically to reach 2048. Play online with no downloads required!",
  image: "https://mathtechlab.com/images/2048-game-thumbnail.png",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "MathTechLab",
    url: "https://mathtechlab.com",
    logo: {
      "@type": "ImageObject",
      url: "https://mathtechlab.com/images/logo.png",
    },
  },
  potentialAction: {
    "@type": "PlayAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://mathtechlab.com/games/2048",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      {children}
    </section>
  );
}
