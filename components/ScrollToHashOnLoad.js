"use client";
import { useEffect } from "react";

export default function ScrollToHashOnLoad() {
  useEffect(() => {
    const rawHash = window.location.hash;

    if (rawHash) {
      const originalId = rawHash.slice(1); // remove "#"
      const el = document.getElementById(originalId);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return null;
}
