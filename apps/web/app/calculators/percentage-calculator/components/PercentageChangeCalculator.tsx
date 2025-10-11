'use client';

import { useState } from 'react';

export default function PercentageChangeCalculator() {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculatePercentageChange = () => {
    setError('');
    const numFrom = parseFloat(fromValue);
    const numTo = parseFloat(toValue);

    if (isNaN(numFrom) || isNaN(numTo)) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    if (numFrom === 0) {
      setError('Initial value cannot be zero');
      setResult(null);
      return;
    }

    const change = ((numTo - numFrom) / numFrom) * 100;
    setResult(change);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-12">
      <div className="flex flex-col items-center space-y-6">
        <h3 className="text-lg font-semibold text-purple-700">Percentage Change</h3>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-base">
          <span className="text-gray-700">From</span>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="w-20 sm:w-24 px-1 py-2 text-base border border-gray-500 rounded-lg focus:border-purple-500 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="__"
          />
          <span className="text-gray-700">to</span>
          <input
            type="number"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
            className="w-20 sm:w-24 px-1 py-2 text-base border border-gray-500 rounded-lg focus:border-purple-500 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="__"
          />
          <span className="text-gray-700">=</span>
          <div className="w-20 sm:w-24 px-4 py-2 bg-purple-50 rounded-lg text-center text-base">
            {result !== null ? (
              <span className={result >= 0 ? 'text-green-600' : 'text-red-600'}>
                {result >= 0 ? '+' : ''}{result.toFixed(2)}%
              </span>
            ) : (
              '___'
            )}
          </div>
        </div>

        <button
          onClick={calculatePercentageChange}
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