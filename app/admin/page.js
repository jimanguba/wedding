"use client";

import { useApp } from "@/context/AppContext";
import {
  sendNotification,
  deleteNotification,
} from "@/lib/api/notificationApi";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";

const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET;

export default function AdminPage() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const { notificationHistory, refreshNotifications } = useApp();

  useEffect(() => {
    const userSecret = prompt("🔐 Enter admin passphrase");
    if (userSecret === ADMIN_SECRET) {
      setAccessGranted(true);
    } else {
      alert("🚫 Access denied");
    }
  }, []);

  async function handleSend() {
    const confirmed = confirm(
      "⚠️ This message will be sent to EVERYONE who subscribed.\nAre you sure you want to do this?"
    );
    if (!confirmed) return;

    setStatus("Sending...");

    const res = await sendNotification({ title, body: message });
    setStatus(res.success ? "✅ Notification sent!" : "❌ Failed to send.");
    setTitle("");
    setMessage("");
    refreshNotifications();
  }

  async function handleDelete(id) {
    const confirmDelete = confirm("🗑️ Delete this notification?");
    if (!confirmDelete) return;

    const res = await deleteNotification(id);
    if (res.success) {
      refreshNotifications();
    } else {
      alert("❌ Failed to delete notification");
    }
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
        onClick={handleSend}
        className="bg-[color:#800000] text-white px-6 py-2 rounded-full font-semibold hover:bg-heading transition-all shadow-lg"
      >
        🚀 Send Notification
      </button>

      {status && <p className="mt-4 text-sm">{status}</p>}

      {notificationHistory.length > 0 && (
        <div className="mt-10 text-left">
          <h2 className="text-lg font-bold mb-3">
            📜 Sent Notification History
          </h2>
          <ul className="space-y-4 text-sm">
            {notificationHistory.map((n) => (
              <li
                key={n.id}
                className="p-4 rounded-lg bg-gray-100 border relative dark:text-background"
              >
                <button
                  onClick={() => handleDelete(n.id)}
                  className="absolute top-1/2 -translate-y-1/2 right-4 text-red-400 hover:text-red-600 transition"
                  aria-label="Delete notification"
                >
                  <Trash size={18} />
                </button>

                <div className="font-semibold">{n.title}</div>
                <div className="mr-8">{n.message}</div>
                <div className="text-xs text-muted mt-1">
                  {new Date(n.sent_at).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
