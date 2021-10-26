<template>
  <comp-def
    title="BugPagination"
    :props="pgApi.props"
    :slots="pgApi.slots"
    :events="pgApi.events"
  >
    <sam-pagination />
    <template #code>
      <sample-code src="SamPagination" />
    </template>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamPagination from './samples/SamPagination.vue';

export default defineComponent({
  name: 'DefPagination',
  components: { CompDef, SamPagination },
  setup() {
    const pgApi = ref<CompAPI>({
      props: [
        {
          name: 'page',
          type: 'number',
          required: true,
          default: '',
          desc: 'Current page number',
        },
        {
          name: 'pages',
          type: 'number',
          required: true,
          default: '',
          desc: 'Total pages',
        },
        {
          name: 'total',
          type: 'number',
          required: true,
          default: '',
          desc: 'Total number',
        },
      ],
      slots: [],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'On page changed',
        },
      ],
    });
    return { pgApi };
  },
});
</script>
