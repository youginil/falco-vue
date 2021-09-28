<template>
  <comp-def
    title="BugBacktop"
    :props="backtopApi.props"
    :slots="backtopApi.slots"
    :events="backtopApi.events"
  >
    <bug-backtop></bug-backtop>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugBacktopDef',
  components: { CompDef },
  setup() {
    const backtopApi = ref<CompAPI>({
      props: [
        {
          name: 'target',
          type: 'string',
          required: false,
          default: '',
          desc: 'Target to backtop. The prop is a query selector',
        },
        {
          name: 'right',
          type: 'number',
          required: false,
          default: '100',
          desc: 'Right distance to right edge',
        },
        {
          name: 'bottom',
          type: 'number',
          required: false,
          default: '100',
          desc: 'Right distance to bottom edge',
        },
      ],
      slots: [],
      events: [],
    });

    return {
      backtopApi,
    };
  },
});
</script>
