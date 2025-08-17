// app/learn-more/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  MessageCircle,
  Info,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Section = ({ id, title, subtitle, children }: SectionProps) => (
  <section id={id} className="relative py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />
    </div>
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-3 max-w-3xl text-base sm:text-lg text-white/70"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

export default function LearnMore() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0B0B12] text-white">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/[0.06] to-transparent" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-24 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/70 backdrop-blur"
            >
              <Sparkles className="h-4 w-4" />
              UI/UX & Graphic Designer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 text-3xl sm:text-5xl md:text-5xl font-semibold leading-tight"
            >
              Designing digital experiences that
              <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                inspire & engage
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-4 max-w-2xl text-white/70 text-base sm:text-lg"
            >
              Hi I&apos;m <strong>Elvis Nwoke</strong>, I blend creativity with
              strategy — crafting interfaces, visuals, and brands that look
              beautiful and work seamlessly.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm sm:text-base font-medium hover:opacity-90"
              >
                Explore Work{" "}
                <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm sm:text-base text-white/90 backdrop-blur hover:bg-white/10"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex justify-center lg:justify-end"
          >
<figure className="relative w-56 h-56 sm:w-72 scale-110 lg:scale-130 sm:h-72 rounded-full top-5 overflow-hidden shadow-xl lg:right-20 lg:-top-10">
  {/* Animated Gradient Border */}
  <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-conic animate-spin-slow">
    <div className="w-full h-full rounded-full bg-[#0B0B12]"></div>
  </div>

  {/* Profile Image */}
  <div className="absolute inset-[5px] rounded-full  overflow-hidden z-10">
    <Image
      src="/elvis.jpg"
      alt="Profile Photo"
      height={600}
      width={600}
      className="object-cover rounded-full"
      priority
    />
  </div>
</figure>


          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <Section
        id="benefits"
        title="Why Work With Me"
        subtitle="Every project is approached with creativity, precision, and passion for design."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Creative Design", "Modern visuals that attract and inspire."],
            ["User-Centered", "Interfaces that are intuitive & easy to use."],
            ["Brand Identity", "Building brands that stand out with meaning."],
            ["Responsive Layouts", "Designs that adapt to every device."],
            ["Attention to Detail", "Pixel-perfect work for maximum impact."],
            ["Collaborative Approach", "Your vision, elevated with expertise."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <CheckCircle className="h-6 w-6 text-indigo-400" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        title="My Process"
        subtitle="A structured, yet creative approach that ensures quality and clarity."
      >
        <ol className="relative border-l border-white/10 pl-6">
          {[
            ["Discovery", "Understanding your needs & audience."],
            ["Wireframing", "Sketching ideas and user flows."],
            ["Design", "Crafting visuals with colors & typography."],
            ["Prototyping", "Interactive mockups for feedback."],
            ["Delivery", "Final assets ready to launch."],
          ].map(([step, desc], i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold">
                {i + 1}
              </span>
              <h3 className="font-semibold">{step}</h3>
              <p className="text-sm text-white/70">{desc}</p>
            </motion.li>
          ))}
        </ol>
      </Section>

      {/* CAPABILITIES */}
      <Section
        id="capabilities"
        title="Capabilities"
        subtitle="Tools & skills that I bring to every project."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Figma",
            "Adobe XD",
            "Photoshop",
            "Illustrator",
            "Canva",
            "Prototyping",
            "Wireframing",
            "Brand Design",
          ].map((tool, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-lg border border-white/10 bg-white/5 p-4 text-center text-sm font-medium"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        id="testimonials"
        title="What Clients Say"
        subtitle="Feedback from people I've collaborated with."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            [
              "Working with BoyAlone Techs was a game-changer. The designs elevated our brand instantly.",
              "— Client A",
            ],
            [
              "Professional, creative, and highly skilled. Highly recommend for any UI/UX or graphic project.",
              "— Client B",
            ],
          ].map(([quote, name], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-white/80 italic">“{quote}”</p>
              <p className="mt-3 text-sm font-medium text-white/60">{name}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ">
        <div className="space-y-6">
          {[
            [
              "Do you work remotely?",
              "Yes! I collaborate with clients worldwide through online platforms.",
            ],
            [
              "What's your design process?",
              "Discovery → Wireframe → Design → Prototype → Delivery.",
            ],
            [
              "How long does a project take?",
              "Depends on the scope, usually 1-3 weeks for full design projects.",
            ],
          ].map(([q, a], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center gap-2 font-semibold">
                <Info className="h-5 w-5 text-indigo-400" /> {q}
              </div>
              <p className="mt-2 text-sm text-white/70">{a}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" title="Let&apos;s Build Something Great">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 p-8 text-center backdrop-blur"
        >
          <h3 className="text-xl font-semibold">Ready to start a project?</h3>
          <p className="mt-2 text-sm text-white/70">
            Let&apos;s bring your ideas to life with stunning design and seamless
            experiences.
          </p>
          <Link
            href="https://wa.me/2348065876439"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm sm:text-base font-medium hover:opacity-90"
          >
            Get in Touch <MessageCircle className="h-4 w-4" />
          </Link>
        </motion.div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Elvis. All rights reserved.
      </footer>
    </main>
  );
}
