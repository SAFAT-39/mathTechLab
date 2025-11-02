'use client';

import { useState } from 'react';

export default function WhatPercentOfCalculator() {
  const [part, setPart] = useState('');
  const [whole, setWhole] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculatePercentage = () => {
    setError('');
    const numPart = parseFloat(part);
    const numWhole = parseFloat(whole);

    if (isNaN(numPart) || isNaN(numWhole) || numWhole === 0) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    const calculatedResult = (numPart / numWhole) * 100;
    setResult(calculatedResult);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-12">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-base">
          <input
            type="number"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            className="w-20 sm:w-24 px-1 py-2 text-base border border-gray-500 rounded-lg focus:border-purple-500 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="text-gray-700">is what percent of</span>
          <input
            type="number"
            value={whole}
            onChange={(e) => setWhole(e.target.value)}
            className="w-20 sm:w-24 px-1 py-2 text-base border border-gray-500 rounded-lg focus:border-purple-500 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="text-gray-700">=</span>
          <div className="w-24 sm:w-24 px-4 py-2 bg-purple-50 rounded-lg text-center text-base">
            {result !== null ? result.toFixed(2) + ' %' : '___'}
          </div>
        </div>

        <button
          onClick={calculatePercentage}
          className="w-full sm:w-auto bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Calculate
        </button>

        {error && (
          <div className="text-red-500 text-center">{error}</div>
        )}
      </div>
    </div>
  );
} 