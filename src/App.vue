<template>
  <div></div>
</template>

<script setup lang="ts">
let permission = await Notification.requestPermission();
if (permission === 'granted') {
  // Get the FCM token (see below)
  console.log('success');
} else {
  // Handle denied permission
  console.log('failed');
}
</script>

<style scoped></style>
