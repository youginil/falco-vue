<template>
  <comp-def
    title="BugPagination"
    :props="pgApi.props"
    :slots="pgApi.slots"
    :events="pgApi.events"
  >
    <bug-pagination :page="2" :pages="10" :total="100"></bug-pagination>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugPaginationDef',
  components: { CompDef },
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
