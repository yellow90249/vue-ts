<template>
  <div>
    <button @click="askForNotificationPermission">test</button>
  </div>
</template>

<script setup lang="ts">
function askForNotificationPermission() {
  Notification.requestPermission(function (result) {
    // 這裡result只會有兩種結果：一個是用戶允許(granted)，另一個是用戶封鎖(denied)
    console.log('User Choice', result);
    if (result !== 'granted') {
      console.log('No notification permission granted!');
    } else {
      alert('success');
    }
  });
}

// if ('Notification' in window) {
//   for (var i = 0; i < enableNotificationButtons.length; i++) {
//     enableNotificationButtons[i].addEventListener('click', askForNotificationPermission);
//   }
// }
</script>

<style scoped></style>
