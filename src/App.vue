<template>
  <div></div>
</template>

<script setup lang="ts">
function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)!;
    console.log(v);
  }
}
iOSversion();
</script>

<style scoped></style>
