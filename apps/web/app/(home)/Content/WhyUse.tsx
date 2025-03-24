import ContentPoint from "./ContentPoint";

const points = [
  {
    title: "1. Interactive Learning Tools",
    description:
      "At MathTechLab, we believe learning math should be an exciting challenge, not a chore. Our interactive math games, like the 24 Game and 2048 Game, offer a dynamic and fun way to practice arithmetic, problem-solving, and critical thinking. Each game is designed to enhance cognitive abilities while keeping you entertained.",
  },
  {
    title: "2. Comprehensive Math Resources",
    description:
      "MathTechLab offers a variety of learning tools, from basic times tables to advanced topics in machine learning and mathematics in technology. Whether you're starting your math journey or looking to advance your knowledge, we provide easy-to-understand lessons, real-world applications, and tips for success.",
  },
  {
    title: "3. Boost Your Problem-Solving Skills",
    description:
      "Math is all about developing problem-solving abilities. Our games and learning modules are tailored to help you think critically, analyze problems from different angles, and discover innovative solutions. Whether you're solving equations or applying math to tech problems, MathTechLab builds your confidence and expertise.",
  },
  {
    title: "4. Track Your Progress",
    description:
      "At MathTechLab, we don’t just focus on teaching; we help you track your progress. Our games come with a high-score system that motivates you to improve. You’ll see how your skills grow with each session, encouraging you to push past your limits and achieve new goals.",
  },
  {
    title: "5. Math Meets Technology",
    description:
      "Math is the backbone of many cutting-edge technologies, from artificial intelligence to data analysis. At MathTechLab, we explore the relationship between math and technology, offering insights and resources on how math shapes the future of technology, making it an essential learning tool for tech enthusiasts and professionals alike.",
  },
];

const WhyUse = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Why Use MathTechLab?
      </h2>
      <p className="mb-8">
        <strong>MathTechLab</strong> is the ultimate destination for anyone
        passionate about mastering mathematics in a fun and engaging way.
        Whether you're a student looking to strengthen your math skills or a
        professional seeking to explore how mathematics powers technology,
        MathTechLab offers something for everyone. Here's why you should choose
        MathTechLab:
      </p>
      <div className="space-y-6">
        {points.map((point, index) => (
          <ContentPoint
            key={index}
            title={point.title}
            description={point.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUse;
