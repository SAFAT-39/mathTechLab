"use client";

import type React from "react";
import { useState } from "react";

interface MulPracticeProps {
  timesTable?: number;
  bgGradient?: string;
  buttonGradient?: string;
}

const MulPracticeInSequence: React.FC<MulPracticeProps> = ({
  timesTable = 1, // Default value
  bgGradient = "from-purple-600 to-indigo-600", // Default gradient
  buttonGradient = "from-indigo-600 to-purple-600",
}) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCorrect, setIsCorrect] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const firstColumnProblems = [1, 2, 3, 4, 5, 6];
  const secondColumnProblems = [7, 8, 9, 10, 11, 12];

  const handleChange = (problem: number, value: string) => {
    if (value !== "" && !/^\d+$/.test(value)) return;
    setAnswers((prev) => ({ ...prev, [problem]: value }));

    if (showResults) {
      setIsCorrect((prev) => ({ ...prev, [problem]: false }));
      setShowResults(false);
      setAllCorrect(false);
      setShowAlert(false);
    }
  };

  const checkAnswers = (e: React.FormEvent) => {
    e.preventDefault();
    const allProblems = [...firstColumnProblems, ...secondColumnProblems];

    const unanswered = allProblems.filter((problem) => !answers[problem]);
    if (unanswered.length > 0) {
      setAlertMessage(
        `Please fill in all answers. You missed ${unanswered.length} question${unanswered.length > 1 ? "s" : ""}.`
      );
      setShowAlert(true);
      return;
    }

    const results: Record<number, boolean> = {};
    let correct = true;

    allProblems.forEach((problem) => {
      const userAnswer = Number.parseInt(answers[problem]);
      const correctAnswer = problem * timesTable;
      results[problem] = userAnswer === correctAnswer;
      if (userAnswer !== correctAnswer) correct = false;
    });

    setIsCorrect(results);
    setShowResults(true);
    setAllCorrect(correct);
  };

  const resetPractice = () => {
    setAnswers({});
    setIsCorrect({});
    setShowResults(false);
    setAllCorrect(false);
    setShowAlert(false);
  };

const renderProblem = (problem: number) => (
  <div key={problem} className="flex items-center gap-x-3.5 mb-2">
    <div className="w-24 text-right pr-2">
      <span
        className={`font-mono text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${bgGradient} whitespace-nowrap`}
      >
        {timesTable} × {problem}
      </span>
    </div>

    <span className="text-gray-500 text-3xl px-1 font-mono">=</span>

    <div className="relative">
      <input
        type="text"
        value={answers[problem] || ""}
        onChange={(e) => handleChange(problem, e.target.value)}
        className={`w-16 h-12 text-center text-3xl font-mono font-semibold rounded-lg border-2 shadow-sm outline-none transition-all ${
          showResults
            ? isCorrect[problem]
              ? "border-emerald-400 bg-emerald-50 ring-2 ring-emerald-200"
              : answers[problem]
                ? "border-rose-400 bg-rose-50 ring-2 ring-rose-200"
                : "border-amber-400 bg-amber-50 ring-2 ring-amber-200"
            : "border-indigo-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
        }`}
        placeholder="?"
        maxLength={3}
      />

      {showResults && (
        <div className="absolute -right-7 top-1/2 transform -translate-y-1/2">
          {isCorrect[problem] ? (
            <span className="text-emerald-500 text-2xl">✓</span>
          ) : answers[problem] ? (
            <span className="text-rose-500 text-xl font-medium">✗</span>
          ) : (
            <span className="text-amber-500 text-xl font-medium">?</span>
          )}
        </div>
      )}
    </div>
  </div>
);

return (
  <>
    <div className="mt-10 ">
      <h2 className="text-lg md:text-xl font-bold mb-1 text-gray-800">
        {timesTable} Times Table Practic In Sequence
      </h2>

      <p className="text-gray-600 font-medium md:w-[700px]">
        Fill in your answers and test your multiplication skills! Click
        <b className="text-zinc-800"> Check Answers</b> to see how you did! If
        you get everything right, challenge yourself with the {timesTable} times
        table in a shuffled order!
      </p>
    </div>
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-6 rounded-xl shadow-lg mt-7">
      <form onSubmit={checkAnswers}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 ">
          <div className="space-y-3 md:border-r border-gray-300 pr-[70px]">
            {firstColumnProblems.map(renderProblem)}
          </div>
          <div className="space-y-3">
            {secondColumnProblems.map(renderProblem)}
          </div>
        </div>

        {showResults && (
          <div
            className={`mt-8 p-4 rounded-lg text-center ${
              allCorrect
                ? "bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200"
                : "bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"
            }`}
          >
            <p
              className={`font-medium text-lg ${allCorrect ? "text-emerald-800" : "text-amber-800"}`}
            >
              {allCorrect
                ? "Amazing job! All answers are correct! 🎉"
                : "Keep practicing! Some answers need correction. 💪"}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col items-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="submit"
              className={`px-8 py-3 bg-gradient-to-r ${buttonGradient} text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0`}
            >
              Check Answers
            </button>

            {showResults && (
              <button
                type="button"
                onClick={resetPractice}
                className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all"
              >
                Try Again
              </button>
            )}
          </div>

          {showAlert && (
            <div className="mt-4 bg-rose-100 border-l-4 border-rose-500 text-rose-700 p-3 rounded-md max-w-md">
              <p className="font-medium">{alertMessage}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  </>
);
};

export default MulPracticeInSequence;
