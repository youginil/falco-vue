<template>
  <div class="tc">
    <bug-button @click="onTrigger">Hello</bug-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BugConfirm, BugMessage } from './src';

export default defineComponent({
  name: 'App',
  setup() {
    const value = ref(1);
    const show = ref(true);
    const options = ref([
      {
        value: 1,
        label: 'John'
      },
      {
        value: 2,
        label: 'Lily'
      }
    ])
    const onTrigger = (a: unknown, b: unknown) => {
      BugConfirm('Delete the user?').then(() => {
        console.log('OK');
      });
    };
    const onTrigger2 = () => {
      //
    };

    return {
      onTrigger,
      onTrigger2,
      value,
      show,
      options
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