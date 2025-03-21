"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navUrls = [
  {
    title: "Games",
    url: "/games",
  },
  {
    title: "24 Game",
    url: "/games/24-game",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary sticky text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MathTechLab
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navUrls.map((item, index: number) => (
            <Link key={index} href={item.url} className="hover:underline">
              {item.title}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-primary p-4">
          <nav className="hidden md:flex space-x-4">
            {navUrls.map((item, index: number) => (
              <Link key={index} href={item.url} className="block py-2">
                {item.title}
              </Link>
            ))}
          </nav>
        </nav>
      )}
    </header>
  );
};

export default Header;
