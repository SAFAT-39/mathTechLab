import RelatedGames from "../../components/RelatedGames";
import MathSprint from "./Game";

const Page = () => {
  const relatedGames = [
    {
      title: "24 Game",
      description: "Use four numbers to make 24!",
      href: "/games/24-game",
      image: "/images/24-game-thumbnail.png",
    },
    {
      title: "2048 Game",
      description: "Combine tiles to reach 2048!",
      href: "/games/2048-game",
      image: "/images/2048-thumbnail.png",
    },
  ];
  return (
    <>
      <MathSprint />
      <div className="mx-auto p-6 mt-[200px]">
        <h2 className="text-3xl font-bold text-primary">
          🚀 Math Sprint Game - Challenge Your Mental Math Skills!
        </h2>
        <p className="mt-4 text-lg">
          Do you want to put your math skills into the test? The{" "}
          <strong>Math Sprint Game</strong> is an exciting brain-training
          challenge. Here you solve simple arithmetic expressions as fast as
          possible before the time runs out!
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-secondary">
          How to Play:
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>A math expression appears on the screen.</li>
          <li>Select the correct answer from multiple choices.</li>
          <li>Solve as many expressions as possible before time runs out.</li>
          <li>The total number of correct answers is your score.</li>
          <li>Try to beat your high score!</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold text-secondary">
          Why Play the Math Sprint Game?
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>✅ Improve your mental math speed.</li>
          <li>✅ Enhance problem-solving skills.</li>
          <li>✅ Fun and engaging way to practice arithmetic.</li>
          <li>✅ Suitable for all ages—kids and adults alike!</li>
        </ul>

        <p className="mt-6 text-lg font-semibold">
          🎯 Play now and see how fast you can calculate! Can you set a new
          record?
        </p>
      </div>
      <RelatedGames relatedGames={relatedGames} />
    </>
  );
};

export default Page;
