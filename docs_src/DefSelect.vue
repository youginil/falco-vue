<template>
    <comp-def
        title="BugSelect"
        :props="selectApi.props"
        :slots="selectApi.slots"
        :events="selectApi.events"
    >
        <sam-select />
        <template #code>
            <sample-code src="SamSelect" />
        </template>
    </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamSelect from './samples/SamSelect.vue';

export default defineComponent({
    name: 'DefSelect',
    components: { CompDef, SamSelect },
    setup() {
        const selectApi = ref<CompAPI>({
            props: [
                {
                    name: 'options',
                    type: 'Option[]',
                    required: true,
                    default: '',
                    desc: [
                        'Options',
                        'type Value = string | number | boolean;',
                        'type MultiValue = Value[];',
                        'type Option = { value: Value; label: string };',
                    ].join('\n'),
                },
            ],
            slots: [],
            events: [
                {
                    name: 'change',
                    params: '',
                    desc: 'On selection changed',
                },
            ],
        });

        return { selectApi };
    },
});
</script>
