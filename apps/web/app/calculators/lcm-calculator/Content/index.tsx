const faqs = [
  {
    question: "What is the Least Common Multiple (LCM) in mathematics?",
    answer:
      "The Least Common Multiple (LCM) is the smallest positive integer that is a multiple of two or more numbers. It's the smallest number that all the given numbers divide into evenly. LCM is a fundamental concept in number theory, essential for working with fractions, solving algebraic equations, and understanding number relationships. For example, the LCM of 12 and 18 is 36, as 36 is the smallest number that both 12 and 18 divide into evenly.",
  },
  {
    question: "What are the different methods to find the Least Common Multiple?",
    answer:
      "There are three main methods to find the LCM: 1) Listing Multiples Method - list multiples of each number until finding the smallest common one, 2) Prime Factorization Method - break down numbers into prime factors and multiply all primes with highest exponents, and 3) Using GCF Method - for two numbers, use the formula LCM(a,b) = (a × b) ÷ GCF(a,b). Our LCM Calculator demonstrates all these methods with step-by-step explanations.",
  },
  {
    question: "How is the Least Common Multiple used in real-world applications?",
    answer:
      "The LCM has numerous practical applications: adding and subtracting fractions with different denominators, finding when repeating events will occur simultaneously, solving scheduling problems, understanding musical rhythms, and in engineering for synchronizing processes. It's particularly useful in time management, project planning, and financial calculations where cycles need to be aligned.",
  },
  {
    question: "What is the relationship between LCM and GCF (Greatest Common Factor)?",
    answer:
      "The LCM and GCF are related by the fundamental formula: GCF(a,b) × LCM(a,b) = a × b. This relationship allows you to find one when you know the other. For example, if you know the GCF of 12 and 18 is 6, and their product is 216, then their LCM must be 216 ÷ 6 = 36. This relationship is crucial for solving problems involving fractions and finding common denominators.",
  },
  {
    question: "How can I use the LCM Calculator effectively?",
    answer:
      "Our LCM Calculator is designed for ease of use: simply enter two or more positive integers separated by commas, click Calculate, and get instant results. The calculator shows the LCM, prime factorizations of each number, and explains the calculation process step by step. It's perfect for homework help, lesson planning, or verifying your manual calculations.",
  },
  {
    question: "Why is understanding LCM important for students?",
    answer:
      "Understanding LCM is crucial for students as it's a foundational concept in mathematics. It helps develop number sense, problem-solving skills, and logical thinking. Knowledge of LCM is essential for working with fractions, algebra, and number theory. Our calculator helps students learn by showing detailed steps and explanations, making it an excellent educational tool.",
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
          Least Common Multiple (LCM) Calculator
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our comprehensive Least Common Multiple (LCM) Calculator. Whether you're a student learning number theory, a teacher preparing lessons, or someone needing to find LCMs quickly, our tool provides instant results with detailed explanations and multiple calculation methods.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Understanding the Least Common Multiple
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            The <strong>Least Common Multiple (LCM)</strong> is the smallest positive integer that is a multiple of two or more numbers. Understanding LCM is essential for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adding and subtracting fractions</li>
            <li>Finding common denominators</li>
            <li>Solving algebraic equations</li>
            <li>Understanding number relationships</li>
            <li>Working with repeating patterns</li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example:</p>
            <p>The LCM of <strong>12</strong> and <strong>18</strong> is <strong>36</strong></p>
            <p>Because 36 is the smallest number that both 12 and 18 divide into evenly:</p>
            <p>36 ÷ 12 = 3 (no remainder)</p>
            <p>36 ÷ 18 = 2 (no remainder)</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Methods to Find the Least Common Multiple
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Method 1: Listing Multiples</h3>
            <p className="text-gray-700 mb-2">
              List the multiples of each number until you find the smallest one that appears in all lists.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Example with 12 and 18:</p>
              <ul className="list-none space-y-1">
                <li>Multiples of 12: 12, 24, 36, 48, 60, ...</li>
                <li>Multiples of 18: 18, 36, 54, 72, ...</li>
                <li>The smallest number that appears in both lists is 36</li>
                <li>LCM = 36</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Method 2: Prime Factorization</h3>
            <p className="text-gray-700 mb-2">
              Find the prime factorization of each number, then multiply all prime factors with the highest exponents.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Example with 12 and 18:</p>
              <ul className="list-none space-y-1">
                <li>12 = 2² × 3</li>
                <li>18 = 2 × 3²</li>
                <li>Take the highest exponent for each prime: 2² × 3² = 36</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Method 3: Using GCF</h3>
            <p className="text-gray-700 mb-2">
              For two numbers, you can use the formula: LCM(a,b) = (a × b) ÷ GCF(a,b)
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold">Example with 12 and 18:</p>
              <ul className="list-none space-y-1">
                <li>GCF of 12 and 18 is 6</li>
                <li>LCM = (12 × 18) ÷ 6 = 216 ÷ 6 = 36</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Applications of the Least Common Multiple
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            The LCM has numerous practical applications in mathematics and everyday life:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Adding and Subtracting Fractions</strong>: Finding a common denominator to add or subtract fractions with different denominators
            </li>
            <li>
              <strong>Repeating Events</strong>: Finding when two or more repeating events will occur at the same time
            </li>
            <li>
              <strong>Time and Scheduling</strong>: Determining when multiple events with different cycles will align
            </li>
            <li>
              <strong>Engineering</strong>: Synchronizing processes and optimizing designs
            </li>
            <li>
              <strong>Music</strong>: Understanding rhythm patterns and musical intervals
            </li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="font-semibold">Example: Adding 1/12 + 1/18</p>
            <ul className="list-none space-y-1">
              <li>LCM of 12 and 18 is 36</li>
              <li>1/12 = 3/36</li>
              <li>1/18 = 2/36</li>
              <li>1/12 + 1/18 = 3/36 + 2/36 = 5/36</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Using Our LCM Calculator
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Our LCM Calculator makes finding the least common multiple easy and educational:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Enter two or more positive integers separated by commas</li>
            <li>Click the Calculate button</li>
            <li>View the results:
              <ul className="list-disc pl-6 mt-2">
                <li>The LCM of your numbers</li>
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