<template>
  <div>
    <bug-input class="mr10" :clearable="true" v-model="inputText"></bug-input>
    <bug-input
      placeholder="number"
      type="number"
      v-model="inputNumber"
    ></bug-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const inputText = ref('');
    const inputNumber = ref(0);
    return { inputText, inputNumber };
  },
});
</script>
