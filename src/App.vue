<template>
  <div>
    <h1>123</h1>
    <button @click="requestNotificationPermission">get token</button>
    <p>{{ token }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const token = ref('');
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4_9q1RCXpjgq3YCL0mdhjCgskqEMsHhM',
  authDomain: 'first-project-e227a.firebaseapp.com',
  projectId: 'first-project-e227a',
  storageBucket: 'first-project-e227a.appspot.com',
  messagingSenderId: '896215768638',
  appId: '1:896215768638:web:24ced2867af9eb9fb4bb6f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();

// Need notification permission
function getFirebaseToken() {
  getToken(messaging, {
    vapidKey:
      'BAhp-0pFJ_8XhddWDVnSCtV0Y1sH0fGfNl5uD4VLFvRVdw02pIMwcfK_p0yQbUM6nrYAmHFhx39bdoCtJuz4h1s',
  })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken);
        token.value = currentToken;
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      alert('Open browser notification');
    });
}

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

function requestNotificationPermission() {
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    getFirebaseToken();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notification = new Notification('requestPermission success');
      }
    });
  }
}

</script>

<style lang="scss" scoped></style>
