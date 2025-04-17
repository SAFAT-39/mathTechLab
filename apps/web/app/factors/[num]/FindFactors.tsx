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
    <section className="text-base space-y-4 mt-8">
      <h2 className="text-2xl font-semibold">
        How to Find the Factors of {num}?
      </h2>
      <p>
        To find the factors of <strong>{num}</strong> using the division method
        efficiently, you only need to check numbers up to the square root of{" "}
        {num}. For every number that divides {num} evenly, both it and its
        corresponding pair ({num} ÷ that number) are factors.
      </p>

      <p className="font-medium">Optimized steps to find factors of {num}:</p>
      <ul className="list-disc list-inside space-y-1">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>

      <p>
        This method avoids unnecessary checks and gives all factor pairs
        quickly. It’s especially useful for larger numbers.
      </p>
      <p>Find factors and factors pair of any number with our <Link className="text-blue-600 underline" href="/calculators/factor-checker">Factor Checker</Link> tool.</p>
    </section>
  );
};

export default FindFactors;
