"use client";

import { useEffect, useState } from "react";
import { Music, Music2, ArrowRight, Volume1, VolumeOff } from "lucide-react";
import { motion } from "framer-motion";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dragging, setDragging] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("bg-music");
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        audio.volume = 0;
        audio.play();

        let vol = 0;
        const fade = setInterval(() => {
          if (vol < 0.4) {
            vol += 0.05;
            audio.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 100);

        setIsPlaying(true);
      } catch (err) {
        console.error("🎧 Playback error:", err);
      }
    }
  };

  return (
    <div className="fixed top-[5.5rem] left-0 z-50 pl-2">
      {/* Main toggle */}
      <motion.div
        className="absolute"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDragStart={() => setDragging(true)}
        onDragEnd={(e, info) => {
          setDragging(false);
          if (info.offset.x < -20) {
            setHidden(true);
          }
        }}
        animate={{ x: hidden ? -80 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={() => {
            if (!dragging) {
              toggleMusic();
            }
          }}
          className="backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/20 dark:border-white/10 text-gray-800 dark:text-white p-3 rounded-full shadow-md hover:bg-white/30 transition-all"
        >
          {isPlaying ? (
            <Volume1 className="w-5 h-5" />
          ) : (
            <VolumeOff className="w-5 h-5" />
          )}
        </button>
      </motion.div>

      {/* Peek handle to swipe back in */}
      {hidden && (
        <motion.div
          className="absolute top-0 left-0 h-12 w-5 flex items-center justify-center bg-white/50 dark:bg-black/30 rounded-r-full shadow-md cursor-pointer"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setDragging(true)}
          onDragEnd={(e, info) => {
            setDragging(false);
            if (info.offset.x > 20) {
              setHidden(false);
            }
          }}
          onClick={() => setHidden(false)}
        >
          <MusicalNoteIcon className="w-3 h-3 text-gray-600 dark:text-gray-200" />
        </motion.div>
      )}
    </div>
  );
}
