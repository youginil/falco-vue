<template>
    <comp-def
        title="FaConfirm"
        :props="confirmApi.props"
        :slots="confirmApi.slots"
        :events="confirmApi.events"
    >
        <sam-confirm />
        <template #code>
            <sample-code src="SamConfirm" />
        </template>
    </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamConfirm from './samples/SamConfirm.vue';

export default defineComponent({
    name: 'DefConfirm',
    components: { CompDef, SamConfirm },
    setup() {
        const confirmApi = ref<CompAPI>({
            props: [],
            slots: [],
            events: [],
        });

        return { confirmApi };
    },
});
</script>
