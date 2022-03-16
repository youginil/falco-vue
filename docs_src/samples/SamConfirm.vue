<template>
  <div>
    <bug-button @click="confirm">Confirm</bug-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bugui from '../../src';

export default defineComponent({
  setup() {
    function confirm() {
      bugui.confirm('Do you want do this?').then(() => {
        //
      });
    }

    return { confirm };
  },
});
</script>
