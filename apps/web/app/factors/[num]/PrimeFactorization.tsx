import Link from "next/link";
import { NumProps } from "./type";
import { getPrimeFactorization } from "./utils";

const paragraphVersions = [
  (num: number, factors: number[], factorCount: string) => (
    <>
      Prime factorization of {num} is the process of expressing it as a product of its prime numbers.
      When we repeatedly divide {num} by the smallest possible prime numbers, we get {factors.join(", ")}.
      Therefore, the prime factorization of {num} is {factorCount}.
      Knowing prime factors is essential for solving problems involving GCF,{" "}
      <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/lcm-calculator">LCM</Link>,
      and simplifying{" "}
      <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/fraction-calculator">fractions</Link>.
    </>
  ),

  (num: number, factors: number[], factorCount: string) => (
    <>
      Every composite number can be written as a product of prime numbers, which is known as prime factorization.
      For {num}, the prime factors are {factors.join(", ")}.
      Thus, the prime factorization of {num} is represented as {factorCount}.
      This breakdown is useful in finding relationships between numbers, especially in topics like{" "}
      <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/lcm-calculator">LCM</Link> and{" "}
      <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/fraction-calculator">fractions</Link>.
    </>
  ),

  (num: number, factors: number[], factorCount: string) => (
    <>
      To understand {num} more deeply, we can decompose it into its prime factors.
      By dividing step by step, we find that {num} can be written as {factors.join(" × ")}.
      Hence, the prime factorization of {num} is {factorCount}.
      Prime factorization is an important concept in arithmetic and algebra because it helps in computing the{" "}
      <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/lcm-calculator">LCM</Link>,
      greatest common factor, and simplifying complex fractions.
    </>
  ),

  (num: number, factors: number[], factorCount: string) => (
    <>
      The process of breaking down {num} into its basic building blocks, or prime numbers, is called prime factorization.
      When we perform this process, we find that the prime factors of {num} are {factors.join(", ")}.
      So, {num} can be expressed as {factorCount}.
      Understanding prime factorization is valuable for solving mathematical problems involving{" "}
      <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/lcm-calculator">LCM</Link>,
      divisibility, and rational number simplification.
    </>
  ),

  (num: number, factors: number[], factorCount: string) => (
    <>
      Prime factorization means expressing a number as a multiplication of its prime numbers.
      For the number {num}, the prime factors obtained through repeated division are {factors.join(", ")}.
      Hence, the prime factorization of {num} is {factorCount}.
      This knowledge is widely used in various areas of mathematics, including finding{" "}
      <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/lcm-calculator">LCM</Link>,
      GCF, and reducing{" "}
      <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/fraction-calculator">fractions</Link>
      {" "}to their simplest form.
    </>
  ),
];

const renderPrimeFactorizationParagraph = (num: number, factors: number[]) => {
  const unique = Array.from(new Set(factors));
  const factorCount = unique
    .map((f) => {
      const count = factors.filter((n) => n === f).length;
      return count > 1 ? `${f}^${count}` : `${f}`;
    })
    .join(" × ");

  const randomVersion = paragraphVersions[Math.floor(Math.random() * paragraphVersions.length)];
  return randomVersion(num, factors, factorCount);
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
        <Link
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          href="/calculators/prime-factorization-calculator"
        >
          Prime Factorization Calculator
        </Link>{" "}
        tool.
      </p>
    </section>
  );
};

export default PrimeFactorization;
