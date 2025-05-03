import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Math Calculators | MathTechLab",
  description:
    "Explore our collection of free online math calculators. From LCM and GCF to prime factorization and factor checking, we have the tools you need for your mathematical calculations.",
  keywords:
    "math calculators, online calculators, LCM calculator, GCF calculator, prime factorization calculator, factor checker, math tools, free calculators",
  openGraph: {
    title: "Math Calculators | MathTechLab",
    description:
      "Explore our collection of free online math calculators. From LCM and GCF to prime factorization and factor checking, we have the tools you need for your mathematical calculations.",
    type: "website",
  },
};

// Calculator data with descriptions
const calculators = [
  {
    title: "🔢 LCM Calculator",
    description: "Find the Least Common Multiple of two or more numbers with detailed prime factorization.",
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
];

// Card component to match home page
const Card = ({ title, description, link }: { title: string; description: string; link: string }) => {
  // Extract emoji from title if present
  const emoji = title.match(/^[^\s]+/)?.[0] || "✨";
  const titleText = title.replace(/^[^\s]+\s/, "");

  return (
    <Link
      href={link}
      className="block p-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:translate-y-[-2px]"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 text-xl">
            {emoji}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{titleText}</h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 flex-grow mb-4">{description}</p>
        <div className="flex justify-end">
          <span className="text-sm font-medium text-purple-600">
            Try it now →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default function CalculatorsPage() {
  return (
    <>
      {/* Introduction section with home page styling */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        {/* Math symbols decoration */}
        <div className="absolute top-1/4 left-1/4 text-6xl text-purple-200 opacity-30">∑</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-purple-200 opacity-30">π</div>
        <div className="absolute bottom-1/4 right-1/4 text-7xl text-purple-200 opacity-30">∫</div>
        <div className="absolute bottom-1/3 left-1/3 text-6xl text-purple-200 opacity-30">√</div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
            Free Online Math Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
            Math <span className="text-purple-600">Calculators</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            Welcome to MathTechLab's collection of free online math calculators. Our tools are designed to help students, teachers, and anyone interested in mathematics solve problems quickly and understand the underlying concepts.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Each calculator provides detailed explanations and step-by-step solutions to help you learn as you calculate.
          </p>
        </div>
      </section>

      {/* Calculators section */}
      <div className="mx-auto py-8">
        <section className="py-8">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <span className="text-2xl text-purple-600">🔢</span>
            </div>
            <h2 className="text-2xl font-bold text-purple-700">Our Calculators</h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {calculators.map((calculator, index) => (
              <Card key={index} {...calculator} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
