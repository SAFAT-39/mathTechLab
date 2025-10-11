"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";

// Math Learning navigation data with categories and subcategories
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

// Calculators navigation data with categories and subcategories
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

// Games navigation data with categories and subcategories
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

// Blogs navigation data
const blogsData = {
  title: "Blogs",
  url: "/blogs",
};

interface MobileMenuProps {
  onItemClick: () => void;
}

const MobileMenu = ({ onItemClick }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [expandedMainSections, setExpandedMainSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const toggleMainSection = (section: string) => {
    setExpandedMainSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const renderCategory = (category: any, sectionName: string) => (
    <div key={category.title} className="mb-4">
      {/* Category Header */}
      <div className="flex items-center p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg mb-2">
        {/* External Link Icon on Left */}
        <Link
          href={category.url}
          className="mr-3 p-2 rounded-full bg-white shadow-sm text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
          onClick={onItemClick}
        >
          <ExternalLink size={16} />
        </Link>

        {/* Category Title and Expand Button */}
        <button
          onClick={() => toggleSection(`${sectionName}-${category.title}`)}
          className="flex items-center flex-1 text-left"
        >
          <span className="text-lg font-semibold text-gray-800">{category.title}</span>
          {expandedSections.includes(`${sectionName}-${category.title}`) ?
            <ChevronDown size={18} className="ml-auto text-purple-600" /> :
            <ChevronRight size={18} className="ml-auto text-gray-500" />
          }
        </button>
      </div>

      {/* Subcategory Items - Expandable */}
      {expandedSections.includes(`${sectionName}-${category.title}`) && (
        <div className="grid grid-cols-1 gap-2">
          {category.items.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="block py-3 px-4 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 font-semibold bg-white border border-gray-200 hover:border-purple-200"
              onClick={onItemClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-50 overflow-y-auto">
      <div className="p-4 space-y-4">
        {/* Math Learning Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => toggleMainSection('math')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
          >
            <div className="flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">Math Learning</h3>
            </div>
            {expandedMainSections.includes('math') ?
              <ChevronDown size={20} className="text-blue-600" /> :
              <ChevronRight size={20} className="text-gray-500" />
            }
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedMainSections.includes('math') ? 'opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="p-4 space-y-3">
              {mathLearningData.map((category) => renderCategory(category, "math"))}
            </div>
          </div>
        </div>

        {/* Calculators Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => toggleMainSection('calculators')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
          >
            <div className="flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">Calculators</h3>
            </div>
            {expandedMainSections.includes('calculators') ?
              <ChevronDown size={20} className="text-blue-600" /> :
              <ChevronRight size={20} className="text-gray-500" />
            }
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedMainSections.includes('calculators') ? 'opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="p-4 space-y-3">
              {calculatorsData.map((category) => renderCategory(category, "calculators"))}
            </div>
          </div>
        </div>

        {/* Games Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => toggleMainSection('games')}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
          >
            <div className="flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">Games</h3>
            </div>
            {expandedMainSections.includes('games') ?
              <ChevronDown size={20} className="text-blue-600" /> :
              <ChevronRight size={20} className="text-gray-500" />
            }
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedMainSections.includes('games') ? 'opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="p-4 space-y-3">
              {gamesData.map((category) => renderCategory(category, "games"))}
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
          <Link
            href={blogsData.url}
            className="flex items-center justify-center py-3 px-4 bg-white rounded-lg shadow-sm text-gray-700 hover:text-purple-600 hover:shadow-md font-semibold transition-all duration-200"
            onClick={onItemClick}
          >
            <span className="mr-2 text-xl">📝</span>
            {blogsData.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
