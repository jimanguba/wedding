"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchNotificationHistory,
  checkSubscriptionApi,
} from "@/lib/api/notificationApi";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [notificationHistory, setNotificationHistory] = useState([]);
  const [notificationsLoading, setNotificationsLoading] = useState(false);
  const [notificationError, setNotificationError] = useState(null);

  const [subscribed, setSubscribed] = useState(false);
  const [subscriptionChecked, setSubscriptionChecked] = useState(false);

  const loadNotificationHistory = async () => {
    setNotificationsLoading(true);
    const res = await fetchNotificationHistory();
    if (res.success) {
      setNotificationHistory(res.data);
    } else {
      setNotificationError(res.error);
    }
    setNotificationsLoading(false);
  };

  const checkSubscription = async () => {
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (!sub || Notification.permission !== "granted") {
        setSubscribed(false);
        return;
      }

      const res = await checkSubscriptionApi(sub.endpoint);
      setSubscribed(res.data.exists);
    } catch (err) {
      console.error("Push subscription check error:", err);
    } finally {
      setSubscriptionChecked(true);
    }
  };

  useEffect(() => {
    loadNotificationHistory();
    checkSubscription();
  }, []);

  return (
    <AppContext.Provider
      value={{
        notificationHistory,
        notificationError,
        notificationsLoading,
        refreshNotifications: loadNotificationHistory,

        subscribed,
        setSubscribed,
        checkSubscription,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProvider");
  }
  return ctx;
}
