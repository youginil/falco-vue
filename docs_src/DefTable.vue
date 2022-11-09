<template>
    <div>
        <comp-def
            title="FaTable"
            :props="tableApi.props"
            :slots="tableApi.slots"
            :events="tableApi.events"
        >
            <sam-table />
            <template #code>
                <sample-code src="SamTable" />
            </template>
        </comp-def>
        <comp-def
            title="FaTableColumn"
            :props="tableColumnApi.props"
            :slots="tableColumnApi.slots"
            :events="tableColumnApi.events"
        ></comp-def>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamTable from './samples/SamTable.vue';

export default defineComponent({
    name: 'DefTable',
    components: { CompDef, SamTable },
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

        return { tableApi, tableColumnApi };
    },
});
</script>
