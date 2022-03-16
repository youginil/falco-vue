<template>
  <div>
    <bug-button class="m10" @click="info">Info</bug-button>
    <bug-button class="m10" @click="warn">Warning</bug-button>
    <bug-button class="m10" @click="error">Error</bug-button>
    <bug-button @click="success" class="m10">Success</bug-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bugui from '../../src';

export default defineComponent({
  setup() {
    function info() {
      bugui.message.info('This is info');
    }
    function warn() {
      bugui.message.warn('This is warning');
    }
    function error() {
      bugui.message.error('This is error');
    }
    function success() {
      bugui.message.success('This is success');
    }
    return { info, warn, error, success };
  },
});
</script>
