<template>
  <HAside />
  <main
    style="padding-left: 253px; padding-top: 16px; margin-bottom: 30px; padding-right: 41px;"
  >
    <slot />
  </main>
</template>
<script setup >
import HAside from 'src/components/aside/HAside.vue';


if (!window.localStorage.getItem('token')) {
  window.location.href = '/#/login';
}
setTimeout(() => {
  window.location.reload();
}, 100000);
</script>
