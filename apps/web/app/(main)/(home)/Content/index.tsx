import Section from "./Section";
import TitleSubtitle from "./TitleSubtitle";
import WhyUse from "./WhyUse";

const Content = () => {
  return (
    <>
      <TitleSubtitle />
      <Section
        title="Interactive Math Games"
        items={[
          {
            title: "🧩 24 Game",
            description:
              "Solve math puzzles by making 24 using four numbers and arithmatic operations.",
            link: "/games/24-game",
          },
          {
            title: "🧩 2048",
            description:
              "Slide, merge, and strategize your way to 2048! Play this addictive number puzzle online for free. 🎯 No downloads, just pure fun!",
            link: "/games/2048",
          },
          {
            title: "🧩 Math Sprint",
            description:
              "Solve as many math expressions as you can within the time limit! Challenge your brain and beat your high score in this speed math game.",
            link: "/games/math-sprint",
          },
        ]}
        seeMoreLink="/games"
      />

      <Section
        title="Math Calculators"
        items={[
          {
            title: "Factor Checker",
            description: "Calculate the factors of a number",
            link: "/calculators/factor-checker",
          },
          {
            title: "GCF Calculator",
            description: "Calculate the greatest common factor of two numbers or more numbers.",
            link: "/calculators/gcf-calculator",
          },
          {
            title: "Fraction Calculator",
            description: "Add, subtract, multiply, and divide fractions with step-by-step solutions.",
            link: "/calculators/fraction-calculator",
          },
        ]}
        seeMoreLink="/calculators"
      />

      <Section
        title="Math Learning"
        items={[
          {
            title: "Times Tables",
            description: "Master multiplication with interactive times tables.",
            link: "/times-tables",
          },
          {
            title: "Factors",
            description: "Learn about factors, factor pairs and prime factorization of a number.",
            link: "/factors",
          },
        ]}
        seeMoreLink="/times-tables"
      />
      <WhyUse />
    </>
  );
};

export default Content;
