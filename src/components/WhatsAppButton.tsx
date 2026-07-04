"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const message = encodeURIComponent("Hi Hotel Raana! I'd like to know more.");

export function WhatsAppButton() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`https://wa.me/${phoneDigits}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.5, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: reduce ? 1 : 0.5, y: reduce ? 0 : 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
        >
          {/* subtle pulse ring */}
          {!reduce && (
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
          )}
          <FaWhatsapp className="h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
