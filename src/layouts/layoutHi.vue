<template>
  <HAside />
  <main style="padding-left: 253px">
    <slot />
  </main>
</template>
<script setup lang="ts">
import HAside from 'src/components/aside/HAside.vue';

if (!window.localStorage.getItem('token')) {
  window.location.href = '/#/login';
}

</script>
<style lang="scss" scoped></style>
