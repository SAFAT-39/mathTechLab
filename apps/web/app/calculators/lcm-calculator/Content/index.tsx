export const metadata = {
  title: "Least Common Multiple (LCM) Calculator",
  description:
    "Use our free Least Common Multiple (LCM) Calculator to find the LCM of two or more numbers, view prime factorizations, and understand how LCM is calculated.",
};

const faqs = [
  {
    question: "What is the Least Common Multiple (LCM)?",
    answer:
      "The Least Common Multiple (LCM) is the smallest positive number that is a multiple of two or more numbers. It's the smallest number that all the given numbers divide into evenly.",
  },
  {
    question: "How do I find the LCM of two numbers?",
    answer:
      "There are several methods to find the LCM: 1) Listing multiples and finding the smallest common one, 2) Using prime factorization and taking the product of all prime factors with the highest exponents, 3) Using the formula LCM(a,b) = (a × b) ÷ GCF(a,b).",
  },
  {
    question: "Why is LCM important?",
    answer:
      "LCM is important in many areas of mathematics, including adding and subtracting fractions with different denominators, solving word problems involving repeating events, and in algebra for finding common denominators.",
  },
  {
    question: "How do I use the LCM Calculator?",
    answer:
      "Simply enter two or more numbers separated by commas in the input box and press Calculate. The tool will show you the LCM, prime factorizations of each number, and explain how the LCM was found.",
  },
  {
    question: "Can I find the LCM of more than two numbers?",
    answer:
      "Yes! Our calculator can find the LCM of any number of positive integers. Just enter all the numbers separated by commas.",
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
          🧠 What is the Least Common Multiple (LCM)?
        </h2>
        <div className="pl-1 pt-2">
          <p>
            The <strong>Least Common Multiple (LCM)</strong> is the smallest positive number that is a multiple of two or more numbers. It's the smallest number that all the given numbers divide into evenly.
          </p>
          <blockquote>
            ✨ Example: <br />
            The LCM of <strong>12</strong> and <strong>18</strong> is <strong>36</strong>
            <br />
            Because 36 is the smallest number that both 12 and 18 divide into evenly.
          </blockquote>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🔍 Methods to Find the LCM
        </h2>
        <div className="pl-1 pt-2">
          <p>
            There are several methods to find the LCM of two or more numbers:
          </p>
          <h3>✅ Method 1: Listing Multiples</h3>
          <p>
            List the multiples of each number until you find the smallest one that appears in all lists.
          </p>
          <blockquote>
            ✨ Example with 12 and 18: <br />
            Multiples of 12: 12, 24, 36, 48, 60, ... <br />
            Multiples of 18: 18, 36, 54, 72, ... <br />
            The smallest number that appears in both lists is 36 <br />
            LCM = 36
          </blockquote>
          
          <h3>✅ Method 2: Prime Factorization</h3>
          <p>
            Find the prime factorization of each number, then multiply all prime factors with the highest exponents.
          </p>
          <blockquote>
            ✨ Example with 12 and 18: <br />
            12 = 2² × 3 <br />
            18 = 2 × 3² <br />
            Take the highest exponent for each prime: 2² × 3² = 36
          </blockquote>
          
          <h3>✅ Method 3: Using GCF</h3>
          <p>
            For two numbers, you can use the formula: LCM(a,b) = (a × b) ÷ GCF(a,b)
          </p>
          <blockquote>
            ✨ Example with 12 and 18: <br />
            GCF of 12 and 18 is 6 <br />
            LCM = (12 × 18) ÷ 6 = 216 ÷ 6 = 36
          </blockquote>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧲 Applications of LCM
        </h2>
        <div className="pl-1 pt-2">
          <p>
            The LCM has many practical applications in mathematics and everyday life:
          </p>
          <ul>
            <li>
              <strong>Adding and Subtracting Fractions</strong>: Finding a common denominator to add or subtract fractions with different denominators.
            </li>
            <li>
              <strong>Repeating Events</strong>: Finding when two or more repeating events will occur at the same time.
            </li>
            <li>
              <strong>Time and Scheduling</strong>: Determining when multiple events with different cycles will align.
            </li>
            <li>
              <strong>Music</strong>: Understanding rhythm patterns and musical intervals.
            </li>
          </ul>
          <blockquote>
            ✨ Example: Adding 1/12 + 1/18 <br />
            LCM of 12 and 18 is 36 <br />
            1/12 = 3/36 <br />
            1/18 = 2/36 <br />
            1/12 + 1/18 = 3/36 + 2/36 = 5/36
          </blockquote>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧑‍🏫 How to Use the LCM Calculator
        </h2>
        <div className="pl-1 pt-2">
          <p>
            Our <strong>LCM Calculator</strong> makes it easy to find the least common multiple of any set of numbers:
          </p>
          <ol>
            <li>
              Enter the numbers you want to find the LCM for, separated by commas (e.g., 12, 18, 24)
            </li>
            <li>
              Click the <strong>Calculate</strong> button
            </li>
            <li>
              View the results:
              <ul>
                <li>The LCM of your numbers</li>
                <li>Prime factorization of each number</li>
                <li>Explanation of how the LCM was found</li>
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