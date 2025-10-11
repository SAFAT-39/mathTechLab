"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

interface SubItem {
  title: string;
  url: string;
}

interface Category {
  title: string;
  url: string;
  items: SubItem[];
}

interface StaticPopoverProps {
  children: React.ReactNode;
  categories: Category[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const StaticPopover = ({ children, categories, isOpen, onMouseEnter, onMouseLeave }: StaticPopoverProps) => {

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {isOpen && (
        <>
          {/* Invisible bridge to connect button and popover */}
          <div
            className="absolute top-full left-0 w-full h-4 bg-transparent z-40"
          />

          <div
            className="absolute top-full left-0 mt-4 w-[500px] bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-2xl z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-8">
                {categories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    {/* Category Header - Clickable */}
                    <Link
                      href={category.url}
                      className="flex items-center text-base font-semibold text-slate-700 hover:text-indigo-600 transition-all duration-300 mb-4 cursor-pointer group"
                    >
                      <span className="group-hover:underline decoration-indigo-300 decoration-2 underline-offset-2">
                        {category.title}
                      </span>
                      <ExternalLink size={14} className="ml-2 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </Link>

                    {/* Subcategory Items */}
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.url}
                          className="flex items-center justify-between text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 px-3 mr-5 py-2 rounded-xl transition-all duration-300 cursor-pointer font-semibold hover:shadow-sm hover:scale-[1.02] group"
                        >
                          <span className="flex-1">{item.title}</span>
                          <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-500 transition-colors ml-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StaticPopover;
