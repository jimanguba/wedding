"use client"
import { motion } from "framer-motion";
import { parisienne } from "../fonts";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function HomeSection() {
  return (
    <motion.div
      className="relative text-center px-6 pt-24 mx-auto z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Names */}
      <h1
        className={`text-6xl md:text-7xl tracking-tight text-foreground drop-shadow-md z-10 relative ${parisienne.className}`}
      >
        Jillian & Braeden
      </h1>

      {/* Date & Location */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 z-10 relative">
        <p className="mb-1 uppercase tracking-wide font-semibold">
          Summer 2027
        </p>
        <p className="text-md">Winnipeg, Manitoba</p>
      </div>
      <p className="mt-8 text-md text-gray-500 dark:text-gray-400">
        We’re tying the knot! We’re so excited to celebrate this next chapter
        with you. Explore our site for all the details!
      </p>

      <a
        href="#Guest"
        className="mt-8 inline-flex items-center gap-2 bg-muted/20 text-accent px-5 py-2 rounded-full text-sm font-medium shadow-sm"
      >
        <Lock /> Guest Access
      </a>
      {/* Scroll Hint
      <div className="mt-10 animate-bounce text-accent dark:text-highlight text-sm z-10 relative tracking-wide">
        ↓ Scroll to explore
      </div> */}
    </motion.div>
  );
}
