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
              className="mt-8 flex justify-between max-w-[300px]"
            >
              
              <Link className="p-2 pl-3 pt-3 rounded-full h-[50px] w-[50px] hover:bg-purple-500" href="https://x.com/ElvisUIUX?t=rpcl9whEVrQvX-Pj9eQ96g&s=09" ><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z"><animate fill="freeze" attributeName="d" dur="0.8s" keyTimes="0;0.3;0.5;1" values="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z"></animate></path></svg></Link>
              <Link className="p-2 pl-3 pt-3  rounded-full h-[50px] w-[50px] hover:bg-purple-500" href="https://www.linkedin.com/in/nwoko-elvis-803a0a343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 32 32"><path fill="currentColor" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"></path></svg></Link>
              <Link className="p-2 rounded-full h-[50px] w-[50px] hover:bg-purple-500" href="https://www.behance.net/nwokoelvis" ><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16"><path fill="currentColor" d="M4.641 3.206c.472 0 .897.041 1.284.125c.388.081.716.219.994.406q.41.282.644.75q.225.466.225 1.156q0 .744-.338 1.241c-.228.331-.559.6-1.003.813c.606.175 1.053.481 1.353.916c.3.438.444.963.444 1.581q-.001.748-.287 1.291a2.54 2.54 0 0 1-.778.891q-.489.346-1.119.509a5 5 0 0 1-1.287.166H.001V3.207h4.641zm-.282 3.975q.577 0 .953-.275c.25-.181.369-.481.369-.894q0-.344-.122-.566a.9.9 0 0 0-.334-.344a1.3 1.3 0 0 0-.478-.172a3 3 0 0 0-.556-.05H2.166v2.3H4.36zm.119 4.191q.32.002.606-.063a1.4 1.4 0 0 0 .509-.209c.144-.097.266-.225.353-.394q.13-.249.128-.637q-.001-.76-.428-1.088q-.427-.323-1.131-.322h-2.35v2.709h2.313zm6.853-.034q.441.43 1.266.431c.394 0 .738-.1 1.022-.3s.456-.412.522-.631h1.725c-.278.859-.697 1.469-1.272 1.838c-.566.369-1.259.556-2.063.556a4.1 4.1 0 0 1-1.519-.269a3.2 3.2 0 0 1-1.15-.766a3.5 3.5 0 0 1-.725-1.188a4.4 4.4 0 0 1-.256-1.519q0-.801.262-1.491c.178-.463.422-.859.747-1.194s.706-.6 1.156-.794a3.7 3.7 0 0 1 1.488-.291q.904-.001 1.584.353q.676.352 1.113.944c.437.592.497.847.625 1.353s.172 1.034.137 1.588h-5.147c0 .559.188 1.094.484 1.378zm2.247-3.744c-.231-.256-.628-.397-1.106-.397q-.47 0-.778.159a1.6 1.6 0 0 0-.497.394a1.4 1.4 0 0 0-.262.503q-.076.26-.091.469h3.188c-.047-.5-.219-.869-.453-1.128zM10.444 4h3.991v.972h-3.991z"></path></svg></Link>
              <Link className="p-2 rounded-full h-[50px] w-[50px] hover:bg-purple-500" href="https://discord.gg/xHzTQcCW" ><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><g fill="currentColor" fillOpacity={0}><circle cx={9} cy={12} r={1.5}><animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"></animate></circle><circle cx={15} cy={12} r={1.5}><animate fill="freeze" attributeName="fill-opacity" begin="1.45s" dur="0.15s" values="0;1"></animate></circle></g><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={32} strokeDashoffset={32} d="M12 6h2l1 -2c0 0 2.5 0.5 4 1.5c3.53 2.35 3 9.5 3 10.5c-1.33 2.17 -5.5 3.5 -5.5 3.5l-1 -2M12 6h-2l-0.97 -2c0 0 -2.5 0.5 -4 1.5c-3.53 2.35 -3 9.5 -3 10.5c1.33 2.17 5.5 3.5 5.5 3.5l1 -2"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></animate></path><path strokeDasharray={16} strokeDashoffset={16} d="M5.5 16c5 2.5 8 2.5 13 0"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="16;0"></animate></path></g></svg></Link>


            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/works"
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
      src="/IMG-20250730-WA0099.jpg"
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
