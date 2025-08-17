// app/projects/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio built with Next.js, Tailwind, and Framer Motion.",
    image: "/Frame.png",
    link: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce App",
    description:
      "A modern e-commerce platform with cart, checkout, and payment integration.",
    image: "/projects/ecommerce.jpg",
    link: "https://yourecommerce.com",
  },
  {
    title: "Blog Platform",
    description:
      "A full-stack blogging platform with markdown support and authentication.",
    image: "/projects/blog.jpg",
    link: "https://yourblog.com",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B12] text-white px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h1>

        {/* Grid of project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 flex-grow">{project.description}</p>

                {/* Links */}
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors text-center"
                  >
                    View Project
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block text-blue-400 text-sm hover:underline text-center"
                  >
                    🔗 Visit Site
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
