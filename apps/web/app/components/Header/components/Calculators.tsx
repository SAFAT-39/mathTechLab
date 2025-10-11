"use client";

import { ChevronDown } from "lucide-react";
import StaticPopover from "./StaticPopover";

// Calculators navigation data with only Basic and Scientific calculators
const calculatorsData = [
  {
    title: "Basic Calculators",
    url: "/calculators",
    items: [
      { title: "GCF Calculator", url: "/calculators/gcf-calculator" },
      { title: "LCM Calculator", url: "/calculators/lcm-calculator" },
      { title: "Fraction Calculator", url: "/calculators/fraction-calculator" },
      { title: "Prime Factorization Calculator", url: "/calculators/prime-factorization-calculator" },
      { title: "Factor Checker", url: "/calculators/factor-checker" },
      { title: "Percentage Calculator", url: "/calculators/percentage-calculator" },
    ]
  },
  {
    title: "Advanced Calculators",
    url: "/calculators",
    items: [
      { title: "Graphing Calculator", url: "/calculators/graph" },
    ]
  }
];

interface CalculatorsProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Calculators = ({ isOpen, onMouseEnter, onMouseLeave }: CalculatorsProps) => {
  return (
    <StaticPopover
      categories={calculatorsData}
      isOpen={isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors">
        Calculators
        <ChevronDown size={16} className="ml-1" />
      </button>
    </StaticPopover>
  );
};

export default Calculators;
