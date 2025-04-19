"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RSVPSection from "./RSVPSection";

export default function EnvelopeAnimation() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [open, setOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setStartAnimation(true);
    setTimeout(() => {
      setOpen(true);
    }, 900); // allow the slide + scale to finish
  };

  return (
    <div className="relative min-h-screen overflow-auto bg-white">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center space-y-4">
          {/* Prompt */}
          <motion.div
            className="text-center text-gray-700 text-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tap the envelope to RSVP 💌
          </motion.div>

          {/* Envelope */}
          <div
            className="relative w-64 h-40 cursor-pointer perspective-[1000px]"
            onClick={handleEnvelopeClick}
          >
            {/* Envelope BACK */}
            <div className="absolute w-full h-full bg-[#BF4040] rounded-md shadow-xl z-20" />

            {/* Paper Preview (Always Showing) */}
            {!startAnimation && (
              <div className="absolute left-1/2 bottom-4 w-[90%] h-32 bg-white border border-gray-200 rounded-md shadow z-30 translate-x-[-50%] pointer-events-none" />
            )}

            {/* Animated Paper → Modal */}
            <AnimatePresence>
  {startAnimation && !open && (
    <motion.div
      key="paper-slide"
      initial={{
        position: "absolute",
        left: "50%",
        bottom: "1.25rem",
        width: "90%",
        height: "8rem",
        translateX: "-50%",
        borderRadius: "0.5rem",
        zIndex: 30, // 👈 still under the envelope front
        opacity: 1,
      }}
      animate={{
        bottom: "12rem", // slide upward
        height: "12rem", // grow a bit if you want
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="bg-white shadow-2xl border border-gray-200"
    />
  )}
</AnimatePresence>



            {/* Envelope FRONT with angled shape */}
            <div className="absolute w-full h-full z-35 pointer-events-none">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,100 0,0 50,50 100,0 100,100"
                  fill="#BF4040"
                />
              </svg>
            </div>

            {/* Envelope FLAP */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 origin-top z-40"
              animate={{ rotateX: startAnimation ? -180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d", transformOrigin: "top" }}
            >
              <svg
                viewBox="0 0 100 50"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <polygon points="0,0 50,50 100,0" fill="#800000" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Final Modal with Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-50 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpen(false);
              setStartAnimation(false);
            }}
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <motion.div
                className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <RSVPSection />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
