"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { galleryImages, type GalleryCategory } from "@/data/gallery";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

const filters: ("All" | GalleryCategory)[] = [
  "All",
  "Food",
  "Our Space",
  "Events",
];

// Placeholder tile shown until a real photo is added
function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-[#22264F] to-[#14173A] p-4 text-center">
      <span className="font-display text-3xl text-[#C9A24B]">RR</span>
      <span className="text-[11px] leading-tight text-white/50">{label}</span>
    </div>
  );
}

export function Gallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<"All" | GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shown =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  // Lightbox keyboard controls
  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % shown.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? i : (i - 1 + shown.length) % shown.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, shown.length]);

  const tile: Variants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.94 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="gallery"
      className="bg-[#FAF6EF] pt-28 pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A24B]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24B]">
              A look inside
            </span>
            <span className="h-px w-10 bg-[#C9A24B]" />
          </div>
          <h2 className="font-display text-4xl font-semibold text-[#1B1F4B] sm:text-5xl">
            The good stuff, in pictures
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[#4A423C]">
            The food, the room, and the moments that happen here. Take a peek.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === f
                  ? "bg-[#1B1F4B] text-white"
                  : "border border-[#1B1F4B]/15 bg-white text-[#1B1F4B] hover:border-[#1B1F4B]/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((img, i) => (
              <motion.button
                key={img.alt}
                layout
                variants={tile}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
                onClick={() => img.src && setLightbox(i)}
                className={`group relative aspect-square overflow-hidden rounded-2xl border border-[#1B1F4B]/8 bg-[#1B1F4B] shadow-sm ${
                  img.src ? "cursor-pointer" : "cursor-default"
                }`}
              >
                {img.src ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Placeholder label={img.alt} />
                )}
                {img.src && (
                  <span className="absolute inset-0 bg-[#1B1F4B]/0 transition-colors group-hover:bg-[#1B1F4B]/20" />
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && shown[lightbox]?.src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-5 top-5 text-white/70 transition-colors hover:text-white"
            >
              <IoClose className="h-8 w-8" />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) =>
                  i === null ? i : (i - 1 + shown.length) % shown.length,
                );
              }}
              aria-label="Previous"
              className="absolute left-4 text-white/60 transition-colors hover:text-white sm:left-8"
            >
              <IoChevronBack className="h-9 w-9" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => (i === null ? i : (i + 1) % shown.length));
              }}
              aria-label="Next"
              className="absolute right-4 text-white/60 transition-colors hover:text-white sm:right-8"
            >
              <IoChevronForward className="h-9 w-9" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[80vh] w-full max-w-4xl"
            >
              <Image
                src={shown[lightbox].src as string}
                alt={shown[lightbox].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-white/70">
                {shown[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
