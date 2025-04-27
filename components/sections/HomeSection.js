"use client";
import { motion } from "framer-motion";
import { parisienne } from "../fonts";
import { Lock } from "lucide-react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center w-full h-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="/home_bg_bokeh.png"
          alt="Engagement"
          fill
          className="object-cover  object-[10%_center]"
          priority
        />
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
      </div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-10 px-6 py-24 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Names */}
        <h1
          className={`text-6xl md:text-7xl tracking-tight text-foreground drop-shadow-md relative ${parisienne.className}`}
        >
          Jillian & Braeden
        </h1>

        {/* Date & Location */}
        <div className="text-sm text-black dark:text-white mb-3 relative">
          <p className="mb-1 uppercase tracking-wide font-semibold">
            Summer 2027
          </p>
          <p className="text-md">Winnipeg, Manitoba</p>
        </div>

        {/* Welcome Message */}
        <p className="mt-8 text-md text-black dark:text-white">
          We’re tying the knot! We’re so excited to celebrate this next chapter
          with you. Explore our site for all the details!
        </p>

        {/* Guest Access Button */}
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
    </div>
  );
}
