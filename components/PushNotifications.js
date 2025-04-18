"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, BellOff } from "lucide-react";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

export default function PushNotifications() {
  const [subscribed, setSubscribed] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        })
        .then((reg) => {
          console.log("✅ Service Worker registered:", reg);
          setIsSupported(true);
          checkSubscription();
        })
        .catch((err) => {
          console.error("❌ Service Worker registration failed:", err);
        });
    } else {
      console.warn("❌ Push not supported");
    }
  }, []);

  async function checkSubscription() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.getSubscription();
    const permission = Notification.permission;

    if (permission === "granted" && sub) {
      setSubscribed(true);
    } else {
      setSubscribed(false);
    }
  }

  async function handleSubscribe() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;

    if (isIOS && !isStandalone) {
      setShowInstallModal(true);
      return;
    }
    console.log("📬 requestPermission before:", Notification.permission);
    const permission = await Notification.requestPermission();
    console.log("📬 requestPermission after:", permission);

    if (permission === "denied") {
      alert(
        "🚫 Notifications are blocked. You’ll need to enable them in your settings."
      );
      return;
    }

    if (permission !== "granted") {
      alert("Please allow notifications to stay updated!");
      return;
    }

    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      ),
    });

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(sub),
      headers: { "Content-Type": "application/json" },
    });

    setSubscribed(true);
    alert("💌 You’ll get a notification on the big day!");
  }

  async function handleUnsubscribe() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.getSubscription();

    if (sub) {
      await sub.unsubscribe();

      await fetch("/api/unsubscribe", {
        method: "POST",
        body: JSON.stringify({ endpoint: sub.endpoint }),
        headers: { "Content-Type": "application/json" },
      });

      setSubscribed(false);
      alert("🔕 Notifications have been turned off.");
    }
  }

  if (!isSupported) return null;
  return (
    <>
      {subscribed ? (
        <>
          <button
            onClick={handleUnsubscribe}
            className="mt-4 inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-full transition-all shadow-sm"
          >
            <BellOff className="w-5 h-5" />
            Turn Off Notifications
          </button>
        </>
      ) : (
        <motion.button
          onClick={handleSubscribe}
          className="mt-4 inline-flex items-center gap-2 bg-[color:#800000] text-white px-8 py-3 rounded-full font-semibold hover:bg-heading transition-all shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, -15, 15, -12, 12, -10, 10, -5, 5, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <Bell className="w-5 h-5" />
          </motion.div>
          Notify Me on Wedding Day
        </motion.button>
      )}

      <AnimatePresence>
        {showInstallModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowInstallModal(false)}
          >
            <motion.div
              className="bg-white max-w-md w-full mx-4 rounded-2xl p-6 shadow-xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setShowInstallModal(false)}
              >
                ×
              </button>
              <h2 className="text-xl font-bold text-center mb-4">
                📲 Add to Home Screen
              </h2>
              <div className="text-gray-700 space-y-4 text-sm text-center">
                <p>
                  To receive notifications, please install this app to your
                  iPhone home screen.
                </p>
                <p>
                  To install this app on your iOS device, tap the share button{" "}
                  <span role="img" aria-label="share icon">
                    ⎋
                  </span>
                  <br />
                  then <strong>&quot;Add to Home Screen&quot;</strong>{" "}
                  <span role="img" aria-label="plus icon">
                    ➕
                  </span>
                </p>
                <p className="italic text-muted">
                  Just one tap and you’re set 💫
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
