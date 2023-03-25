<template>
  <HAside />
  <div>
    <LayoutHi>
    <router-view />
  </LayoutHi>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HAside from './components/aside/HAside.vue';
import LayoutHi from './layouts/layoutHi.vue';


export default defineComponent({
    name: "App",
    components: { LayoutHi, HAside }
});
</script>
