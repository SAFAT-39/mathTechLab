const faqs = [
  {
    question: "What is a fraction in mathematics?",
    answer:
      "A fraction represents a part of a whole number, written as one number (numerator) divided by another number (denominator). Fractions are essential in mathematics for representing parts, ratios, and division. For example, 3/4 means three parts out of four equal parts of a whole. Fractions can be proper (numerator < denominator), improper (numerator > denominator), or mixed numbers (whole number + fraction).",
  },
  {
    question: "How do I add and subtract fractions?",
    answer:
      "To add or subtract fractions, you need a common denominator. Here's how: 1) Find the least common denominator (LCD) of the fractions, 2) Convert each fraction to an equivalent fraction with the LCD, 3) Add or subtract the numerators, 4) Simplify the result if possible. For example, to add 1/4 + 1/6: LCD = 12, so 1/4 = 3/12 and 1/6 = 2/12, therefore 1/4 + 1/6 = 3/12 + 2/12 = 5/12.",
  },
  {
    question: "How do I multiply and divide fractions?",
    answer:
      "To multiply fractions: 1) Multiply the numerators, 2) Multiply the denominators, 3) Simplify if possible. For example, 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2. To divide fractions: 1) Multiply by the reciprocal (flip the second fraction), 2) Multiply the numerators, 3) Multiply the denominators, 4) Simplify if possible. For example, 2/3 ÷ 3/4 = 2/3 × 4/3 = (2×4)/(3×3) = 8/9.",
  },
  {
    question: "How do I simplify fractions?",
    answer:
      "To simplify a fraction, divide both the numerator and denominator by their greatest common factor (GCF). For example, to simplify 12/18: GCF of 12 and 18 is 6, so 12/18 = (12÷6)/(18÷6) = 2/3. A fraction is in its simplest form when the numerator and denominator have no common factors other than 1.",
  },
  {
    question: "What are equivalent fractions?",
    answer:
      "Equivalent fractions are different fractions that represent the same value. You can create equivalent fractions by multiplying or dividing both the numerator and denominator by the same number. For example, 1/2, 2/4, 3/6, and 4/8 are all equivalent fractions because they represent the same value (0.5 or 50%). Understanding equivalent fractions is crucial for adding, subtracting, and comparing fractions.",
  },
  {
    question: "How do I convert between mixed numbers and improper fractions?",
    answer:
      "To convert a mixed number to an improper fraction: 1) Multiply the whole number by the denominator, 2) Add the numerator, 3) Write the result over the denominator. For example, 2 3/4 = (2×4 + 3)/4 = 11/4. To convert an improper fraction to a mixed number: 1) Divide the numerator by the denominator, 2) Write the quotient as the whole number, 3) Write the remainder over the denominator. For example, 11/4 = 2 3/4.",
  },
];

const Content = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-12 space-y-8">
      <div>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our comprehensive Fraction Calculator. Whether you're a student learning fraction operations, a teacher preparing lessons, or someone needing to work with fractions quickly, our tool provides instant results with detailed explanations and step-by-step solutions.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Understanding Fractions
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            A <strong>fraction</strong> represents a part of a whole number, written as one number (numerator) divided by another number (denominator). Fractions are essential in mathematics for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Representing parts of a whole</li>
            <li>Expressing ratios and proportions</li>
            <li>Performing division operations</li>
            <li>Working with measurements and units</li>
            <li>Solving real-world problems</li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example:</p>
            <p>The fraction <strong>3/4</strong> means:</p>
            <ul className="list-none space-y-1">
              <li>3 parts out of 4 equal parts</li>
              <li>0.75 in decimal form</li>
              <li>75% in percentage form</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Types of Fractions
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            There are several types of fractions you should understand:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Proper Fractions</strong>: Numerator is less than denominator (e.g., 3/4)
            </li>
            <li>
              <strong>Improper Fractions</strong>: Numerator is greater than denominator (e.g., 5/4)
            </li>
            <li>
              <strong>Mixed Numbers</strong>: Whole number and a proper fraction (e.g., 1 1/4)
            </li>
            <li>
              <strong>Equivalent Fractions</strong>: Different fractions representing the same value (e.g., 1/2 = 2/4)
            </li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Converting Between Types:</p>
            <ul className="list-none space-y-1">
              <li>Improper to Mixed: 5/4 = 1 1/4</li>
              <li>Mixed to Improper: 1 1/4 = 5/4</li>
              <li>Equivalent: 1/2 = 2/4 = 3/6 = 4/8</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Fraction Operations
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Adding and Subtracting Fractions</h3>
            <p className="text-gray-700 mb-2">
              To add or subtract fractions, you need a common denominator. Here's how:
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Steps:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Find the least common denominator (LCD)</li>
                <li>Convert each fraction to an equivalent fraction with the LCD</li>
                <li>Add or subtract the numerators</li>
                <li>Simplify the result if possible</li>
              </ol>
              <p className="mt-2">Example: 1/4 + 1/6 = 3/12 + 2/12 = 5/12</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Multiplying Fractions</h3>
            <p className="text-gray-700 mb-2">
              To multiply fractions, multiply the numerators and denominators:
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Steps:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Multiply the numerators</li>
                <li>Multiply the denominators</li>
                <li>Simplify if possible</li>
              </ol>
              <p className="mt-2">Example: 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Dividing Fractions</h3>
            <p className="text-gray-700 mb-2">
              To divide fractions, multiply by the reciprocal:
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Steps:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Flip the second fraction (find its reciprocal)</li>
                <li>Multiply the numerators</li>
                <li>Multiply the denominators</li>
                <li>Simplify if possible</li>
              </ol>
              <p className="mt-2">Example: 2/3 ÷ 3/4 = 2/3 × 4/3 = (2×4)/(3×3) = 8/9</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Simplifying Fractions
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            To simplify a fraction, divide both the numerator and denominator by their greatest common factor (GCF):
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example with 12/18:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Find the GCF of 12 and 18 (GCF = 6)</li>
              <li>Divide numerator by GCF: 12 ÷ 6 = 2</li>
              <li>Divide denominator by GCF: 18 ÷ 6 = 3</li>
              <li>Simplified fraction: 2/3</li>
            </ol>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Using Our Fraction Calculator
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Our Fraction Calculator makes working with fractions easy and educational:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Enter your fractions (proper, improper, or mixed numbers)</li>
            <li>Select the operation (add, subtract, multiply, divide)</li>
            <li>Click Calculate</li>
            <li>View the results:
              <ul className="list-disc pl-6 mt-2">
                <li>Simplified answer</li>
                <li>Step-by-step solution</li>
                <li>Equivalent fractions</li>
                <li>Decimal and percentage conversions</li>
              </ul>
            </li>
          </ol>
          <p className="text-gray-700">
            The calculator handles all types of fractions and provides detailed explanations for each step.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
};

export default Content; 