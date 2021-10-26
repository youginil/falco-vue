<template>
  <div>
    <bug-checkbox-group :options="options" v-model="value"></bug-checkbox-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const options = ref([
      { label: 'Apple', value: 0 },
      { label: 'Banana', value: 1 },
      { label: 'Pear', value: 2 },
      { label: 'Orange', value: 3 },
    ]);
    const value = ref([0]);

    return { options, value };
  },
});
</script>
