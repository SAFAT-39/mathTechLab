"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navUrls = [
  {
    title: "Calculators",
    url: "/calculators",
  },
  {
    title: "Times Tables",
    url: "/times-tables",
  },
  {
    title: "Factors",
    url: "/factors",
  },
  {
    title: "24 Game",
    url: "/games/24-game",
  },
  {
    title: "2048 Game",
    url: "/games/2048",
  },
  {
    title: "Math Sprint",
    url: "/games/math-sprint",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            alt="MathTechLab – Math Calculators, Games and Learning"
            src="/logo.svg"
            width={100}
            height={50}
            className="w-[120px] h-[60px]"
            onClick={() => setMenuOpen(false)}
          ></Image>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navUrls.map((item, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="container mx-auto px-4 py-3">
            {navUrls.map((item, index: number) => (
              <Link
                key={index}
                href={item.url}
                className="block py-3 text-gray-700 hover:text-purple-600 font-medium transition-colors border-b border-gray-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
