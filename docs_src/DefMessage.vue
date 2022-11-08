<template>
    <comp-def
        title="BugMessage"
        :props="msgApi.props"
        :slots="msgApi.slots"
        :events="msgApi.events"
    >
        <sam-message />
        <template #code>
            <sample-code src="SamMessage" />
        </template>
    </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamMessage from './samples/SamMessage.vue';

export default defineComponent({
    name: 'DefMessage',
    components: { CompDef, SamMessage },
    setup() {
        const msgApi = ref<CompAPI>({
            props: [],
            slots: [],
            events: [],
        });

        return { msgApi };
    },
});
</script>
