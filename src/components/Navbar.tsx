"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on link click
  };

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `hover:text-blue-400 ${activeSection === id ? "text-blue-400 font-bold" : ""}`;

  const navLinks = ["about", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md text-white shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span className="block sm:inline">Leo&apos;s </span>
          <span className="block sm:inline">Portfolio</span>
        </h1>

        {/* Hamburger / Menu */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`flex flex-col items-center justify-center sm:flex-row sm:flex sm:items-start sm:justify-start gap-4 sm:gap-6 absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-900/90 sm:bg-transparent transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-60 py-4" : "max-h-0"
          } sm:max-h-full text-center`}
        >
          {navLinks.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block px-4 py-2 sm:px-2 sm:py-1 rounded text-lg sm:text-lg ${linkClass(id)}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
