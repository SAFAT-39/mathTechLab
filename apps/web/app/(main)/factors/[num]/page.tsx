import { notFound } from "next/navigation";
import numberList from "./numberList";
import Introduction from "./Introduction";
import Factors from "./Factors";
import FactorPair from "./FactorPair";
import PrimeFactorization from "./PrimeFactorization";
import FindFactors from "./FindFactors";
import FAQs from "./FAQs";
import RelatedLinks from "./RelatedLinks";

type FactorsPageProps = {
  params: Promise<{
    num: string;
  }>;
};

export async function generateMetadata({ params }: FactorsPageProps) {
  const slug = (await params).num;
  if (!slug.startsWith("factors-of-")) return {};

  const parts = slug.split("-");
  const num = parseInt(parts[parts.length - 1]);
  if (parts.length !== 3 || isNaN(num) || !numberList.includes(num)) return {};

  const url = `https://mathtechlab.com/factors/factors-of-${num}`;
  const title = `Factors of ${num}, Factor Pairs and Prime Factorization of ${num}`;
  const description = `Learn the factors of ${num}, including factor pairs of ${num}, prime factorization of ${num}, and how to find factors of ${num}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "MathTechLab",
      type: "article",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function FactorsPage({ params }: FactorsPageProps) {
  const slug = (await params).num;
  if (!slug.startsWith("factors-of-")) {
    return notFound();
  }
  const parts = slug.split("-");
  const num = parseInt(parts[parts.length - 1]);
  if (parts.length !== 3 || isNaN(num) || !numberList.includes(num)) {
    return notFound();
  }

  return (
    <div className="mx-auto py-4">
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
          Factors of {num}
        </h1>
        <Introduction num={num} />
        <div className="border-t border-gray-100 pt-6">
          <Factors num={num} />
        </div>
        <div className="border-t border-gray-100 pt-6">
          <FactorPair num={num} />
        </div>
        <div className="border-t border-gray-100 pt-6">
          <PrimeFactorization num={num} />
        </div>
        <div className="border-t border-gray-100 pt-6">
          <FindFactors num={num} />
        </div>
        <div className="border-t border-gray-100 pt-6">
          <FAQs num={num} />
        </div>
        <div className="border-t border-gray-100 pt-6">
          <RelatedLinks num={num} />
        </div>
      </div>
    </div>
  );
}
