import Content from "./Content";
import FractionCalculator from "./FractionCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fraction Calculator | Add, Subtract, Multiply & Divide Fractions",
  description: "Use our free Fraction Calculator to perform arithmetic operations with fractions. Add, subtract, multiply, and divide fractions with step-by-step solutions, simplified results, and detailed explanations. Perfect for students, teachers, and math enthusiasts.",
  keywords: "fraction calculator, add fractions, subtract fractions, multiply fractions, divide fractions, simplify fractions, math calculator, online calculator, fraction operations, mathematics tools, fraction arithmetic, common denominator, lowest terms",
  openGraph: {
    title: "Fraction Calculator | Add, Subtract, Multiply & Divide Fractions",
    description: "Use our free Fraction Calculator to perform arithmetic operations with fractions. Add, subtract, multiply, and divide fractions with step-by-step solutions, simplified results, and detailed explanations. Perfect for students, teachers, and math enthusiasts.",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <FractionCalculator />
      <Content />
    </>
  );
};

export default Page; 