import { NumProps } from "./type";
import { getFactors, getPrimeFactorization, getFactorPairs } from "./utils";

const FAQs = ({ num }: NumProps) => {
  // Get factors, prime factorization, and factor pairs using utility functions
  const factors = getFactors(num);
  const primeFactorization = getPrimeFactorization(num);
  const factorPairs = getFactorPairs(num);

  const faqItems = [
    {
      question: `What are the factors of ${num}?`,
      answer: `The factors of ${num} are ${factors.join(", ")}.`,
    },
    {
      question: `What is the prime factorization of ${num}?`,
      answer: `The prime factorization of ${num} is ${primeFactorization.join(" × ")}.`,
    },
    {
      question: `How do I find the factors of ${num}?`,
      answer: `To find the factors of ${num}, start by dividing ${num} by every number from 1 up to the square root of ${num}.`,
    },
    {
      question: `What are factor pairs of ${num}?`,
      answer: `The factor pairs of ${num} are ${factorPairs
        .map(([a, b]) => `(${a}, ${b})`)
        .join(", ")}.`,
    },
    {
      question: `How can I use the factors of ${num}?`,
      answer: `The factors of ${num} can be used to simplify fractions, find the greatest common divisor (GCD), and determine multiples.`,
    },
    {
      question: `Are the factors of ${num} always positive?`,
      answer: `Factors can be both positive and negative. For example, the negative factors of ${num} are ${factors.map((f) => -f).join(", ")}.`,
    },
  ];

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="text-base space-y-4 mt-8">
      <h2 className="text-2xl font-semibold">
        Frequently Asked Questions about factors of {num}
      </h2>

      <ul className="space-y-4">
        {faqItems.map((item, idx) => (
          <li key={idx} className="border rounded p-1">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
};

export default FAQs;
