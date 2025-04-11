export const metadata = {
  title: "Greatest Common Factor (GCF) Calculator",
  description:
    "Use our free Greatest Common Factor (GCF) Calculator to find the GCF of two or more numbers, view prime factorizations, and understand how GCF is calculated.",
};

const faqs = [
  {
    question: "What is the Greatest Common Factor (GCF)?",
    answer:
      "The Greatest Common Factor (GCF) is the largest number that divides two or more numbers without leaving a remainder. It's also known as the Greatest Common Divisor (GCD).",
  },
  {
    question: "How do I find the GCF of two numbers?",
    answer:
      "There are several methods to find the GCF: 1) Listing all factors and finding the largest common one, 2) Using prime factorization and taking the product of common prime factors with the smallest exponents, 3) Using the Euclidean algorithm for larger numbers.",
  },
  {
    question: "Why is GCF important?",
    answer:
      "GCF is important in many areas of mathematics, including simplifying fractions, finding equivalent fractions, solving word problems involving equal distribution, and in algebra for factoring polynomials.",
  },
  {
    question: "How do I use the GCF Calculator?",
    answer:
      "Simply enter two or more numbers separated by commas in the input box and press Calculate. The tool will show you the GCF, prime factorizations of each number, and explain how the GCF was found.",
  },
  {
    question: "Can I find the GCF of more than two numbers?",
    answer:
      "Yes! Our calculator can find the GCF of any number of positive integers. Just enter all the numbers separated by commas.",
  },
  {
    question: "What is the relationship between GCF and LCM?",
    answer:
      "The Greatest Common Factor (GCF) and Least Common Multiple (LCM) are related by the formula: GCF(a,b) × LCM(a,b) = a × b. This relationship can be used to find one when you know the other.",
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
          🧠 What is the Greatest Common Factor (GCF)?
        </h2>
        <div className="pl-1 pt-2">
          <p>
            The <strong>Greatest Common Factor (GCF)</strong> is the largest number that divides two or more numbers without leaving a remainder. It's also known as the Greatest Common Divisor (GCD).
          </p>
          <blockquote>
            ✨ Example: <br />
            The GCF of <strong>24</strong> and <strong>36</strong> is <strong>12</strong>
            <br />
            Because 12 is the largest number that divides both 24 and 36 evenly.
          </blockquote>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🔍 Methods to Find the GCF
        </h2>
        <div className="pl-1 pt-2">
          <p>
            There are several methods to find the GCF of two or more numbers:
          </p>
          <h3>✅ Method 1: Listing Factors</h3>
          <p>
            List all factors of each number and find the largest one that appears in all lists.
          </p>
          <blockquote>
            ✨ Example with 24 and 36: <br />
            Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24 <br />
            Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 <br />
            Common factors: 1, 2, 3, 4, 6, 12 <br />
            GCF = 12
          </blockquote>
          
          <h3>✅ Method 2: Prime Factorization</h3>
          <p>
            Find the prime factorization of each number, then multiply the common prime factors with the smallest exponents.
          </p>
          <blockquote>
            ✨ Example with 24 and 36: <br />
            24 = 2³ × 3 <br />
            36 = 2² × 3² <br />
            Common prime factors: 2² × 3 = 12
          </blockquote>
          
          <h3>✅ Method 3: Euclidean Algorithm</h3>
          <p>
            For larger numbers, the Euclidean algorithm is more efficient. It works by repeatedly dividing the larger number by the smaller one and taking the remainder until the remainder is zero.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧲 Applications of GCF
        </h2>
        <div className="pl-1 pt-2">
          <p>
            The GCF has many practical applications in mathematics and everyday life:
          </p>
          <ul>
            <li>
              <strong>Simplifying Fractions</strong>: Divide the numerator and denominator by their GCF to get the simplest form.
            </li>
            <li>
              <strong>Equal Distribution</strong>: Finding the largest size of equal groups that can be made from a set of items.
            </li>
            <li>
              <strong>Algebra</strong>: Factoring polynomials and solving equations.
            </li>
            <li>
              <strong>Cryptography</strong>: Used in various encryption algorithms.
            </li>
          </ul>
          <blockquote>
            ✨ Example: Simplifying 24/36 <br />
            GCF of 24 and 36 is 12 <br />
            24 ÷ 12 = 2 <br />
            36 ÷ 12 = 3 <br />
            Therefore, 24/36 = 2/3 (simplified)
          </blockquote>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧑‍🏫 How to Use the GCF Calculator
        </h2>
        <div className="pl-1 pt-2">
          <p>
            Our <strong>GCF Calculator</strong> makes it easy to find the greatest common factor of any set of numbers:
          </p>
          <ol>
            <li>
              Enter the numbers you want to find the GCF for, separated by commas (e.g., 24, 36, 48)
            </li>
            <li>
              Click the <strong>Calculate</strong> button
            </li>
            <li>
              View the results:
              <ul>
                <li>The GCF of your numbers</li>
                <li>Prime factorization of each number</li>
                <li>Explanation of how the GCF was found</li>
              </ul>
            </li>
          </ol>
          <p>
            The calculator works with any number of positive integers and provides a detailed breakdown of the calculation process.
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