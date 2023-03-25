<script setup lang="ts">
import HAside from 'src/components/aside/HAside.vue';
import LayoutHi from 'src/layouts/layoutHi.vue';
import OrderPage from './OrderPage.vue';
import CustomerPage from './CustomerPage.vue';
</script>

<template>
  <HAside />
  <LayoutHi>
    <template #body>
    </template>
  </LayoutHi>
</template>

<style lang="scss" scoped>
main {
  margin-left: 255px;
}
</style>
