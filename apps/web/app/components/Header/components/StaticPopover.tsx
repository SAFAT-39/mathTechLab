"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {/* Always render content for SEO, but hide with CSS when not open */}
      <>
        {/* Invisible bridge to connect button and popover */}
        <div
          className={`absolute top-full left-0 w-full h-4 bg-transparent z-40 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        />

        <div
          className={`absolute top-full left-0 mt-4 w-[500px] bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-2xl z-50 transition-all duration-200 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 pointer-events-none'}`}
        >
          <div className="p-6">
            <div className="grid grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="space-y-4">
                  {/* Category Header - Clickable */}
                  <Link
                    href={category.url}
                    className="flex items-center text-base font-semibold text-slate-700 hover:text-indigo-600 transition-all duration-300 mb-4 cursor-pointer group"
                    onClick={onMouseLeave}
                  >
                    <span className="group-hover:underline decoration-indigo-300 decoration-2 underline-offset-2">
                      {category.title}
                    </span>
                    <ExternalLink size={14} className="ml-2 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  </Link>

                  {/* Subcategory Items */}
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => {
                      const isActive = pathname === item.url;
                      return (
                        <Link
                          key={itemIndex}
                          href={item.url}
                          className={`flex items-center justify-between text-sm px-3 mr-5 py-2 rounded-xl transition-all duration-300 cursor-pointer font-semibold hover:shadow-sm hover:scale-[1.02] group ${isActive
                            ? 'text-indigo-700 bg-indigo-100 border border-indigo-200'
                            : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80'
                            }`}
                          onClick={onMouseLeave}
                        >
                          <span className="flex-1">{item.title}</span>
                          <ArrowRight size={16} className={`transition-colors ml-1 ${isActive
                            ? 'text-indigo-600'
                            : 'text-slate-400 group-hover:text-indigo-500'
                            }`} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default StaticPopover;
