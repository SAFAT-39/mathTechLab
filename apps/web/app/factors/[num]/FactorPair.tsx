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

  return `The factor pairs of ${num} are the pairs of integers that multiply together to give ${num}. These include both positive and negative combinations. The positive factor pairs of ${num} are ${positivePairs}, and the negative factor pairs are ${negativePairs}. Knowing the factor pairs of ${num} is useful for learning multiplication, division, and understanding concepts such as the greatest common factor and prime factorization.`;
};

const FactorPair = ({ num }: NumProps) => {
  const factorPairs = getFactorPairs(num);
  const positivePairs = factorPairs.filter(([a, b]) => a > 0 && b > 0);
  const negativePairs = factorPairs.filter(([a, b]) => a < 0 && b < 0);

  return (
    <section className="text-base space-y-4">
      <h2 className="text-2xl font-semibold">Factor pairs of {num}</h2>
      <p>{renderFactorPairsParagraph(num, factorPairs)}</p>

      <div>
        <h3 className="text-lg font-semibold">
          Positive factor pairs of {num}:
        </h3>
        <table className="w-full border border-gray-300 mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Factor 1</th>
              <th className="px-4 py-2 border">Factor 2</th>
            </tr>
          </thead>
          <tbody>
            {positivePairs.map(([a, b], index) => (
              <tr key={index} className="bg-gray-200">
                <td className="px-4 py-2 border text-center">{a}</td>
                <td className="px-4 py-2 border text-center">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Negative factor pairs of {num}:
        </h3>
        <table className="w-full border border-gray-300 mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Factor 1</th>
              <th className="px-4 py-2 border">Factor 2</th>
            </tr>
          </thead>
          <tbody>
            {negativePairs.map(([a, b], index) => (
              <tr key={index} className="bg-gray-200">
                <td className="px-4 py-2 border text-center">{a}</td>
                <td className="px-4 py-2 border text-center">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FactorPair;
