<template>
  <div></div>
</template>

<script setup lang="ts">
console.log('🚀 ~ navigator.userAgent:', navigator.userAgent);
console.log('🚀 ~ navigator.platform:', navigator.platform);
console.log('🚀 ~ navigator.appVersion:', navigator.appVersion);
const version = navigator.userAgent.match(/Version\/(\d+\.\d+)/);
console.log('🚀 ~ version:', version);
</script>

<style scoped></style>
