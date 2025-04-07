"use client";

import confetti from "canvas-confetti";
import { useState } from "react";

const guestList = [
  { code: "STINA27", name: "Christina Hua-Nguyen" },
  { code: "ABHI27", name: "Abhilarsh Vijay" },
  { code: "TEST123", name: "Test" },
  // Add more here
];

export default function RSVPSection() {
  const [code, setCode] = useState("");
  const [guest, setGuest] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isAttending, setIsAttending] = useState(null);

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    const match = guestList.find(
      (g) => g.code.toLowerCase() === code.toLowerCase()
    );
    if (match) {
      setGuest(match);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleRSVPSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    // Send to your backend, or FormSubmit.co, or SheetDB, etc.
    console.log("Sending RSVP:", payload);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    // Optionally: await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(payload) })

    setSubmitted(true);
  };

  return (
    <div className="text-center px-4 pt-24 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">RSVP</h1>

      {!guest && !submitted && (
        <form onSubmit={handleCodeSubmit} className="space-y-4">
          <label className="block text-lg mb-2">Enter your RSVP code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-center"
            placeholder="e.g. ABC123"
            required
          />
          {error && (
            <p className="text-red-500 text-sm">
              Invalid code. Please check your invite.
            </p>
          )}
          <button
            type="submit"
            className="bg-[color:#800000] hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full"
          >
            Find My RSVP
          </button>
        </form>
      )}

      {guest && !submitted && (
        <form onSubmit={handleRSVPSubmit} className="space-y-6 text-left mt-6">
          <input type="hidden" name="code" value={guest.code} />
          <input type="hidden" name="name" value={guest.name} />

          <p className="text-lg mb-4">
            Hi <strong>{guest.name}</strong>! We’re so excited you’re here 💌
          </p>

          <div>
            <label className="block mb-1 font-medium">
              Will you be attending?
            </label>
            <select
              name="attending"
              required
              className="w-full border rounded-lg p-2"
              onChange={(e) =>
                setIsAttending(e.target.value === "Yes, I’ll be there!")
              }
            >
              <option value="">Select</option>
              <option>Yes, I’ll be there!</option>
              <option>No, I can’t make it</option>
            </select>
          </div>

          {isAttending && (
            <>
              <div>
                <label className="block mb-1 font-medium">
                  Meal Preference
                </label>
                <select
                  name="meal"
                  required
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">Select</option>
                  <option>Chicken</option>
                  <option>Beef</option>
                  <option>Vegetarian</option>
                  <option>Vegan</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Food Allergies?
                </label>
                <input
                  name="allergies"
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="e.g. nuts, dairy, gluten..."
                />
              </div>
            </>
          )}

          <div>
            <label className="block mb-1 font-medium">Song request?</label>
            <input
              name="song"
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="We'll add it to the playlist!"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Message for the couple 💕
            </label>
            <textarea
              name="message"
              rows="3"
              className="w-full border rounded-lg p-2"
              placeholder={
                isAttending === false
                  ? "We’ll miss you! Leave us a note 🥹"
                  : "Leave us a note!"
              }
            />
          </div>

          <div className="flex justify-between items-center mt-4 mb-8">
            <button
              type="button"
              onClick={() => {
                setGuest(null);
                setCode("");
              }}
              className="text-[color:#800000] hover:underline font-medium"
            >
              ← Back
            </button>

            <button
              type="submit"
              className="bg-[color:#800000] hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full"
            >
              Submit RSVP
            </button>
          </div>
        </form>
      )}

      {submitted && guest && (
        <p className="text-xl font-semibold mt-6 animate-pulse">
          💐 Thank you, {guest.name}! Your spot on the dance floor is officially
          reserved 💃🕺You get 5 big booms!
        </p>
      )}
    </div>
  );
}
