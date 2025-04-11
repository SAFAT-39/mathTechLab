import { Metadata } from "next";
import LCMCalculator from "./LCMCalculator";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Least Common Multiple (LCM) Calculator",
  description:
    "Use our free Least Common Multiple (LCM) Calculator to find the LCM of two or more numbers, view prime factorizations, and understand how LCM is calculated.",
  keywords:
    "LCM calculator, least common multiple, LCM of two numbers, LCM of multiple numbers, prime factorization, math calculator, online calculator",
  openGraph: {
    title: "Least Common Multiple (LCM) Calculator",
    description:
      "Use our free Least Common Multiple (LCM) Calculator to find the LCM of two or more numbers, view prime factorizations, and understand how LCM is calculated.",
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