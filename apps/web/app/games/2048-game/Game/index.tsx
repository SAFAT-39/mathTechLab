"use client";
import { useEffect } from "react";
import "./game.css";

const Game2048 = () => {
  useEffect(() => {
    const srcUrls = [
      "/2048/animframe_polyfill.js",
      "/2048/application.js",
      "/2048/bind_polyfill.js",
      "/2048/classlist_polyfill.js",
      "/2048/game_manager.js",
      "/2048/grid.js",
      "/2048/html_actuator.js",
      "/2048/keyboard_input_manager.js",
      "/2048/local_storage_manager.js",
      "/2048/tile.js",
    ];

    const scripts: HTMLScriptElement[] = [];
    srcUrls.forEach((url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);
  return (
    <div className="container-root">
      <div className="heading">
        <h1 className="title">2048</h1>
        <div className="scores-container">
          <div className="score-container">0</div>
          <div className="best-container">0</div>
        </div>
      </div>

      <div className="above-game">
        <p className="game-intro">
          Join the numbers and get to the <strong>2048 tile!</strong>
        </p>
        <a className="restart-button">New Game</a>
      </div>

      <div className="game-container">
        <div className="game-message">
          <p></p>
          <div className="lower">
            <a className="keep-playing-button">Keep going</a>
            <a className="retry-button">Try again</a>
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

      <p className="game-explanation">
        <strong className="important">How to play:</strong> Use your{" "}
        <strong>arrow keys</strong> to move the tiles. When two tiles with the
        same number touch, they <strong>merge into one!</strong>
      </p>
    </div>
  );
};

export default Game2048;
