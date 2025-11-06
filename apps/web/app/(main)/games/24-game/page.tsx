import Game from "./Game";
import RelatedGames from "../../components/RelatedGames";

interface PageProps {
  searchParams: Promise<{ id?: string }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
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
          text: "Yes! The 24 game on MathTechLab is fully responsive, mobile-friendly and works on all devices.",
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
        name: "Get four numbers",
        text: "You will be given four numbers to use in the game.",
      },
      {
        "@type": "HowToStep",
        name: "Tap or click numbsers and operations",
        text: "Tap or click numbers and operations to form an expression and two numbers will be combined",
      },
      {
        "@type": "HowToStep",
        name: "Revert an operation",
        text: "Revert an operation by clicking left arrow button.",
      },
      {
        "@type": "HowToStep",
        name: "Make 24 with arithmetic operations",
        text: "Use addition, subtraction, multiplication, and division to make 24.",
      },
      {
        "@type": "HowToStep",
        name: "Solve it as fast as possible",
        text: "Try to solve the puzzle as quickly as you can.",
      },
    ],
  };

  const relatedGames = [
    {
      title: "2048 Game",
      description: "Combine tiles to reach 2048!",
      href: "/games/2048",
      image: "/images/2048-thumbnail.png",
    },
    {
      title: "Math Sprint",
      description: "Solve math problems quickly!",
      href: "/games/math-sprint",
      image: "/images/math-sprint-thumbnail.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl text-center">24 Game – A Fun Math Challenge</h1>
        <h2 className="text-center md:w-[600px] font-semibold">
          The 24 Game is a fun and challenging math puzzle where you use four
          numbers and basic arithmetic operations (+, −, ×, ÷) to make 24. Test
          your problem-solving skills and see how fast you can find a solution!
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center px-2 py-5 pb-16">
        <Game initialPuzzleId={params.id ? parseInt(params.id) : undefined} />
      </div>
      <section className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
        {/* How to Play Section */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <div>
          <h2 className="text-2xl font-bold text-primary">🎮 How to Play</h2>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>
              You will get <strong>four numbers</strong>.
            </li>
            <li>
              Tap or click numbers and operations to form an{" "}
              <strong>expression</strong>.
            </li>
            <li>
              Two number will be <strong>combined</strong> once an operation is
              applied.
            </li>
            <li>
              You can <strong>revert</strong> an operation by clicking the left
              arrow button.
            </li>
            <li>
              Use{" "}
              <strong>
                addition, subtraction, multiplication, and division
              </strong>{" "}
              to make <strong>24</strong>.
            </li>
            <li>
              If you get <strong>24</strong>, you win! Try to solve it as
              quickly as possible to get highest score.
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
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
                A: Yes! The 2048 game on MathTechLab is fully responsive,
                mobile-friendly and works on all devices.
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
      <RelatedGames relatedGames={relatedGames} />
    </>
  );
};

export default Page;
