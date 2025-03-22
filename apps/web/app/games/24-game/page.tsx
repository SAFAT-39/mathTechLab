import Head from "next/head";
import Game from "./Game";

const Page = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there always a solution?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes always! The choosen sets of numbers always form 24.",
        },
      },
      {
        "@type": "Question",
        name: "Can I play this game on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The game is fully responsive and works on all devices.",
        },
      },
      {
        "@type": "Question",
        name: "Can I play with friends?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Challenge your friends to see who can solve it fastest.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Play the 24 Game",
    description:
      "Learn how to solve the 24 Game by using four random numbers and basic math operations.",
    step: [
      {
        "@type": "HowToStep",
        name: "Get four random numbers",
        text: "You will be given four numbers to use in the game.",
      },
      {
        "@type": "HowToStep",
        name: "Make 24 with arithmetic operations",
        text: "Use addition, subtraction, multiplication, and division to make 24.",
      },
      {
        "@type": "HowToStep",
        name: "Use all numbers exactly once",
        text: "Ensure that you use all four numbers exactly once in the solution.",
      },
      {
        "@type": "HowToStep",
        name: "Solve it as fast as possible",
        text: "Try to solve the equation as quickly as you can.",
      },
    ],
  };
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </Head>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl">24 Game – A Fun Math Challenge</h1>
        <h2 className="text-center md:w-[600px] font-semibold">
          The 24 Game is a fun and challenging math puzzle where you use four
          numbers and basic arithmetic operations (+, −, ×, ÷) to make 24. Test
          your problem-solving skills and see how fast you can find a solution!
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center px-2 py-5 pb-16">
        <Game />
      </div>
      <section className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
        {/* How to Play Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary">🎮 How to Play</h2>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>
              You will get <strong>four random numbers</strong>.
            </li>
            <li>
              Use{" "}
              <strong>
                addition, subtraction, multiplication, and division
              </strong>{" "}
              to make <strong>24</strong>.
            </li>
            <li>
              You <strong>must use all four numbers exactly once</strong>.
            </li>
            <li>Tap or click numbers and operations to form an expression.</li>
            <li>
              If you get <strong>24</strong>, you win! Try to solve it as
              quickly as possible.
            </li>
          </ol>
        </div>

        {/* Tips & Strategies Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary">
            💡 Tips & Strategies
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              Look for <strong>multiples of 24</strong> (e.g., 6 × 4, 8 × 3).
            </li>
            <li>
              Try using <strong>division first</strong> if large numbers are
              present.
            </li>
            <li>
              Experiment with <strong>different orders of operations</strong>{" "}
              (PEMDAS).
            </li>
            <li>
              Practice with <strong>common number sets</strong> like (12, 3, 4,
              1) → <code>(12 ÷ (3 - 1) × 4 = 24)</code>.
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary">❓ FAQs</h2>
          <div className="mt-2 space-y-4">
            <div>
              <h3 className="font-semibold">Q: Is there always a solution?</h3>
              <p>A: Yes always! The choosen sets of numbers always form 24.</p>
            </div>
            <div>
              <h3 className="font-semibold">
                Q: Can I play this game on mobile?
              </h3>
              <p>
                A: Yes! The game is fully responsive and works on all devices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Q: Can I play with friends?</h3>
              <p>
                A: Yes! Challenge your friends to see who can solve it fastest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
