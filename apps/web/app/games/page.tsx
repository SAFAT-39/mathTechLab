import GameCard from "./GameCard";
export const metadata = {
  title: "Math Games Collection | MathTechLab",
  description:
    "Explore a variety of exciting and educational math games to sharpen your problem-solving skills, speed, and logical thinking. Play now on MathTechLab!",
  openGraph: {
    title: "Math Games Collection | MathTechLab",
    description:
      "Explore a variety of exciting and educational math games to sharpen your problem-solving skills, speed, and logical thinking. Play now on MathTechLab!",
    url: "https://mathtechlab.com/games",
    siteName: "MathTechLab",
    images: [
      {
        url: "https://mathtechlab.com/images/og-image.jpg", // replace with an actual image URL
        width: 1200,
        height: 630,
        alt: "MathTechLab Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Math Games Collection | MathTechLab",
    description:
      "Explore a variety of exciting and educational math games to sharpen your problem-solving skills, speed, and logical thinking. Play now on MathTechLab!",
    image: "https://mathtechlab.com/images/og-image.jpg", // replace with an actual image URL
  },
  canonical: "https://mathtechlab.com/games",
  robots: {
    index: true,
    follow: true,
  },
};

const GamesPage = () => {
  return (
    <>
      {/* Introduction section with home page styling */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        {/* Math symbols decoration */}
        <div className="absolute top-1/4 left-1/4 text-6xl text-purple-200 opacity-30">🎮</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-purple-200 opacity-30">🧩</div>
        <div className="absolute bottom-1/4 right-1/4 text-7xl text-purple-200 opacity-30">🎲</div>
        <div className="absolute bottom-1/3 left-1/3 text-6xl text-purple-200 opacity-30">🎯</div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
            Fun Math Learning
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
            Math <span className="text-purple-600">Games</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Discover a variety of exciting and educational math games designed to enhance your problem-solving skills, speed, and logical thinking.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you're a student looking to practice your math skills or a puzzle enthusiast, you'll find something fun here at MathTechLab.
          </p>
        </div>
      </section>

      {/* Games section */}
      <div className="container mx-auto py-8 px-4">
        <section className="py-8">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <span className="text-2xl text-purple-600">🎮</span>
            </div>
            <h2 className="text-2xl font-bold text-purple-700">Our Games</h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <GameCard
              title="24 Game"
              description="A classic math game where you must use four numbers and basic operations to reach 24. Perfect for sharpening your math skills and quick thinking."
              url="/games/24-game"
              image="/images/24-game-thumbnail.png"
            />

            <GameCard
              title="2048 Game"
              description="Combine like numbers in this fun puzzle game to reach the elusive 2048 tile. A perfect mix of strategy and math."
              url="/games/2048"
              image="/images/2048-thumbnail.png"
            />

            <GameCard
              title="Math Sprint Game"
              description="Solve simple math expressions against the clock! Test your speed and accuracy in this fast-paced math challenge."
              url="/games/math-sprint"
              image="/images/math-sprint-thumbnail.png"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default GamesPage;
