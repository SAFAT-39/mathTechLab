import Section from "./Section";
import TitleSubtitle from "./TitleSubtitle";
import WhyUse from "./WhyUse";

const Content = () => {
  return (
    <>
      <TitleSubtitle />

      <Section
        title="Math Calculators"
        description="Free online math calculators that make solving problems simple and fun. Whether you're a student, teacher, or just curious about math, our tools help you calculate anything from basic fractions to complex equations. No downloads needed - just open and start calculating!"
        items={[
          {
            title: "📈 Graphing Calculator",
            description: "Plot mathematical functions, explore equations, and visualize graphs with our interactive graphing tool.",
            link: "/calculators/graph",
          },
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
        ]}
        seeMoreLink="/calculators"
      />

      <Section
        title="Interactive Math Games"
        description="Turn math practice into playtime with our collection of free online math games. Perfect for kids and adults who want to sharpen their math skills while having fun. From number puzzles to speed challenges, these games make learning math feel like entertainment."
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
        ]}
        seeMoreLink="/games"
      />

      <Section
        title="Math Learning"
        description="Learn math the easy way with our step-by-step guides and interactive lessons. Whether you're struggling with multiplication tables or want to understand factors better, we break down complex math concepts into simple, easy-to-follow explanations that anyone can understand."
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
        ]}
      />

      <WhyUse />
    </>
  );
};

export default Content; 