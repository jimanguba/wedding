self.addEventListener('push', function (event) {
    if (event.data) {
      const data = event.data.json();
      const options = {
        body: data.body,
        icon: data.icon || '/icon.png',
        badge: '/badge.png',
        vibrate: [200, 100, 200],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: '1',
        },
      };
      event.waitUntil(self.registration.showNotification(data.title, options));
    }
  });
  
  self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
  });
  
  self.addEventListener('install', () => {
    console.log('🔥 Service worker installed');
  });
  
  self.addEventListener('activate', () => {
    console.log('✨ Service worker activated');
  });
  