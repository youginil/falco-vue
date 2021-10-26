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
import { BugMessage } from '../../src';

export default defineComponent({
  setup() {
    function info() {
      BugMessage.info('This is info');
    }
    function warn() {
      BugMessage.warn('This is warning');
    }
    function error() {
      BugMessage.error('This is error');
    }
    function success() {
      BugMessage.success('This is success');
    }
    return { info, warn, error, success };
  },
});
</script>
