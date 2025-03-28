"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import confetti from "canvas-confetti";
import { Trophy, RefreshCw, Star, Sparkles, Clock } from "lucide-react";

interface DragAndDropStepProps {
  timesTable?: number;
  // bgGradient?: string;
  // buttonGradient?: string;
}

const DragAndDropStep: React.FC<DragAndDropStepProps> = ({
  timesTable = 1,
}) => {
  // State for tracking game progress
  const [problems] = useState(Array.from({ length: 12 }, (_, i) => i + 1));
  const [answers, setAnswers] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number | null>>(
    {}
  );
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [dragOverProblem, setDragOverProblem] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, [timesTable]);

  // Timer effect
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

  // Initialize the game with problems and shuffled answers
  const initializeGame = () => {
    // Generate answers (products of timesTable * problem)
    const newAnswers = problems.map((problem) => problem * timesTable);

    // Shuffle the answers
    const shuffledAnswers = [...newAnswers].sort(() => Math.random() - 0.5);

    // Reset user answers
    const emptyUserAnswers: Record<number, number | null> = {};
    problems.forEach((problem) => {
      emptyUserAnswers[problem] = null;
    });

    setAnswers(shuffledAnswers);
    setUserAnswers(emptyUserAnswers);
    setDraggedItem(null);
    setDragOverProblem(null);
    setShowResults(false);
    setScore(0);
    setGameCompleted(false);
    setTimer(0);
    setTimerRunning(true);
    setGameStarted(true);
  };

  // Handle drag start
  const handleDragStart = (answer: number) => {
    setDraggedItem(answer);
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent, problem: number) => {
    e.preventDefault();
    setDragOverProblem(problem);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverProblem(null);
  };

  // Handle drop
  const handleDrop = (e: React.DragEvent, problem: number) => {
    e.preventDefault();

    if (draggedItem !== null) {
      // Update user answers
      setUserAnswers((prev) => ({
        ...prev,
        [problem]: draggedItem,
      }));

      // Remove the answer from available answers
      setAnswers((prev) => prev.filter((a) => a !== draggedItem));

      // Check if all problems have answers
      const updatedUserAnswers = {
        ...userAnswers,
        [problem]: draggedItem,
      };

      const allAnswered = problems.every((p) => updatedUserAnswers[p] !== null);

      if (allAnswered) {
        setGameCompleted(true);
        setTimerRunning(false);
      }
    }

    setDraggedItem(null);
    setDragOverProblem(null);
  };

  // Handle removing an answer
  const handleRemoveAnswer = (problem: number) => {
    const removedAnswer = userAnswers[problem];

    if (removedAnswer !== null) {
      // Add the answer back to available answers
      setAnswers((prev) => [...prev, removedAnswer as number]);

      // Remove from user answers
      setUserAnswers((prev) => ({
        ...prev,
        [problem]: null,
      }));

      setGameCompleted(false);
    }
  };

  // Check answers
  const checkAnswers = () => {
    setShowResults(true);

    let correctCount = 0;

    problems.forEach((problem) => {
      const userAnswer = userAnswers[problem];
      const correctAnswer = problem * timesTable;

      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);

    // Trigger confetti if all answers are correct
    if (correctCount === problems.length) {
      triggerConfetti();
    }
  };

  // Trigger confetti animation
  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#4F46E5", "#7C3AED", "#EC4899", "#F59E0B", "#10B981"],
    });
  };

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Get color based on score
  const getScoreColor = () => {
    const percentage = (score / problems.length) * 100;
    if (percentage === 100) return "text-emerald-500";
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 60) return "text-yellow-500";
    if (percentage >= 40) return "text-orange-500";
    return "text-red-500";
  };

  // Get background color for answer tiles
  const getAnswerTileColor = (index: number) => {
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

    return colors[index % colors.length];
  };

  // Render a problem with its input
  const renderProblem = (problem: number, index: number) => {
    const isCorrect =
      showResults && userAnswers[problem] === problem * timesTable;
    const isIncorrect =
      showResults &&
      userAnswers[problem] !== null &&
      userAnswers[problem] !== problem * timesTable;

    return (
      <motion.div
        key={problem}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className={`relative flex  items-center ${dragOverProblem === problem ? "z-10" : ""}`}
      >
        <div className="w-28 md:w-36 text-right pr-2 md:pr-3">
          <span className="font-mono text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 whitespace-nowrap">
            {timesTable}×{problem}=
          </span>
        </div>

        <div
          className={`relative h-10 lg:h-14 w-20 rounded-xl flex items-center justify-center transition-all  ${
            isCorrect
              ? "bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-200/50"
              : isIncorrect
                ? "bg-gradient-to-br from-rose-400 to-red-500 shadow-lg shadow-rose-200/50"
                : dragOverProblem === problem
                  ? "bg-indigo-100 border-2 border-dashed border-indigo-400 shadow-lg"
                  : "bg-white border-2 border-gray-200 shadow-md hover:shadow-lg"
          }`}
          onDragOver={(e) => handleDragOver(e, problem)}
          onDrop={(e) => handleDrop(e, problem)}
        >
          {userAnswers[problem] !== null ? (
            <div className="relative w-full h-full flex items-center justify-center ">
              <motion.div
                className={`font-mono text-2xl font-bold ${
                  isCorrect || isIncorrect ? "text-white" : "text-indigo-700"
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {userAnswers[problem]}
              </motion.div>

              {!showResults && (
                <button
                  className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 shadow-sm"
                  onClick={() => handleRemoveAnswer(problem)}
                >
                  ×
                </button>
              )}

              {isCorrect && (
                <motion.div
                  className="absolute -right-3 -top-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-300 drop-shadow-md" />
                </motion.div>
              )}

              {isIncorrect && (
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                  <span className="text-rose-100 text-sm font-medium bg-rose-600 px-1.5 py-0.5 rounded-md">
                    {problem * timesTable}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <span className="text-gray-400 text-2xl">?</span>
          )}

          {/* Decorative elements */}
          {isCorrect && (
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
            >
              <div className="absolute inset-0 bg-white opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white/30 blur-md"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-white/30 blur-md"></div>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="mt-10">
        <h2 className="text-lg md:text-2xl font-bold mb-1 text-gray-800">
          Drag the colorful number tiles to the matching equations
        </h2>

        <p className="text-gray-600 font-medium md:w-[700px]">
          <b className="text-zinc-800">Drag and drop</b> your way to
          multiplication mastery with our beautiful interactive game. Match the
          correct answers and challenge yourself to beat your best time!
        </p>
      </div>
      <div className="mt-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-xl overflow-hidden border border-indigo-100">
        {/* Game header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 p-5 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <div className="absolute top-0 left-0 w-20 h-20 bg-white/20 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-xl transform translate-y-1/2"></div>
          </div>

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

            <div className="flex items-center space-x-3">
              {/* <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center border border-white/20">
                <Clock className="h-4 w-4 mr-2 text-indigo-200" />
                <span className="font-mono text-lg">{formatTime(timer)}</span>
              </div> */}

              {showResults && (
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center border border-white/20">
                  <Trophy className="h-4 w-4 mr-2 text-yellow-300" />
                  <span className="font-mono text-lg">
                    {score}/{problems.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" p-3 md:p-5 lg:p-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-2">
            {/* Problems container - Two Columns */}
            <div className=" md:w-2/3  grid grid-cols-2 gap-4 relative ">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-transparent rounded-2xl -z-10 blur-3xl opacity-50"></div>

              {problems.slice(0, 12).map((problem, index) => (
                <div
                  key={index}
                  className="relative  lg:p-2 bg-white/80 rounded-xl shadow-md"
                >
                  {renderProblem(problem, index)}
                </div>
              ))}
            </div>

            {/* Answers container */}

            <motion.div
              className="w-full md:w-1/3 bg-white/80 backdrop-blur-sm p-2 md:p-6 rounded-2xl border border-indigo-100 shadow-lg relative overflow-hidden flex flex-wrap justify-center gap-1 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {answers.map((answer, index) => (
                <motion.div
                  key={answer}
                  draggable
                  onDragStart={() => handleDragStart(answer)}
                  onDragEnd={handleDragEnd}
                  className={`h-14 w-20 bg-gradient-to-br ${getAnswerTileColor(index)} rounded-xl flex items-center justify-center cursor-grab shadow-lg relative`}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.03 }}
                >
                  <span className="font-mono text-2xl font-bold text-white">
                    {answer}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Results and buttons */}
          <div className="mt-10 flex flex-col items-center">
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-indigo-100 shadow-lg w-full max-w-lg text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 to-purple-50/50 -z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="flex justify-center mb-4">
                  {score === problems.length ? (
                    <div className="relative">
                      <Trophy className="h-16 w-16 text-yellow-500" />
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 2,
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-300 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 2,
                          delay: 0.5,
                        }}
                      />
                    </div>
                  ) : (
                    <Star className="h-16 w-16 text-indigo-400" />
                  )}
                </div>

                <h3 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Your Score:{" "}
                  <span className={getScoreColor()}>
                    {score}/{problems.length}
                  </span>
                </h3>

                <div className="flex items-center justify-center mb-4">
                  <div className="bg-indigo-100 px-4 py-2 rounded-full flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-indigo-500" />
                    <span className="font-mono font-bold text-indigo-700">
                      {formatTime(timer)}
                    </span>
                  </div>
                </div>

                <p className="text-indigo-700 text-lg">
                  {score === problems.length
                    ? "Perfect! You're a multiplication master! 🎉"
                    : score >= problems.length * 0.8
                      ? "Great job! Keep practicing to get even better! 👍"
                      : "Keep practicing! You'll get better with time. 💪"}
                </p>
              </motion.div>
            )}

            <div className="flex flex-wrap gap-4 justify-center">
              {gameCompleted && !showResults ? (
                <motion.button
                  onClick={checkAnswers}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-lg font-bold rounded-full shadow-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Check Answers</span>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-md transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-md transform -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                </motion.button>
              ) : (
                <motion.button
                  onClick={initializeGame}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-bold rounded-full shadow-lg flex items-center relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw className="h-5 w-5 mr-2 relative z-10" />
                  <span className="relative z-10">Play Again</span>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-md transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-md transform -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DragAndDropStep;
