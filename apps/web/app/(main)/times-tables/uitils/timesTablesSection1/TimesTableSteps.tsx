"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Step {
  id: number;
  title: string;
  description: string | ReactNode;
  color: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Visualize and Listen to Multiplication Tables",
    description:
      "Click the play button to hear each multiplication fact read aloud. Watching and listening together helps students build strong visual and auditory memory for times tables.",
    color: "bg-purple-600",
  },
  {
    id: 2,
    title: "Repeat Multiplication Facts Aloud",
    description: (
      <>
        Repeat every multiplication fact clearly and confidently. Speaking out
        loud improves focus, boosts memory, and makes learning multiplication
        tables faster and more effective. Once you're comfortable, move on to
        the next step — <b>Times Table Practice in Sequence</b>.
      </>
    ),

    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Recognize Times Table Patterns",
    description:
      "Explore the number patterns in each multiplication table. Understanding patterns helps kids memorize times tables naturally and develop stronger math problem-solving skills.",
    color: "bg-teal-600",
  },
  {
    id: 4,
    title: "Practice Quick Recall of Multiplication Facts",
    description:
      "Cover the answers and try to recall them quickly before checking. This fun recall exercise helps learners master multiplication tables with confidence and accuracy.",
    color: "bg-orange-600",
  },
  {
    id: 5,
    title: "Apply Multiplication Knowledge in Real Life",
    description: (
      <>
        Use your multiplication skills in math puzzles, quizzes, and word
        problems. Try our{" "}
        <Link
          href="/games"
          className=" inline-flex items-center text-blue-600 font-bold hover:underline active:underline"
        >
          Math Games
          <ArrowUpRight size={16} />
        </Link>{" "}
        to make learning multiplication more fun and interactive!
      </>
    ),
    color: "bg-pink-600",
  },
];

const TimesTableSteps = () => {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-800">
        Master the Times Table with MathTechLab
      </h2>

      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-5 rounded-xl bg-white shadow-lg border border-gray-200 hover:scale-101"
          >
            <div className="flex flex-col items-start ">
              <div className=" flex justify-center items-center gap-4">
                <div
                  className={`px-3 py-2 rounded-lg ${step.color} text-white`}
                >
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
              </div>

              <div>
                {/* <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3> */}
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimesTableSteps;
