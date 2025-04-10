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
  params: {
    num: string;
  };
};

export async function generateMetadata({ params }: FactorsPageProps) {
  const slug = (await params).num;
  if (!slug.startsWith("factors-of-")) return {};

  const parts = slug.split("-");
  const num = parseInt(parts[parts.length - 1]);
  if (parts.length !== 3 || isNaN(num) || !numberList.includes(num)) return {};

  const url = `https://mathtechlab.com/factors/factors-of-${num}`;
  const title = `Factors of ${num} | Factor Pairs and Prime Factorization of ${num}`;
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
    <div className="py-4 space-y-5">
      <h1 className="text-3xl font-bold p-2 bg-gray-400">Factors of {num}</h1>
      <Introduction num={num} />
      <Factors num={num} />
      <FactorPair num={num} />
      <PrimeFactorization num={num} />
      <FindFactors num={num} />
      <FAQs num={num} />
      <RelatedLinks num={num} />
    </div>
  );
}
