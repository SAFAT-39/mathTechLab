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
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Math Calculators</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to MathTechLab's collection of free online math calculators. Our tools are designed to help students, teachers, and anyone interested in mathematics solve problems quickly and understand the underlying concepts.
        </p>
        <p className="text-lg text-gray-600">
          Each calculator provides detailed explanations and step-by-step solutions to help you learn as you calculate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
        {calculators.map((calculator) => (
          <Link
            key={calculator.title}
            href={calculator.href}
            className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{calculator.icon}</span>
                <h2 className="text-xl font-bold text-gray-800">{calculator.title}</h2>
              </div>
              <p className="text-gray-600">{calculator.description}</p>
              <div className="mt-4 flex justify-end">
                <span className="text-purple-600 font-medium">Try it now →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
