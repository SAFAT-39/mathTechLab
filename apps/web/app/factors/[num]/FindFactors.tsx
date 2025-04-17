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

const FindFactors = ({ num }: NumProps) => {
  const steps = getOptimizedDivisionSteps(num);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-700">
        How to Find the Factors of {num}?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        To find the factors of <strong className="font-bold">{num}</strong> using the division method
        efficiently, you only need to check numbers up to the square root of{" "}
        {num}. For every number that divides {num} evenly, both it and its
        corresponding pair ({num} ÷ that number) are factors.
      </p>

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
        This method avoids unnecessary checks and gives all factor pairs
        quickly. It's especially useful for larger numbers.
      </p>
      <p className="text-gray-700">
        Find factors and factors pair of any number with our{" "}
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
