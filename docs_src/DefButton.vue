<template>
    <comp-def
        title="BugButton"
        :props="buttonApi.props"
        :slots="buttonApi.slots"
        :events="buttonApi.events"
    >
        <sam-button></sam-button>
        <template #code>
            <sample-code src="SamButton" />
            <live-sample src="SamButton" />
        </template>
    </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamButton from './samples/SamButton.vue';
import LiveSample from './LiveSample.vue';

export default defineComponent({
    name: 'DefButton',
    components: { CompDef, SamButton, LiveSample },
    setup() {
        const buttonApi = ref<CompAPI>({
            props: [
                {
                    name: 'type',
                    type: 'enum',
                    required: false,
                    default: '"default"',
                    desc: 'Button type. "default", "primary", "danger", "plain"',
                },
                {
                    name: 'disabled',
                    type: 'boolean',
                    required: false,
                    default: 'false',
                    desc: 'Disabled',
                },
                {
                    name: 'loading',
                    type: 'boolean',
                    required: false,
                    default: 'false',
                    desc: 'Loading',
                },
                {
                    name: 'width',
                    type: ['string', 'number'],
                    required: false,
                    default: '',
                    desc: 'Button width. "100px", "100%"',
                },
            ],
            slots: [
                {
                    name: 'default',
                    desc: 'Button content',
                },
            ],
            events: [
                {
                    name: 'click',
                    params: '',
                    desc: 'Click event',
                },
            ],
        });

        return {
            buttonApi,
        };
    },
});
</script>
