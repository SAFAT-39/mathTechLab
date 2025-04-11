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
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <LCMCalculator />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
} 