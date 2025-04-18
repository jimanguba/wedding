"use client";

import { useEffect, useState } from "react";

const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET;

export default function AdminPage() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const userSecret = prompt("🔐 Enter admin passphrase");
    if (userSecret === ADMIN_SECRET) {
      setAccessGranted(true);
    } else {
      alert("🚫 Access denied");
    }
  }, []);

  async function sendNotification() {
    const confirmed = confirm(
      "⚠️ This message will be sent to EVERYONE who subscribed.\nAre you sure you want to do this?"
    );
    if (!confirmed) return;

    setStatus("Sending...");

    const res = await fetch("/api/send-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title || "💌 Wedding Day!",
        body: message || "Get ready to celebrate!",
      }),
    });

    const data = await res.json();
    setStatus(data.success ? "✅ Notification sent!" : "❌ Failed to send.");
  }

  if (!accessGranted) return null;

  return (
    <main className="max-w-xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Admin: Send Notification</h1>

      <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm p-4 mb-6 rounded-md">
        ⚠️ This message will be sent to <strong>everyone</strong> who subscribed
        for wedding notifications. Use responsibly!
      </div>

      <h3 className="font-semibold mb-1">Notification Title</h3>
      <input
        type="text"
        placeholder="💌 Wedding Day!"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-lg p-3 text-sm mb-4"
      />

      <h3 className="font-semibold mb-1">Notification Message</h3>
      <textarea
        placeholder="Get ready to celebrate!"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border rounded-lg p-3 text-sm mb-4"
        rows={4}
      />

      <button
        onClick={sendNotification}
        className="bg-[color:#800000] text-white px-6 py-2 rounded-full font-semibold hover:bg-heading transition-all shadow-lg"
      >
        🚀 Send Notification
      </button>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </main>
  );
}
