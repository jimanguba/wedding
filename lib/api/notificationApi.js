import { apiFetch } from "./fetcher";

export function fetchNotificationHistory() {
  return apiFetch("/api/notification-history");
}

export function sendNotification({ title, body }) {
  return apiFetch("/api/send-notification", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET}`,
    },
    body: {
      title: title || "💌 Wedding Day!",
      body: body || "Get ready to celebrate!",
    },
  });
}

export async function deleteNotification(id) {
  return apiFetch("/api/notification-history", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET}`,
    },
    body: { id },
  });
}

export function subscribeToPushApi(subscription) {
  return apiFetch("/api/subscribe", {
    method: "POST",
    body: subscription,
  });
}

export function unsubscribeFromPushApi(endpoint) {
  return apiFetch("/api/unsubscribe", {
    method: "POST",
    body: { endpoint },
  });
}

export function checkSubscriptionApi(endpoint) {
  return apiFetch("/api/check-subscription", {
    method: "POST",
    body: { endpoint },
  });
}
