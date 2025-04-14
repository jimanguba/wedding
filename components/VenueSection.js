"use client";
import { useRouter } from "next/navigation";

export default function VenueSection() {
  const router = useRouter();

  return (
    <div className="text-center w-full px-4">
      <h1 className="text-6xl font-serif text-heading font-bold mb-4 tracking-tight text-[#6b0d26] drop-shadow-lg z-10 relative text-center">
        Venue
      </h1>
      <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
        Venue Location TBD · September 10, 2027 · XX:XX PM
      </p>

      <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329270.04217751394!2d-97.48247460845337!3d49.853313270859964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fbf91a2b11%3A0x2b2a1afac6b9ca64!2sWinnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1744010729073!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <button
        onClick={() => router.push("/?modal=travel", { shallow: true })}
        className="mt-6 bg-[color:#800000] hover:bg-[color:#BF4040] text-white font-medium py-2 px-6 rounded-full"
      >
        Travel Info
      </button>
    </div>
  );
}
