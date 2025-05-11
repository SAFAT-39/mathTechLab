const faqs = [
  {
    question: "What is a factor in mathematics?",
    answer:
      "A factor is a whole number that divides another number evenly without leaving a remainder. For example, 3 is a factor of 12 because 12 ÷ 3 = 4 with no remainder. Factors are fundamental in number theory and are essential for understanding prime factorization, greatest common factors (GCF), and least common multiples (LCM).",
  },
  {
    question: "How do I find all factors of a number?",
    answer:
      "To find all factors of a number, start with 1 and the number itself, then systematically check each number up to the square root. For example, to find factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Our Factor Checker tool automates this process, showing you all factors and their pairs instantly.",
  },
  {
    question: "What is the difference between factors and multiples?",
    answer:
      "Factors are numbers that divide another number evenly, while multiples are the products of multiplying a number by other whole numbers. For example, factors of 12 are 1, 2, 3, 4, 6, 12, while multiples of 12 are 12, 24, 36, 48, etc. Understanding this relationship is crucial for solving problems involving LCM and GCF.",
  },
  {
    question: "How do factor pairs work?",
    answer:
      "Factor pairs are two numbers that multiply together to give the original number. For example, the factor pairs of 24 are (1,24), (2,12), (3,8), and (4,6). Each pair multiplies to give 24. Our Factor Checker tool shows all factor pairs, making it easy to understand number relationships.",
  },
  {
    question: "What are prime factors?",
    answer:
      "Prime factors are the prime numbers that multiply together to give the original number. For example, the prime factors of 24 are 2 × 2 × 2 × 3. Understanding prime factors is essential for finding GCF, LCM, and simplifying fractions. Our tool helps visualize these relationships.",
  },
  {
    question: "How can I use the Factor Checker in my studies?",
    answer:
      "The Factor Checker is perfect for students learning number theory, teachers creating lesson plans, or anyone needing to verify factors quickly. It's particularly useful when working with fractions, finding common denominators, or solving problems involving GCF and LCM. Simply enter any positive whole number to get instant results.",
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
          Welcome to our comprehensive Factor Checker tool. Whether you're a student learning number theory, a teacher preparing lessons, or someone needing to find factors quickly, our tool provides instant results with detailed explanations.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Understanding Factors in Mathematics
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            A <strong>factor</strong> is a whole number that divides another number evenly without leaving a remainder. Factors are fundamental building blocks in number theory and are essential for understanding:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prime factorization</li>
            <li>Greatest Common Factor (GCF)</li>
            <li>Least Common Multiple (LCM)</li>
            <li>Simplifying fractions</li>
            <li>Finding common denominators</li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example:</p>
            <p>The factors of <strong>24</strong> are: <strong>1, 2, 3, 4, 6, 8, 12, 24</strong></p>
            <p>Because: 24 ÷ 1 = 24, 24 ÷ 2 = 12, 24 ÷ 3 = 8, 24 ÷ 4 = 6 (no remainders)</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Understanding Factor Pairs
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            A <strong>factor pair</strong> consists of two numbers that multiply together to give the original number. Understanding factor pairs is crucial for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visualizing number relationships</li>
            <li>Finding all factors systematically</li>
            <li>Understanding multiplication patterns</li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Factor Pairs of 24:</p>
            <ul className="list-none space-y-1">
              <li>1 × 24 = 24</li>
              <li>2 × 12 = 24</li>
              <li>3 × 8 = 24</li>
              <li>4 × 6 = 24</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          How to Find Factors: Step-by-Step Guide
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-600">Method 1: Division Method</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Start with 1 and the number itself</li>
            <li>Try dividing by each number up to the square root</li>
            <li>Record both the divisor and quotient as factors</li>
            <li>Stop when you reach the square root</li>
          </ol>

          <h3 className="text-xl font-semibold text-purple-600 mt-6">Method 2: Prime Factorization</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Break down the number into prime factors</li>
            <li>Use the prime factors to find all combinations</li>
            <li>Multiply the combinations to find all factors</li>
          </ol>

          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <p className="font-semibold">Example: Finding Factors of 24</p>
            <p>Prime factors: 2 × 2 × 2 × 3</p>
            <p>All factors: 1, 2, 3, 4, 6, 8, 12, 24</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Using Our Factor Checker Tool
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Our Factor Checker tool makes finding factors easy and educational:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enter any positive whole number</li>
            <li>Get instant results showing all factors</li>
            <li>View factor pairs in an organized format</li>
            <li>Learn from detailed explanations</li>
            <li>Perfect for homework help and verification</li>
          </ul>
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
