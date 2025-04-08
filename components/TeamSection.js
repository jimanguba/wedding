"use client";

import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const family = [
  {
    name: "Grace Manguba",
    role: "Mother of the Bride",
  },
  {
    name: "Rodrigo (Ric) Manguba",
    role: "Father of the Bride",
  },
  {
    name: "Joshua Manguba",
    role: "Brother of the Bride",
  },
  {
    name: "Elaine Woo",
    role: "Mother of the Groom",
  },
  {
    name: "Sean Woo",
    role: "Father of the Groom",
  },
  {
    name: "Tristan Woo",
    role: "Brother of the Groom",
  },
];

const bridalParty = [
  {
    name: "Christina Hua-Nguyen",
    role: "Maid of Honor",
  },
  {
    name: "Kavisha Gamage",
    role: "Bridesmaid",
  },
  {
    name: "Chehani Gunasekera",
    role: "Bridesmaid",
  },
  {
    name: "Maryelle De Jesus",
    role: "Bridesmaid",
  },
];

const groomsParty = [
  {
    name: "John Doe",
    role: "Best Man",
    image: "",
  },
  {
    name: "Abhilarsh Vijay",
    role: "Groomsman",
    image: "",
  },
  {
    name: "Tristan Woo",
    role: "Groomsman",
    image: "",
  },
  {
    name: "John Doe",
    role: "Groomsman",
    image: "",
  },
];

function CardGroup({ title, people }) {
  return (
    <div className="mb-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center transition hover:scale-105 duration-300"
          >
            {/* <div className="w-24 h-24 relative mb-4"> */}
            <div className="w-24 relative mb-4">
              {person.image && 
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              
              // : (
              //   <UserCircleIcon className="w-20 h-20 text-gray-300" />
              // )
              }
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
            <p className="text-sm text-gray-500">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <div className="text-center px-4 pt-24">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <CardGroup title="Family" people={family} />
      <CardGroup title="Bridal Party" people={bridalParty} />
      <CardGroup title="Groom’s Party" people={groomsParty} />
    </div>
  );
}
