"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Trash, X } from "lucide-react";

export default function NotificationHistoryToggle() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dragRef = useRef(null);
  const [dismissedIds, setDismissedIds] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("dismissed_notifications");
    setDismissedIds(stored ? JSON.parse(stored) : []);
  }, []);

  // Fetch history when opened
  useEffect(() => {
    if (open) {
      setLoading(true);
      fetch("/api/notification-history")
        .then((res) => res.json())
        .then((data) => {
          setHistory(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load history", err);
          setError("Unable to load notifications.");
          setLoading(false);
        });
    }
  }, [open]);
  const handleDismiss = (id) => {
    const updated = [...dismissedIds, id];
    setDismissedIds(updated);
    localStorage.setItem("dismissed_notifications", JSON.stringify(updated));
  };

  return (
    <div className="fixed top-[5.5rem] right-0 z-50 pr-2">
      {/* Main toggle */}
      <motion.div
        ref={dragRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDragStart={() => {}}
        onDragEnd={(e, info) => {
          if (info.offset.x > 20) {
            setHidden(true);
          }
        }}
        animate={{ x: hidden ? 80 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center p-3 bg-[color:#800000] text-white rounded-full shadow-lg hover:bg-heading transition-all"
        >
          <Bell className="w-5 h-5" />
        </button>

        {/* History Panel */}
        <AnimatePresence>
          {open && !hidden && (
            <motion.div
              className="absolute top-full right-0 mt-2 w-80 max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Notifications</h4>
                  <div className="text-right text-xs text-gray-500">
                    <button
                      onClick={() => setShowAll((prev) => !prev)}
                      className="hover:underline"
                    >
                      {showAll ? "Hide Dismissed" : "Show All"}
                    </button>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {loading && <p className="text-sm">Loading...</p>}
                {error && <p className="text-sm text-red-500">{error}</p>}
                {!loading && history.length === 0 && (
                  <p className="text-sm text-gray-600">No notifications yet.</p>
                )}
                <ul className="text-sm space-y-3 max-h-60 overflow-y-auto">
                  {history
                    .filter(
                      (item) => showAll || !dismissedIds.includes(item.id)
                    )
                    .map((item) => (
                      <li
                        key={item.id}
                        className="pt-2 border-t border-gray-100 dark:border-gray-700 relative"
                        >
                        <button
                          onClick={() => handleDismiss(item.id)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-red-300 hover:underline"
                        >
                          <Trash size={20} />
                        </button>
                        <p className="font-medium">{item.title}</p>

                        <p>{item.message}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(item.sent_at).toLocaleString()}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Peek handle when hidden, swipe right to hide, swipe left to reveal */}
      {hidden && (
        <motion.div
          className="absolute top-0 right-0 h-12 w-5 flex items-center justify-center bg-white/50 dark:bg-black/30 rounded-l-full shadow-md cursor-pointer"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragStart={() => {}}
          onDragEnd={(e, info) => {
            if (info.offset.x < -20) {
              setHidden(false);
            }
          }}
          onClick={() => setHidden(false)}
          initial={{ x: 60, opacity: 1 }}
          animate={{ x: hidden ? 0 : 60 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Bell className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </motion.div>
      )}
    </div>
  );
}
