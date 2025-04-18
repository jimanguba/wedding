'use client';
import { useEffect, useState } from 'react';

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
      .replace(/\\-/g, '+')
      .replace(/_/g, '/')
   
    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

export default function PushNotifications() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);
  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  const subscribe = async () => {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      ),
    });

    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(sub),
      headers: { 'Content-Type': 'application/json' },
    });

    setSubscribed(true);
    alert('💌 You’ll get a notification on the big day!');
  };

  if (subscribed) {
    return <p className="mt-6 text-green-700 font-semibold">✅ You're subscribed for notifications!</p>;
  }
  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <button
      onClick={subscribe}
      className="mt-6 inline-block bg-highlight text-white px-6 py-2 rounded-full hover:bg-accent transition-all"
    >
      Enable Wedding Day Notification
    </button>
  );
}
