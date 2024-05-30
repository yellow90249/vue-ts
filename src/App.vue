<template>
  <div>
    <h1>123</h1>
    <p>{{ token }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const token = ref('');
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyA4_9q1RCXpjgq3YCL0mdhjCgskqEMsHhM',
  authDomain: 'first-project-e227a.firebaseapp.com',
  projectId: 'first-project-e227a',
  storageBucket: 'first-project-e227a.appspot.com',
  messagingSenderId: '896215768638',
  appId: '1:896215768638:web:24ced2867af9eb9fb4bb6f',
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging();

getToken(messaging, {
  vapidKey:
    'BAhp-0pFJ_8XhddWDVnSCtV0Y1sH0fGfNl5uD4VLFvRVdw02pIMwcfK_p0yQbUM6nrYAmHFhx39bdoCtJuz4h1s',
})
  .then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
      token.value = currentToken;
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  })
  .catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    alert('Open browser notification');
  });

onMessage(messaging, (payload) => {
  console.log('收到啦：', payload);
  // ...
});
</script>

<style lang="scss" scoped></style>
