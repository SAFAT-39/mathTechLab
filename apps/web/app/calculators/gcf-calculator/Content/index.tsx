const faqs = [
  {
    question: "What is the Greatest Common Factor (GCF) in mathematics?",
    answer:
      "The Greatest Common Factor (GCF), also known as the Greatest Common Divisor (GCD), is the largest positive integer that divides two or more numbers without leaving a remainder. It's a fundamental concept in number theory, essential for simplifying fractions, solving algebraic equations, and understanding number relationships. For example, the GCF of 24 and 36 is 12, as 12 is the largest number that divides both 24 and 36 evenly.",
  },
  {
    question: "What are the different methods to find the Greatest Common Factor?",
    answer:
      "There are three main methods to find the GCF: 1) Listing Factors Method - list all factors of each number and find the largest common one, 2) Prime Factorization Method - break down numbers into prime factors and multiply common primes with smallest exponents, and 3) Euclidean Algorithm - an efficient method for larger numbers using division and remainders. Our GCF Calculator demonstrates all these methods with step-by-step explanations.",
  },
  {
    question: "How is the Greatest Common Factor used in real-world applications?",
    answer:
      "The GCF has numerous practical applications: simplifying fractions to their lowest terms, finding equivalent fractions, solving word problems involving equal distribution, factoring polynomials in algebra, and even in cryptography for encryption algorithms. It's particularly useful in engineering, computer science, and financial calculations where number relationships need to be optimized.",
  },
  {
    question: "What is the relationship between GCF and LCM (Least Common Multiple)?",
    answer:
      "The GCF and LCM are related by the fundamental formula: GCF(a,b) × LCM(a,b) = a × b. This relationship allows you to find one when you know the other. For example, if you know the GCF of 24 and 36 is 12, and their product is 864, then their LCM must be 864 ÷ 12 = 72. This relationship is crucial for solving problems involving fractions and finding common denominators.",
  },
  {
    question: "How can I use the GCF Calculator effectively?",
    answer:
      "Our GCF Calculator is designed for ease of use: simply enter two or more positive integers separated by commas, click Calculate, and get instant results. The calculator shows the GCF, prime factorizations of each number, and explains the calculation process step by step. It's perfect for homework help, lesson planning, or verifying your manual calculations.",
  },
  {
    question: "Why is understanding GCF important for students?",
    answer:
      "Understanding GCF is crucial for students as it's a foundational concept in mathematics. It helps develop number sense, problem-solving skills, and logical thinking. Knowledge of GCF is essential for working with fractions, algebra, and number theory. Our calculator helps students learn by showing detailed steps and explanations, making it an excellent educational tool.",
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
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Greatest Common Factor (GCF) Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our comprehensive Greatest Common Factor (GCF) Calculator. Whether you're a student learning number theory, a teacher preparing lessons, or someone needing to find GCFs quickly, our tool provides instant results with detailed explanations and multiple calculation methods.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Understanding the Greatest Common Factor
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            The <strong>Greatest Common Factor (GCF)</strong>, also known as the Greatest Common Divisor (GCD), is the largest positive integer that divides two or more numbers without leaving a remainder. Understanding GCF is essential for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Simplifying fractions</li>
            <li>Finding equivalent fractions</li>
            <li>Solving algebraic equations</li>
            <li>Understanding number relationships</li>
            <li>Working with polynomials</li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example:</p>
            <p>The GCF of <strong>24</strong> and <strong>36</strong> is <strong>12</strong></p>
            <p>Because 12 is the largest number that divides both 24 and 36 evenly:</p>
            <p>24 ÷ 12 = 2 (no remainder)</p>
            <p>36 ÷ 12 = 3 (no remainder)</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Methods to Find the Greatest Common Factor
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Method 1: Listing Factors</h3>
            <p className="text-gray-700 mb-2">
              List all factors of each number and find the largest one that appears in all lists.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Example with 24 and 36:</p>
              <ul className="list-none space-y-1">
                <li>Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24</li>
                <li>Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36</li>
                <li>Common factors: 1, 2, 3, 4, 6, 12</li>
                <li>GCF = 12</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Method 2: Prime Factorization</h3>
            <p className="text-gray-700 mb-2">
              Find the prime factorization of each number, then multiply the common prime factors with the smallest exponents.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Example with 24 and 36:</p>
              <ul className="list-none space-y-1">
                <li>24 = 2³ × 3</li>
                <li>36 = 2² × 3²</li>
                <li>Common prime factors: 2² × 3 = 12</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Method 3: Euclidean Algorithm</h3>
            <p className="text-gray-700 mb-2">
              For larger numbers, the Euclidean algorithm is more efficient. It works by repeatedly dividing the larger number by the smaller one and taking the remainder until the remainder is zero.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Example with 24 and 36:</p>
              <ul className="list-none space-y-1">
                <li>36 ÷ 24 = 1 remainder 12</li>
                <li>24 ÷ 12 = 2 remainder 0</li>
                <li>GCF = 12</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Applications of the Greatest Common Factor
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            The GCF has numerous practical applications in mathematics and everyday life:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Simplifying Fractions</strong>: Divide numerator and denominator by their GCF to get simplest form
            </li>
            <li>
              <strong>Equal Distribution</strong>: Finding largest size of equal groups from a set of items
            </li>
            <li>
              <strong>Algebra</strong>: Factoring polynomials and solving equations
            </li>
            <li>
              <strong>Engineering</strong>: Optimizing designs and calculations
            </li>
            <li>
              <strong>Cryptography</strong>: Used in various encryption algorithms
            </li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example: Simplifying 24/36</p>
            <ul className="list-none space-y-1">
              <li>GCF of 24 and 36 is 12</li>
              <li>24 ÷ 12 = 2</li>
              <li>36 ÷ 12 = 3</li>
              <li>Therefore, 24/36 = 2/3 (simplified)</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Using Our GCF Calculator
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Our GCF Calculator makes finding the greatest common factor easy and educational:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Enter two or more positive integers separated by commas</li>
            <li>Click the Calculate button</li>
            <li>View the results:
              <ul className="list-disc pl-6 mt-2">
                <li>The GCF of your numbers</li>
                <li>Prime factorization of each number</li>
                <li>Step-by-step explanation of the calculation</li>
                <li>Visual representation of the process</li>
              </ul>
            </li>
          </ol>
          <p className="text-gray-700">
            The calculator works with any number of positive integers and provides a detailed breakdown of the calculation process, making it perfect for learning and verification.
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