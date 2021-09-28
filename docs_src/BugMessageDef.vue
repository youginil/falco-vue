<template>
  <comp-def
    title="BugMessage"
    :props="msgApi.props"
    :slots="msgApi.slots"
    :events="msgApi.events"
  >
    <bug-button class="m10" @click="info">Info</bug-button>
    <bug-button class="m10" @click="warn">Warning</bug-button>
    <bug-button class="m10" @click="error">Error</bug-button>
    <bug-button @click="success" class="m10">Success</bug-button>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import {BugMessage} from '../src'

export default defineComponent({
  name: 'BugMessageDef',
  components: { CompDef },
  setup() {
    const msgApi = ref<CompAPI>({
      props: [],
      slots: [],
      events: [],
    });

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

    return { msgApi, info, warn, error, success };
  },
});
</script>
