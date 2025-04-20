"use client";
import { parisienne } from "../fonts";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GuestSection() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code.trim().toLowerCase() === "woomance") {
      router.push("/guests");
    } else {
      setError("Incorrect code. Try again, cutie.");
    }
  };
  return (
    <div className="text-center px-4 pt-24 max-w-2xl mx-auto">
      <h1
        className={`text-6xl md:text-7xl tracking-tight text-black drop-shadow-md z-10 relative text-center ${parisienne.className}`}
      >
        Guest Access
      </h1>

      <p className="text-sm text-muted-foreground mb-6">
        Enter the code provided in your invitation to view guest-only details
        and RSVP.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter access code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-accent text-white py-2 px-4 rounded-md font-medium transition hover:bg-accent/90"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
