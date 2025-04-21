"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EnvelopeInvite from "@/components/EnvelopeInvite";
import PushNotifications from "@/components/PushNotifications";
import { parisienne } from "@/components/fonts";
import Countdown from "@/components/Countdown";
import { ArrowLeft } from "lucide-react";

export default function GuestHomeSection() {
  const [inviteOpened, setInviteOpened] = useState(false);

  return (
    <motion.div
      className="relative text-center px-6 pt-24 max-w-3xl mx-auto z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Link href="/">
        <button className="inline-flex items-center gap-1 bg-[color:#800000] text-white text-xs px-3 py-1.5 rounded-full font-medium hover:bg-[color:#BF4040] transition-all shadow-sm">
          <ArrowLeft className="w-3 h-3" />
          Return to Main Site
        </button>
      </Link>

      {/* Names */}
      <h1
        className={`mt-4 text-6xl md:text-7xl tracking-tight text-foreground drop-shadow-md z-10 relative ${parisienne.className}`}
      >
        Jillian & Braeden
      </h1>

      {/* Date & Location */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 z-10 relative">
        <p className="mb-1 uppercase tracking-wide font-semibold">
          Save the Date · 09.10.2027
        </p>
        <p className="text-md">Winnipeg, Manitoba</p>
      </div>

      <Countdown />

      {/* RSVP Button */}
      <div className="flex flex-col items-center justify-center">
        <EnvelopeInvite onOpen={() => setInviteOpened(true)} />
      </div>
      {/* Scroll Hint */}
      <div className="mt-10 animate-bounce text-accent dark:text-highlight text-sm z-10 relative tracking-wide">
        ↓ Scroll to explore
      </div>
    </motion.div>
  );
}
