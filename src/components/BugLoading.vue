<template>
  <div class="bug-loading">
    <span class="bug-loading-spin"></span>
    <p v-if="tip" class="bug-loading-tip">{{ tip }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BugLoading',
  props: {
    tip: {
      type: String,
      default: '',
    },
  },
  setup() {},
});
</script>
