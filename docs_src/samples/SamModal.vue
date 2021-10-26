<template>
  <div>
    <bug-button @click="modalIsShow = true">Show Modal</bug-button>
    <bug-modal title="This is modal title" v-model:show="modalIsShow"
      >This is modal content</bug-modal
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const modalIsShow = ref(false);
    return { modalIsShow };
  },
});
</script>
