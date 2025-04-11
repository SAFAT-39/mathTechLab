

const faqs = [
  {
    question: "Can factors be negative?",
    answer:
      "Technically yes, every positive factor has a negative counterpart. But usually, we refer to positive factors only (called proper factors in school math).",
  },
  {
    question: "Is 1 always a factor?",
    answer: "Yes! 1 is a factor of every whole number.",
  },
  {
    question: "Is the number itself a factor?",
    answer: "Yes! Any number is a factor of itself.",
  },
  {
    question: "What’s the difference between factors and multiples?",
    answer:
      "Factors divide a number exactly. Multiples are what you get when you multiply that number by another whole number.",
  },
  {
    question: "How do I use the Factor Checker tool?",
    answer:
      "Simply enter any whole number in the input box and press the Calculate button. The tool will display all factors and factor pairs of the number instantly.",
  },
  {
    question: "What numbers can I use in the Factor Checker?",
    answer:
      "You can use any positive whole number. The tool works best for numbers greater than 0.",
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
          🧠 What is a Factor?
        </h2>
        <div className="pl-1 pt-2">
          <p>
            A <strong>factor</strong> of a number is a whole number that divides
            it evenly—leaving no remainder.
          </p>
          <p>
            In simple terms, if you can divide a number by another whole number
            and get a whole number result, then that other number is a factor.
          </p>
          <blockquote>
            ✨ Example: <br />
            <strong>6</strong> is a factor of <strong>24</strong>, because 24 ÷
            6 = 4 (no remainder).
          </blockquote>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🔗 What is a Factor Pair?
        </h2>
        <div className="pl-1 pt-2">
          <p>
            A <strong>factor pair</strong> is a set of two whole numbers that
            multiply together to make the original number.
          </p>
          <blockquote>
            ✨ Example with 24: <br />4 × 6 = 24 → So (4, 6) is a factor pair.
          </blockquote>
          <p>
            All factor pairs of <strong>24</strong>:
          </p>
          <ul>
            <li>(1, 24)</li>
            <li>(2, 12)</li>
            <li>(3, 8)</li>
            <li>(4, 6)</li>
          </ul>
          <p>
            Each pair multiplies to give <strong>24</strong>.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧲 How to Calculate Factors (Division Method)
        </h2>
        <div className="pl-1 pt-2">
          <p>
            You can find factors using the <strong>division method</strong>.
            Here's how:
          </p>
          <h3>✅ Step-by-step (using 24 as example):</h3>
          <ol>
            <li>
              Start with <strong>1</strong>: 24 ÷ 1 = 24 → Factor Pair: (1, 24)
            </li>
            <li>Try the next number: 24 ÷ 2 = 12 → Factor Pair: (2, 12)</li>
            <li>
              Continue checking every number up to <strong>√24 ≈ 4.89</strong>{" "}
              (just before 5):
              <ul>
                <li>24 ÷ 3 = 8 → ✔️</li>
                <li>24 ÷ 4 = 6 → ✔️</li>
              </ul>
            </li>
          </ol>
          <p>
            Once you reach numbers beyond √24, the pairs will start repeating in
            reverse.
          </p>
          <h3>✅ Final Factors of 24:</h3>
          <p>
            <strong>1, 2, 3, 4, 6, 8, 12, 24</strong>
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-purple-700">
          🧑‍🏫 How to Use the Factor Checker
        </h2>
        <div className="pl-1 pt-2">
          <p>
            You can use the <strong>Factor Checker Tool</strong> above to:
          </p>
          <ul>
            <li>
              Find <strong>all factors</strong> of any number
            </li>
            <li>
              View all <strong>factor pairs</strong>
            </li>
            <li>Quickly check math problems or verify homework</li>
          </ul>
          <p>
            Simply enter a number (like 30, 50, 81...), hit{" "}
            <strong>Calculate</strong>, and get instant results.
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
