<template>
  <comp-def
    title="BugLoading"
    :props="loadingApi.props"
    :slots="loadingApi.slots"
    :events="loadingApi.events"
  >
    <sam-loading />
    <template #code>
      <sample-code src="SamLoading" />
    </template>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamLoading from './samples/SamLoading.vue';

export default defineComponent({
  name: 'DefLoading',
  components: { CompDef, SamLoading },
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
