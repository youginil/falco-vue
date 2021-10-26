<template>
  <div>
    <bug-radio class="mr10" label="Hello radio"></bug-radio>
    <bug-radio label="Disabled" :disabled="true"></bug-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
