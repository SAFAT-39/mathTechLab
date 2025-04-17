import Link from "next/link";
import { NumProps } from "./type";
import { getFactorPairs, getFactors } from "./utils";

const renderFactorPairsParagraph = (
  num: number,
  factorPairs: [number, number][]
) => {
  const positivePairs = factorPairs
    .filter(([a, b]) => a > 0 && b > 0)
    .map(([a, b]) => `(${a}, ${b})`)
    .join(", ");
  const negativePairs = factorPairs
    .filter(([a, b]) => a < 0 && b < 0)
    .map(([a, b]) => `(${a}, ${b})`)
    .join(", ");

  return <>The factor pairs of {num} are the pairs of integers that multiply together to give {num}. These include both positive and negative combinations. The positive factor pairs of {num} are {positivePairs}, and the negative factor pairs are {negativePairs}. Knowing the factor pairs of {num} is useful for learning multiplication, division, and understanding concepts such as the <Link className="text-blue-600 hover:text-blue-800 font-medium transition-colors" href="/calculators/gcf-calculator">greatest common factor</Link> and prime factorization.</>;
};

const FactorPair = ({ num }: NumProps) => {
  const factorPairs = getFactorPairs(num);
  const positivePairs = factorPairs.filter(([a, b]) => a > 0 && b > 0);
  const negativePairs = factorPairs.filter(([a, b]) => a < 0 && b < 0);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">Factor Pairs of {num}</h2>
      <p className="text-gray-700 leading-relaxed">{renderFactorPairsParagraph(num, factorPairs)}</p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-600">
          Positive Factor Pairs of {num}:
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-purple-100 rounded-lg">
            <thead>
              <tr className="bg-purple-50">
                <th className="px-4 py-3 border-b border-purple-100 text-purple-700">Factor 1</th>
                <th className="px-4 py-3 border-b border-purple-100 text-purple-700">Factor 2</th>
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
                <th className="px-4 py-3 border-b border-purple-100 text-purple-700">Factor 1</th>
                <th className="px-4 py-3 border-b border-purple-100 text-purple-700">Factor 2</th>
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
