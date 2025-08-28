"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const body = (formData.get("message") as string)?.trim();
    if (!name || !email || !body) {
      setStatus("error");
      setMessage("Please fill out all fields.");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
      return;
    }

    try {
      setStatus("loading");
      setMessage("");

      const res = await fetch("https://formspree.io/f/xkgzlvba", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
        setMessage("Thanks! Your message was sent successfully.");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  }

  return (
    <section id="contact" className="min-h-screen bg-white text-gray-900 py-20 px-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-4xl font-bold text-blue-600"
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="w-24 h-1 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />

        <p className="mt-6 text-gray-600">
          Have a project or idea in mind? Let's collaborate! Reach out via email, phone,
          or connect on social media.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
      >
        <ContactCard
          icon={<FaEnvelope className="text-2xl text-blue-500" />}
          label="Email"
          value="leomazive01@gmail.com"
          href="mailto:leomazive01@gmail.com"
        />
        <ContactCard
          icon={<FaPhoneAlt className="text-2xl text-green-500" />}
          label="Phone"
          value="+263 77 395 0814"
          href="tel:+263773950814"
        />
        <ContactCard
          icon={<FaGithub className="text-2xl text-gray-800" />}
          label="GitHub"
          value="github.com/Leo-Mazive-123"
          href="https://github.com/Leo-Mazive-123"
          external
        />
        <ContactCard
          icon={<FaLinkedin className="text-2xl text-blue-700" />}
          label="LinkedIn"
          value="linkedin.com/in/leo-mazive"
          href="https://www.linkedin.com/in/leo-mazive-b470a535b"
          external
        />
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 max-w-xl mx-auto grid gap-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 p-3 outline-none text-gray-900"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 p-3 outline-none text-gray-900"
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          className="w-full rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 p-3 outline-none text-gray-900"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-70 px-6 py-3 font-semibold shadow-lg shadow-blue-500/20 transition text-white"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status !== "idle" && (
          <p
            className={
              status === "success"
                ? "text-green-600 text-sm mt-1"
                : status === "error"
                ? "text-red-600 text-sm mt-1"
                : "text-gray-600 text-sm mt-1"
            }
          >
            {message}
          </p>
        )}
      </motion.form>
    </section>
  );
}

/* ----------------- Small Card Component ----------------- */
function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group rounded-2xl bg-gray-100 border border-gray-300 hover:border-blue-500 hover:bg-gray-50 transition p-5 flex flex-col items-center text-center shadow hover:shadow-blue-200"
    >
      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200">
        {icon}
      </div>
      <h3 className="text-sm uppercase tracking-wide text-gray-500">{label}</h3>
      <p className="mt-1 font-medium text-gray-900">{value}</p>
    </a>
  );
}
