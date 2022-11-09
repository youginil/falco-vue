<template>
    <div>
        <fa-tabs v-model="tab">
            <fa-tab-pane key="1">Apple</fa-tab-pane>
            <fa-tab-pane key="2">Orange</fa-tab-pane>
            <fa-tab-pane key="3">Banana</fa-tab-pane>
        </fa-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const tab = ref(1);

        return { tab };
    },
});
</script>
