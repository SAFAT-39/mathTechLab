import GameArea from "./GameArea";
import RelatedGames from "./components/RelatedGames";
import HowToUse from "./components/HowToUse";
import TipsAndStrategies from "./components/TipsAndStrategies";
import FAQ from "./components/FAQ";


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
        name: "Make 24 with arithmetic operations",
        text: "Use addition, subtraction, multiplication, and division to make 24.",
      },
      {
        "@type": "HowToStep",
        name: "Revert an operation",
        text: "Revert an operation by clicking left arrow button.",
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

  // Decoding constants - must match encoding constants
  const DECODE_MULTIPLIER = 47382;
  const DECODE_SUBTRACTION = 91627;

  const decodePuzzleIndex = (encoded: string): number | undefined => {
    const encodedNum = parseInt(encoded, 10);
    if (isNaN(encodedNum)) return undefined;
    // Decode: (encoded - DECODE_SUBTRACTION) / DECODE_MULTIPLIER
    const decoded = (encodedNum - DECODE_SUBTRACTION) / DECODE_MULTIPLIER;
    // Check if the decoded value is a valid integer
    if (Number.isInteger(decoded) && decoded >= 0) {
      return decoded;
    }
    return undefined;
  };

  const puzzleId = params.id ? decodePuzzleIndex(params.id) : undefined;

  const baseUrl = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";

  const competitionsRes = await fetch(`${baseUrl}/api/24-game/competitions`, {
    method: "GET",
    cache: "no-store", // ensures SSR fresh data
  });

  const competitionData = await competitionsRes.json();
  const leaderBoardRes = await fetch(`${baseUrl}/api/24-game/leaderboard`, {
    method: "GET",
    cache: "no-store", // ensures SSR fresh data
  });

  const leaderBoardData = await leaderBoardRes.json();

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow-md py-4">
        <div className="flex flex-col justify-center items-center gap-2 px-2">
          <h1 className="text-2xl text-center">24 Game – A Fun Math Challenge</h1>
          <h2 className="text-center md:w-[600px] font-semibold">
            The 24 Game is a fun and challenging math puzzle where you use four
            numbers and basic arithmetic operations (+, −, ×, ÷) to make 24. Test
            your problem-solving skills and see how fast you can find a solution!
          </h2>
        </div>
        <GameArea
          initialPuzzleId={puzzleId}
          competitionData={competitionData}
          leaderboardData={leaderBoardData}
        />
      </div>
      <section className="w-full mx-auto py-6 space-y-6 text-gray-800 bg-white mt-4 rounded-md">
        {/* How to Play Section */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <HowToUse steps={howToSchema.step} />

        {/* Tips & Strategies Section */}
        <hr  className="border-gray-300"/>
        <TipsAndStrategies />

        {/* FAQ Section */}
        <hr  className="border-gray-300"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <FAQ 
          faqs={[
            {
              question: 'Q: Is there always a solution?',
              answer: 'Yes always! The chosen sets of numbers always form 24.'
            },
            {
              question: 'Q: Can I play this game on mobile?',
              answer: 'Yes! The 24 Game on MathTechLab is fully responsive, mobile-friendly and works on all devices.'
            },
            {
              question: 'Q: Can I play with friends?',
              answer: 'Yes! Challenge your friends to see who can solve it fastest.'
            }
          ]}
        />
        <hr  className="border-gray-300"/>
        <RelatedGames relatedGames={relatedGames} />
      </section>
    </>
  );
};

export default Page;
