<template>
  <HAside />
  <main
    style="padding-left: 253px; padding-top: 16px; margin-bottom: 30px; padding-right: 41px;"
  >
    <slot />
  </main>
</template>
<script setup lang="ts">
import HAside from 'src/components/aside/HAside.vue.js';

if (!window.localStorage.getItem('token')) {
  window.location.href = '/#/login';
}
setTimeout(() => {
  window.location.reload();
}, 100000);
</script>
<style lang="scss">
.q-pa-md,
.q-pa-xs {
  padding: 0;
}
</style>
