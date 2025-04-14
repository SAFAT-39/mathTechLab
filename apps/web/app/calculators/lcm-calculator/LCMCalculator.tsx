"use client";

import { useState, useEffect } from "react";

function getPrimeFactors(n: number): number[] {
  const factors: number[] = [];
  let num = n;

  // Handle 2 separately
  while (num % 2 === 0) {
    factors.push(2);
    num /= 2;
  }

  // Check odd numbers up to sqrt(n)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }

  // If num is still greater than 2, it's a prime number
  if (num > 2) {
    factors.push(num);
  }

  return factors;
}

function findLCM(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];

  // Find prime factors for each number
  const primeFactorsMap = numbers.map(num => {
    const factors = getPrimeFactors(num);
    const factorCounts: { [key: number]: number } = {};

    factors.forEach(factor => {
      factorCounts[factor] = (factorCounts[factor] || 0) + 1;
    });

    return factorCounts;
  });

  // Find all prime factors with their maximum exponents
  const allFactors: { [key: number]: number } = {};

  // Get all unique prime factors
  const allPrimeFactors = new Set<number>();
  primeFactorsMap.forEach(factorCounts => {
    Object.keys(factorCounts).forEach(factor => {
      allPrimeFactors.add(Number(factor));
    });
  });

  // Find maximum exponent for each prime factor
  allPrimeFactors.forEach(factor => {
    let maxExponent = 0;

    primeFactorsMap.forEach(factorCounts => {
      if (factorCounts[factor] !== undefined && factorCounts[factor] > maxExponent) {
        maxExponent = factorCounts[factor];
      }
    });

    if (maxExponent > 0) {
      allFactors[factor] = maxExponent;
    }
  });

  // Calculate LCM by multiplying prime factors with their maximum exponents
  let lcm = 1;
  Object.entries(allFactors).forEach(([base, exponent]) => {
    lcm *= Math.pow(Number(base), exponent);
  });

  return lcm;
}

function formatPrimeFactorization(factors: number[]): string {
  if (factors.length === 0) return "1";

  const counts: { [key: number]: number } = {};
  factors.forEach(factor => {
    counts[factor] = (counts[factor] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([base, exponent]) =>
      exponent === 1 ? base : `${base}<sup>${exponent}</sup>`
    )
    .join(" × ");
}

export default function LCMCalculator() {
  const [input, setInput] = useState("12, 18");
  const [numbers, setNumbers] = useState<number[]>([12, 18]);
  const [lcm, setLCM] = useState<number>(findLCM([12, 18]));
  const [primeFactors, setPrimeFactors] = useState<{ [key: number]: number[] }>({
    12: getPrimeFactors(12),
    18: getPrimeFactors(18)
  });
  const [formattedResults, setFormattedResults] = useState<{ [key: number]: string }>({
    12: formatPrimeFactorization(getPrimeFactors(12)),
    18: formatPrimeFactorization(getPrimeFactors(18))
  });

  useEffect(() => {
    const nums = input.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n) && n > 0);
    if (nums.length > 0) {
      setNumbers(nums);
      setLCM(findLCM(nums));

      const newPrimeFactors: { [key: number]: number[] } = {};
      const newFormattedResults: { [key: number]: string } = {};

      nums.forEach(num => {
        const factors = getPrimeFactors(num);
        newPrimeFactors[num] = factors;
        newFormattedResults[num] = formatPrimeFactorization(factors);
      });

      setPrimeFactors(newPrimeFactors);
      setFormattedResults(newFormattedResults);
    }
  }, [input]);

  const handleSubmit = () => {
    const nums = input.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n) && n > 0);
    if (nums.length === 0) {
      alert("Please enter at least one valid whole number.");
      return;
    }
    setNumbers(nums);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center p-4 w-full bg-white shadow-lg rounded-2xl gap-4">
      <div className="w-full lg:w-[400px]">
        <h2 className="text-3xl font-extrabold text-center text-purple-700">
          🔢 Least Common Multiple (LCM) Calculator
        </h2>
        <h3 className="text-lg font-semibold text-center text-blue-700 mb-6">
          Find the LCM of two or more numbers.
        </h3>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter numbers separated by commas (e.g., 12, 18)"
          />
          <button
            onClick={handleSubmit}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Calculate
          </button>
        </div>
      </div>
      <div className="bg-purple-50 p-4 rounded-xl shadow-inner w-full lg:w-[600px]">
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          ✨ Least Common Multiple
        </h2>
        <p className="text-gray-800 mb-4 text-xl font-mono">
          LCM({numbers.join(", ")}) = <span className="text-purple-700 font-bold">{lcm}</span>
        </p>

        <h2 className="text-xl font-bold text-purple-800 mb-2">
          📝 Prime Factorization of Each Number
        </h2>
        <div className="space-y-2 mb-4">
          {numbers.map(num => (
            <div key={num} className="bg-white p-2 rounded-lg">
              <p className="text-gray-800">
                <span className="font-semibold">{num}</span> ={" "}
                <span dangerouslySetInnerHTML={{ __html: formattedResults[num] }}></span>
              </p>
              <p className="text-gray-600 text-sm">
                Prime factors: {primeFactors[num].join(" × ")}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-purple-800 mb-2">
          🔍 How the LCM was found
        </h2>
        <div className="bg-white p-3 rounded-lg text-sm">
          <p className="mb-2">
            The LCM is the product of all prime factors that appear in any of the numbers,
            raised to the highest exponent they appear with in any of the numbers.
          </p>
          <p>
            For these numbers, the LCM is calculated by taking the product of all unique prime factors
            with their maximum exponents.
          </p>
        </div>
      </div>
    </div>
  );
} 