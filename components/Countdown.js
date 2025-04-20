"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isWeddingDay: false,
  });

  useEffect(() => {
    const weddingDate = new Date("2027-09-10T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTimeLeft((prev) => ({ ...prev, isWeddingDay: true }));
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        isWeddingDay: false,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative text-center max-w-xl mx-auto mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {timeLeft.isWeddingDay ? (
        <div className="text-3xl font-light text-accent tracking-wide italic">
          Today is the day
        </div>
      ) : (
        <>
          <div className="flex justify-center gap-6 text-neutral-800 dark:text-neutral-200">
            <TimeBlock label="Days" value={timeLeft.days} />
            <TimeBlock label="Hours" value={timeLeft.hours} />
            <TimeBlock label="Minutes" value={timeLeft.minutes} />
            <TimeBlock label="Seconds" value={timeLeft.seconds} />
          </div>
          <p className="text-sm text-neutral-500 mt-4 tracking-wider uppercase">
            Until the ceremony
          </p>
        </>
      )}
    </motion.div>
  );
}

function TimeBlock({ label, value }) {
  return (
    <div className="flex flex-col items-center min-w-[60px]">
      <span className="text-4xl font-light tracking-tight">{value}</span>
      <span className="text-xs uppercase tracking-widest text-neutral-400 mt-1">
        {label}
      </span>
    </div>
  );
}
