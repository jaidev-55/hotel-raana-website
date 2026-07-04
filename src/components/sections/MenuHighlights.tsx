"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { menuHighlights } from "@/data/menu";
import { OrderButtons } from "../OrderButtons";

function FoodMark({ type }: { type: "veg" | "nonveg" }) {
  const color = type === "veg" ? "#4B8B3B" : "#8A1F1F";
  return (
    <span
      className="flex h-4 w-4 items-center justify-center rounded-[3px] border"
      style={{ borderColor: color }}
      aria-label={type === "veg" ? "Vegetarian" : "Non-vegetarian"}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

export function MenuHighlights() {
  const reduce = useReducedMotion();

  const grid: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const card: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="menu" className="bg-[#FAF6EF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A24B]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24B]">
              From our kitchen
            </span>
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-[#1B1F4B] sm:text-5xl">
            The dishes people come back for
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A423C]">
            A few of our favourites — but the full menu has plenty more waiting
            for you. Veg or non-veg, there&apos;s always something to love.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {menuHighlights.map((item) => (
            <motion.article
              key={item.name}
              variants={card}
              whileHover={reduce ? {} : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#1B1F4B]/8 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-3/2 w-full overflow-hidden bg-[#1B1F4B]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-[#22264F] to-[#14173A] text-center">
                    <span className="font-display text-3xl text-[#C9A24B]">
                      RR
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                      Photo coming soon
                    </span>
                  </div>
                )}
                {item.signature && (
                  <span className="absolute right-3 top-3 rounded-full bg-[#D4202A] px-3 py-1 text-xs font-semibold text-white shadow">
                    Signature
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <FoodMark type={item.type} />
                  <h3 className="font-display text-xl font-semibold text-[#1B1F4B]">
                    {item.name}
                  </h3>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-[#6B635C]">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#1B1F4B]/8 pt-4">
                  <span className="text-sm font-medium text-[#6B635C]">
                    {item.type === "veg" ? "Vegetarian" : "Non-veg"}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col items-center gap-5 text-center"
        >
          <p className="text-[#4A423C]">
            Hungry yet? Order from your favourite app.
          </p>
          <OrderButtons size="lg" className="justify-center" />
          <a
            href="/menu"
            className="text-sm font-semibold text-[#1B1F4B] underline decoration-[#C9A24B] underline-offset-4"
          >
            Or see the full menu →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
