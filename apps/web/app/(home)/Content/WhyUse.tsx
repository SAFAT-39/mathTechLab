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
      "At MathTechLab, we don't just focus on teaching; we help you track your progress. Our games come with a high-score system that motivates you to improve. You'll see how your skills grow with each session, encouraging you to push past your limits and achieve new goals.",
  },
  {
    title: "5. Math Meets Technology",
    description:
      "Math is the backbone of many cutting-edge technologies, from artificial intelligence to data analysis. At MathTechLab, we explore the relationship between math and technology, offering insights and resources on how math shapes the future of technology, making it an essential learning tool for tech enthusiasts and professionals alike.",
  },
];

const WhyUse = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">
            Why Use MathTechLab?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            <strong className="text-purple-700">MathTechLab</strong> is the ultimate destination for anyone
            passionate about mastering mathematics in a fun and engaging way. Whether you
            are a student looking to strengthen your math skills or a professional
            seeking to explore the power of Mathematics in technology, MathTechLab
            offers something for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <ContentPoint
              key={index}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/calculators"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 hover:shadow-lg"
          >
            <span>Start Learning Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;
