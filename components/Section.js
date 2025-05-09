"use client";
import { motion } from "framer-motion";

export default function Section({ children, id, full = false }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`snap-start flex items-center justify-center ${full ? 'h-screen' : 'py-24'}`}
    >
      {children}
    </motion.section>
  );
}
