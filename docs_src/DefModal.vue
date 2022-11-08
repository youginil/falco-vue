<template>
    <comp-def
        title="BugModal"
        :props="modalApi.props"
        :slots="modalApi.slots"
        :events="modalApi.events"
    >
        <sam-modal />
        <template #code>
            <sample-code src="SamModal" />
        </template>
    </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamModal from './samples/SamModal.vue';

export default defineComponent({
    name: 'DefModal',
    components: { CompDef, SamModal },
    setup() {
        const modalApi = ref<CompAPI>({
            props: [
                {
                    name: 'show',
                    type: 'boolean',
                    required: true,
                    default: 'false',
                    desc: 'The variable for controling the modal. v-model:show=""',
                },
                {
                    name: 'title',
                    type: 'string',
                    required: false,
                    default: '""',
                    desc: 'Modal title',
                },
                {
                    name: 'headless',
                    type: 'boolean',
                    required: false,
                    default: 'true',
                    desc: 'Remove title section',
                },
                {
                    name: 'closeable',
                    type: 'boolean',
                    required: false,
                    default: 'true',
                    desc: 'Remove close button',
                },
                {
                    name: 'width',
                    type: ['string', 'number'],
                    required: false,
                    default: '',
                    desc: 'Modal width',
                },
            ],
            slots: [
                {
                    name: 'default',
                    desc: 'Modal content',
                },
            ],
            events: [
                {
                    name: 'show',
                    params: '',
                    desc: 'After show',
                },
                {
                    name: 'hide',
                    params: '',
                    desc: 'After hide',
                },
            ],
        });

        return { modalApi };
    },
});
</script>
