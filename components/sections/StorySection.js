"use client";
import { motion } from "framer-motion";
import { parisienne } from "../fonts";

const events = [
  {
    date: "2007 & 2011",
    title: "Early Days",
    description:
      "Jillian and Braeden first met as kids in elementary school. They shared classrooms in both Grade 2 and Grade 6 while growing up in Winnipeg. At the time, they were just classmates. After that, life moved on and they lost touch.",
  },
  {
    date: "Years Later",
    title: "Reconnected",
    description:
      "As adults, their paths crossed again. What started as a simple conversation turned into something more. They started spending more time together, and the connection felt natural from the beginning.",
  },
  {
    date: "September 7, 2021",
    title: "First Date",
    description:
      "Their first official date was sushi, games at The Rec Room, and boba. Simple, fun, and it felt right from the start. Every year since, they’ve recreated that night - their own little tradition.",
  },
  {
    date: "February 16, 2025",
    title: "The Proposal",
    description:
      "During a trip to Orlando, the cruise began with a surprise. On Day 1, they walked into a decorated room. Braeden proposed. It was quiet, personal, and perfect.",
  },
];

export default function StorySection() {
  return (
    <section className="w-full py-24 px-4 bg-[--color-background] text-[--color-foreground]">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-20">
        <motion.h2
          className={`text-5xl md:text-6xl mb-16 text-center text-[--color-heading] ${parisienne.className}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>

        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`w-full flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } items-center md:items-start text-center md:text-left gap-6`}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center md:items-start">
                <span className="text-sm uppercase tracking-widest text-[--color-muted] mb-1">
                  {event.date}
                </span>
                <h3
                  className={`text-3xl font-bold text-[--color-heading] ${parisienne.className}`}
                >
                  {event.title}
                </h3>
              </div>

              <div className="bg-[--color-highlight]/20 backdrop-blur-md rounded-2xl border border-[--color-highlight]/30 p-6 max-w-md shadow-md hover:scale-[1.02] transition">
                <p className="text-base text-[--color-foreground]/90 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
