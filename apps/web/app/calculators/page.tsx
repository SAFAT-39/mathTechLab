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
    title: "LCM Calculator",
    description: "Find the Least Common Multiple of two or more numbers with detailed prime factorization.",
    href: "/calculators/lcm-calculator",
    icon: "🔢",
  },
  {
    title: "GCF Calculator",
    description: "Calculate the Greatest Common Factor of multiple numbers with step-by-step explanations.",
    href: "/calculators/gcf-calculator",
    icon: "✅",
  },
  {
    title: "Fraction Calculator",
    description: "Add, subtract, multiply, and divide fractions with step-by-step solutions.",
    href: "/calculators/fraction-calculator",
    icon: "🔢",
  },
  {
    title: "Prime Factorization Calculator",
    description: "Break down any number into its prime factors with a visual representation.",
    href: "/calculators/prime-factorization-calculator",
    icon: "🔐",
  },
  {
    title: "Factor Checker",
    description: "Check if a number is a factor of another number and find all factors of any number.",
    href: "/calculators/factor-checker",
    icon: "🔍",
  },
];

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold mb-3">Math Calculators</h1>
        <p className="text-base text-gray-600 mb-4">
          Welcome to MathTechLab's collection of free online math calculators. Our tools are designed to help students, teachers, and anyone interested in mathematics solve problems quickly and understand the underlying concepts.
        </p>
        <p className="text-base text-gray-600">
          Each calculator provides detailed explanations and step-by-step solutions to help you learn as you calculate.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
        {calculators.map((calculator) => (
          <Link
            key={calculator.title}
            href={calculator.href}
            className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200 hover:translate-y-[-2px]"
          >
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{calculator.icon}</span>
                <h2 className="text-lg font-semibold text-gray-800">{calculator.title}</h2>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{calculator.description}</p>
              <div className="mt-3 flex justify-end">
                <span className="text-purple-600 text-sm font-medium">Try it now →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
