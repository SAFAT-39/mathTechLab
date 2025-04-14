const faqs = [
  {
    question: "What is prime factorization in mathematics?",
    answer:
      "Prime factorization is the process of breaking down a composite number into its prime factors. A prime factor is a prime number that divides the original number exactly. This process is fundamental in number theory and has applications in cryptography, finding GCD and LCM, and simplifying fractions. For example, the prime factorization of 24 is 2³ × 3, meaning 24 = 2 × 2 × 2 × 3.",
  },
  {
    question: "What are prime numbers and why are they important?",
    answer:
      "Prime numbers are whole numbers greater than 1 that can only be divided evenly by 1 and themselves. They are the building blocks of all numbers, as every composite number can be expressed as a unique product of prime numbers. Prime numbers are crucial in cryptography, number theory, and modern computing. Examples include 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, etc.",
  },
  {
    question: "What are the practical applications of prime factorization?",
    answer:
      "Prime factorization has numerous practical applications: 1) Cryptography and data security, 2) Finding the Greatest Common Divisor (GCD) and Least Common Multiple (LCM), 3) Simplifying fractions and radicals, 4) Solving mathematical problems in number theory, 5) Computer algorithms and data structures, 6) Error detection and correction in digital communications.",
  },
  {
    question: "How does the Prime Factorization Calculator work?",
    answer:
      "Our Prime Factorization Calculator uses efficient algorithms to break down any positive integer into its prime factors. Simply enter a number greater than 1, and the calculator will show you: 1) The prime factorization with exponents, 2) A list of all prime factors, 3) A visual factor tree, and 4) Step-by-step explanation of the process. The calculator handles numbers up to 10 digits and provides instant results.",
  },
  {
    question: "What is a factor tree and how does it help in understanding prime factorization?",
    answer:
      "A factor tree is a visual representation that shows how a number breaks down into its prime factors. It's like a family tree for numbers, where each branch represents a division by a prime number. Factor trees help students understand the concept of prime factorization visually and make it easier to see how numbers decompose into their prime components. They're particularly useful for learning and teaching number theory.",
  },
  {
    question: "Is prime factorization unique for every number?",
    answer:
      "Yes! The Fundamental Theorem of Arithmetic states that every whole number greater than 1 has a unique prime factorization, regardless of the order in which the factors are written. This uniqueness is crucial in many mathematical applications, including cryptography and number theory. For example, 24 can only be written as 2³ × 3, no matter how you break it down.",
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
          Prime Factorization Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our comprehensive Prime Factorization Calculator. Whether you're a student learning number theory, a teacher preparing lessons, or someone needing to find prime factors quickly, our tool provides instant results with detailed explanations and visual representations.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Understanding Prime Factorization
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Prime factorization</strong> is the process of expressing a number as a product of its prime factors. A prime factor is a prime number that divides the original number exactly. This concept is fundamental in number theory and has numerous applications in mathematics and computer science.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example:</p>
            <p>The prime factorization of <strong>24</strong> is <strong>2³ × 3</strong></p>
            <p>This means 24 = 2 × 2 × 2 × 3</p>
            <p>Each factor (2 and 3) is a prime number, and we use exponents (³) to show repeated factors.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Understanding Factor Trees
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            A <strong>factor tree</strong> is a visual way to find the prime factorization of a number. It shows the step-by-step process of breaking down a number into its prime factors, making it easier to understand the concept.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example with 24:</p>
            <pre className="font-mono text-sm">
              {`24
├── 2 × 12
│   └── 2 × 6
│       └── 2 × 3
└── 3 × 8
    └── 2 × 4
        └── 2 × 2`}
            </pre>
            <p className="mt-2">The prime factors are found at the ends of the branches: 2, 2, 2, 3</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Methods to Find Prime Factorization
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Method 1: Division Method</h3>
            <p className="text-gray-700 mb-2">
              The division method involves repeatedly dividing the number by the smallest possible prime number until you reach 1.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Example with 24:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>24 ÷ 2 = 12</li>
                <li>12 ÷ 2 = 6</li>
                <li>6 ÷ 2 = 3</li>
                <li>3 ÷ 3 = 1</li>
              </ol>
              <p className="mt-2">The prime factors are the numbers you divided by: 2, 2, 2, 3</p>
              <p>Written with exponents: 2³ × 3</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Method 2: Factor Tree Method</h3>
            <p className="text-gray-700 mb-2">
              The factor tree method involves breaking down the number into two factors at each step until you reach prime numbers.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Steps:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Start with the number</li>
                <li>Find two factors that multiply to give the number</li>
                <li>Continue breaking down each factor until you reach prime numbers</li>
                <li>Multiply all the prime numbers to get the original number</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Applications of Prime Factorization
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Prime factorization has numerous practical applications in mathematics and beyond:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cryptography</strong>: Used in RSA encryption and other security algorithms
            </li>
            <li>
              <strong>Number Theory</strong>: Finding GCD, LCM, and solving Diophantine equations
            </li>
            <li>
              <strong>Fractions</strong>: Simplifying fractions and finding common denominators
            </li>
            <li>
              <strong>Computer Science</strong>: Algorithm design and data structures
            </li>
            <li>
              <strong>Error Detection</strong>: Used in error-correcting codes
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Using Our Prime Factorization Calculator
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Our Prime Factorization Calculator makes finding prime factors easy and educational:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Enter any positive integer greater than 1</li>
            <li>Click the Calculate button</li>
            <li>View the results:
              <ul className="list-disc pl-6 mt-2">
                <li>Prime factorization with exponents</li>
                <li>List of all prime factors</li>
                <li>Visual factor tree</li>
                <li>Step-by-step explanation</li>
              </ul>
            </li>
          </ol>
          <p className="text-gray-700">
            The calculator works with numbers up to 10 digits and provides instant results with detailed explanations.
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