"use client";

import { useEffect, useState } from "react";
import { generateGame } from "./utils";
import NumberBox from "./NumberBox";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import Fraction from "./Fraction";
import { useTimer } from "./useTimer";
import useGameGenerator from "./useGameGenerator";
import SolutionDialog from "./SolutionDialog";

export const infinity = 999999999999999;

interface BoardState {
  board: Fraction[];
  selectedIndex: number;
}

const Math24Game = () => {
  const [numbers, setNumbers] = useState(generateGame());
  const [boardStates, setBoardStates] = useState<BoardState[]>([]);
  const [curStateIndex, setCurStateIndex] = useState(-1);

  const operators = ["+", "-", "×", "÷"];
  const [selectedOperator, setSelectedOperator] = useState("");

  const [score, setScore] = useState(0);
  const [solved, setSolved] = useState(0);

  const [openSolution, setOpenSolution] = useState<boolean>(false);

  const { time, reset: resetTimer } = useTimer();
  const { game, nextGame } = useGameGenerator();

  useEffect(() => {
    if (!game) return;
    setBoardStates((prevStates) => {
      const newState: BoardState = {
        board: game.problem.map((num: number) => new Fraction(num)),
        selectedIndex: -1,
      };
      return [newState];
    });
    setCurStateIndex(0);
    setSelectedOperator("");
    resetTimer();
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
    const nextLevel = () => {
      setTimeout(() => {
        nextGame();
      }, 1000);
    };
    if (isGameComplete()) {
      setSolved((prev) => prev + 1);
      setScore((prev) => prev + 24 * (game?.solutions.length || 1));
      nextLevel();
    }
  }, [boardStates]);

  const handleNumberClick = (index: number, num: Fraction) => {
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
    } else {
      setBoardStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[curStateIndex] = { ...state, selectedIndex: index };
        return newStates;
      });
      setSelectedOperator("");
    }
  };

  const handleOperatorClick = (op: string) => {
    if (boardStates[curStateIndex].selectedIndex != -1) setSelectedOperator(op);
  };

  const handleBack = () => {
    if (curStateIndex > 0) {
      setCurStateIndex((prev) => prev - 1);
    }
  };

  const handleForward = () => {
    if (curStateIndex + 1 < boardStates.length) {
      setCurStateIndex((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    setOpenSolution(true);
  };

  const handleSolutionClose = () => {
    setOpenSolution(false);
    nextGame();
  };

  const handleRestart = () => {
    nextGame();
    setScore(0);
    setSolved(0);
  };

  const arrowActive = "#05df72";
  const arrowDisabled = "black";

  return (
    <div className="flex flex-col justify-center items-center border rounded-lg  bg-gray-200">
      <div className="flex flex-col justify-center  items-center gap-2 w-[340px] px-2 py-2">
        <div className="flex w-full justify-between border-b pb-1 mb-1">
          <p className="font-bold">Solved: {solved}</p>
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
          <button onClick={handleBack}>
            <ArrowLeftCircleIcon
              size={50}
              color={curStateIndex > 0 ? arrowActive : arrowDisabled}
            />
          </button>
          <button
            className="border-2 border-red-500 hover:border-red-400 active:border-red-400 text-red-500 hover:text-red-400 active:text-red-400 px-3 rounded"
            onClick={handleSkip}
          >
            Skip
          </button>
          <button onClick={handleForward}>
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
      <button
        className="w-full bg-green-600 hover:bg-green-500 active:bg-green-500 py-1 text-center text-2xl text-gray-100 font-bold rounded-b-lg"
        onClick={handleRestart}
      >
        Restart
      </button>
      <SolutionDialog
        isOpen={openSolution}
        onClose={handleSolutionClose}
        items={game?.solutions || []}
      />
    </div>
  );
};

export default Math24Game;
