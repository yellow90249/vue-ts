// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyA4_9q1RCXpjgq3YCL0mdhjCgskqEMsHhM',
  authDomain: 'first-project-e227a.firebaseapp.com',
  projectId: 'first-project-e227a',
  storageBucket: 'first-project-e227a.appspot.com',
  messagingSenderId: '896215768638',
  appId: '1:896215768638:web:24ced2867af9eb9fb4bb6f',
};
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './confused.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
