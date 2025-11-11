"use client";

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const [copied, setCopied] = useState<"email" | "phone" | "">("");

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const scrollOffset = -80;

  return (
    <footer id="footer" className="bg-gray-900/90 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large screens */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {/* Brand & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Leo Mazive</h2>
            <p className="text-white">
              Passionate Software Developer skilled in creating modern, responsive web apps and digital experiences.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">What I Do</h3>
            <p className="text-white">Web Development, UI/UX Design, and AI-Powered Applications</p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-12">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p className="text-white mb-2">Harare, Zimbabwe</p>
            <p className="text-white mb-2">
              Email:{" "}
              <span
                className="cursor-pointer hover:text-blue-500 underline"
                onClick={() => handleCopy("leomazive01@gmail.com", "email")}
              >
                leomazive01@gmail.com
              </span>
              {copied === "email" && <span className="text-green-400 ml-2">Copied!</span>}
            </p>
            <p className="text-white-400 mb-2">
              Phone:{" "}
              <span
                className="cursor-pointer hover:text-blue-500 underline"
                onClick={() => handleCopy("+263773950814", "phone")}
              >
                +263 773 950 814
              </span>
              {copied === "phone" && <span className="text-green-400 ml-2">Copied!</span>}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-3">
              <a
                href="https://wa.me/263773950814"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 transition"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://github.com/Leo-Mazive-123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 transition"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/leo-mazive-b470a535b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Small screens */}
        <div className="md:hidden flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Leo Mazive</h2>
            <p className="text-white">
              Passionate Software Developer skilled in modern web technologies.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">What I Do</h3>
            <p className="text-white">Web Development, UI/UX Design, and AI-Powered Applications</p>

          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <ScrollLink to="about" smooth={true} duration={500} offset={scrollOffset} className="cursor-pointer hover:text-blue-500 transition">About</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="skills" smooth={true} duration={500} offset={scrollOffset} className="cursor-pointer hover:text-blue-500 transition">Skills</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="projects" smooth={true} duration={500} offset={scrollOffset} className="cursor-pointer hover:text-blue-500 transition">Projects</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact" smooth={true} duration={500} offset={scrollOffset} className="cursor-pointer hover:text-blue-500 transition">Contact</ScrollLink>
                </li>
              </ul>
            </div>

            <div className="mr-6">
              <h3 className="text-xl font-semibold mb-5">Contact</h3>
              <p className="text-white mb-2">Harare, Zimbabwe</p>
              <p className="text-white mb-2">
                Email:{" "}
                <span
                  className="cursor-pointer hover:text-blue-500 underline"
                  onClick={() => handleCopy("leomazive01@gmail.com", "email")}
                >
                  leomazive01@gmail.com
                </span>
                {copied === "email" && <span className="text-green-400 ml-2">Copied!</span>}
              </p>
              <p className="text-white mb-2">
                Phone:{" "}
                <span
                  className="cursor-pointer hover:text-blue-500 underline"
                  onClick={() => handleCopy("+263773950814", "phone")}
                >
                  +263 773 950 814
                </span>
                {copied === "phone" && <span className="text-green-400 ml-2">Copied!</span>}
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a href="https://wa.me/263773950814" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition">
                  <FaWhatsapp className="text-xl" />
                </a>
                <a href="https://github.com/Leo-Mazive-123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/leo-mazive-b470a535b" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-white pt-6 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Leo Mazive. All rights reserved. Built with Love!
      </div>
    </footer>
  );
};

export default Footer;
