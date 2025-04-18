"use client";

import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { parisienne } from "./fonts";

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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData.entries());
      if (payload.attending === "No") {
        payload.meal = "";
        payload.allergies = "";
      }
      console.log("Sending RSVP:", payload, "is attending:", isAttending);

      // 🔎 Check for existing RSVP
      const checkResponse = await fetch(
        `https://sheetdb.io/api/v1/g73w7wi7dmnil/search?code=${payload.code}`
      );
      const existingEntries = await checkResponse.json();

      if (existingEntries.length > 0) {
        // 🛠 Update existing RSVP via PUT
        await fetch(
          `https://sheetdb.io/api/v1/g73w7wi7dmnil/code/${payload.code}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: payload }),
          }
        );
      } else {
        // ➕ First-time RSVP via POST
        await fetch("https://sheetdb.io/api/v1/g73w7wi7dmnil", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: payload }),
        });
      }

      if (payload.attending === "Yes") {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("There was an error submitting your RSVP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sharedInputStyles =
    "w-full border rounded-lg p-2 bg-white text-black dark:bg-[#1f1f1f] dark:text-white";

  useEffect(() => {
    if (submitted && isAttending) {
      const script = document.createElement("script");
      script.src = "https://tenor.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [submitted, isAttending]);

  return (
    <div className="text-center px-4 pt-24 max-w-xl mx-auto">
      <h1 className={`text-6xl md:text-7xl tracking-tight text-black drop-shadow-md z-10 relative text-center ${parisienne.className}`}>
        RSVP
      </h1>

      {!guest && !submitted && (
        <form onSubmit={handleCodeSubmit} className="space-y-4">
          <label className="block text-lg mb-2">Enter your RSVP code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`${sharedInputStyles} rounded-full text-center`}
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
            className="bg-[color:#800000] text-white px-8 py-3 rounded-full font-semibold hover:bg-heading transition-all"
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
              className={sharedInputStyles}
              value={isAttending === null ? "" : isAttending ? "Yes" : "No"}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "Yes") setIsAttending(true);
                else if (val === "No") setIsAttending(false);
                else setIsAttending(null);
              }}
            >
              <option value="">Select an option...</option>
              <option value="Yes">Yes, I’ll be there!</option>
              <option value="No">No, I can’t make it</option>
            </select>
          </div>

          {isAttending !== null && (
            <>
              {isAttending && (
                <div>
                  <label className="block mb-1 font-medium">
                    Meal Preference
                  </label>
                  <select name="meal" required className={sharedInputStyles}>
                    <option value="">Select</option>
                    <option>Chicken</option>
                    <option>Beef</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                  </select>
                </div>
              )}

              {isAttending && (
                <div>
                  <label className="block mb-1 font-medium">
                    Food Allergies?
                  </label>
                  <input
                    name="allergies"
                    type="text"
                    className={sharedInputStyles}
                    placeholder="e.g. nuts, dairy, gluten..."
                  />
                </div>
              )}

              <div>
                <label className="block mb-1 font-medium">Song request?</label>
                <input
                  name="song"
                  type="text"
                  className={sharedInputStyles}
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
                  className={sharedInputStyles}
                  placeholder={
                    isAttending
                      ? "Leave us a note!"
                      : "We’ll miss you! Leave us a note 🥹"
                  }
                />
              </div>

              <div className="flex justify-between items-center mt-4 mb-8">
                <button
                  type="button"
                  onClick={() => {
                    setGuest(null);
                    setCode("");
                    setIsAttending(null);
                  }}
                  className="text-[color:#800000] hover:underline font-medium"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[color:#800000] hover:bg-[color:#BF4040] text-white font-medium py-2 px-6 rounded-full flex items-center justify-center ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Submit RSVP"
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      )}

      {submitted && guest && isAttending && (
        <div className="flex justify-center mt-6">
          <div className="space-y-4 text-center">
            <p className="text-xl font-semibold animate-pulse">
              💐 Thank you, {guest.name}! Your spot on the dance floor is
              officially reserved 💃🕺 You get 5 big booms!
            </p>
            <div
              className="tenor-gif-embed mx-auto"
              data-postid="16319214973015367077"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="50%"
            ></div>
          </div>
        </div>
      )}

      {submitted && guest && !isAttending && (
        <p className="text-xl font-medium mt-6 text-gray-700 dark:text-gray-300">
          🥹 We’ll miss you, {guest.name}. Thank you for letting us know, and
          we’ll be thinking of you with love on our big day. 💖
        </p>
      )}
      {submitted && (
        <button
          onClick={() => {
            setCode("");
            setGuest(null);
            setSubmitted(false);
            setIsAttending(null);
          }}
          className="mt-6 bg-[color:#800000] hover:bg-[color:#BF4040] text-white font-medium py-2 px-6 rounded-full"
        >
          RSVP for another guest
        </button>
      )}
    </div>
  );
}
