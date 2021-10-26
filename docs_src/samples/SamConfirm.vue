<template>
  <div>
    <bug-button @click="confirm">Confirm</bug-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BugConfirm } from '../../src';

export default defineComponent({
  setup() {
    function confirm() {
      BugConfirm('Do you want do this?').then(() => {
        //
      });
    }

    return { confirm };
  },
});
</script>
