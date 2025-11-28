"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "2348012345678";
    const text = `Hello, my name is ${form.name} (%20${form.email}%20).\n\n${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0B0B12] text-white px-6 md:px-12 py-20 flex items-center justify-center">
      {/* Centered Form Container */}
      <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8 backdrop-blur">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-center mb-6"
        >
          Contact Me
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 focus:border-blue-500 outline-none resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-blue-600"
          >
            <Send className="h-5 w-5" /> Send
          </motion.button>
        </form>
      </div>
    </main>
  );
}
