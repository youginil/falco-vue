<template>
    <div>
        <comp-def
            title="FaTabs"
            :props="tabsApi.props"
            :slots="tabsApi.slots"
            :events="tabsApi.events"
        >
            <sam-tabs />
            <template #code>
                <sample-code src="SamTabs" />
            </template>
        </comp-def>
        <comp-def
            title="FaTabPane"
            :props="tabPaneApi.props"
            :slots="tabPaneApi.slots"
            :events="tabPaneApi.events"
        ></comp-def>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamTabs from './samples/SamTabs.vue';

export default defineComponent({
    name: 'DefTabs',
    components: { CompDef, SamTabs },
    setup() {
        const tabsApi = ref<CompAPI>({
            props: [],
            slots: [
                {
                    name: 'default',
                    desc: 'Tab panes',
                },
            ],
            events: [
                {
                    name: 'change',
                    params: '',
                    desc: 'On tab changed',
                },
            ],
        });
        const tabPaneApi = ref<CompAPI>({
            props: [
                {
                    name: 'key',
                    type: ['string', 'number'],
                    required: true,
                    default: '',
                    desc: 'Tab pane unique key',
                },
            ],
            slots: [],
            events: [],
        });

        return { tabsApi, tabPaneApi };
    },
});
</script>
