<template>
  <div>
    <comp-def
      title="BugTable"
      :props="tableApi.props"
      :slots="tableApi.slots"
      :events="tableApi.events"
    >
      <bug-table :list="tableList" :sort="tableSort">
        <bug-table-column prop="id"></bug-table-column>
        <bug-table-column prop="name"></bug-table-column>
        <bug-table-column prop="age"></bug-table-column>
      </bug-table>
    </comp-def>
    <comp-def
      title="BugTableColumn"
      :props="tableColumnApi.props"
      :slots="tableColumnApi.slots"
      :events="tableColumnApi.events"
    ></comp-def>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugTableDef',
  components: { CompDef },
  setup() {
    const tableApi = ref<CompAPI>({
      props: [
        {
          name: 'list',
          type: 'TableList',
          required: true,
          default: '',
          desc: [
            'Table data',
            'type TableList = Record<string, unknown>[]',
          ].join('\n'),
        },
        {
          name: 'sort',
          type: 'Order[]',
          required: false,
          default: '',
          desc: [
            'Order parameter',
            'type Order = { prop: string; order: "asc" | "desc" | "" }',
          ].join('\n'),
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Column definitions',
        },
      ],
      events: [
        {
          name: 'resort',
          params: '',
          desc: 'On resort',
        },
      ],
    });
    const tableColumnApi = ref<CompAPI>({
      props: [
        {
          name: 'label',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Column label',
        },
        {
          name: 'prop',
          type: 'string',
          required: false,
          default: '""',
          desc: [
            'Column property name.',
            'Use "prop" as column name if not set "label"',
          ].join('\n'),
        },
        {
          name: 'width',
          type: ['string', 'number'],
          required: false,
          default: '',
          desc: 'Column width',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'For custom column content',
        },
      ],
      events: [],
    });

    const tableList = ref([
      { id: 1, name: 'John', age: 10 },
      { id: 2, name: 'Lily', age: 13 },
    ]);
    const tableSort = ref([{ prop: 'age', order: '' }]);

    return { tableApi, tableColumnApi, tableList, tableSort };
  },
});
</script>
