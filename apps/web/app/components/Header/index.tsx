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
    <header className="bg-white sticky text-white p-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center text-blue-800 font-semibold">
        <Link href="/" className="text-xl font-bold">
          <Image
            alt="MathTechLab – Math Games and Learning"
            src="/logo.svg"
            width={100}
            height={50}
            className="w-[120px] h-[60px]"
          ></Image>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navUrls.map((item, index: number) => (
            <Link key={index} href={item.url} className="hover:underline">
              {item.title}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white p-4 text-blue-800 font-semibold">
          {navUrls.map((item, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="block py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
