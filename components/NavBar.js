'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["Home", "Venue", "FAQ", "Team", "Registry", "RSVP"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });

      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[90%] sm:max-w-lg bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 shadow z-50 overflow-x-auto sm:overflow-x-visible">
      <ul className="relative flex justify-center gap-2 sm:gap-4 text-sm font-medium whitespace-nowrap px-2">
        {sections.map((id) => (
          <li key={id} className="relative">
            {activeSection === id && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -inset-y-1 inset-x-0 rounded-full bg-[#800000]/10 border-2 border-[#800000] z-0"
                transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
              />
            )}
            <a
              href={`#${id}`}
              className="relative z-10 inline-block px-4 py-1 rounded-full transition duration-200"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}