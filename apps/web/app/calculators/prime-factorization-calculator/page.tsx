import Content from "./Content";
import PrimeFactorizationCalculator from "./PrimeFactorizationCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prime Factorization Calculator | Find Prime Factors & Factor Tree | MathTechLab",
  description:
    "Use our free Prime Factorization Calculator to break down any number into its prime factors. Get instant results with factor trees, step-by-step solutions, and detailed explanations. Perfect for students, teachers, and math enthusiasts.",
  keywords:
    "prime factorization calculator, prime factors, factor tree, prime numbers, math calculator, online calculator, factorization tool, mathematics tools, number theory, prime decomposition",
  openGraph: {
    title: "Prime Factorization Calculator | Find Prime Factors & Factor Tree | MathTechLab",
    description:
      "Use our free Prime Factorization Calculator to break down any number into its prime factors. Get instant results with factor trees, step-by-step solutions, and detailed explanations. Perfect for students, teachers, and math enthusiasts.",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <PrimeFactorizationCalculator />
      <Content />
    </>
  );
};

export default Page; 