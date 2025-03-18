'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="bg-primary text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        MathTechLab
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/games" className="hover:underline">Games</Link>
        <Link href="/blogs" className="hover:underline">Blogs</Link>
        <Link href="/tools" className="hover:underline">Tools</Link>
      </nav>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    {menuOpen && (
      <nav className="md:hidden bg-primary p-4">
        <Link href="/games" className="block py-2">Games</Link>
        <Link href="/blogs" className="block py-2">Blogs</Link>
        <Link href="/tools" className="block py-2">Tools</Link>
      </nav>
    )}
  </header>
}

export default Header;