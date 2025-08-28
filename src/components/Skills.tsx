"use client";
import { motion } from "framer-motion";
import {FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaPython,FaNodeJs,FaGitAlt,FaDatabase,FaShieldAlt,FaRobot,FaTable,FaMobileAlt,FaCloud,FaPencilRuler,FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiFastapi, SiSupabase } from "react-icons/si"; // Removed unused SiNextdotjs

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-200 text-gray-900 py-16 px-6 md:pb-10">
      {/* Header */}
      <div className="flex flex-col items-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600"
        >
          My Skills
        </motion.h2>
        <motion.div
          className="w-24 h-1 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.07, y: -10, boxShadow: "0 20px 50px rgba(59,130,246,0.3)" }}
          transition={{ duration: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Frontend</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaHtml5 className="text-orange-500" /> HTML5</li>
            <li className="flex items-center gap-2"><FaCss3Alt className="text-blue-500" /> CSS3</li>
            <li className="flex items-center gap-2"><FaJsSquare className="text-yellow-400" /> JavaScript</li>
            <li className="flex items-center gap-2"><FaReact className="text-cyan-500" /> React</li>
            <li className="flex items-center gap-2"><FaCode /> Next.js</li>
            <li className="flex items-center gap-2"><FaJsSquare /> TypeScript</li>
            <li className="flex items-center gap-2"><SiTailwindcss className="text-sky-500" /> Tailwind CSS</li>
          </ul>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.07, y: -10, boxShadow: "0 20px 50px rgba(59,130,246,0.3)" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Backend</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaPython className="text-yellow-400" /> Python</li>
            <li className="flex items-center gap-2"><SiFastapi className="text-green-500" /> FastAPI</li>
            <li className="flex items-center gap-2"><FaNodeJs className="text-green-600" /> Node.js</li>
            <li className="flex items-center gap-2"><FaDatabase /> SQL</li>
            <li className="flex items-center gap-2"><FaShieldAlt /> Authentication & Security</li>
          </ul>
        </motion.div>

        {/* Tools & Other */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.07, y: -10, boxShadow: "0 20px 50px rgba(59,130,246,0.3)" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Tools & Other</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaGitAlt /> Git & GitHub</li>
            <li className="flex items-center gap-2"><SiSupabase /> Supabase</li>
            <li className="flex items-center gap-2"><FaRobot /> Selenium</li>
            <li className="flex items-center gap-2"><FaTable /> Pandas</li>
            <li className="flex items-center gap-2"><FaMobileAlt /> Responsive Design</li>
            <li className="flex items-center gap-2"><FaCloud /> Vercel</li>
            <li className="flex items-center gap-2"><FaPencilRuler /> Figma</li>
          </ul>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.07, y: -10, boxShadow: "0 20px 50px rgba(59,130,246,0.3)" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Soft Skills</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">🧠 Problem Solving</li>
            <li className="flex items-center gap-2">💬 Communication</li>
            <li className="flex items-center gap-2">🤝 Teamwork</li>
            <li className="flex items-center gap-2">🕒 Time Management</li>
            <li className="flex items-center gap-2">🎯 Critical Thinking</li>
            <li className="flex items-center gap-2">🚀 Adaptability</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
