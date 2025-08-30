/* tslint:disable */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '604305721430'
  });
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  return self.registration.showNotification( payload.data.title,
    {
      body: payload.data.body,
      icon: '/favi.ico',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      image: payload.data.image,
      data: {
        link: payload.data.link
      },
    });
});

self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.data.link);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  if(event.notification.data.link) {
    event.waitUntil(clients.openWindow(event.notification.data.link));
  }
});
// [END background_handler