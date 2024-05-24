<template>
  <div></div>
</template>

<script setup lang="ts">
function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)!;
    console.log("🚀 ~ iOSversion ~ v:", v)
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
}
let res = iOSversion();
console.log('🚀 ~ res:', res);
</script>

<style scoped></style>
