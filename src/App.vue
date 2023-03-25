<template>
    <LayoutHi>
      <router-view />
    </LayoutHi>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutHi from './layouts/layoutHi.vue';

export default defineComponent({
  name: 'App',
  components: { LayoutHi },
});
</script>
