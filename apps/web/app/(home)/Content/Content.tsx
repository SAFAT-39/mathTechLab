import Section from "./Section";
import TitleSubtitle from "./TitleSubtitle";
import WhyUse from "./WhyUse";

const Content = () => {
  return (
    <>
      <TitleSubtitle />

      <Section
        title="Math Calculators"
        items={[
          {
            title: "🔢 LCM Calculator",
            description:
              "Find the Least Common Multiple of two or more numbers with detailed prime factorization.",
            link: "/calculators/lcm-calculator",
          },
          {
            title: "✅ GCF Calculator",
            description: "Calculate the Greatest Common Factor of multiple numbers with step-by-step explanations.",
            link: "/calculators/gcf-calculator",
          },
          {
            title: "🔢 Fraction Calculator",
            description: "Add, subtract, multiply, and divide fractions with step-by-step solutions.",
            link: "/calculators/fraction-calculator",
          },
          {
            title: "🔐 Prime Factorization Calculator",
            description: "Break down any number into its prime factors with a visual representation.",
            link: "/calculators/prime-factorization-calculator",
          },
          {
            title: "🔍 Factor Checker",
            description: "Check if a number is a factor of another number and find all factors of any number.",
            link: "/calculators/factor-checker",
          },
          {
            title: "🔢 Percentage Calculator",
            description: "Calculate percentages of numbers, find what percentage one number is of another, and more.",
            link: "/calculators/percentage-calculator",
          },
          {
            title: "➕ More Coming Soon",
            description: "We're constantly adding new calculators to help with your mathematical needs.",
            link: "/calculators",
          },
        ]}
        seeMoreLink="/calculators"
      />

      <Section
        title="Interactive Math Games"
        items={[
          {
            title: "🧩 24 Game",
            description:
              "Solve math puzzles by making 24 using four numbers and arithmetic operations.",
            link: "/games/24-game",
          },
          {
            title: "🧩 2048",
            description:
              "Slide, merge, and strategize your way to 2048! Play this addictive number puzzle online for free.",
            link: "/games/2048",
          },
          {
            title: "🧩 Math Sprint",
            description:
              "Solve as many math expressions as you can within the time limit! Challenge your brain and beat your high score.",
            link: "/games/math-sprint",
          },
          {
            title: "🎮 More Coming Soon",
            description: "We're developing more exciting math games to make learning fun and engaging.",
            link: "/games",
          },
        ]}
        seeMoreLink="/games"
      />

      <Section
        title="Math Learning"
        items={[
          {
            title: "📚 Times Tables",
            description: "Master multiplication with interactive times tables.",
            link: "/times-tables",
          },
          {
            title: "🔢 Factors",
            description: "Learn about factors, factor pairs and prime factorization of a number.",
            link: "/factors",
          },
          {
            title: "📖 More Coming Soon",
            description: "We're expanding our learning resources to cover more mathematical concepts.",
            link: "/times-tables",
          },
        ]}
        seeMoreLink="/times-tables"
      />

      <WhyUse />
    </>
  );
};

export default Content; 