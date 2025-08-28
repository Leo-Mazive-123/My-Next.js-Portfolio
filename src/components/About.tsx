"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="min-h-screen flex items-center justify-center bg-[white] text-gray-900 px-6"
    >
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-full sm:max-w-xl md:max-w-3xl text-center bg-white rounded-2xl shadow-xl shadow-blue-300/40 p-10"
      >
        {/* Header with line below */}
        <div className="flex flex-col items-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-4xl font-bold text-blue-600"
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        {/* Paragraphs */}
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-4">
          Hey, I’m <strong className="text-blue-500">Leo Mazive</strong>, a{" "}
          <strong>Full Stack Developer</strong> who loves turning ideas into sleek,
          high-performance web experiences. I craft dynamic applications using{" "}
          <span className="text-purple-500 font-medium">
            Next.js, React, Tailwind, FastAPI,
          </span>{" "}
          and <span className="text-purple-500">Supabase</span>, blending
          functionality with modern design.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-6">
          When I’m not coding 💻, I enjoy learning new tech trends, mentoring
          others, and exploring creative ideas that make an impact.
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition font-medium"
        >
          View My Projects
        </motion.a>
      </motion.article>
    </section>
  );
}
