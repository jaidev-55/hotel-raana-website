"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fullMenu } from "@/data/menu";
import { OrderButtons } from "../OrderButtons";

type Filter = "all" | "veg" | "nonveg";

function FoodMark({ type }: { type: "veg" | "nonveg" }) {
  const color = type === "veg" ? "#4B8B3B" : "#8A1F1F";
  return (
    <span
      className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border"
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

export function FullMenu() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");
  const [activeCat, setActiveCat] = useState<string>("");

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const menu = useMemo(() => {
    if (filter === "all") return fullMenu;
    return fullMenu
      .map((c) => ({ ...c, items: c.items.filter((i) => i.type === filter) }))
      .filter((c) => c.items.length > 0);
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveCat((e.target as HTMLElement).dataset.title || "");
          }
        });
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach(
      (el) => el && observer.observe(el),
    );
    return () => observer.disconnect();
  }, [menu]);

  // Keep the active chip in view within the sticky bar
  useEffect(() => {
    chipRefs.current[activeCat]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeCat]);

  const jumpTo = (title: string) => {
    sectionRefs.current[title]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-[#FAF6EF] pt-28 pb-20 lg:pt-32 lg:pb-28">
      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#C9A24B]" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24B]">
            Our menu
          </span>
          <span className="h-px w-10 bg-[#C9A24B]" />
        </div>
        <h1 className="font-display text-4xl font-semibold text-[#1B1F4B] sm:text-5xl">
          Everything we&apos;re serving
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[#4A423C]">
          Veg or non-veg, there&apos;s always something to love. Tap a category
          to jump straight to it.
        </p>
      </div>

      {/* Sticky control bar: filter + category chips */}
      <div className="sticky top-17 z-30 mt-10 border-y border-[#1B1F4B]/10 bg-[#FAF6EF]/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-3">
          {/* Veg / Non-veg filter */}
          <div className="flex justify-center gap-2">
            {(
              [
                { key: "all", label: "All" },
                { key: "veg", label: "Veg" },
                { key: "nonveg", label: "Non-veg" },
              ] as { key: Filter; label: string }[]
            ).map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-5 py-1.5 text-sm font-semibold transition ${
                  filter === f.key
                    ? "bg-[#1B1F4B] text-white"
                    : "border border-[#1B1F4B]/15 bg-white text-[#1B1F4B] hover:border-[#1B1F4B]/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Category chips (horizontal scroll) */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
            {menu.map((cat) => {
              const active = activeCat === cat.title;
              return (
                <button
                  key={cat.title}
                  ref={(el) => {
                    chipRefs.current[cat.title] = el;
                  }}
                  onClick={() => jumpTo(cat.title)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active
                      ? "bg-[#D4202A] text-white"
                      : "text-[#4A423C] hover:bg-[#1B1F4B]/5"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-14 space-y-16">
          {menu.map((cat) => (
            <section
              key={cat.title}
              data-title={cat.title}
              ref={(el) => {
                sectionRefs.current[cat.title] = el;
              }}
              className="scroll-mt-40"
            >
              <div className="mb-6 border-b border-[#1B1F4B]/10 pb-3">
                <h2 className="font-display text-2xl font-semibold text-[#D4202A]">
                  {cat.title}
                </h2>
                {cat.note && (
                  <p className="mt-1 text-sm text-[#8E8A83]">{cat.note}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                {cat.items.map((dish) => (
                  <motion.div
                    key={dish.name}
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-30px" }}
                    className="flex items-start gap-3"
                  >
                    <FoodMark type={dish.type} />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-medium text-[#1B1F4B]">
                          {dish.name}
                        </h3>
                        {dish.signature && (
                          <span className="rounded-full bg-[#D4202A]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#D4202A]">
                            Signature
                          </span>
                        )}
                      </div>
                      {dish.description && (
                        <p className="mt-0.5 text-sm leading-relaxed text-[#6B635C]">
                          {dish.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center gap-5 text-center">
          <p className="text-lg text-[#4A423C]">Found something you like?</p>
          <OrderButtons size="lg" className="justify-center" />
        </div>
      </div>
    </section>
  );
}
