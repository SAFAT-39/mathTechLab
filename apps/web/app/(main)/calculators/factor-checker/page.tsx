import Content from "./Content";
import FactorChecker from "./FactorChecker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factor Checker | Find All Factors & Factor Pairs",
  description: "Use our free Factor Checker to find all factors and factor pairs of any number. Get instant results with prime factorization, factor trees, and detailed explanations. Perfect for students, teachers, and math enthusiasts.",
  keywords: "factor checker, number factors, factor pairs, prime factors, math calculator, online calculator, factorization tool, mathematics tools, number theory, divisibility",
  openGraph: {
    title: "Factor Checker | Find All Factors & Factor Pairs",
    description: "Use our free Factor Checker to find all factors and factor pairs of any number. Get instant results with prime factorization, factor trees, and detailed explanations. Perfect for students, teachers, and math enthusiasts.",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <FactorChecker />
      <Content />
    </>
  );
};

export default Page;
