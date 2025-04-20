"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BackgroundCarousel({ images, interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt=""
          className={`w-full h-full object-cover scale-110 absolute top-0 left-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}
      <div className="absolute inset-0 bg-white/50 z-20" />
    </div>
  );
}
