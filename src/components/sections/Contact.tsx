"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address,
)}`;
const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteConfig.address,
)}&output=embed`;

const cards = [
  {
    title: "Come find us",
    body: siteConfig.address,
    action: { label: "Get directions", href: mapsUrl, external: true },
  },
  {
    title: "Give us a call",
    body: `${siteConfig.phone}\n${siteConfig.landline}`,
    action: { label: "Call now", href: `tel:${phoneDigits}`, external: false },
  },
  {
    title: "When we're open",
    body: "Every day · Lunch & dinner\nCloses 11:00 PM",
    action: null,
  },
];

const Contact = () => {
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
    <section id="contact" className="bg-[#FAF6EF] py-20 lg:py-28">
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
              Come say hello
            </span>
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-[#1B1F4B] sm:text-5xl">
            We&apos;d love to have you over
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A423C]">
            Drop by for a meal, call ahead to book, or find us on the map below.
            There&apos;s always a warm plate waiting.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: info cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5"
          >
            {cards.map((c) => (
              <motion.div
                key={c.title}
                variants={item}
                className="rounded-2xl border border-[#1B1F4B]/8 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-semibold text-[#1B1F4B]">
                  {c.title}
                </h3>
                <p className="mt-2 whitespace-pre-line text-[#6B635C]">
                  {c.body}
                </p>
                {c.action && (
                  <a
                    href={c.action.href}
                    {...(c.action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-4 inline-block font-semibold text-[#D4202A] underline decoration-[#C9A24B] underline-offset-4 transition-colors hover:text-[#B91C25]"
                  >
                    {c.action.label} →
                  </a>
                )}
              </motion.div>
            ))}

            <motion.a
              variants={item}
              href={`https://wa.me/${phoneDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#1B1F4B] px-6 py-5 text-center font-semibold text-white transition-colors hover:bg-[#252a5c]"
            >
              Message us on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-90 overflow-hidden rounded-3xl border border-[#C9A24B]/40 shadow-xl lg:min-h-full"
          >
            <iframe
              title="Hotel Raana location on Google Maps"
              src={mapEmbed}
              className="h-full min-h-90 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
