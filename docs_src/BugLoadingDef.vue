<template>
  <comp-def
    title="BugLoading"
    :props="loadingApi.props"
    :slots="loadingApi.slots"
    :events="loadingApi.events"
  >
    <bug-loading tip="Loading..."></bug-loading>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugLoadingDef',
  components: { CompDef },
  setup() {
    const loadingApi = ref<CompAPI>({
      props: [
        {
          name: 'tip',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Loading tip',
        },
        {
          name: 'size',
          type: ['string', 'number'],
          required: false,
          default: '""',
          desc: 'Loading size',
        },
      ],
      slots: [],
      events: [],
    });
    return { loadingApi };
  },
});
</script>
