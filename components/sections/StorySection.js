"use client";
import { motion } from "framer-motion";
import { parisienne } from "../fonts";
import BackgroundCarousel from "@/components/BackgroundCarousel";

export default function StorySection() {
  return (
    <div className="relative w-full overflow-hidden">
      <BackgroundCarousel
        // TO DO: replace with real images. these are just placeholders
        images={[
          "https://i.pinimg.com/736x/50/6e/94/506e94a58efe7578014dab2b574d398e.jpg",
          "https://i.pinimg.com/736x/b3/c9/49/b3c949d643e71ef9dde99b34bea07644.jpg",
          "https://i.pinimg.com/736x/c9/ab/81/c9ab811ccc89121a567eb230a5669221.jpg",
        ]}
        interval={6000}
      />
      <div className="relative z-20 px-6 py-24 max-w-3xl mx-auto text-center">
        <motion.h2
          className={`text-5xl md:text-6xl tracking-tight drop-shadow-md mb-10 ${parisienne.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>

        <div className="space-y-12 text-left text-lg leading-relaxed">
          <div>
            <h3 className="text-base font-semibold mb-1">
              2007 & 2011: Early Days
            </h3>
            <p>
              Jillian and Braeden first met as kids in elementary school. They
              shared classrooms in both Grade 2 and Grade 6 while growing up in
              Winnipeg, Manitoba. At the time, they were just classmates. After
              that, life moved on and they lost touch.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-1">
              Reconnected: Years Later
            </h3>
            <p>
              As adults, their paths crossed again. What started as a simple
              conversation turned into something more. They started spending
              more time together, and the connection felt natural from the
              beginning.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-1">
              September 7, 2021: First Date
            </h3>
            <p>
              Their first official date was on September 7, 2021. They started
              with sushi at a local restaurant, followed by games and laughs at
              The Rec Room. The night ended with boba. It was simple, fun, and
              felt right from the start.
            </p>
            <p>
              Every year since, they have marked their anniversary by recreating
              that first date with sushi, games, and boba. It has become a small
              tradition that brings them back to where everything began.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-1">
              February 16, 2025: The Proposal
            </h3>
            <p>
              During a two-week trip to Orlando, they began their cruise with a
              surprise. On the first day, February 16, they walked into a room
              that had been thoughtfully set up for the occasion. In that
              moment, Braeden proposed. It was quiet, personal, and felt just
              right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
