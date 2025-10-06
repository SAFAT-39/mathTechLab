import Link from "next/link";
import { NumProps } from "./type";
import { getFactorPairs } from "./utils";

const factorPairsDescriptions = [
  (num: number, positivePairs: string, negativePairs: string) =>
    `The factor pairs of ${num} are combinations of two integers that multiply together to give exactly ${num}. Each pair shows how ${num} can be expressed as a product of two whole numbers. The positive factor pairs are ${positivePairs}, while the negative pairs are ${negativePairs}. Learning these helps build a strong foundation in multiplication and division, and also supports understanding key concepts like the greatest common factor and prime factorization.`,

  (num: number, positivePairs: string, negativePairs: string) =>
    `Factor pairs of ${num} are pairs of numbers that, when multiplied, result in ${num}. These pairs come in both positive and negative forms. For example, the positive pairs are ${positivePairs}, and the negative ones are ${negativePairs}. Recognizing these pairs helps you see how ${num} is structured mathematically and improves understanding of how numbers relate through multiplication and division. This concept is also helpful when finding the greatest common factor or simplifying fractions.`,

  (num: number, positivePairs: string, negativePairs: string) =>
    `When two numbers multiply to give ${num}, they form a factor pair. The positive factor pairs of ${num} are ${positivePairs}, and the negative ones are ${negativePairs}. Each pair demonstrates how ${num} can be created by multiplying two integers. Learning about factor pairs is useful in arithmetic and algebra. It helps in understanding divisibility, simplifying problems, and working with greatest common factors and prime numbers.`,

  (num: number, positivePairs: string, negativePairs: string) =>
    `Factor pairs show how a number can be broken down into two smaller factors that multiply to form it. For ${num}, these pairs are ${positivePairs} on the positive side and ${negativePairs} on the negative side. They are an important part of basic number theory and help explain multiplication, division, and factorization in a simple way. Knowing the factor pairs of ${num} can make it easier to find related values such as the greatest common factor or least common multiple.`,

  (num: number, positivePairs: string, negativePairs: string) =>
    `For ${num}, factor pairs are the sets of two integers whose product equals ${num}. They come in positive and negative versions, the positive pairs are ${positivePairs}, and the negative pairs are ${negativePairs}. These pairs help visualize how multiplication works and show that every number can be expressed as a product in multiple ways. Understanding factor pairs is a helpful step when studying divisibility, GCF, and prime factorization.`,

  (num: number, positivePairs: string, negativePairs: string) =>
    `The factor pairs of ${num} represent all the ways two numbers can multiply to result in ${num}. The positive pairs are ${positivePairs}, and the negative ones are ${negativePairs}. Each pair is a mirror of how numbers work together in multiplication. Learning about factor pairs strengthens your understanding of multiplication, division, and number patterns, and connects to topics like the greatest common factor and prime numbers.`,
];

const renderFactorPairsParagraph = (num: number, factorPairs: [number, number][]) => {
  const positivePairs = factorPairs
    .filter(([a, b]) => a > 0 && b > 0)
    .map(([a, b]) => `(${a}, ${b})`)
    .join(", ");
  const negativePairs = factorPairs
    .filter(([a, b]) => a < 0 && b < 0)
    .map(([a, b]) => `(${a}, ${b})`)
    .join(", ");

  const randomDescription =
    factorPairsDescriptions[Math.floor(Math.random() * factorPairsDescriptions.length)](
      num,
      positivePairs,
      negativePairs
    );

  return (
    <>
      {randomDescription} You can also explore how factor pairs relate to the{" "}
      <Link
        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        href="/calculators/gcf-calculator"
      >
        greatest common factor
      </Link>{" "}
      and{" "}
      <Link
        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        href="/calculators/prime-factorization-calculator"
      >
        prime factorization
      </Link>{" "}
      for deeper understanding.
    </>
  );
};

const FactorPair = ({ num }: NumProps) => {
  const factorPairs = getFactorPairs(num);
  const positivePairs = factorPairs.filter(([a, b]) => a > 0 && b > 0);
  const negativePairs = factorPairs.filter(([a, b]) => a < 0 && b < 0);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Factor Pairs of {num}</h2>
      <p className="text-gray-700 leading-relaxed">
        {renderFactorPairsParagraph(num, factorPairs)}
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-600">
          Positive Factor Pairs of {num}:
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-purple-100 rounded-lg">
            <thead>
              <tr className="bg-purple-50">
                <th className="px-4 py-3 border-b border-purple-100 text-purple-700">
                  Factor 1
                </th>
                <th className="px-4 py-3 border-b border-purple-100 text-purple-700">
                  Factor 2
                </th>
              </tr>
            </thead>
            <tbody>
              {positivePairs.map(([a, b], index) => (
                <tr key={index} className="hover:bg-purple-50 transition-colors">
                  <td className="px-4 py-3 border-b border-purple-100 text-center">{a}</td>
                  <td className="px-4 py-3 border-b border-purple-100 text-center">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-600">
          Negative Factor Pairs of {num}:
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-purple-100 rounded-lg">
            <thead>
              <tr className="bg-purple-50">
                <th className="px-4 py-3 border-b border-purple-100 text-purple-700">
                  Factor 1
                </th>
                <th className="px-4 py-3 border-b border-purple-100 text-purple-700">
                  Factor 2
                </th>
              </tr>
            </thead>
            <tbody>
              {negativePairs.map(([a, b], index) => (
                <tr key={index} className="hover:bg-purple-50 transition-colors">
                  <td className="px-4 py-3 border-b border-purple-100 text-center">{a}</td>
                  <td className="px-4 py-3 border-b border-purple-100 text-center">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FactorPair;
