import Content from "./Content";
import GCFCalculator from "./GCFCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greatest Common Factor (GCF) Calculator | MathTechLab",
  description: "Find the Greatest Common Factor (GCF) of two or more numbers with our free calculator. View prime factorizations and learn how to find the GCF using different methods.",
  keywords: "greatest common factor, GCF, GCD, common divisor, prime factorization, math calculator, factorization",
  openGraph: {
    title: "Greatest Common Factor (GCF) Calculator | MathTechLab",
    description: "Find the Greatest Common Factor (GCF) of two or more numbers with our free calculator. View prime factorizations and learn how to find the GCF using different methods.",
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