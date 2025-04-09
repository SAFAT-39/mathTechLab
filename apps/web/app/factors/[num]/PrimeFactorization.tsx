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

  return `The prime factorization of ${num} involves breaking it down into the product of prime numbers. Using division, we find that the prime factors of ${num} are ${factors.join(", ")}. Therefore, the prime factorization of ${num} is ${factorCount}. Understanding prime factorization helps in finding GCF, LCM, and simplifying fractions.`;
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
    <section className="text-base space-y-4 mt-8">
      <h2 className="text-2xl font-semibold">Prime Factorization of {num}</h2>
      <p>{renderPrimeFactorizationParagraph(num, factors)}</p>

      <div className="text-lg space-y-1">
        <p>
          <strong>Prime factors of {num}:</strong> {factors.join(", ")}
        </p>
        <p>
          <strong>Prime factorization of {num}:</strong> {factorExpression}
        </p>
        <p>
          <strong>Compact form:</strong>{" "}
          {compactForm.map((part, i) =>
            i < compactForm.length - 1 ? (
              <span key={i}>{part} × </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      </div>
    </section>
  );
};

export default PrimeFactorization;
