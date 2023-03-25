<template>
  <main class="container">
    <slot name="body">
      
    </slot>
  </main>
</template>
<script setup lang="ts">
// import HAside from 'src/components/aside/HAside.vue';

import CustomerPage from 'src/pages/CustomerPage.vue';
import OrderPage from 'src/pages/OrderPage.vue';

if (!window.localStorage.getItem('token')) {
  window.location.href = '/#/login';
}
</script>
<style lang="scss" scoped></style>
