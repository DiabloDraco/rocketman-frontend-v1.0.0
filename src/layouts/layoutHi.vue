<template>
  <HAside />
  <main v-bind="$attrs" style="padding-left: 225px">
    <slot name="body"> </slot>
  </main>
</template>
<script setup lang="ts">
import HAside from 'src/components/aside/HAside.vue';
</script>
<style lang="scss" scoped></style>
