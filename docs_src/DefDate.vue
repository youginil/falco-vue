<template>
  <comp-def
    title="BugDate"
    :props="dateApi.props"
    :slots="dateApi.slots"
    :events="dateApi.events"
  >
    <sam-date />
    <template #code>
      <sample-code src="SamDate" />
    </template>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamDate from './samples/SamDate.vue';

export default defineComponent({
  name: 'DefDate',
  components: { CompDef, SamDate },
  setup() {
    const dateApi = ref<CompAPI>({
      props: [
        {
          name: 'clearable',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Clearable',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
      ],
      slots: [],
      events: [],
    });

    return { dateApi };
  },
});
</script>
