"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface SubItem {
  title: string;
  url: string;
}

interface Category {
  title: string;
  url: string;
  items: SubItem[];
}

interface PopoverProps {
  children: React.ReactNode;
  categories: Category[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Popover = ({ children, categories, isOpen, onMouseEnter, onMouseLeave }: PopoverProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="flex">
            {/* Categories Column */}
            <div className="w-1/2 border-r border-gray-200">
              <div className="py-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredCategory(category.title)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <Link
                      href={category.url}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      <span>{category.title}</span>
                      <ChevronRight size={14} className="text-gray-400" />
                    </Link>

                    {/* Subcategory Items */}
                    {hoveredCategory === category.title && (
                      <div className="absolute left-full top-0 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        <div className="py-2">
                          {category.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.url}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="w-1/2 p-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Links</h4>
              <div className="space-y-2">
                {categories.slice(0, 3).map((category, index) => (
                  <Link
                    key={index}
                    href={category.url}
                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
