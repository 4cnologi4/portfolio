"use client"; // Required for useState and interactivity

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Daniel Mtz
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            About Me
          </Link>
          <Link href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#certifications" className="hover:text-blue-400 transition-colors">
            Certifications
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 mt-2 rounded-lg">
          <div className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link
              href="#skills"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#certifications"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Certifications
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 