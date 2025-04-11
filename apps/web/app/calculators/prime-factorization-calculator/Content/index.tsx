export const metadata = {
  title: "Prime Factorization Calculator",
  description:
    "Use our free Prime Factorization Calculator to find the prime factors of any number, view the factor tree, and understand prime factorization.",
};

const faqs = [
  {
    question: "What is prime factorization?",
    answer:
      "Prime factorization is the process of breaking down a number into its prime factors. A prime factor is a prime number that divides the original number exactly.",
  },
  {
    question: "What are prime numbers?",
    answer:
      "Prime numbers are whole numbers greater than 1 that can only be divided evenly by 1 and themselves. Examples include 2, 3, 5, 7, 11, 13, etc.",
  },
  {
    question: "Why is prime factorization important?",
    answer:
      "Prime factorization is fundamental in mathematics. It's used in cryptography, finding the greatest common divisor (GCD), least common multiple (LCM), and simplifying fractions.",
  },
  {
    question: "How do I use the Prime Factorization Calculator?",
    answer:
      "Simply enter any whole number greater than 1 in the input box and press Calculate. The tool will show you the prime factorization, list of prime factors, and a factor tree.",
  },
  {
    question: "What is a factor tree?",
    answer:
      "A factor tree is a visual representation of how a number breaks down into its prime factors. It shows the step-by-step process of dividing the number by prime numbers.",
  },
  {
    question: "Is prime factorization unique?",
    answer:
      "Yes! The Fundamental Theorem of Arithmetic states that every whole number greater than 1 has a unique prime factorization, regardless of the order of the factors.",
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
    <section className="py-12 space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧠 What is Prime Factorization?
        </h2>
        <div className="pl-1 pt-2">
          <p>
            <strong>Prime factorization</strong> is the process of expressing a number as a product of its prime factors. A prime factor is a prime number that divides the original number exactly.
          </p>
          <blockquote>
            ✨ Example: <br />
            The prime factorization of <strong>24</strong> is <strong>2³ × 3</strong>
            <br />
            This means 24 = 2 × 2 × 2 × 3
          </blockquote>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🌳 Understanding Factor Trees
        </h2>
        <div className="pl-1 pt-2">
          <p>
            A <strong>factor tree</strong> is a visual way to find the prime factorization of a number. Here's how it works:
          </p>
          <blockquote>
            ✨ Example with 24: <br />
            24 <br />
            ├── 2 × 12 <br />
            │   └── 2 × 6 <br />
            │       └── 2 × 3 <br />
            └── 3 × 8 <br />
                └── 2 × 4 <br />
                    └── 2 × 2
          </blockquote>
          <p>
            The prime factors are found at the ends of the branches: 2, 2, 2, 3
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧲 How to Find Prime Factorization
        </h2>
        <div className="pl-1 pt-2">
          <p>
            You can find prime factorization using the <strong>division method</strong>. Here's how:
          </p>
          <h3>✅ Step-by-step (using 24 as example):</h3>
          <ol>
            <li>
              Start with the smallest prime number (2):
              <ul>
                <li>24 ÷ 2 = 12</li>
                <li>12 ÷ 2 = 6</li>
                <li>6 ÷ 2 = 3</li>
              </ul>
            </li>
            <li>
              Move to the next prime number (3):
              <ul>
                <li>3 ÷ 3 = 1</li>
              </ul>
            </li>
          </ol>
          <p>
            The prime factors are the numbers you divided by: 2, 2, 2, 3
          </p>
          <p>
            Written with exponents: 2³ × 3
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧑‍🏫 How to Use the Prime Factorization Calculator
        </h2>
        <div className="pl-1 pt-2">
          <p>
            Our <strong>Prime Factorization Calculator</strong> provides three ways to view the prime factorization:
          </p>
          <ul>
            <li>
              <strong>Prime Factorization</strong>: Shows the result with exponents (e.g., 2³ × 3)
            </li>
            <li>
              <strong>Prime Factors</strong>: Lists all prime factors in order
            </li>
            <li>
              <strong>Factor Tree</strong>: Visualizes the step-by-step breakdown
            </li>
          </ul>
          <p>
            Simply enter a number (like 24, 36, 100...), hit <strong>Calculate</strong>, and get instant results.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">❓ FAQ</h2>
        <div className="pl-1 pt-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-semibold">🔹 {faq.question}</h3>
              <p>{faq.answer}</p>
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