import Content from "./Content";
import PrimeFactorizationCalculator from "./PrimeFactorizationCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prime Factorization Calculator | MathTechLab",
  description: "Find the prime factorization of any number with our free calculator. View prime factors, factor tree, and learn how to break down numbers into their prime components.",
  keywords: "prime factorization, prime factors, factor tree, prime numbers, math calculator, factorization",
  openGraph: {
    title: "Prime Factorization Calculator | MathTechLab",
    description: "Find the prime factorization of any number with our free calculator. View prime factors, factor tree, and learn how to break down numbers into their prime components.",
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