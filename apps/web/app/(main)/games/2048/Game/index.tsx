"use client";
import { useEffect } from "react";
import "./game.css";
import startGame from "./gameengine";

const Game2048 = () => {
  useEffect(() => {
    startGame();
  }, []);
  return (
    <div className="container-root">
      <div className="flex justify-between">
        <button className="restart-button sm:mt-2">New Game</button>
        <div className="scores-container flex gap-1">
          <div className="score-container">0</div>
          <div className="best-container">0</div>
        </div>
      </div>

      <div className="game-container">
        <div className="game-message">
          <p></p>
          <div className="lower">
            <button className="keep-playing-button">Keep going</button>
            <button className="retry-button">Try again</button>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-row">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
          <div className="grid-row">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
          <div className="grid-row">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
          <div className="grid-row">
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
            <div className="grid-cell"></div>
          </div>
        </div>

        <div className="tile-container"></div>
      </div>
    </div>
  );
};

export default Game2048;
