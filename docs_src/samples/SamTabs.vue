<template>
    <div>
        <bug-tabs v-model="tab">
            <bug-tab-pane key="1">Apple</bug-tab-pane>
            <bug-tab-pane key="2">Orange</bug-tab-pane>
            <bug-tab-pane key="3">Banana</bug-tab-pane>
        </bug-tabs>
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
