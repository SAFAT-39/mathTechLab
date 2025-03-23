import Game2048 from "./Game";
import Script from "next/script";

const Page = () => {
  const faqs = [
    {
      question: "What is the 2048 game?",
      answer:
        "2048 is a classic number puzzle game where players slide numbered tiles to merge them and reach the tile with the number 2048.",
    },
    {
      question: "How do you play 2048?",
      answer:
        "Use arrow keys (or swipe on mobile) to move tiles. When two tiles with the same number touch, they merge into one with double the value. The goal is to reach the 2048 tile.",
    },
    {
      question: "Does the game save my progress if I close the tab?",
      answer:
        "Yes! Your game data is automatically stored in your browser. If you close the tab and come back later, you can pick up right where you left off.",
    },
    {
      question: "Is 2048 a strategy game?",
      answer:
        "Yes, 2048 requires strategic thinking to avoid getting stuck and to efficiently merge tiles to reach the highest score possible.",
    },
    {
      question: "Can I play 2048 on mobile?",
      answer:
        "Yes! The 2048 game on MathTechLab is fully mobile-friendly, so you can play on any device without downloads.",
    },
    {
      question: "Is there a way to win 2048 every time?",
      answer:
        "While there's no guaranteed win, using a strategy like keeping your highest number in a corner and avoiding random moves can help you get better scores consistently.",
    },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-1">
        Play 2048 Online - Free Number Game
      </h1>
      <p className="text-lg text-gray-700 text-center">
        Slide, merge, and strategize to reach 2048! Play the classic number
        puzzle game online for free.
      </p>
      <hr></hr>
      <Game2048 />
      {/* How to Play Section */}
      <section className="mt-[100px]">
        <h2 className="text-2xl font-semibold">How to Play 2048</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Use arrow keys (or swipe) to move tiles.</li>
          <li>Merge two identical tiles to create a larger number.</li>
          <li>Keep merging until you reach 2048!</li>
          <li>Game ends when no moves are left.</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          Why Play 2048 on MathTechLab?
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>💡 Fun and strategic gameplay</li>
          <li>🎓 Improves problem-solving and math skills</li>
          <li>📱 Play anywhere – mobile, tab & desktop friendly</li>
          <li>🚀 No downloads or sign-ups required</li>
          <li>
            📌 <strong>Auto-Save </strong>– Close the tab? No worries! Your
            progress is saved, so you can continue anytime.
          </li>
        </ul>
      </section>
      {/* FAQ Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 shadow">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            name: "2048",
            url: "https://mathtechlab.com/games/2048",
            image: "https://mathtechlab.com/images/2048-game-thumbnail.png",
            description:
              "Play the 2048 game online for free. Merge tiles, strategize, and reach 2048 in this fun and addictive number puzzle game!",
            author: {
              "@type": "Organization",
              name: "MathTechLab",
              url: "https://mathtechlab.com",
            },
            publisher: {
              "@type": "Organization",
              name: "MathTechLab",
            },
            genre: ["Puzzle", "Strategy"],
            operatingSystem: "Web",
            applicationCategory: "Game",
            playMode: "SinglePlayer",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          }),
        }}
      />
    </>
  );
};

export default Page;
