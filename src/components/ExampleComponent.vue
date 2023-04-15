<template>
  <div></div>
</template>

<script >
import { defineComponent } from 'vue';

import { useQuasar } from 'quasar'

const h = useQuasar()


export default defineComponent({
  name: 'ExampleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      default: () => [],
    },
    meta: {
      type: Object ,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
});
</script>
