<script setup >
import LayoutHi from 'src/layouts/layoutHi.vue';
if (!window.localStorage.getItem('token')) window.location.pathname = '/#/login';

if (!window.localStorage.getItem('token')) {
  window.location.href = '/#/login';
} else {
  window.location.href = '/#/';
  location.replace('/#/');
}

</script>

<template>
  <div>
    <LayoutHi> </LayoutHi>
  </div>
</template>

<style lang="scss" scoped>
main {
  margin-left: 255px;
}
</style>
