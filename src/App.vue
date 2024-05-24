<template>
  <div></div>
</template>

<script setup lang="ts">
console.log('🚀 ~ navigator.userAgent:', navigator.userAgent);
console.log('🚀 ~ navigator.platform:', navigator.platform);
console.log('🚀 ~ navigator.appVersion:', navigator.appVersion);
const versionMatch = navigator.userAgent.match(/Version\/(\d+\.\d+)/);
console.log('🚀 ~ versionMatch:', versionMatch);
const safariVersion = versionMatch ? versionMatch[1] : null;
console.log('🚀 ~ safariVersion:', safariVersion);
</script>

<style scoped></style>
