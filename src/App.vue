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
  apiKey: 'AIzaSyAdaRMrPlWge1BcUekv1nfFB4KIIdUymvA',
  authDomain: 'yapay-eb8c2.firebaseapp.com',
  projectId: 'yapay-eb8c2',
  storageBucket: 'yapay-eb8c2.appspot.com',
  messagingSenderId: '283539932719',
  appId: '1:283539932719:web:04a758dcd8ff1efc94a8da',
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging();

getToken(messaging, {
  vapidKey:
    'BKCbYl-MA1KW9marfaFr0iJnTNMXE83m5F198C4MT_5QVgHLB1VuibMVjAwOLrur0sx89ou_Vbr81gAuSpuNQqk',
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
