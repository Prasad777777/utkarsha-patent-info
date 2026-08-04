"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Patents", href: "#patents" },
  { name: "Timeline", href: "#timeline" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-blue-500">UY</span>
          <span className="text-white"> Portfolio</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#patents"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-white font-medium"
          >
            Explore
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col p-6 gap-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#patents"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-center py-3 rounded-lg"
            >
              Explore Patents
            </a>

          </div>

        </div>
      )}
    </header>
  );
}