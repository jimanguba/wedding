"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function EnvelopeInvite({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
  };

  return (
    <div className="relative w-48 h-48 flex flex-col items-center justify-center mt-8">
      {/* Envelope Body */}
      <div className="absolute bottom-0 w-full h-32 bg-[#A0525C] rounded-b-lg shadow-inner shadow-[#3B1F2B]/30 shadow-md z-10" />

      <div
        className="absolute top-[62px] w-full flex justify-center z-20"
        style={{ perspective: 1000 }}
      >
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: opened ? -180 : 0, y: opened ? 2 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "top center",
            width: "192px", // match triangle width
            height: "64px", // match triangle height
          }}
        >
          {/* Front of the flap */}
          <div
            className="w-0 h-0 border-l-[96px] border-r-[96px] border-t-[64px] border-transparent border-t-[#B37C86]"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
              position: "relative",
              top: "1px",
              zIndex: 30,
            }}
          />

          {/* Back of the flap */}
          <div
            className="absolute inset-0 w-0 h-0 border-l-[96px] border-r-[96px] border-b-[64px] border-transparent border-b-[#A66772]"
            style={{
              willChange: "transform",
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
            }}
          />
        </motion.div>
      </div>

      {/* Card Reveal */}
      <AnimatePresence>
        {opened && (
          <motion.div
            key="card"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute w-45 bg-white rounded-md shadow-lg z-30 p-4 text-center"
          >
            <h2 className="text-md font-serif font-bold text-[#4C2A35] mb-1">
              You’re Invited!
            </h2>
            <p className="text-gray-700 text-sm mb-2 leading-snug">
              We can’t wait to celebrate with you.
            </p>
            <a
              href="#RSVP"
              className="inline-block bg-[#4C2A35] text-white text-xs px-4 py-1 rounded-full font-semibold hover:bg-heading transition-all shadow"
            >
              RSVP Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tap-to-open button */}
      {!opened && (
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium text-sm z-30"
        >
          Tap to Open
        </motion.button>
      )}
    </div>
  );
}
