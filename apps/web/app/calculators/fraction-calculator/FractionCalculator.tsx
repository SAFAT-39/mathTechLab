'use client'
import { useState } from "react";

type Fraction = {
  numerator: number;
  denominator: number;
};

type Operation = "add" | "subtract" | "multiply" | "divide";

const FractionCalculator = () => {
  const [fraction1, setFraction1] = useState<Fraction>({ numerator: 2, denominator: 7 });
  const [fraction2, setFraction2] = useState<Fraction>({ numerator: 3, denominator: 8 });
  const [operation, setOperation] = useState<Operation>("add");
  const [result, setResult] = useState<Fraction | null>(null);
  const [steps, setSteps] = useState<string[]>([]);

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const lcm = (a: number, b: number): number => {
    return Math.abs(a * b) / gcd(a, b);
  };

  const simplifyFraction = (fraction: Fraction): Fraction => {
    const divisor = gcd(Math.abs(fraction.numerator), Math.abs(fraction.denominator));
    return {
      numerator: fraction.numerator / divisor,
      denominator: fraction.denominator / divisor,
    };
  };

  const handleNumeratorChange = (value: string, setFraction: (f: Fraction) => void, currentFraction: Fraction) => {
    // Allow empty string for backspace/delete operations
    if (value === "") {
      setFraction({ ...currentFraction, numerator: 0 });
      return;
    }

    const num = parseInt(value);
    // Only update if the number is valid
    if (!isNaN(num)) {
      setFraction({ ...currentFraction, numerator: num });
    }
  };

  const handleDenominatorChange = (value: string, setFraction: (f: Fraction) => void, currentFraction: Fraction) => {
    // Allow empty string for backspace/delete operations
    if (value === "") {
      setFraction({ ...currentFraction, denominator: 0 });
      return;
    }

    const num = parseInt(value);
    // Only update if the number is valid and not zero
    if (!isNaN(num) && num !== 0) {
      setFraction({ ...currentFraction, denominator: num });
    }
  };

  const calculateResult = () => {
    // Don't calculate if any denominator is zero
    if (fraction1.denominator === 0 || fraction2.denominator === 0) {
      return;
    }

    const newSteps: string[] = [];
    let resultFraction: Fraction;

    switch (operation) {
      case "add":
      case "subtract": {
        const lcd = lcm(fraction1.denominator, fraction2.denominator);

        const newFraction1 = {
          numerator: fraction1.numerator * (lcd / fraction1.denominator),
          denominator: lcd,
        };
        const newFraction2 = {
          numerator: fraction2.numerator * (lcd / fraction2.denominator),
          denominator: lcd,
        };

        resultFraction = {
          numerator: operation === "add"
            ? newFraction1.numerator + newFraction2.numerator
            : newFraction1.numerator - newFraction2.numerator,
          denominator: lcd,
        };

        // Paper-like steps
        newSteps.push(`Step 1: Find the Least Common Denominator (LCD)`);
        newSteps.push(`• LCD of ${fraction1.denominator} and ${fraction2.denominator} is ${lcd}`);
        newSteps.push(`\nStep 2: Convert fractions to equivalent fractions with LCD`);
        newSteps.push(`• First fraction: ${fraction1.numerator}/${fraction1.denominator}`);
        newSteps.push(`  × ${lcd / fraction1.denominator}/${lcd / fraction1.denominator} = ${newFraction1.numerator}/${lcd}`);
        newSteps.push(`• Second fraction: ${fraction2.numerator}/${fraction2.denominator}`);
        newSteps.push(`  × ${lcd / fraction2.denominator}/${lcd / fraction2.denominator} = ${newFraction2.numerator}/${lcd}`);
        newSteps.push(`\nStep 3: ${operation === "add" ? "Add" : "Subtract"} the numerators`);
        newSteps.push(`${newFraction1.numerator}/${lcd} ${operation === "add" ? "+" : "-"} ${newFraction2.numerator}/${lcd}`);
        newSteps.push(`= ${resultFraction.numerator}/${lcd}`);
        break;
      }

      case "multiply": {
        resultFraction = {
          numerator: fraction1.numerator * fraction2.numerator,
          denominator: fraction1.denominator * fraction2.denominator,
        };

        newSteps.push(`Step 1: Multiply the numerators and denominators`);
        newSteps.push(`• Numerators: ${fraction1.numerator} × ${fraction2.numerator} = ${resultFraction.numerator}`);
        newSteps.push(`• Denominators: ${fraction1.denominator} × ${fraction2.denominator} = ${resultFraction.denominator}`);
        newSteps.push(`\nResult: ${resultFraction.numerator}/${resultFraction.denominator}`);
        break;
      }

      case "divide": {
        resultFraction = {
          numerator: fraction1.numerator * fraction2.denominator,
          denominator: fraction1.denominator * fraction2.numerator,
        };

        newSteps.push(`Step 1: Convert division to multiplication by reciprocal`);
        newSteps.push(`${fraction1.numerator}/${fraction1.denominator} ÷ ${fraction2.numerator}/${fraction2.denominator}`);
        newSteps.push(`= ${fraction1.numerator}/${fraction1.denominator} × ${fraction2.denominator}/${fraction2.numerator}`);
        newSteps.push(`\nStep 2: Multiply numerators and denominators`);
        newSteps.push(`• Numerators: ${fraction1.numerator} × ${fraction2.denominator} = ${resultFraction.numerator}`);
        newSteps.push(`• Denominators: ${fraction1.denominator} × ${fraction2.numerator} = ${resultFraction.denominator}`);
        break;
      }
    }

    const simplifiedResult = simplifyFraction(resultFraction);
    if (simplifiedResult.numerator !== resultFraction.numerator ||
      simplifiedResult.denominator !== resultFraction.denominator) {
      newSteps.push(`\nStep ${operation === "multiply" ? "2" : "4"}: Simplify the fraction`);
      newSteps.push(`${resultFraction.numerator}/${resultFraction.denominator}`);
      newSteps.push(`= ${simplifiedResult.numerator}/${simplifiedResult.denominator}`);
    }

    setResult(simplifiedResult);
    setSteps(newSteps);
  };

  const inputStyle = "w-20 p-2 border rounded text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-8">
            Fraction Calculator
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-8">
            {/* First Fraction */}
            <div className="flex flex-col items-center">
              <input
                type="number"
                value={fraction1.numerator || ""}
                onChange={(e) => handleNumeratorChange(e.target.value, setFraction1, fraction1)}
                className={`${inputStyle} mb-2`}
              />
              <div className="w-20 border-t-2 border-black"></div>
              <input
                type="number"
                value={fraction1.denominator || ""}
                onChange={(e) => handleDenominatorChange(e.target.value, setFraction1, fraction1)}
                className={`${inputStyle} mt-2`}
              />
            </div>

            {/* Operation Selector */}
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value as Operation)}
              className="h-12 px-4 border rounded text-xl"
            >
              <option value="add">+</option>
              <option value="subtract">−</option>
              <option value="multiply">×</option>
              <option value="divide">÷</option>
            </select>

            {/* Second Fraction */}
            <div className="flex flex-col items-center">
              <input
                type="number"
                value={fraction2.numerator || ""}
                onChange={(e) => handleNumeratorChange(e.target.value, setFraction2, fraction2)}
                className={`${inputStyle} mb-2`}
              />
              <div className="w-20 border-t-2 border-black"></div>
              <input
                type="number"
                value={fraction2.denominator || ""}
                onChange={(e) => handleDenominatorChange(e.target.value, setFraction2, fraction2)}
                className={`${inputStyle} mt-2`}
              />
            </div>

            <div className="text-2xl">=</div>

            {/* Result */}
            {result ? (
              <div className="flex flex-col items-center">
                <span className="text-xl mb-2">{result.numerator}</span>
                <div className="w-20 border-t-2 border-black"></div>
                <span className="text-xl mt-2">{result.denominator}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">?</span>
                <div className="w-20 border-t-2 border-black"></div>
                <span className="text-2xl mt-2">?</span>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={calculateResult}
              disabled={fraction1.denominator === 0 || fraction2.denominator === 0}
              className="bg-purple-600 text-white py-2 px-8 rounded-md hover:bg-purple-700 transition-colors text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Calculate
            </button>
          </div>

          {/* Steps Section */}
          {result && steps.length > 0 && (
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Step-by-Step Solution</h3>
              <div className="bg-purple-50 p-4 rounded-lg space-y-2 font-mono text-gray-700 whitespace-pre-wrap">
                {steps.map((step, index) => (
                  <div key={index} className="leading-relaxed">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FractionCalculator; 