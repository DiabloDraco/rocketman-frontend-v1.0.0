<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo, Meta } from './models';

import { useQuasar } from 'quasar'

const h = useQuasar()

console.log(h);


export default defineComponent({
  name: 'ExampleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
});
</script>
