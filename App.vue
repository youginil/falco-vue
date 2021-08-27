<template>
  <div class="tc">
    <bug-tabs v-model="value" @change="trigger">
      <bug-tab-pane :key="1">Apple</bug-tab-pane>
      <bug-tab-pane :key="2">Orange</bug-tab-pane>
      <bug-tab-pane :key="3">Banana</bug-tab-pane>
    </bug-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BugConfirm, BugMessage } from './src';

export default defineComponent({
  name: 'App',
  setup() {
    const value = ref(1);
    function trigger(a: unknown) {
      console.log('trigger', a);
    }

    return {
      value,
      trigger
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
