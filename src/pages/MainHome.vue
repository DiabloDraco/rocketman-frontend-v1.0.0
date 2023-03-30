<script setup lang="ts">
import LayoutHi from 'src/layouts/layoutHi.vue';
if(!window.localStorage.getItem('token')) window.location.pathname = '/login'
</script>

<template>
  <div>
    <LayoutHi>

    </LayoutHi>
  </div>
</template>

<style lang="scss" scoped>
main {
  margin-left: 255px;
}
</style>
