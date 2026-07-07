"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { OrderButtons } from "../OrderButtons";

const heroImage = "/images/hero/hero-fine-dining-thanjavur.png";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const imageIn: Variants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6EF]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-32 pb-16 lg:grid-cols-2 lg:gap-16 lg:pt-32 lg:pb-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-5">
            <p className="font-display text-2xl font-bold leading-none text-[#D4202A] sm:text-3xl">
              Hotel Raana
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-[#C9A24B]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A24B] sm:text-sm">
                The Art of Fine Dining · {siteConfig.city}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.1] text-[#1B1F4B] sm:text-6xl lg:text-7xl"
          >
            Come hungry,{" "}
            <span className="italic text-[#D4202A]">leave happy</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base leading-relaxed text-[#4A423C] sm:text-lg"
          >
            For years, Thanjavur has pulled up a chair at our table — for
            biryani that&apos;s worth the wait, veg and non-veg dishes made the
            way we&apos;d make them at home, and a party hall for the days
            you&apos;ll always remember. Every flavour here tells a story.
            We&apos;d love to share ours with you.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <OrderButtons
              size="lg"
              className="w-full sm:w-auto [&>a]:flex-1 sm:[&>a]:flex-none"
            />
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/party-hall"
                className="block rounded-full border-2 border-[#1B1F4B]/20 px-8 py-4 text-center text-base font-semibold text-[#1B1F4B] transition-colors hover:border-[#1B1F4B] hover:bg-[#1B1F4B] hover:text-white"
              >
                Book the party hall
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#4A423C] sm:mt-12 sm:gap-x-8"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#C9A24B]">★</span>
              <span className="font-semibold text-[#1B1F4B]">
                {siteConfig.rating}
              </span>
              · loved by {siteConfig.reviewCount} diners
            </span>
            <span className="hidden h-4 w-px bg-[#1B1F4B]/15 sm:block" />
            <span>Open every night till 11</span>
            <span className="hidden h-4 w-px bg-[#1B1F4B]/15 sm:block" />
            <span>Around {siteConfig.priceRange} for two</span>
          </motion.div>
        </motion.div>

  
        <motion.div
          variants={imageIn}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-[#C9A24B]/40 bg-[#1B1F4B] shadow-2xl">
            {heroImage ? (
              <Image
                src={heroImage}
                alt="A plate of biryani served at Hotel Raana, Thanjavur"
                fill
                priority
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

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8"
          >
            <span className="text-2xl text-[#C9A24B]">★</span>
            <div className="leading-tight">
              <p className="text-lg font-bold text-[#1B1F4B]">
                {siteConfig.rating}/5
              </p>
              <p className="text-xs text-[#7A726A]">
                Loved by {siteConfig.reviewCount} diners
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
