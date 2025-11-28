// app/projects/page.tsx
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "12",
    iframe: "https://www.behance.net/embed/project/238032219?ilo0=1",
  },

  {
    title: "15",
    iframe: "https://www.behance.net/embed/project/232930305?ilo0=1",
  },

  {
    title: "14",
    iframe: "https://www.behance.net/embed/project/234747471?ilo0=1",
  },
  {
    title: "1",
    iframe: "https://www.behance.net/embed/project/231946113?ilo0=1",
  },
  {
    title: "2",
    // iframe: "https://www.behance.net/embed/project/238032219?ilo0=1",
    iframe: "https://www.behance.net/embed/project/232166489?ilo0=1",
  },
  {
    title: "3",
    iframe: "https://www.behance.net/embed/project/230491529?ilo0=1",
  },
  {
    title: "4",
    iframe: "https://www.behance.net/embed/project/229628877?ilo0=1",
  },
  {
    title: "5",
    iframe: "https://www.behance.net/embed/project/231234013?ilo0=1",
  },
  {
    title: "6",
    iframe: "https://www.behance.net/embed/project/229728609?ilo0=1",
  },
  {
    title: "7",
    iframe: "https://www.behance.net/embed/project/228937239?ilo0=1",
  },
  {
    title: "8",
    iframe: "https://www.behance.net/embed/project/229615933?ilo0=1",
  },
  {
    title: "9",
    iframe: "https://www.behance.net/embed/project/229408955?ilo0=1",
  },
  {
    title: "10",
    iframe: "https://www.behance.net/embed/project/228958227?ilo0=1",
  },
  {
    title: "11",
    iframe: "https://www.behance.net/embed/project/229036179?ilo0=1",
  },

  {
    title: "13",
    iframe: "https://www.behance.net/embed/project/232166489?ilo0=1",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B12] my-10 text-white px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-5xl font-bold text-center mb-15"
        >
          <span className="text-blue-500">Works</span>
        </motion.h1>

        {/* Grid of iframes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.iframe
              key={project.title}
              src={project.iframe}
              height="316"
              width="100%"
              allowFullScreen
              frameBorder="0"
              scrolling="no"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ overflow: "hidden" }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
