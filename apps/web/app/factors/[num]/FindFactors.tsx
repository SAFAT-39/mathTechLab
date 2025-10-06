import Link from "next/link";
import { NumProps } from "./type";

const getOptimizedDivisionSteps = (num: number): string[] => {
  const steps: string[] = [];

  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      const pair = num / i;
      if (i === pair) {
        steps.push(`${num} ÷ ${i} = ${pair} → ✅ Factor`);
      } else {
        steps.push(`${num} ÷ ${i} = ${pair} → ✅ Factor Pair: (${i}, ${pair})`);
      }
    }
  }

  return steps;
};

const paragraphVersions = [
  (num: number) => (
    <>
      Finding the factors of <strong>{num}</strong> can be done efficiently using the division method.
      You only need to check numbers up to the square root of {num}, because each divisor below the square root has a matching pair above it.
      Each number that divides {num} evenly forms a factor pair, giving you both the divisor and its corresponding factor.
      This method saves time and helps understand the structure of {num} in terms of its building blocks.
    </>
  ),

  (num: number) => (
    <>
      To determine the factors of <strong>{num}</strong>, you can use an optimized division approach.
      By dividing {num} by integers up to its square root, you can quickly find all positive factor pairs.
      Every divisor found has a partner that multiplies with it to give {num}, helping visualize the number's composition.
      This approach is especially helpful for learning multiplication, division, and number theory concepts.
    </>
  ),

  (num: number) => (
    <>
      The most effective way to find factors of <strong>{num}</strong> is to divide it by numbers up to its square root.
      Each divisor provides a matching factor, forming a pair that multiplies back to {num}.
      This method not only finds all factors efficiently but also helps you understand the relationships between numbers.
      It's a practical way to explore factorization and basic arithmetic properties.
    </>
  ),

  (num: number) => (
    <>
      For <strong>{num}</strong>, factors are numbers that divide it exactly without leaving a remainder.
      Using division up to the square root of {num}, you can discover all factor pairs quickly and efficiently.
      Each factor below the square root corresponds to one above it, showing how {num} can be constructed from smaller numbers.
      Understanding this process reinforces concepts like multiples, divisibility, and factor pairs.
    </>
  ),

  (num: number) => (
    <>
      To explore the factors of <strong>{num}</strong>, start by dividing it by integers up to its square root.
      Each number that divides {num} completely forms a factor pair with the quotient, giving both members of the pair.
      This method minimizes redundant checks and provides a clear way to see how {num} can be expressed as products of smaller numbers.
      It’s particularly useful for students learning divisibility, multiplication, and the basics of number theory.
    </>
  ),
];

const FindFactors = ({ num }: NumProps) => {
  const steps = getOptimizedDivisionSteps(num);
  const randomParagraph =
    paragraphVersions[Math.floor(Math.random() * paragraphVersions.length)](num);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">
        How to Find the Factors of {num}?
      </h2>
      <p className="text-gray-700 leading-relaxed">{randomParagraph}</p>

      <div className="bg-purple-50 border border-purple-100 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-700 mb-4">
          Optimized steps to find factors of {num}:
        </h3>
        <ul className="space-y-2">
          {steps.map((step, idx) => (
            <li key={idx} className="text-gray-700 flex items-center">
              <span className="text-purple-600 mr-2">•</span>
              {step}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-gray-700 leading-relaxed">
        This method avoids unnecessary checks and quickly identifies all factor pairs, making it especially helpful for larger numbers.
      </p>
      <p className="text-gray-700">
        Find factors and factor pairs of any number with our{" "}
        <Link
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          href="/calculators/factor-checker"
        >
          Factor Checker
        </Link>{" "}
        tool.
      </p>
    </section>
  );
};

export default FindFactors;
