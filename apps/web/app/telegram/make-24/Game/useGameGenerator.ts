import { useEffect, useState } from "react";
import { data } from "./data";

interface GameObject {
  id: number;
  problem: number[];
  solutions: string[];
}

const useGameGenerator = () => {
  const [game, setGame] = useState<GameObject>();
  
  const getCurrentIndex = (): number => {
    const stored = localStorage.getItem('24game-current-index');
    return stored ? parseInt(stored, 10) : 0;
  };

  const setCurrentIndex = (index: number): void => {
    localStorage.setItem('24game-current-index', index.toString());
  };

  const nextGame = () => {
    const len = data.length;
    let currentIndex = getCurrentIndex() + 1;
    
    // Reset to 0 if we've reached the end
    if (currentIndex >= len) {
      currentIndex = 0;
    }
    
    setGame(data[currentIndex]);
    setCurrentIndex(currentIndex);
  };

  const loadCurrentGame = () => {
    const len = data.length;
    let currentIndex = getCurrentIndex();
    
    // Reset to 0 if we've reached the end
    if (currentIndex >= len) {
      currentIndex = 0;
    }
    
    setGame(data[currentIndex]);
    // Don't increment the index when just loading the current game
  };

  useEffect(() => {
    loadCurrentGame();
  }, []);

  return { game, nextGame };
};

export default useGameGenerator;
