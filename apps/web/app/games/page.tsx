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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        MathTechLab Games Collection
      </h1>
      <p className="text-xl text-center text-gray-700 mb-8">
        Discover a variety of exciting and educational math games designed to
        enhance your problem-solving skills, speed, and logical thinking.
        Whether you're a student looking to practice your math skills or a
        puzzle enthusiast, you'll find something fun here at MathTechLab.
      </p>

      <section>
        <h2 className="text-3xl font-semibold text-primary mb-4">Math Games</h2>
        <p className="text-lg text-gray-700 mb-6">
          Explore our collection of engaging math games that challenge your
          arithmetic, logic, and critical thinking abilities. These games are
          perfect for learners of all ages, from basic math to advanced
          problem-solving challenges.
        </p>

        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          <GameCard
            title="24 Game"
            description="A classic math game where you must use four numbers and basic operations to reach 24. Perfect for sharpening your math skills and quick thinking."
            url="/games/24-game"
            image="/images/24-game-thumbnail.png"
          />

          <GameCard
            title="2048 Game"
            description="Combine like numbers in this fun puzzle game to reach the elusive 2048 tile. A perfect mix of strategy and math."
            url="/games/2048-game"
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
  );
};

export default GamesPage;
