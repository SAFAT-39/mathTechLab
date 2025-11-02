import { useEffect, useState } from "react";
import { data } from "./data";

interface GameObject {
  id: number;
  problem: number[];
  solutions: string[];
}

const useGameGenerator = (initialPuzzleId?: number) => {
  const [game, setGame] = useState<GameObject>();
  const [currentGameId, setCurrentGameId] = useState<number | null>(null);
  
  const getRandomPuzzle = (): GameObject => {
    const len = data.length;
    const randomIndex = Math.floor(Math.random() * len);
    return data[randomIndex];
  };

  const loadRandomGame = () => {
    const randomGame = getRandomPuzzle();
    setGame(randomGame);
    setCurrentGameId(randomGame.id);
  };

  const loadGameById = (id: number): void => {
    // Find puzzle by ID (IDs start from 1, array is 0-indexed)
    const selectedGame = data.find(puzzle => puzzle.id === id);
    if (selectedGame) {
      setGame(selectedGame);
      setCurrentGameId(selectedGame.id);
    } else {
      // If puzzle not found, load a random game as fallback
      loadRandomGame();
    }
  };

  const nextGame = () => {
    const randomGame = getRandomPuzzle();
    setGame(randomGame);
    setCurrentGameId(randomGame.id);
  };

  useEffect(() => {
    if (initialPuzzleId !== undefined && !isNaN(initialPuzzleId)) {
      // Load the specific puzzle from the share link
      loadGameById(initialPuzzleId);
    } else {
      // Load a random game
      loadRandomGame();
    }
  }, [initialPuzzleId]);

  const getCurrentPuzzleIndex = (): number => {
    return currentGameId ?? (game?.id ?? 0);
  };

  return { game, nextGame, getCurrentPuzzleIndex, loadGameById };
};

export default useGameGenerator;
