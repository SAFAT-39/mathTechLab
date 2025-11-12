"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import MathLearning from "./components/MathLearning";
import Calculators from "./components/Calculators";
import Games from "./components/Games";
import Blogs from "./components/Blogs";
import MobileMenu from "./components/MobileMenu";
import { useSession } from "next-auth/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { data: session, status } = useSession();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      // Apply styles to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        id="header"
        className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex items-center">
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
            {/* Left navigation - Math Learning, Calculators, Games */}
            <nav className="hidden md:flex space-x-6 ml-8">
              <MathLearning
                isOpen={hoveredItem === "Math Learning"}
                onMouseEnter={() => setHoveredItem("Math Learning")}
                onMouseLeave={() => setHoveredItem(null)}
              />
              <Calculators
                isOpen={hoveredItem === "Calculators"}
                onMouseEnter={() => setHoveredItem("Calculators")}
                onMouseLeave={() => setHoveredItem(null)}
              />
              <Games
                isOpen={hoveredItem === "Games"}
                onMouseEnter={() => setHoveredItem("Games")}
                onMouseLeave={() => setHoveredItem(null)}
              />
            </nav>
          </div>

          {/* Right navigation - Blogs + Auth/Profile */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex">
              <Blogs />
            </nav>
            {/* Auth/Profile Buttons */}
            {status === "loading" ? null : !session ? (
              <>
                <Link
                  href="/auth/login"
                  className="p-1 font-medium rounded-sm border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="p-1 font-medium rounded-sm border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link href="/profile">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full border bg-gradient-to-br from-purple-500 to-pink-400 text-white font-bold text-xl shadow"
                  title={session.user?.name}
                >
                  {session.user?.name
                    ? session.user.name.charAt(0).toUpperCase()
                    : "?"}
                </div>
              </Link>
            )}
            <button
              className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-100 shadow-md">
            <div className="container mx-auto y-1">
              <MobileMenu onItemClick={() => setMenuOpen(false)} />
            </div>
          </nav>
        )}
      </header>
      {/* <script async data-cfasync="false" src="//pl27788157.revenuecpmgate.com/9d55caf32a958b06a72b7eaa3dbdb3ba/invoke.js"></script>
      <div id="container-9d55caf32a958b06a72b7eaa3dbdb3ba"></div> */}
    </>
  );
};

export default Header;
