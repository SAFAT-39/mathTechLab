import { Metadata } from "next";
import LCMCalculator from "./LCMCalculator";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Least Common Multiple (LCM) Calculator",
  description:
    "Use our free Least Common Multiple (LCM) Calculator to find the LCM of two or more numbers. Get step-by-step solutions, prime factorizations, and learn how to find LCM using multiple methods.",
  keywords:
    "LCM calculator, least common multiple, common multiple, prime factorization, math calculator, online calculator, multiple calculator, mathematics tools, fraction calculator",
  openGraph: {
    title: "Least Common Multiple (LCM) Calculator",
    description:
      "Use our free Least Common Multiple (LCM) Calculator to find the LCM of two or more numbers. Get step-by-step solutions, prime factorizations, and learn how to find LCM using multiple methods.",
    type: "website",
  },
};

export default function Page() {
  return (<>
    <LCMCalculator />
    <Content />
  </>
  );
} 