"use client";

import { useState, useEffect } from "react";
import { Check, X, Award, RefreshCw, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
// @ts-ignore
import confetti from "canvas-confetti";

interface TimesTableQuizProps {
  tableNumber: number;
  questionCount?: number;
  title?: string;
}

const TimesTableQuiz = ({
  tableNumber,
  questionCount = 15,
  title = `Multiple choice - ${tableNumber} Times Table!`,
}: TimesTableQuizProps) => {
  const [questions, setQuestions] = useState<
    Array<{
      multiplicand: number;
      multiplier: number;
      correctAnswer: number;
      options: number[];
    }>
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Generate questions for the specified times table
  useEffect(() => {
    generateQuestions();
  }, [tableNumber, questionCount]);

  const generateQuestions = () => {
    // Reset quiz state
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizCompleted(false);

    // Create an array to hold all possible questions for this table
    const allPossibleQuestions = [];
    for (let i = 1; i <= 12; i++) {
      allPossibleQuestions.push({
        multiplicand: tableNumber,
        multiplier: i,
        correctAnswer: tableNumber * i,
      });
    }

    // Shuffle and limit to questionCount
    const shuffledQuestions = [...allPossibleQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(questionCount, 20));

    // Add options to each question
    const questionsWithOptions = shuffledQuestions.map((q) => {
      // Generate wrong options that are close to the correct answer
      const wrongOptions = generateWrongOptions(q.correctAnswer, tableNumber);

      // Combine correct and wrong options, then shuffle
      const options = [q.correctAnswer, ...wrongOptions.slice(0, 3)].sort(
        () => Math.random() - 0.5
      );

      return { ...q, options };
    });

    setQuestions(questionsWithOptions);
  };

  const generateWrongOptions = (correctAnswer: number, tableNumber: number) => {
    const wrongOptions = new Set<number>();

    // Add some options that are close to the correct answer
    wrongOptions.add(correctAnswer + 1);
    wrongOptions.add(correctAnswer - 1);
    wrongOptions.add(correctAnswer + tableNumber);
    wrongOptions.add(correctAnswer - tableNumber);

    // Add some random options within a reasonable range
    while (wrongOptions.size < 6) {
      const randomMultiplier = Math.floor(Math.random() * 12) + 1;
      const randomOption = tableNumber * randomMultiplier;
      if (randomOption !== correctAnswer) {
        wrongOptions.add(randomOption);
      }
    }

    // Convert to array, remove the correct answer if it somehow got in there
    return Array.from(wrongOptions).filter(
      (opt) => opt !== correctAnswer && opt > 0
    );
  };

  const handleAnswerClick = (answer: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => prev + 1);
    }

    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setQuizCompleted(true);
        if (correctAnswers / questions.length >= 0.8) {
          setShowConfetti(true);
          triggerConfetti();
        }
      }
    }, 1000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const restartQuiz = () => {
    generateQuestions();
    setShowConfetti(false);
  };

  // If no questions have been generated yet
  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading quiz...
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = (currentQuestionIndex / questions.length) * 100;
  const scorePercentage =
    questions.length > 0
      ? Math.round((correctAnswers / questions.length) * 100)
      : 0;

  return (
    <div className="relative">
      {/* SEO-friendly content (hidden visually but available to search engines) */}
      <div className="sr-only">
        <h1>Interactive {tableNumber} Times Table Quiz</h1>
        <p>
          Practice multiplication with our interactive {tableNumber} times table
          quiz. Perfect for students learning multiplication tables from 1 to
          12.
        </p>
        <p>
          This educational tool helps children master multiplication facts
          through engaging practice questions.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden shadow-lg">
        {/* Quiz header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
          <h2 className="text-xl sm:text-2xl font-bold text-center">{title}</h2>
          <p className="text-center text-white/80 mt-1">
            {quizCompleted
              ? `You got ${correctAnswers} out of ${questions.length} correct!`
              : `Question ${currentQuestionIndex + 1} of ${questions.length}`}
          </p>
        </div>

        {/* Main quiz container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Sidebar with stats */}
          <div className="bg-white/50 dark:bg-gray-800/50 p-4 md:p-6 flex flex-col gap-4 md:border-r border-indigo-100 dark:border-gray-700">
            <div className="flex flex-row md:flex-col gap-3 justify-around md:justify-start">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 bg-emerald-500 text-white px-3 py-1 rounded-lg">
                  <Check size={18} />
                  <span className="font-bold text-lg">{correctAnswers}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {correctAnswers}/{questions.length}
                </span>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 bg-rose-500 text-white px-3 py-1 rounded-lg">
                  <X size={18} />
                  <span className="font-bold text-lg">{wrongAnswers}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {wrongAnswers}/{questions.length}
                </span>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 bg-sky-500 text-white px-3 py-1 rounded-lg">
                  <Award size={18} />
                  <span className="font-bold text-lg">{scorePercentage}%</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {correctAnswers}/{questions.length}
                </span>
              </div>
            </div>

            {/* Custom Progress Bar (replacing Progress component) */}
            {!quizCompleted && (
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            )}

            {/* Custom Button (replacing Button component) */}
            {quizCompleted && (
              <button
                onClick={restartQuiz}
                className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors"
              >
                <RefreshCw size={16} />
                <span>Try Again</span>
              </button>
            )}
          </div>

          {/* Question area */}
          <div className="md:col-span-3 p-4 sm:p-6">
            {!quizCompleted ? (
              <>
                {/* Current question */}
                <div className="flex flex-col items-center">
                  <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-xl mx-auto"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6 px-4 rounded-xl mb-6 flex items-center justify-center">
                      <span className="text-4xl sm:text-6xl font-bold">
                        {currentQuestion.multiplicand} x{" "}
                        {currentQuestion.multiplier}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {currentQuestion.options.map((option, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswerClick(option)}
                          disabled={isAnswered}
                          className={`
                            relative overflow-hidden h-24 rounded-xl text-2xl sm:text-3xl font-bold transition-all
                            ${
                              isAnswered &&
                              option === currentQuestion.correctAnswer
                                ? "bg-emerald-500 text-white"
                                : isAnswered && option === selectedAnswer
                                  ? "bg-rose-500 text-white"
                                  : "bg-amber-400 hover:bg-amber-500 text-white"
                            }
                          `}
                        >
                          {option}
                          {isAnswered &&
                            option === currentQuestion.correctAnswer && (
                              <div className="absolute right-2 bottom-2">
                                <Check className="text-white" size={24} />
                              </div>
                            )}
                          {isAnswered &&
                            option === selectedAnswer &&
                            option !== currentQuestion.correctAnswer && (
                              <div className="absolute right-2 bottom-2">
                                <X className="text-white" size={24} />
                              </div>
                            )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
                        scorePercentage >= 80
                          ? "bg-emerald-100 text-emerald-600"
                          : scorePercentage >= 50
                            ? "bg-amber-100 text-amber-600"
                            : "bg-rose-100 text-rose-600"
                      }`}
                    >
                      {scorePercentage >= 80 ? (
                        <Award size={48} />
                      ) : scorePercentage >= 50 ? (
                        <ChevronRight size={48} />
                      ) : (
                        <RefreshCw size={48} />
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {scorePercentage >= 80
                      ? "Excellent Work!"
                      : scorePercentage >= 50
                        ? "Good Effort!"
                        : "Keep Practicing!"}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    You scored {correctAnswers} out of {questions.length} (
                    {scorePercentage}%)
                  </p>

                  <div className="flex justify-center">
                    {/* Custom Button (replacing Button component) */}
                    <button
                      onClick={restartQuiz}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors"
                    >
                      <RefreshCw size={16} />
                      <span>Try Again</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesTableQuiz;
