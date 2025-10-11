"use client";

import { ChevronDown } from "lucide-react";
import StaticPopover from "./StaticPopover";

// Games navigation data with only Number Games and Math Challenges
const gamesData = [
  {
    title: "Number Games",
    url: "/games",
    items: [
      { title: "24 Game", url: "/games/24-game" },
      { title: "2048 Game", url: "/games/2048" },
    ]
  },
  {
    title: "Math Challenges",
    url: "/games",
    items: [
      { title: "Math Sprint", url: "/games/math-sprint" },
    ]
  }
];

interface GamesProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Games = ({ isOpen, onMouseEnter, onMouseLeave }: GamesProps) => {
  return (
    <StaticPopover
      categories={gamesData}
      isOpen={isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors">
        Games
        <ChevronDown size={16} className="ml-1" />
      </button>
    </StaticPopover>
  );
};

export default Games;
