"use client";

import { useEffect, useState, useRef } from "react";
import { generateGame } from "./utils";
import NumberBox from "./NumberBox";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  Share2,
  Download,
} from "lucide-react";
import Fraction from "./Fraction";
import { useTimer } from "./useTimer";
import { useCountdownTimer } from "./useCountdownTimer";
import useGameGenerator from "./useGameGenerator";
import SolutionDialog from "./SolutionDialog";
import confetti from "canvas-confetti";
import { toJpeg } from "html-to-image";
import GIF from "gif.js";

export const infinity = 999999999999999;

interface BoardState {
  board: Fraction[];
  selectedIndex: number;
}

interface Math24GameProps {
  initialPuzzleId?: number;
  mode?: "puzzle" | "competition";
  onPuzzleSolved?: (puzzleId: number) => void;
  competitionTotalPuzzles?: number;
  competitionSolvedCount?: number;
  competitionDuration?: number; // in seconds
  onSkip?: () => void;
  onTimeUp?: () => void;
}

const Math24Game = ({
  initialPuzzleId,
  mode = "puzzle",
  onPuzzleSolved,
  competitionTotalPuzzles,
  competitionSolvedCount = 0,
  competitionDuration,
  onSkip,
  onTimeUp,
}: Math24GameProps) => {
  const [numbers, setNumbers] = useState(generateGame());
  const [boardStates, setBoardStates] = useState<BoardState[]>([]);
  const [curStateIndex, setCurStateIndex] = useState(-1);
  const gameRef = useRef<HTMLDivElement>(null);

  const operators = ["+", "-", "×", "÷"];
  const [selectedOperator, setSelectedOperator] = useState("");

  const [score, setScore] = useState(0);
  const [solved, setSolved] = useState(0);

  const [openSolution, setOpenSolution] = useState<boolean>(false);
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);
  const [frameImages, setFrameImages] = useState<string[]>([]);
  const idleCallbackRef = useRef<number | null>(null);

  const { time: timerTime, reset: resetTimer } = useTimer();
  const {
    time: countdownTime,
    remainingSeconds,
    reset: resetCountdown,
    isFinished,
  } = useCountdownTimer(0);
  const { game, nextGame, getCurrentPuzzleIndex } =
    useGameGenerator(initialPuzzleId);

  // Use countdown in competition mode, regular timer in puzzle mode
  const time =
    mode === "competition" && competitionDuration ? countdownTime : timerTime;

  // Initialize and reset countdown when competition starts
  useEffect(() => {
    if (
      mode === "competition" &&
      competitionDuration &&
      competitionDuration > 0
    ) {
      // Reset countdown to the full duration when competition starts
      resetCountdown(competitionDuration);
    } else if (mode !== "competition") {
      // Reset to 0 when not in competition mode
      resetCountdown(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [competitionDuration, mode]); // resetCountdown is stable, so we can omit it

  // Detect when time is up in competition mode
  useEffect(() => {
    // Only trigger if competition is actually running (has duration set) and time is finished
    if (
      mode === "competition" &&
      competitionDuration &&
      competitionDuration > 0 &&
      isFinished &&
      onTimeUp
    ) {
      onTimeUp();
    }
  }, [isFinished, mode, competitionDuration, onTimeUp]);

  // Capture frame function - deferred to avoid blocking UI
  // Note: html-to-image cannot run in Web Workers (no DOM access)
  // Instead, we use requestIdleCallback to run when browser is idle
  const captureFrame = () => {
    if (!gameRef.current || typeof window === "undefined") return;

    // Cancel any pending capture
    if (
      idleCallbackRef.current !== null &&
      typeof cancelIdleCallback !== "undefined"
    ) {
      cancelIdleCallback(idleCallbackRef.current);
      idleCallbackRef.current = null;
    }

    // Use requestIdleCallback to run capture when browser is idle
    if (typeof requestIdleCallback !== "undefined") {
      idleCallbackRef.current = requestIdleCallback(
        async () => {
          idleCallbackRef.current = null;
          try {
            const dataUrl = await toJpeg(gameRef.current!, {
              backgroundColor: "#e5e7eb",
              cacheBust: true,
              pixelRatio: 2, // Reduced for faster capture
              quality: 0.95,
            });
            setFrameImages((prev) => [...prev, dataUrl]);
          } catch (err) {
            console.error("Error capturing frame:", err);
          }
        },
        { timeout: 2000 } // Fallback timeout
      );
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(async () => {
        try {
          const dataUrl = await toJpeg(gameRef.current!, {
            backgroundColor: "#e5e7eb",
            cacheBust: true,
            pixelRatio: 1,
          });
          setFrameImages((prev) => [...prev, dataUrl]);
        } catch (err) {
          console.error("Error capturing frame:", err);
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (!game) return;
    setFrameImages([]);
    setBoardStates((prevStates) => {
      const newState: BoardState = {
        board: game.problem.map((num: number) => new Fraction(num)),
        selectedIndex: -1,
      };
      return [newState];
    });
    setCurStateIndex(0);
    setSelectedOperator("");
    setIsPuzzleSolved(false);
    if (mode === "competition" && competitionDuration) {
      // Don't reset countdown when puzzle changes in competition
    } else {
      resetTimer();
    }
    const timeoutId = setTimeout(() => captureFrame(), 100);
    return () => {
      clearTimeout(timeoutId);
      // Cancel any pending idle callbacks
      if (
        idleCallbackRef.current !== null &&
        typeof cancelIdleCallback !== "undefined"
      ) {
        cancelIdleCallback(idleCallbackRef.current);
        idleCallbackRef.current = null;
      }
    };
  }, [game]);

  const calculate = (num1: Fraction, op: string, num2: Fraction) => {
    switch (op) {
      case "+":
        return num1.add(num2);
      case "-":
        return num1.subtract(num2);
      case "×":
        return num1.multiply(num2);
      case "÷":
        return num1.divide(num2);
      default:
        return new Fraction(infinity);
    }
  };

  useEffect(() => {
    if (curStateIndex === -1 || !boardStates[curStateIndex]) return;
    const isGameComplete = () => {
      const count = boardStates[curStateIndex].board.filter(
        (value) => value.numerator === infinity
      ).length;
      if (count === 3) {
        const finalValue = boardStates[curStateIndex].board.find(
          (value) => value.numerator !== infinity
        );
        if (!finalValue || finalValue.numerator !== 24) return false;
        return true;
      } else return false;
    };
    if (isGameComplete() && !isPuzzleSolved) {
      setSolved((prev) => prev + 1);
      setScore((prev) => prev + 24 * (game?.solutions.length || 1));
      setIsPuzzleSolved(true);

      // Particle effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        gravity: 0.5,
        decay: 0.9,
        ticks: 200,
      });

      // Call onPuzzleSolved callback if provided
      if (onPuzzleSolved) {
        onPuzzleSolved(getCurrentPuzzleIndex());
      }
    }
  }, [boardStates]);

  const handleNumberClick = (index: number, num: Fraction) => {
    // Don't allow moves if time is up in competition mode
    if (mode === "competition" && isFinished) return;

    const state = boardStates[curStateIndex];

    if (state.selectedIndex === index) return;

    if (state.selectedIndex !== -1 && selectedOperator !== "") {
      const newBoard = [...state.board];
      newBoard[index] = calculate(
        state.board[state.selectedIndex],
        selectedOperator,
        num
      );
      newBoard[state.selectedIndex] = new Fraction(infinity);

      const newState: BoardState = {
        board: newBoard,
        selectedIndex: index,
      };
      setBoardStates((prevStates) => [
        ...prevStates.slice(0, curStateIndex + 1),
        newState,
      ]);
      setCurStateIndex((value) => value + 1);
      setSelectedOperator("");
      captureFrame();
    } else {
      setBoardStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[curStateIndex] = { ...state, selectedIndex: index };
        return newStates;
      });
      setSelectedOperator("");
      captureFrame();
    }
  };

  const handleOperatorClick = (op: string) => {
    // Don't allow moves if time is up in competition mode
    if (mode === "competition" && isFinished) return;

    if (boardStates[curStateIndex].selectedIndex != -1) {
      setSelectedOperator(op);
      captureFrame();
    }
  };

  const handleBack = () => {
    if (curStateIndex > 0) {
      setCurStateIndex((prev) => prev - 1);
      captureFrame();
    }
  };

  const handleForward = () => {
    if (curStateIndex + 1 < boardStates.length) {
      setCurStateIndex((prev) => prev + 1);
      captureFrame();
    }
  };

  const handleNext = () => {
    // Only called when puzzle is solved - go to next puzzle
    nextGame();
  };

  const handleSkip = () => {
    if (mode === "competition" && onSkip) {
      // In competition mode, skip goes to next puzzle without showing solution
      onSkip();
    } else {
      // In puzzle mode, show solution dialog
      setOpenSolution(true);
    }
  };

  const handleSolutionClose = () => {
    setOpenSolution(false);
    nextGame();
  };

  // Encoding constants - two random numbers
  const ENCODE_MULTIPLIER = 47382;
  const ENCODE_ADDITION = 91627;

  const encodePuzzleIndex = (index: number): number => {
    return index * ENCODE_MULTIPLIER + ENCODE_ADDITION;
  };

  const handleShare = async () => {
    const puzzleIndex = game?.id ?? getCurrentPuzzleIndex();
    const encodedIndex = encodePuzzleIndex(puzzleIndex);
    const baseUrl = process.env.NEXT_PUBLIC_HOST;
    const shareUrl = `${baseUrl}/games/24-game/?id=${encodedIndex}`;

    // Copy link to clipboard - most reliable method in Telegram Mini Apps
    // Users can then paste it in any Telegram message
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShowCopiedMessage(true);
        setTimeout(() => {
          setShowCopiedMessage(false);
        }, 2000);
      } catch (error) {
        // Clipboard failed, silently do nothing
      }
    }
  };

  const handleDownload = async () => {
    if (frameImages.length === 1) {
      try {
        const dataUrl = frameImages[0];
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `make24-${Date.now()}.jpg`;
        link.click();
      } catch (err) {
        console.error(err);
      }
      return;
    }

    try {
      // Load first image to get dimensions
      const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      };

      if (frameImages.length === 0) return;

      // Get dimensions from first frame
      const firstImg = await loadImage(frameImages[0]);
      const width = firstImg.width;
      const height = firstImg.height;

      // Create GIF from frames
      const gif = new GIF({
        workers: 2,
        quality: 100,
        width: width,
        height: height,
        workerScript: "/gif.worker.js",
      });

      // Add frames to GIF
      for (const frameDataUrl of frameImages) {
        try {
          const img = await loadImage(frameDataUrl);
          gif.addFrame(img, { delay: 1500 }); // 1500ms delay between frames
        } catch (err) {
          console.error("Error loading frame image:", err);
        }
      }

      // Render GIF
      gif.on("finished", (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `make24-${Date.now()}.gif`;
        link.click();
        URL.revokeObjectURL(url);
      });

      gif.render();
    } catch (err) {
      console.error("Error creating GIF:", err);
    }
  };

  const arrowActive = "#05df72";
  const arrowDisabled = "black";

  return (
    <div
      className="flex flex-col justify-center items-center border rounded-lg  bg-gray-200"
      ref={gameRef}
    >
      <div className="w-full bg-blue-500 px-2 py-2 flex items-center justify-between rounded-t-lg relative">
        <p className="text-base md:text-lg font-semibold text-white">
          Make 24 Using (+ − × ÷)
        </p>
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-500 p-1.5 text-white rounded flex items-center justify-center"
            onClick={handleDownload}
            aria-label="Download screenshot"
          >
            <Download size={18} className="text-blue-500" />
          </button>
          <div className="relative">
            {/* Toast notification for copied link - positioned above Share button */}
            {showCopiedMessage && (
              <div className="absolute bottom-full right-0 mb-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-[fadeIn_0.3s_ease-in-out] whitespace-nowrap pointer-events-none">
                Link copied!
              </div>
            )}
            <button
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-700 px-3 py-1.5 text-sm text-white font-bold rounded flex items-center justify-center gap-1.5"
              onClick={handleShare}
            >
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center  items-center gap-2 w-[312px] md:w-[340px] px-2 py-2">
        <div className="flex w-full justify-between border-b pb-1 mb-1">
          <p className="font-bold">
            Solved:{" "}
            {mode === "competition" && competitionTotalPuzzles !== undefined
              ? `${competitionSolvedCount}/${competitionTotalPuzzles}`
              : solved}
          </p>
          <p className="font-bold">Score: {score}</p>
          <p className="font-bold">Time: {time}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-[250px] h-[240px]">
          {boardStates.length > 0 &&
            boardStates[curStateIndex].board.map(
              (num: Fraction, index: number) => (
                <NumberBox
                  key={index}
                  index={index}
                  num={num}
                  selected={index === boardStates[curStateIndex].selectedIndex}
                  onClick={handleNumberClick}
                />
              )
            )}
        </div>
        <div className="flex justify-between w-[250px] mt-1">
          {operators.map((op: string, index: number) => (
            <button
              key={index}
              className={`border-2 border-green-600  h-[50px] w-[50px] flex items-center justify-center text-5xl text-green-600 font-bold leading-none ${
                selectedOperator === op
                  ? "text-green-800 border-6 border-green-800"
                  : "hover:border-green-800 active:border-green-800"
              }`}
              onClick={() => handleOperatorClick(op)}
            >
              {op}
            </button>
          ))}
        </div>
        <div className="w-[250px] flex justify-between items-center">
          <button onClick={handleBack} aria-label="Back">
            <ArrowLeftCircleIcon
              size={50}
              color={curStateIndex > 0 ? arrowActive : arrowDisabled}
            />
          </button>
          {isPuzzleSolved ? (
            <button
              className="border-2 px-5 py-1.5 text-base font-bold rounded border-green-600 hover:border-green-500 active:border-green-500 text-green-600 hover:text-green-500 active:text-green-500"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              className="border-2 px-5 py-1.5 text-base font-bold rounded border-orange-500 hover:border-orange-400 active:border-orange-400 text-orange-600 hover:text-orange-500 active:text-orange-500 relative"
              onClick={handleSkip}
            >
              Skip
              {/* <span className="absolute -top-1 -right-1 text-xs bg-yellow-400 text-yellow-900 px-1 rounded">AD</span> */}
            </button>
          )}
          <button onClick={handleForward} aria-label="Forward">
            <ArrowRightCircleIcon
              size={50}
              color={
                curStateIndex + 1 < boardStates.length
                  ? arrowActive
                  : arrowDisabled
              }
            />
          </button>
        </div>
      </div>
      {mode !== "competition" && (
        <SolutionDialog
          isOpen={openSolution}
          onClose={handleSolutionClose}
          items={game?.solutions || []}
        />
      )}
    </div>
  );
};

export default Math24Game;
