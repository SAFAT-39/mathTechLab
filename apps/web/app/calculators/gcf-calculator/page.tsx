import Content from "./Content";
import GCFCalculator from "./GCFCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greatest Common Factor (GCF) Calculator | Find GCD & Common Divisors",
  description: "Use our free Greatest Common Factor (GCF) Calculator to find the GCF of two or more numbers. Get step-by-step solutions, prime factorizations, and learn multiple methods to find the GCF. Perfect for students, teachers, and math enthusiasts.",
  keywords: "greatest common factor calculator, GCF calculator, GCD calculator, common divisor, prime factorization, math calculator, online calculator, factorization tool, mathematics tools, number theory, highest common factor",
  openGraph: {
    title: "Greatest Common Factor (GCF) Calculator | Find GCD & Common Divisors",
    description: "Use our free Greatest Common Factor (GCF) Calculator to find the GCF of two or more numbers. Get step-by-step solutions, prime factorizations, and learn multiple methods to find the GCF. Perfect for students, teachers, and math enthusiasts.",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <GCFCalculator />
      <Content />
    </>
  );
};

export default Page; 