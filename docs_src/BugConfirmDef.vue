<template>
  <comp-def
    title="BugConfirm"
    :props="confirmApi.props"
    :slots="confirmApi.slots"
    :events="confirmApi.events"
  >
    <bug-button @click="confirm">Confirm</bug-button>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import { BugConfirm } from '../src';

export default defineComponent({
  name: 'BugConfirmDef',
  components: { CompDef },
  setup() {
    const confirmApi = ref<CompAPI>({
      props: [],
      slots: [],
      events: [],
    });

    function confirm() {
      BugConfirm('Do you want do this?').then(() => {
        //
      });
    }

    return { confirmApi, confirm };
  },
});
</script>
