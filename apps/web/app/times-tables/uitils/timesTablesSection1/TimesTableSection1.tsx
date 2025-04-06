"use client";
import { useState } from "react";
import Link from "next/link";
import TimesTableSteps from "./TimesTableSteps";
import TimesTableWhy from "./TimesTableWhy";

interface TimesTableProps {
  tableNumber: number;
  titleGradient: string;
  cardGradient: string;
}

const TimesTableSection: React.FC<TimesTableProps> = ({
  tableNumber,
  titleGradient,
  cardGradient,
}) => {
  const [currentFact, setCurrentFact] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate multiplication facts dynamically
  const facts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    equation: `${tableNumber} × ${i + 1} = ${tableNumber * (i + 1)}`,
    result: tableNumber * (i + 1),
  }));

  // Play audio simulation
  const playAudio = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    setCurrentFact(1);

    let fact = 1;
    const totalFacts = 12;
    const intervalTime = 2500; // Allow time for speech

    const speakFact = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Adjust speed (1 is normal, lower is slower)
      utterance.pitch = 1;
      utterance.volume = 1;
      speechSynthesis.speak(utterance);
    };

    // Speak the first fact immediately
    speakFact(`${tableNumber} times ${fact} is ${tableNumber * fact}`);

    const interval = setInterval(() => {
      fact += 1;
      if (fact > totalFacts) {
        clearInterval(interval);
        setIsPlaying(false);
        return;
      }

      setCurrentFact(fact);
      speakFact(`${tableNumber} times ${fact} is ${tableNumber * fact}`);
    }, intervalTime);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-4">
        <Link
          className="flex items-center text-blue-600 hover:text-blue-800"
          href="/times-tables"
        >
          <span className="mr-2">←</span>
          Back to all tables
        </Link>

        <h1
          className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text ${titleGradient}`}
        >
          {tableNumber} Times Table
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        {/* Left side - Steps & Explanation */}
        <div className="lg:col-span-3 space-y-6">
          <TimesTableSteps />
          <TimesTableWhy tableNumber={tableNumber} />
        </div>

        {/* Right side - Times Table Card */}
        <div className="lg:col-span-2">
          <div className="sticky top-8">
            <div
              className={`overflow-hidden rounded-xl ${cardGradient} text-white shadow-xl`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex justify-between items-center">
                  <span>{tableNumber} Times Table</span>
                  <button
                    className="p-2 rounded-full hover:bg-white/20 text-white cursor-pointer"
                    onClick={playAudio}
                  >
                    {isPlaying ? "■" : "▶"}
                  </button>
                </h3>

                <div className="space-y-0">
                  {facts.map((fact) => (
                    <div
                      key={fact.id}
                      className={`p-0 rounded-lg transition-all ${
                        currentFact === fact.id && isPlaying
                          ? "bg-white/30 shadow-md"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <div className="flex justify-between items-center ">
                        <span className="text-2xl font-medium ">
                          {fact.equation}
                        </span>
                        <span className="text-3xl font-bold">
                          {fact.result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 p-4">
                <p className="text-white/90 text-sm">
                  Click the play button to hear each fact read aloud. Practice
                  saying them yourself to build memory.
                </p>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-6 bg-white p-5 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Quick Tips
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-700">✓ Recite with rhythm</li>
                <li className="text-gray-700">
                  ✓ Practice daily for 5 minutes
                </li>
                <li className="text-gray-700">
                  ✓ Use real objects to visualize
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesTableSection;
