// app/learn-more/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Star,
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
    {/* soft radial glow */}
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

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0B0B12] text-white">
      {/* gradient backdrop sweep */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/[0.06] to-transparent" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-24">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/70 backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Learn More
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight"
          >
            We design experiences that
            <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              captivate & convert
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-2xl text-white/70 text-base sm:text-lg"
          >
            A strategic blend of research, product thinking, and standout visuals—
            so your brand looks sharp and your users get results.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/#work"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm sm:text-base font-medium hover:opacity-90"
            >
              Explore Work{" "}
              <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm sm:text-base text-white/90 backdrop-blur hover:bg-white/10"
            >
              Start a Project
            </Link>
          </motion.div>

          {/* quick stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              ["45%+", "Avg. engagement lift"],
              ["30+", "Brand projects"],
              ["3+", "Years experience"],
              ["100%", "Client satisfaction"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur"
              >
                <div className="text-xl sm:text-2xl font-semibold">{k}</div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <Section
        id="benefits"
        title="What you get"
        subtitle="Deliverables and outcomes that move the needle."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Research-driven UX",
              desc: "User flows, wireframes, and tests anchored in real insights.",
            },
            {
              title: "Premium UI Systems",
              desc: "Component libraries and visual language that scale.",
            },
            {
              title: "Brand Cohesion",
              desc: "Logo, color, and typography tuned for recall.",
            },
            {
              title: "Fast Handoffs",
              desc: "Dev-ready files in Figma plus annotated specs.",
            },
            {
              title: "Conversion Focus",
              desc: "Clear funnels, crisp copy, and smart micro-interactions.",
            },
            {
              title: "Ongoing Support",
              desc: "Iteration sprints to refine after launch.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:bg-white/[0.06] transition"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5" />
                <h3 className="text-lg font-medium">{card.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROCESS TIMELINE */}
      <Section
        id="process"
        title="How we work"
        subtitle="A simple, transparent 4-step process."
      >
        <ol className="relative pl-6 space-y-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-white/10">
          {[
            ["Discovery", "Goals, audience, and success metrics."],
            ["UX & Wireframes", "Flows and structure validated by feedback loops."],
            ["UI & Visual System", "Components, styles, and motion states."],
            ["Handoff & Launch", "Dev specs, QA support, and post-launch iteration."],
          ].map(([title, desc], i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative ml-2"
            >
              <div className="absolute -left-[2.1rem] top-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs">
                  {i + 1}
                </div>
              </div>
              <h4 className="text-base sm:text-lg font-medium">{title}</h4>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </motion.li>
          ))}
        </ol>
      </Section>

      {/* CAPABILITIES */}
      <Section id="capabilities" title="Capabilities" subtitle="From brand to ship.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["UI/UX Design", "Web apps, mobile apps, dashboards"],
            ["Brand Identity", "Logos, color, type, voice"],
            ["Product Strategy", "Positioning, roadmap, KPIs"],
            ["Prototyping", "Hi-fi flows, interactions, and tests"],
            ["Design Systems", "Atoms, tokens, documentation"],
            ["Creative Assets", "Landing pages, social kits"],
          ].map(([t, d]) => (
            <motion.div
              key={t}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <h3 className="text-lg font-medium">{t}</h3>
              </div>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        id="testimonials"
        title="What clients say"
        subtitle="Real results from real projects."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Mark L., CEO", "“Seamless process and a 60% boost in engagement.”"],
            ["Sandra W., Marketing", "“Nailed the vision—distinct and memorable visuals.”"],
            ["Leo D., Co-founder", "“Timely, professional, and incredibly creative.”"],
          ].map(([name, quote]) => (
            <motion.figure
              key={name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <MessageCircle className="h-5 w-5" />
              <blockquote className="mt-3 text-sm leading-relaxed text-white/80">
                {quote}
              </blockquote>
              <figcaption className="mt-3 text-xs text-white/60">{name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQs" subtitle="Straight answers.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            [
              "How long does a project take?",
              "Most engagements run 2–6 weeks depending on scope.",
            ],
            [
              "Do you offer dev handoff?",
              "Yes—annotated Figma files, specs, and QA support.",
            ],
            [
              "What tools do you use?",
              "Figma, a11y tooling, and handoff plugins. Tailwind on the web.",
            ],
            [
              "Can you work with our dev team?",
              "Absolutely. We collaborate async or live as needed.",
            ],
          ].map(([q, a]) => (
            <motion.div
              key={q}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5" />
                <div>
                  <h4 className="font-medium">{q}</h4>
                  <p className="mt-1 text-sm text-white/70">{a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        title="Ready to build something people love?"
        subtitle="Tell us about your goals—we’ll reply with a tailored plan."
      >
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium">Let’s collaborate</h3>
              <p className="mt-1 text-sm text-white/70">
                Quick kickoff call, then a clear scope & timeline.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* FOOTER MINI */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Biggie Techs & Graphics</div>
          <nav className="flex items-center gap-5">
            <Link href="/#about" className="hover:text-white">
              About
            </Link>
            <Link href="/#work" className="hover:text-white">
              Work
            </Link>
            <Link href="/#contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
