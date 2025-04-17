import Link from "next/link";
import { NumProps } from "./type";
import { getPrimeFactorization } from "./utils";

const renderPrimeFactorizationParagraph = (num: number, factors: number[]) => {
  const unique = Array.from(new Set(factors));
  const factorCount = unique
    .map((f) => {
      const count = factors.filter((n) => n === f).length;
      return count > 1 ? `${f}^${count}` : `${f}`;
    })
    .join(" × ");

  return <>The prime factorization of {num} involves breaking it down into the product of prime numbers. Using division, we find that the prime factors of {num} are {factors.join(", ")}. Therefore, the prime factorization of {num} is {factorCount}. Understanding prime factorization helps in finding GCF, <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/lcm-calculator">LCM</Link>, and simplifying <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/fraction-calculator">fractions</Link>.</>;
};

const PrimeFactorization = ({ num }: NumProps) => {
  const factors = getPrimeFactorization(num);

  const factorExpression = factors.join(" × ");

  const compactForm = Array.from(new Set(factors)).map((f) => {
    const count = factors.filter((x) => x === f).length;
    return count > 1 ? (
      <span key={f}>
        {f}
        <sup>{count}</sup>
      </span>
    ) : (
      <span key={f}>{f}</span>
    );
  });

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Prime Factorization of {num}</h2>
      <p className="text-gray-700 leading-relaxed">{renderPrimeFactorizationParagraph(num, factors)}</p>

      <div className="bg-purple-50 border border-purple-100 rounded-lg p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-purple-700">Prime factors of {num}:</h3>
          <p className="text-gray-700">{factors.join(", ")}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-purple-700">Prime factorization of {num}:</h3>
          <p className="text-gray-700">{factorExpression}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-purple-700">Compact form:</h3>
          <p className="text-gray-700">
            {compactForm.map((part, i) =>
              i < compactForm.length - 1 ? (
                <span key={i}>{part} × </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        </div>
      </div>

      <p className="text-gray-700">
        Find prime factorization of any number with our{" "}
        <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/prime-factorization">
          Prime Factorization Calculator
        </Link>{" "}
        tool.
      </p>
    </section>
  );
};

export default PrimeFactorization;
