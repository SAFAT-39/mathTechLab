"use client";

import "./game.css";
import { startGame, resetGame } from "./gameengine";

const MathSprint = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="math-sprint-container flex flex-col items-center justify-center">
        <h1 className="h">Math Sprint Game</h1>
        <p className="p" id="problem"></p>
        <div className="options" id="options"></div>
        <p className="p" id="result"></p>
        <p className="p score">
          Score:
          <span id="currentScore">0</span>
        </p>
        <p className="p" id="timer">
          Time: <span id="time">60</span> seconds
        </p>
        <div className="flex gap-4">
          <button className="button" onClick={() => startGame()}>
            Start Game
          </button>
          <button className="button" onClick={() => resetGame()}>
            Reset Game
          </button>
        </div>
        <p className="p" id="highScore">
          High Score:
          <span id="highScoreValue">0</span>
        </p>
      </div>
    </div>
  );
};

export default MathSprint;
