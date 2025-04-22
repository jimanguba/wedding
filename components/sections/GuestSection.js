"use client";
import { parisienne } from "../fonts";
import { useState } from "react";
import { useRouter } from "next/navigation";

const GUEST_SECRET = process.env.NEXT_PUBLIC_GUEST_SECRET;

export default function GuestSection() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code.trim().toLowerCase() === GUEST_SECRET) {
      router.push("/guests");
    } else {
      setError("Incorrect code. Please check the invitation and try again.");
    }
  };

  const sharedInputStyles =
    "w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground";

  return (
    <div className="text-center px-4 pt-24 max-w-xl mx-auto">
      <h1
        className={`text-6xl md:text-7xl tracking-tight text-foreground drop-shadow-md z-10 relative text-center ${parisienne.className}`}
      >
        Guest Access
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm text-muted-foreground mb-2">
          Enter the code provided in your invitation to view guest-only details
          and RSVP.
        </label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={`${sharedInputStyles} rounded-full text-center`}
          placeholder="Enter access code"
          required
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-[color:#800000] text-white py-2 px-4 rounded-md font-semibold hover:bg-heading transition-all"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
