"use client";

import { RefreshCw } from "lucide-react";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

interface MulPracticeProps {
  timesTable?: number;
  bgGradient?: string;
  buttonGradient?: string;
}

const shuffleArray = (array: number[]) => {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const MulPracticeShuffled: React.FC<MulPracticeProps> = ({
  timesTable = 1,
  bgGradient = "from-purple-600 to-indigo-600",
  buttonGradient = "from-indigo-600 to-purple-600",
}) => {
  const [problems, setProblems] = useState<number[]>([]);
  useEffect(
    () => setProblems(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])),
    []
  );

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCorrect, setIsCorrect] = useState<Record<number, boolean>>({});
  const [popped, setPopped] = useState<Record<number, boolean>>({});
  const [explodeFor, setExplodeFor] = useState<Record<number, boolean>>({});

  const allFilled = useMemo(
    () =>
      problems.length > 0 &&
      problems.every((p) => answers[p] !== undefined && answers[p] !== ""),
    [answers, problems]
  );

  const handleChange = (problem: number, value: string) => {
    if (value !== "" && !/^\d+$/.test(value)) return;
    setAnswers((prev) => ({ ...prev, [problem]: value }));

    if (value === "") {
      setIsCorrect((prev) => {
        const next = { ...prev };
        delete next[problem];
        return next;
      });
      setExplodeFor((prev) => ({ ...prev, [problem]: false }));
      return;
    }

    const numeric = Number.parseInt(value, 10);
    const correctNow = numeric === problem * timesTable;
    setIsCorrect((prev) => ({ ...prev, [problem]: correctNow }));

    if (correctNow) {
      setPopped((prev) => {
        const already = !!prev[problem];
        if (!already) {
          setExplodeFor((p) => ({ ...p, [problem]: true }));
          return { ...prev, [problem]: true };
        }
        return prev;
      });
    } else {
      setPopped((prev) => {
        if (prev[problem]) {
          const next = { ...prev };
          delete next[problem];
          return next;
        }
        return prev;
      });
    }
  };

  const resetPractice = () => {
    setAnswers({});
    setIsCorrect({});
    setExplodeFor({});
    setPopped({});
    setProblems(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
  };

  const renderProblem = (problem: number) => {
    const value = answers[problem] || "";
    const correct = isCorrect[problem] === true;
    const hasValue = value !== "";

    const borderClass = correct
      ? "border-emerald-400 bg-emerald-50 ring-2 ring-emerald-200"
      : hasValue
        ? "border-rose-400 bg-rose-50 ring-2 ring-rose-200"
        : "border-amber-400 bg-amber-50 ring-2 ring-amber-200";

    return (
      <div key={problem} className="flex items-center gap-x-3.5 mb-2">
        <div className="w-28 lg:w-32 text-right pr-2">
          <span
            className={`font-mono text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${bgGradient} whitespace-nowrap`}
          >
            {timesTable} × {problem}
          </span>
        </div>

        <span className="text-gray-500 text-3xl px-1 font-mono">=</span>

        <div className="relative">
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(problem, e.target.value)}
            className={`w-16 h-12 text-center text-3xl font-mono font-semibold rounded-lg border-2 shadow-sm outline-none transition-all ${
              hasValue
                ? borderClass
                : "border-indigo-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            }`}
            placeholder="?"
            maxLength={3}
          />

          <div className="absolute -right-7 top-1/2 transform -translate-y-1/2">
            {correct ? (
              <span className="text-emerald-500 text-2xl">✓</span>
            ) : hasValue ? (
              <span className="text-rose-500 text-xl font-medium">✗</span>
            ) : (
              <span className="text-amber-500 text-xl font-medium">?</span>
            )}
          </div>

          {explodeFor[problem] && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <ConfettiExplosion
                force={0.8}
                duration={2200}
                particleCount={50}
                width={280}
                onComplete={() =>
                  setExplodeFor((prev) => ({ ...prev, [problem]: false }))
                }
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-10 lg:mt-[60px]">
        <h2 className="text-lg md:text-3xl font-bold mb-1 text-gray-800">
          {timesTable} Times Table Practice (Shuffled)
        </h2>

        <p className="text-gray-600 font-medium lg:w-[800px] md:w-[700px]">
          Strengthen your multiplication skills with this interactive{" "}
          <b className="text-purple-700">{timesTable} Times Table Practice</b>{" "}
          activity. Solve each equation and watch answers validate instantly.
          When every field is filled, use{" "}
          <b className="text-zinc-800">Try Again</b> to restart.
        </p>
      </div>

      <div className="flex flex-col items-center w-full mx-auto p-6 rounded-xl border border-gray-300 mt-7 shadow-lg shadow-blue-100 ">
        {/* No submit; live validation */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-x-8 gap-y-2">
            {problems.map(renderProblem)}
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex flex-wrap gap-4 justify-right">
              {allFilled && (
                <button
                  type="button"
                  onClick={resetPractice}
                  className={`flex items-center px-8 py-3 bg-gradient-to-r ${buttonGradient} text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer`}
                >
                  <RefreshCw className="h-5 w-5 mr-2 " />
                  <span>Try Again</span>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MulPracticeShuffled;
