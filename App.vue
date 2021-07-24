<template>
  <div>
    <bug-button @click="onTrigger">Hello</bug-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue';
import { BugConfirm } from './src';

export default defineComponent({
  name: 'App',
  setup() {
    const value = ref('');
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

function BugConfirm(arg0: string) {
  throw new Error('Function not implemented.');
}
