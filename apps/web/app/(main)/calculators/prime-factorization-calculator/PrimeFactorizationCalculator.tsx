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

function getFactorTree(n: number): string[] {
  const tree: string[] = [];
  let num = n;
  let level = 0;

  function addToTree(n: number, level: number) {
    if (n <= 1) return;

    const indent = "  ".repeat(level);
    if (n === num) {
      tree.push(`${indent}${n}`);
    }

    if (n % 2 === 0) {
      tree.push(`${indent}${n} = 2 × ${n / 2}`);
      addToTree(n / 2, level + 1);
    } else {
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
          tree.push(`${indent}${n} = ${i} × ${n / i}`);
          addToTree(n / i, level + 1);
          addToTree(i, level + 1);
          return;
        }
      }
      tree.push(`${indent}${n} (prime)`);
    }
  }

  addToTree(n, level);
  return tree;
}

export default function PrimeFactorizationCalculator() {
  const [input, setInput] = useState("24");
  const [number, setNumber] = useState(24);
  const [primeFactors, setPrimeFactors] = useState<number[]>(getPrimeFactors(24));
  const [formattedResult, setFormattedResult] = useState<string>(formatPrimeFactorization(getPrimeFactors(24)));
  const [factorTree, setFactorTree] = useState<string[]>(getFactorTree(24));

  useEffect(() => {
    const n = Number(input);
    if (!isNaN(n) && n > 0) {
      const factors = getPrimeFactors(n);
      setPrimeFactors(factors);
      setFormattedResult(formatPrimeFactorization(factors));
      setFactorTree(getFactorTree(n));
    }
  }, [number]);

  const handleSubmit = () => {
    const n = Number(input);
    if (isNaN(n) || !Number.isInteger(n)) {
      alert("Please enter a valid whole number.");
      return;
    }
    if (n < 1) {
      alert("Please enter a number greater than 0.");
      return;
    }
    setNumber(n);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center p-4 w-full bg-white shadow-lg rounded-2xl gap-4">
      <div className="w-full lg:w-[400px]">
        <h1 className="text-3xl font-extrabold text-center text-purple-700">
          🔢 Prime Factorization Calculator
        </h1>
        <h2 className="text-lg font-semibold text-center text-blue-700 mb-6">
          Find the prime factorization of any whole number.
        </h2>

        <div className="flex gap-2 mb-6">
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-purple-400 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            style={{ MozAppearance: "textfield" }}
            placeholder="Enter a number"
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
          ✨ Prime Factorization of {number}
        </h2>
        <p className="text-gray-800 mb-4 text-xl font-mono" dangerouslySetInnerHTML={{ __html: formattedResult }}></p>

        <h2 className="text-xl font-bold text-purple-800 mb-2">
          📝 Prime Factors (in order)
        </h2>
        <p className="text-gray-800 mb-4">{primeFactors.join(" × ")}</p>

        <h2 className="text-xl font-bold text-purple-800 mb-2">
          🌳 Factor Tree
        </h2>
        <div className="bg-white p-4 rounded-lg font-mono text-sm">
          {factorTree.map((line, idx) => (
            <div key={idx} className="text-gray-700">{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
} 