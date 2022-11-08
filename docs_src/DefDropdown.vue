<template>
    <comp-def
        title="BugDropdown"
        :props="dropdownApi.props"
        :slots="dropdownApi.slots"
        :events="dropdownApi.events"
    >
        <sam-dropdown />
        <template #code>
            <sample-code src="SamDropdown" />
        </template>
    </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamDropdown from './samples/SamDropdown.vue';

export default defineComponent({
    name: 'DefDropdown',
    components: { CompDef, SamDropdown },
    setup() {
        const dropdownApi = ref<CompAPI>({
            props: [
                {
                    name: 'position',
                    type: 'string',
                    required: false,
                    default: 'bottom-middle',
                    desc: [
                        'Dropdown position.',
                        '(top|bottom|left|right)-(start|middle|end)',
                    ].join('\n'),
                },
            ],
            slots: [
                {
                    name: 'default',
                    desc: 'Dropdown position',
                },
                {
                    name: 'dropdown',
                    desc: 'Dropdown content',
                },
            ],
            events: [],
        });
        return { dropdownApi };
    },
});
</script>
