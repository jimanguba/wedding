"use client";

import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const family = [
  { name: "Grace Manguba", role: "Mother of the Bride" },
  { name: "Rodrigo (Ric) Manguba", role: "Father of the Bride" },
  { name: "Joshua Manguba", role: "Brother of the Bride" },
  { name: "Elaine Woo", role: "Mother of the Groom" },
  { name: "Sean Woo", role: "Father of the Groom" },
  { name: "Tristan Woo", role: "Brother of the Groom" },
];

const bridalParty = [
  { name: "Christina Hua-Nguyen", role: "Maid of Honor" },
  { name: "Kavisha Gamage", role: "Bridesmaid" },
  { name: "Chehani Gunasekera", role: "Bridesmaid" },
  { name: "Maryelle De Jesus", role: "Bridesmaid" },
];

const groomsParty = [
  { name: "John Doe", role: "Best Man" },
  { name: "Abhilarsh Vijay", role: "Groomsman" },
  { name: "Tristan Woo", role: "Groomsman" },
  { name: "John Doe", role: "Groomsman" },
];
const PersonCard = ({ person }) => {
  return (
    <div className="w-full max-w-[250px] mx-auto bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition hover:scale-105 duration-300 border border-muted/40 dark:border-muted/20">
      <h3 className="text-lg font-serif text-heading dark:text-highlight font-semibold mb-1">
        {person.name}
      </h3>
      <p className="text-sm text-muted dark:text-gray-400 italic">
        {person.role}
      </p>
    </div>
  );
};

export default function TeamSection() {
  return (
    <div className="text-center px-4 pt-24">
      <h1 className="text-6xl font-serif text-heading dark:text-[#fcd2d2] font-bold mb-4 tracking-tight drop-shadow-lg">
        Our Team
      </h1>

      <Subsection title="Family" members={family} />
      <Subsection title="Bridal Party" members={bridalParty} />
      <Subsection title="Groom’s Party" members={groomsParty} />
    </div>
  );
}

const Subsection = ({ title, members }) => (
  <>
    <h2 className="text-2xl font-semibold text-accent dark:text-highlight mb-6 font-serif tracking-wide">
      {title}
    </h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto mb-16 justify-center">
      {members.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  </>
);
