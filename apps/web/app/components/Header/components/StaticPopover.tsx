"use client";

import Link from "next/link";

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
            className="absolute top-full left-0 w-full h-3 bg-transparent z-40"
          />

          <div
            className="absolute top-full left-0 mt-3 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <div key={index}>
                    {/* Category Header - Clickable */}
                    <Link
                      href={category.url}
                      className="block text-sm font-semibold text-gray-800 hover:text-purple-600 transition-colors mb-3 cursor-pointer"
                    >
                      {category.title}
                    </Link>

                    {/* Subcategory Items */}
                    <div className="space-y-1">
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.url}
                          className="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 px-2 py-1 rounded transition-colors cursor-pointer"
                        >
                          {item.title}
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
