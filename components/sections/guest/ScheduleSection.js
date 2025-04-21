"use client";
import { parisienne } from "@/components/fonts";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock } from "lucide-react";

export default function ScheduleSection() {
  const schedule = [
    {
      title: "Ceremony & Reception",
      date: "Friday, September 10, 2027",
      time: "TBA",
      location: "TBA",
      dressCode: "TBD",
    },
    // {
    //   title: "Reception",
    //   time: "TBA",
    //   location: "TBA",
    //   dressCode: "Dress to impress",
    // },
    // {
    //   title: "After Party",
    //   time: "9:00 PM",
    //   location: "Hotel Lounge (Guest-only)",
    //   dressCode: "Casual",
    // },
    // {
    //   title: "Farewell Brunch",
    //   date: "Sunday, August 31, 2025",
    //   time: "11:00 AM",
    //   location: "The Honeycomb Cafe",
    //   dressCode: "Come comfy",
    // },
  ];

  return (
    <div className="pt-24 px-6 max-w-3xl mx-auto text-center">
      <motion.h2
        className={`text-6xl md:text-7xl tracking-tight text-foreground drop-shadow-md z-10 relative text-center ${parisienne.className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Schedule
      </motion.h2>
      <p className="text-sm text-neutral-500 mt-4 tracking-wider uppercase">
            TBA
          </p>
      {/* <div className="space-y-8 text-left text-gray-700 dark:text-gray-300">
        {schedule.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-muted/20 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-accent mb-1">
              {event.title}
            </h3>
            {event.date && (
              <p className="flex items-center gap-2 text-sm">
                <CalendarDays size={16} /> {event.date}
              </p>
            )}
            <p className="flex items-center gap-2 text-sm">
              <Clock size={16} /> {event.time}
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={16} /> {event.location}
            </p>
            <p className="mt-2 text-sm italic text-muted-foreground">
              Dress Code: {event.dressCode}
            </p>
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}
