"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const aboutImage = "/images/about-hotel-raana.png";

const facts = [
  { value: "Veg & Non-veg", label: "Something for everyone" },
  { value: "Biryani", label: "What we're known for" },
  { value: "Party Hall", label: "For your big days" },
  { value: "Till 11 PM", label: "Open every night" },
];

const About = () => {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="bg-[#FAF6EF] py-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-[#C9A24B]/40 bg-[#1B1F4B] shadow-2xl sm:aspect-4/5">
            {aboutImage ? (
              <Image
                src={aboutImage}
                alt="Inside Hotel Raana, Thanjavur"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-linear-to-br from-[#22264F] to-[#14173A] text-center">
                <span className="font-display text-6xl text-[#C9A24B]">RR</span>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A24B]/80">
                  The Art of Fine Dining
                </span>
              </div>
            )}
          </div>

          {/* small gold accent tag */}
          <div className="absolute -right-3 -top-3 rounded-2xl bg-[#C9A24B] px-4 py-2.5 text-center shadow-lg sm:-right-6 sm:-top-4 sm:px-5 sm:py-3">
            <p className="font-display text-xl font-bold text-[#1B1F4B] sm:text-2xl">
              Raana
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1B1F4B]/70">
              Thanjavur
            </p>
          </div>
        </motion.div>

        {/* Right: story */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={item} className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A24B]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24B]">
              Our story
            </span>
          </motion.div>

          <motion.h2
            variants={item}
            className="font-display text-3xl font-semibold leading-tight text-[#1B1F4B] sm:text-4xl lg:text-5xl"
          >
            Good food, made the way it should be
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-base leading-relaxed text-[#4A423C] sm:text-lg"
          >
            Hotel Raana started with a simple belief — that a good meal brings
            people together. Every biryani we serve is cooked the slow way, with
            seeraga samba rice and spices we don&apos;t cut corners on, because
            that&apos;s how it&apos;s meant to taste.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-base leading-relaxed text-[#4A423C] sm:text-lg"
          >
            Veg or non-veg, a quick lunch or a full celebration in our party
            hall — you&apos;ll get the same warm welcome and the same care on
            every plate. That&apos;s the promise behind our name, and it&apos;s
            why so much of Thanjavur keeps coming back.
          </motion.p>

          {/* At a glance */}
          <motion.div
            variants={item}
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4"
          >
            {facts.map((f) => (
              <div
                key={f.value}
                className="rounded-2xl border border-[#1B1F4B]/8 bg-white p-4 text-center shadow-sm"
              >
                <p className="font-display text-base font-bold text-[#D4202A] sm:text-lg">
                  {f.value}
                </p>
                <p className="mt-1 text-xs leading-tight text-[#6B635C]">
                  {f.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 sm:mt-10">
            <a
              href="/menu"
              className="block rounded-full border-2 border-[#1B1F4B]/20 px-8 py-4 text-center text-base font-semibold text-[#1B1F4B] transition-colors hover:border-[#1B1F4B] hover:bg-[#1B1F4B] hover:text-white sm:inline-block"
            >
              See what we&apos;re cooking
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;