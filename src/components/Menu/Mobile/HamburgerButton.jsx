"use client";

import { useState } from "react";
import { motion } from "motion/react";
import MobileMenu from "./MobileMenu";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={toggleMenu}
        className="z-60 h-10 w-10 rounded-full unused:bg-white/10 bg-custom-red/50 border border-white/30 backdrop-blur-md flex items-center justify-center transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <span className="sr-only">Toggle menu</span>
        <motion.span
          className="relative block h-4 w-5"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: -6 },
              open: { rotate: 45, y: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white rounded-full"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white rounded-full"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 6 },
              open: { rotate: -45, y: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white rounded-full"
          />
        </motion.span>
      </button>

      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </div>
  );
}
