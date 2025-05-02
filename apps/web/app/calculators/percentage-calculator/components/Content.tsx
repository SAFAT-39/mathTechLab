export default function Content() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        Understanding Percentages
      </h2>
      <p className="text-gray-600 mb-4">
        A percentage is a way to express a number as a fraction of 100. It is denoted using the percent sign (%). For example, 50% means 50 out of 100, or 0.5 as a decimal.
      </p>

      <h3 className="text-xl font-semibold text-purple-600 mb-3">
        How to Calculate Percentages
      </h3>
      <p className="text-gray-600 mb-4">
        To calculate a percentage of a number, you can use the formula:
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="font-mono text-purple-700">
          (Value × Percentage) ÷ 100 = Result
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="font-mono text-purple-700">
          Percentage = (Value ÷ Total) × 100
        </p>
      </div>

      <h3 className="text-xl font-semibold text-purple-600 mb-3">
        Common Percentage Calculations
      </h3>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li className="mb-2">
          <strong>Finding a percentage of a number:</strong> What is 25% of 200? (200 × 25) ÷ 100 = 50
        </li>
        <li className="mb-2">
          <strong>Percentage increase:</strong> If a price increases from $100 to $120, the increase is 20%
        </li>
        <li className="mb-2">
          <strong>Percentage decrease:</strong> If a price decreases from $100 to $80, the decrease is 20%
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-purple-600 mb-3">
        Real-World Applications
      </h3>
      <p className="text-gray-600 mb-4">
        Percentages are used in many everyday situations:
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li className="mb-2">Calculating discounts during sales</li>
        <li className="mb-2">Determining interest rates on loans</li>
        <li className="mb-2">Calculating tips at restaurants</li>
        <li className="mb-2">Analyzing test scores and grades</li>
        <li className="mb-2">Understanding statistics and data analysis</li>
      </ul>
    </div>
  );
} 