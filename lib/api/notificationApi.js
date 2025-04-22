import { apiFetch } from "./fetcher";

export function fetchNotificationHistory() {
  return apiFetch("/api/notification-history");
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
