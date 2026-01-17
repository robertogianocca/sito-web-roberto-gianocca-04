"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NavigationButton({ children, link }) {
  return (
    <Link href={link}>
      <motion.button
        className="h-10 w-10 rounded-full bg-custom-red/50 border border-white/30 flex items-center justify-center text-white"
        whileTap={{
          scale: 0.93,
          backgroundColor: "rgba(200, 32, 32, 0.7)", // Slightly brighter red on tap
        }}
        transition={{
          duration: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.button>
    </Link>
  );
}
