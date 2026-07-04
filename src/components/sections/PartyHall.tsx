"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const whatsappMsg = encodeURIComponent(
  "Hi Hotel Raana! I'd like to enquire about booking your party hall. Could you share availability and details?",
);

const hallImage = "/images/hero/party-hall-hero.png";

const occasions = [
  "Birthdays",
  "Corporate get-togethers",
  "Family functions",
  "Engagements",
  "Baby showers",
  "Small celebrations",
];

const includes = [
  {
    title: "Food from our kitchen",
    body: "Full veg & non-veg catering, including the biryani everyone loves — cooked fresh for your guests.",
  },
  {
    title: "Space for your crowd",
    body: "Room to seat a comfortable gathering, whether it's a close family lunch or a big celebration.",
  },
  {
    title: "We help you plan",
    body: "Tell us the occasion and headcount — we'll help sort the menu and the details so you can relax.",
  },
  {
    title: "Right in the city",
    body: `Easy to find and easy to reach, in the heart of ${siteConfig.city}.`,
  },
];

export function PartyHall() {
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
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B1F4B] pt-28 pb-16 lg:pt-36 lg:pb-28">
        <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-[#C9A24B]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-[#C9A24B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A24B] sm:text-sm">
                Party Hall · {siteConfig.city}
              </span>
            </div>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Celebrate the days that{" "}
              <span className="italic text-[#C9A24B]">matter</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#B7B3AC] sm:mt-6 sm:text-lg">
              From birthday parties to corporate get-togethers and family
              functions, our party hall gives your gathering room to breathe —
              with food from our kitchen and a team happy to help you plan.
              Let&apos;s make it a day to remember.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={`https://wa.me/${phoneDigits}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#D4202A] px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-[#D4202A]/25 transition-colors hover:bg-[#B91C25]"
              >
                Enquire on WhatsApp
              </a>
              <a
                href={`tel:${phoneDigits}`}
                className="rounded-full border-2 border-white/20 px-8 py-4 text-center text-base font-semibold text-white transition-colors hover:border-[#C9A24B] hover:text-[#C9A24B]"
              >
                Call to book
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-4/3 overflow-hidden rounded-3xl border border-[#C9A24B]/40 shadow-2xl"
          >
            {hallImage ? (
              <Image
                src={hallImage}
                alt="Hotel Raana party hall set up for an event"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-linear-to-br from-[#22264F] to-[#14173A] text-center">
                <span className="font-display text-6xl text-[#C9A24B]">RR</span>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A24B]/80">
                  Party Hall
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#FAF6EF] py-16 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl font-semibold leading-tight text-[#1B1F4B] sm:text-4xl lg:text-5xl">
              Everything you need under one roof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4A423C] sm:text-lg">
              You bring the guests and the occasion — we&apos;ll handle the food
              and the space.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6"
          >
            {includes.map((f) => (
              <motion.div
                key={f.title}
                variants={item}
                className="rounded-2xl border border-[#1B1F4B]/8 bg-white p-6 shadow-sm sm:p-7"
              >
                <h3 className="font-display text-xl font-semibold text-[#1B1F4B]">
                  {f.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[#6B635C]">{f.body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Occasions */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-12 sm:mt-16"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24B]">
              Perfect for
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
              {occasions.map((o) => (
                <span
                  key={o}
                  className="rounded-full border border-[#1B1F4B]/15 bg-white px-4 py-2 text-sm font-medium text-[#1B1F4B] sm:px-5 sm:py-2.5"
                >
                  {o}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#FAF6EF] pb-16 pt-0 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight text-[#1B1F4B] sm:text-4xl lg:text-5xl">
            Got a date in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4A423C] sm:text-lg">
            Message or call us with your occasion and rough headcount, and
            we&apos;ll walk you through availability, menu, and everything else.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={`https://wa.me/${phoneDigits}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4202A] px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-[#D4202A]/25 transition-colors hover:bg-[#B91C25]"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${phoneDigits}`}
              className="rounded-full border-2 border-[#1B1F4B]/20 px-8 py-4 text-center text-base font-semibold text-[#1B1F4B] transition-colors hover:border-[#1B1F4B] hover:bg-[#1B1F4B] hover:text-white"
            >
              {siteConfig.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}