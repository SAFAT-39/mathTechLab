import { notFound } from "next/navigation";
import { getFactors } from "./utils";
import numberList from "./numberList";
import Introduction from "./Introduction";
import Factors from "./Factors";
import FactorPair from "./FactorPair";
import PrimeFactorization from "./PrimeFactorization";
import FindFactors from "./FindFactors";

type FactorsPageProps = {
  params: {
    num: string;
  };
};

export default async function FactorsPage({ params }: FactorsPageProps) {
  const num = parseInt((await params).num);

  if (isNaN(num) || !numberList.includes(num)) {
    return notFound();
  }

  const factors = getFactors(num);

  return (
    <div className="py-4 space-y-5">
      <h1 className="text-3xl font-bold p-2 bg-gray-400">Factors of {num}</h1>
      <Introduction num={num} />
      <Factors num={num} />
      <FactorPair num={num} />
      <PrimeFactorization num={num} />
      <FindFactors num={num} />
    </div>
  );
}
