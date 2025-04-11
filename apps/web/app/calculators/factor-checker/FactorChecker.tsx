"use client";

import { useState, useEffect } from "react";

function getFactors(n: number): number[] {
  const factors: number[] = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (n / i !== i) factors.push(n / i);
    }
  }
  return factors.sort((a, b) => a - b);
}

function getFactorPairs(n: number): [number, number][] {
  const pairs: [number, number][] = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      pairs.push([i, n / i]);
    }
  }
  return pairs;
}

export default function FactorChecker() {
  const [input, setInput] = useState("24");
  const [number, setNumber] = useState(24);
  const [factors, setFactors] = useState<number[]>(getFactors(24));
  const [pairs, setPairs] = useState<[number, number][]>(getFactorPairs(24));

  useEffect(() => {
    const n = Number(input);
    if (!isNaN(n) && n > 0) {
      setFactors(getFactors(n));
      setPairs(getFactorPairs(n));
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
          🔍 Factor Checker
        </h1>
        <h2 className="text-lg font-semibold text-center text-blue-700 mb-6">
          Calculate factors and factor pairs of any whole number.
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
          ✅ Factors of {number}
        </h2>
        <p className="text-gray-800 mb-4">{factors.join(", ")}</p>

        <h2 className="text-xl font-bold text-purple-800 mb-2">
          🔗 Factor Pairs of {number}
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {pairs.map(([a, b], idx) => (
            <li key={idx}>
              {a} × {b} = {number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
