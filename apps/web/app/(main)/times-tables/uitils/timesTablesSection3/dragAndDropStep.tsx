"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import confetti from "canvas-confetti";
import { Trophy, RefreshCw, Star, Sparkles, Clock, X } from "lucide-react";

interface DragAndDropStepProps {
  timesTable?: number;
}

const DragAndDropStep: React.FC<DragAndDropStepProps> = ({
  timesTable = 1,
}) => {
  const [problems] = useState(Array.from({ length: 12 }, (_, i) => i + 1));
  const [answers, setAnswers] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number | null>>(
    {}
  );
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [dragOverProblem, setDragOverProblem] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    initializeGame();
  }, [timesTable]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning]);

  const initializeGame = () => {
    const newAnswers = problems.map((p) => p * timesTable);
    const shuffled = [...newAnswers].sort(() => Math.random() - 0.5);
    const emptyAnswers: Record<number, number | null> = {};
    problems.forEach((p) => (emptyAnswers[p] = null));

    setAnswers(shuffled);
    setUserAnswers(emptyAnswers);
    setDraggedItem(null);
    setDragOverProblem(null);
    setScore(0);
    setGameCompleted(false);
    setTimer(0);
    setTimerRunning(true);
  };

  const handleDragStart = (answer: number) => setDraggedItem(answer);
  const handleDragOver = (e: React.DragEvent, problem: number) => {
    e.preventDefault();
    setDragOverProblem(problem);
  };
  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverProblem(null);
  };

  const handleDrop = (e: React.DragEvent, problem: number) => {
    e.preventDefault();
    if (draggedItem === null) return;

    const correctAnswer = problem * timesTable;
    const isCorrect = draggedItem === correctAnswer;

    setUserAnswers((prev) => ({
      ...prev,
      [problem]: draggedItem,
    }));
    setAnswers((prev) => prev.filter((a) => a !== draggedItem));

    if (isCorrect) {
      confetti({
        particleCount: 200,
        spread: 60,
        origin: { y: 0.7 },
        shapes: ["star"],
        colors: ["#FFD700", "#ff7340", "#00a63e", "#c27aff", "#ff37d8"],
      });
    }

    const updated = { ...userAnswers, [problem]: draggedItem };
    const allFilled = problems.every((p) => updated[p] !== null);

    if (allFilled) {
      setTimerRunning(false);
      setGameCompleted(true);

      // auto-calculate score
      let correctCount = 0;
      problems.forEach((p) => {
        if (updated[p] === p * timesTable) correctCount++;
      });
      setScore(correctCount);

      if (correctCount === problems.length) {
        confetti({
          particleCount: 250,
          spread: 200,
          origin: { y: 0.7 },
          colors: ["#4F46E5", "#7C3AED", "#EC4899", "#F59E0B", "#10B981"],
        });
      }
    }

    setDraggedItem(null);
    setDragOverProblem(null);
  };

  const handleRemoveAnswer = (problem: number) => {
    const removed = userAnswers[problem];
    if (removed !== null) {
      setAnswers((prev) => [...prev, removed]);
      setUserAnswers((prev) => ({ ...prev, [problem]: null }));
      setGameCompleted(false);
      setScore(0);
      setTimerRunning(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getScoreColor = () => {
    const pct = (score / problems.length) * 100;
    if (pct === 100) return "text-emerald-500";
    if (pct >= 80) return "text-green-500";
    if (pct >= 60) return "text-yellow-500";
    if (pct >= 40) return "text-orange-500";
    return "text-red-500";
  };

  const getAnswerTileColor = (i: number) => {
    const colors = [
      "from-violet-500 to-purple-600",
      "from-blue-500 to-indigo-600",
      "from-cyan-500 to-blue-600",
      "from-teal-500 to-emerald-600",
      "from-green-500 to-teal-600",
      "from-lime-500 to-green-600",
      "from-yellow-500 to-amber-600",
      "from-amber-500 to-orange-600",
      "from-orange-500 to-red-600",
      "from-red-500 to-pink-600",
      "from-pink-500 to-rose-600",
      "from-rose-500 to-fuchsia-600",
    ];
    return colors[i % colors.length];
  };

  const renderProblem = (problem: number, index: number) => {
    const userAnswer = userAnswers[problem];
    const correct = problem * timesTable;
    const isCorrect = userAnswer === correct;
    const isIncorrect =
      userAnswer !== null && userAnswer !== correct && !isCorrect;

    return (
      <motion.div
        key={problem}
        className="relative flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <div className="w-28 md:w-36 text-right pr-3">
          <span className="font-mono text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            {timesTable}×{problem}=
          </span>
        </div>

        <div
          className={`relative h-10 lg:h-14 w-20 rounded-xl flex items-center justify-center transition-all ${
            isCorrect
              ? "bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg"
              : isIncorrect
                ? "bg-gradient-to-br from-rose-400 to-red-500 shadow-lg"
                : dragOverProblem === problem
                  ? "bg-indigo-100 border-2 border-dashed border-indigo-400"
                  : "bg-white border-2 border-gray-200 shadow-md hover:shadow-lg"
          }`}
          onDragOver={(e) => handleDragOver(e, problem)}
          onDrop={(e) => handleDrop(e, problem)}
        >
          {userAnswer !== null ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className={`font-mono text-2xl font-bold ${
                  isCorrect || isIncorrect ? "text-white" : "text-indigo-700"
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                {userAnswer}
              </motion.div>

              {isIncorrect && (
                <button
                  onClick={() => handleRemoveAnswer(problem)}
                  className="absolute -top-2 -right-2 bg-white text-rose-600 rounded-full w-6 h-6 flex items-center justify-center shadow hover:bg-rose-100"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {isCorrect && (
                <motion.div
                  className="absolute -right-3 -top-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-300" />
                </motion.div>
              )}
            </div>
          ) : (
            <span className="text-gray-400 text-2xl">?</span>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="mt-10 lg:mt-[60px]">
        <h2 className="text-lg md:text-3xl font-bold mb-1 text-gray-800">
          Drag the colorful number tiles to the matching equations
        </h2>
        <p className="text-gray-600 font-medium lg:w-[800px] md:w-[700px]">
          <b className="text-zinc-800">Practice multiplication interactively</b>{" "}
          with our fun and engaging drag-and-drop times table game. Improve your
          math skills, accuracy, and speed as you match each equation with the
          correct answer tile. This hands-on learning activity makes mastering
          the{" "}
          <span className="text-indigo-700 font-semibold">
            {timesTable} Times Table{" "}
          </span>{" "}
          exciting for students of all ages!
        </p>
      </div>

      <div className="mt-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-xl overflow-hidden border border-indigo-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 p-5 text-white relative overflow-hidden">
          <div className="flex justify-between items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold flex items-center">
                <span className="mr-2">{timesTable}</span>
                <span className="text-white/80 text-2xl">×</span>
                <span className="ml-2">Times Table</span>
              </h2>
              <p className="text-indigo-100 mt-1">
                Match the correct answers by dragging them to each equation
              </p>
            </div>

            {gameCompleted && (
              <div className="bg-white/10 px-4 py-2 rounded-full flex items-center border border-white/20">
                <Trophy className="h-4 w-4 mr-2 text-yellow-300" />
                <span className="font-mono text-lg">
                  {score}/{problems.length}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Game */}
        <div className="p-3 md:p-5 lg:p-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-center md:gap-8 gap-6 p-2">
            {/* Problems */}
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="bg-white/80 rounded-xl shadow-md lg:p-2 relative"
                >
                  {renderProblem(problem, i)}
                </div>
              ))}
            </div>

            {/* Answers */}
            <motion.div
              className="w-full md:w-1/3 bg-white/80 lg:p-4 p-2 rounded-2xl border border-indigo-100 shadow-lg flex flex-wrap justify-center lg:gap-3 gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {answers.map((answer, i) => (
                <motion.div
                  key={answer}
                  draggable
                  onDragStart={() => handleDragStart(answer)}
                  onDragEnd={handleDragEnd}
                  className={`h-14 w-20 bg-gradient-to-br ${getAnswerTileColor(
                    i
                  )} rounded-xl flex items-center justify-center cursor-grab shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    opacity: draggedItem === answer ? 0 : 1,
                    scale: draggedItem === answer ? 0.7 : 1,
                  }}
                >
                  <span className="font-mono text-2xl font-bold text-white">
                    {answer}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Show results only after finishing */}
          {gameCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 p-6 bg-white/80 rounded-2xl border border-indigo-100 shadow-lg w-full max-w-lg text-center mx-auto"
            >
              <h3 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Your Score:{" "}
                <span className={getScoreColor()}>
                  {score}/{problems.length}
                </span>
              </h3>
              <p className="text-indigo-700 text-lg">
                {score === problems.length
                  ? "Perfect! You're a multiplication master! 🎉"
                  : score >= problems.length * 0.8
                    ? "Great job! Keep practicing to get even better! 👍"
                    : "Keep practicing! You'll get better with time. 💪"}
              </p>
              <motion.button
                onClick={initializeGame}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-bold rounded-full shadow-lg flex items-center mx-auto cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="h-5 w-5 mr-2" /> Play Again
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
      {/* How To Use Section */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          How to Play the Interactive Drag and Drop Times Table Game
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 font-medium">
          Learn and practice multiplication in a fun, hands-on way! This
          interactive times table drag-and-drop activity helps students build
          multiplication confidence, accuracy, and speed — ideal for math
          learners of all ages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto ">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-indigo-700 mb-2">
              Step 1: Understand the Equation
            </h3>
            <p className="text-gray-700">
              Each equation shows a multiplication fact — for example,{" "}
              {timesTable} × 3 = ?. Read carefully and get ready to find the
              matching answer tile below.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-purple-700 mb-2">
              Step 2: Drag and Drop the Correct Answer
            </h3>
            <p className="text-gray-700">
              Drag the colorful number tiles from the right side and drop each
              one into the correct equation box. Each tile represents a possible
              answer.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-yellow-700 mb-2">
              Step 3: Get Instant Feedback
            </h3>
            <p className="text-gray-700">
              As soon as you drop an answer, you’ll know right away if it’s
              correct or not. Correct matches turn{" "}
              <b className="text-emerald-600">green</b> with a celebration,
              while wrong ones turn <b className="text-rose-600">red</b> so you
              can try again instantly.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-emerald-700 mb-2">
              Step 4: Improve and Replay
            </h3>
            <p className="text-gray-700">
              Practice makes perfect! Use the <b>“Play Again”</b> button to
              retry and aim for a perfect score. Watch your progress and become
              a times table master!
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">
            This interactive math learning game strengthens multiplication
            skills, enhances memory retention, and boosts math confidence —
            perfect for students learning the <b>{timesTable} Times Table</b>{" "}
            and beyond.
          </p>
        </div>
      </section>
    </>
  );
};

export default DragAndDropStep;
