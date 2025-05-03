export default function Content() {
  const faqs = [
    {
      question: "What is a percentage?",
      answer: "A percentage is a way to express a number as a fraction of 100. It is denoted using the percent sign (%). For example, 50% means 50 out of 100, or 0.5 as a decimal."
    },
    {
      question: "How do I calculate a percentage of a number?",
      answer: "To calculate a percentage of a number, multiply the number by the percentage and divide by 100. For example, to find 25% of 200: (200 × 25) ÷ 100 = 50."
    },
    {
      question: "How do I calculate what percentage one number is of another?",
      answer: "To find what percentage one number is of another, divide the first number by the second number and multiply by 100. For example, to find what percentage 50 is of 200: (50 ÷ 200) × 100 = 25%."
    },
    {
      question: "How do I calculate percentage increase or decrease?",
      answer: "To calculate percentage change, subtract the original value from the new value, divide by the original value, and multiply by 100. For example, if a price increases from $100 to $120: ((120 - 100) ÷ 100) × 100 = 20% increase."
    },
    {
      question: "What are some common uses of percentages?",
      answer: "Percentages are commonly used for calculating discounts, interest rates, tips, test scores, and analyzing data. They help express proportions and changes in a standardized way."
    },
    {
      question: "Can percentages be greater than 100%?",
      answer: "Yes, percentages can be greater than 100%. This indicates that the value is more than the whole. For example, if a company's profits increase from $100 to $250, that's a 150% increase."
    }
  ];

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
      <ul className="list-disc pl-6 text-gray-600 mb-8">
        <li className="mb-2">Calculating discounts during sales</li>
        <li className="mb-2">Determining interest rates on loans</li>
        <li className="mb-2">Calculating tips at restaurants</li>
        <li className="mb-2">Analyzing test scores and grades</li>
        <li className="mb-2">Understanding statistics and data analysis</li>
      </ul>

      <h3 className="text-2xl font-bold text-purple-700 mb-4">
        Frequently Asked Questions
      </h3>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold text-purple-600 mb-2">
              {faq.question}
            </h4>
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Structured Data for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
} 