"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-cyan-400/10 to-purple-500/10 blur-2xl" />
      </div>

      {/* Header Text */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-white tracking-tight"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-center text-white/70 max-w-2xl mx-auto mt-4 text-lg"
      >
        A small story about who I am, what I do, and why I love building digital
        experiences.
      </motion.p>

      {/* Main Content Layout */}
      <div className="mt-16 grid md:grid-cols-2 gap-14 max-w-5xl mx-auto items-start">
        {/* LEFT — Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8"
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src="/elvis.jpg"
              alt="Elvis Profile"
              width={100}
              height={100}
              className="h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 p-[3px] mb-6"
            />

            <h2 className="text-2xl font-bold text-white">Elvis</h2>
            <p className="text-white/60 mt-1 text-sm">
              UI & UX Designer • Product Designer • Creator
            </p>

            <p className="text-white/70 mt-6 leading-relaxed">
              I blend creativity and logic to craft clean, modern digital
              experiences. My passion is solving problems with elegant solutions
              and thoughtful UI/UX.
            </p>

            <div className="mt-6 flex gap-3">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                Framer website
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                UI/UX
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm">
                Product Design
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — About Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/80 leading-relaxed space-y-5 text-lg"
        >
          <p>
            I&apos;m a UI/UX designer and product thinker who&apos;s obsessed
            with crafting clean, intuitive, human-centered digital experiences.
            Design for me is more than visuals — it&apos;s about solving
            problems and creating interactions that feel effortless and
            meaningful.
          </p>

          <p>
            My process blends aesthetics with usability. I translate ideas into
            structured flows, wireframes, and polished interfaces that balance
            clarity, emotion, and brand identity. I focus on creating
            experiences that guide users naturally, reduce friction, and inspire
            trust.
          </p>

          <p>
            As a Framer designer, I love bringing interfaces to life through
            motion, micro-interactions, and smooth prototyping. Animations,
            transitions, and behavior design are a big part of how I test,
            refine, and elevate digital products.
          </p>

          <p>
            Beyond visuals, I think like a product designer — understanding user
            psychology, shaping the user journey, and designing features that
            are not only beautiful but purposeful. Every decision is
            intentional, every pixel has a job, and every interaction is crafted
            to improve the user&apos;s experience.
          </p>

          <p>
            Outside of designing, I enjoy exploring new design tools, studying
            interaction patterns, and experimenting with prototypes that push
            the limits of what interfaces can feel like.
          </p>

          <p className="font-semibold text-white mt-8">
            Thanks for visiting — and welcome to my world of design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
