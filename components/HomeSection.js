"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PushNotifications from "./PushNotifications";
import EnvelopeInvite from "./EnvelopeInvite";
import { parisienne } from "./fonts";

export default function HomeSection() {
  const [countdown, setCountdown] = useState("");
  const [inviteOpened, setInviteOpened] = useState(false);

  useEffect(() => {
    const weddingDate = new Date("2027-09-10T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setCountdown("Today is the day");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${days} day${days !== 1 ? "s" : ""} • ${String(hours).padStart(
          2,
          "0"
        )}h • ${String(minutes).padStart(2, "0")}m • ${String(seconds).padStart(
          2,
          "0"
        )}s`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative text-center px-6 pt-24 max-w-3xl mx-auto z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Names */}
      <h1 className={`text-6xl md:text-7xl tracking-tight text-black drop-shadow-md z-10 relative ${parisienne.className}`}>
        Jillian  &  Braeden
      </h1>

      {/* Date & Location */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 z-10 relative">
        <p className="mb-1 uppercase tracking-wide font-semibold">
          Save the Date · 09.10.2027
        </p>
        <p className="text-md">Winnipeg, Manitoba</p>
      </div>

      {/* Countdown */}
      <div className="mt-5 text-2xl font-medium text-[color:#800000] dark:text-[#fcd2d2] z-10 relative tracking-wide">
        {countdown}
      </div>
      <p className="text-sm text-gray-500 mt-1 z-10 relative">
        Until the ceremony
      </p>

      {/* RSVP Button */}
      <div className="flex flex-col items-center justify-center">
        <EnvelopeInvite onOpen={() => setInviteOpened(true)} />
        <PushNotifications />
      </div>
      {/* Scroll Hint */}
      <div className="mt-10 animate-bounce text-accent dark:text-highlight text-sm z-10 relative tracking-wide">
        ↓ Scroll to explore
      </div>
    </motion.div>
  );
}
