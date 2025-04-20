"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

export default function Navbar({ sections }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
  className="
    fixed top-4 left-1/2 -translate-x-1/2
    inline-block max-w-[90vw]
    pl-1 pr-0 sm:px-2
    bg-white/80 dark:bg-[#2C2C2E]/80
    backdrop-blur-sm rounded-full py-3 shadow z-50
    overflow-x-auto sm:overflow-x-visible
  "
>
  <ul
    className="
      relative flex justify-start sm:justify-center
      gap-2 sm:gap-4
      text-sm font-medium whitespace-nowrap
      px-1
    "
  >
    {sections.map((id) => (
      <li key={id} className="relative flex-shrink-0">
        {activeSection === id && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute -inset-1 -inset-y-2 rounded-full bg-[#800000]/10 border-2 border-[#800000] z-0"
            transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
          />
        )}
        <button
          onClick={() => {
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="relative z-10 inline-block px-2 py-1 rounded-full transition duration-200 cursor-pointer bg-transparent border-none text-inherit"
          data-id={id}
        >
          {id === "Notification"
            ? <Bell className="w-5 h-5" />
            : id.charAt(0).toUpperCase() + id.slice(1)}
        </button>
      </li>
    ))}
  </ul>
</nav>

    </>
  );
}
