<template>
  <div class="tc">
    <bug-input v-model="value" @blur="onTrigger"></bug-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BugConfirm, BugMessage } from './src';

export default defineComponent({
  name: 'App',
  setup() {
    const value = ref('');
    const show = ref(true);
    const options = ref([
      {
        value: 1,
        label: 'John',
      },
      {
        value: 2,
        label: 'Lily',
      },
    ]);
    const onTrigger = (a: unknown, b: unknown) => {
      console.log(1);
    };
    const onTrigger2 = () => {
      //
    };

    return {
      onTrigger,
      onTrigger2,
      value,
      show,
      options,
    };
  },
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
