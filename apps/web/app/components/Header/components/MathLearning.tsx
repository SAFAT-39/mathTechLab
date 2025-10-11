"use client";

import { ChevronDown } from "lucide-react";
import StaticPopover from "./StaticPopover";

// Math Learning navigation data with only Times Tables and Factors
const mathLearningData = [
  {
    title: "Times Tables",
    url: "/times-tables",
    items: [
      { title: "1 Times Table", url: "/times-tables/1-times-table" },
      { title: "2 Times Table", url: "/times-tables/2-times-table" },
      { title: "3 Times Table", url: "/times-tables/3-times-table" },
      { title: "4 Times Table", url: "/times-tables/4-times-table" },
      { title: "5 Times Table", url: "/times-tables/5-times-table" },
      { title: "6 Times Table", url: "/times-tables/6-times-table" },
      { title: "7 Times Table", url: "/times-tables/7-times-table" },
      { title: "8 Times Table", url: "/times-tables/8-times-table" },
      { title: "9 Times Table", url: "/times-tables/9-times-table" },
      { title: "10 Times Table", url: "/times-tables/10-times-table" },
      { title: "11 Times Table", url: "/times-tables/11-times-table" },
      { title: "12 Times Table", url: "/times-tables/12-times-table" },
    ]
  },
  {
    title: "Factors",
    url: "/factors",
    items: [
      { title: "Factors of 2", url: "/factors/factors-of-2" },
      { title: "Factors of 3", url: "/factors/factors-of-3" },
      { title: "Factors of 4", url: "/factors/factors-of-4" },
      { title: "Factors of 5", url: "/factors/factors-of-5" },
      { title: "Factors of 6", url: "/factors/factors-of-6" },
      { title: "Factors of 7", url: "/factors/factors-of-7" },
      { title: "Factors of 8", url: "/factors/factors-of-8" },
      { title: "Factors of 9", url: "/factors/factors-of-9" },
      { title: "Factors of 10", url: "/factors/factors-of-10" },
      { title: "Factors of 11", url: "/factors/factors-of-11" },
      { title: "Factors of 12", url: "/factors/factors-of-12" },
      { title: "See All Factors", url: "/factors" },
    ]
  }
];

interface MathLearningProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MathLearning = ({ isOpen, onMouseEnter, onMouseLeave }: MathLearningProps) => {
  return (
    <StaticPopover
      categories={mathLearningData}
      isOpen={isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors">
        Math Learning
        <ChevronDown size={16} className="ml-1" />
      </button>
    </StaticPopover>
  );
};

export default MathLearning;
