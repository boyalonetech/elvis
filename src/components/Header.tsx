// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-3 lg:top-5 left-0 w-full lg:max-w-[1200px]  py-2 lg:mx-10 bg-[#0B0B12]/80 backdrop-blur-md rounded-4xl border-b border-white/10 z-50">
      <div className="max-w-6xl px-6 flex items-center justify-between h-16">
        {/* Brand Name */}
    <Link
      href="/"
      className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-transparent bg-clip-text drop-shadow-md font-[Pacifico]"
    >
      Elvis
    </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-2/3 bg-[#0B0B12] border-l border-white/10 px-6 py-10 space-y-6 shadow-lg md:hidden z-40"
          >
            <div className="flex flex-col justify-start">
                                          <button
                className="self-end text-white mb-6"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>

            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg text-white/80 hover:text-blue-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
