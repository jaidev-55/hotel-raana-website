"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Party Hall", href: "/party-hall" },
  // { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
];

const Navbar = () => {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-[#FAF6EF]/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled || open ? "shadow-sm" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Hotel Raana — home"
          >
            <Image
              src="/images/raana-logo.png"
              alt="Hotel Raana"
              width={1200}
              height={500}
              priority
              className="h-auto w-32"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`group relative text-sm font-medium transition-colors ${
                      active
                        ? "text-[#D4202A]"
                        : "text-[#1B1F4B] hover:text-[#D4202A]"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4202A] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/menu"
            className="hidden rounded-full bg-[#D4202A] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#D4202A]/20 transition-colors hover:bg-[#B91C25] lg:inline-block"
          >
            Order online
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full text-[#1B1F4B] transition-colors hover:bg-[#1B1F4B]/5 lg:hidden"
          >
            <div className="flex w-6 flex-col gap-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full origin-center bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-full bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full origin-center bg-current"
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[#FAF6EF] px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: reduce ? 0 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`font-display block border-b border-[#1B1F4B]/10 py-4 text-3xl font-semibold transition-colors ${
                        active
                          ? "text-[#D4202A]"
                          : "text-[#1B1F4B] hover:text-[#D4202A]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + links.length * 0.07 }}
            >
              <Link
                href="/menu"
                onClick={() => setOpen(false)}
                className="mt-8 block rounded-full bg-[#D4202A] px-8 py-4 text-center text-lg font-semibold text-white shadow-lg shadow-[#D4202A]/25"
              >
                Order online
              </Link>
            </motion.div>

            <p className="mt-auto pt-8 text-sm text-[#7A726A]">
              Open every night till 11 · {siteConfig.city}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
