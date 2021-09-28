<template>
  <comp-def
    title="BugDate"
    :props="dateApi.props"
    :slots="dateApi.slots"
    :events="dateApi.events"
  >
    <bug-date v-model="dateValue"></bug-date>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugDateDef',
  components: { CompDef },
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

    const dateValue = ref('2020-01-01');

    return { dateApi, dateValue };
  },
});
</script>
