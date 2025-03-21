import { useEffect, useState } from "react";
import { data } from "./data";

interface GameObject {
  id: number;
  problem: number[];
  solutions: string[];
}

const useGameGenerator = () => {
  const [game, setGame] = useState<GameObject>();
  const nextGame = () => {
    const len = data.length;
    let index = Math.floor(Math.random() * (len - 1));
    setGame(data[index]);
  };

  useEffect(() => {
    nextGame();
  }, []);

  return { game, nextGame };
};

export default useGameGenerator;
