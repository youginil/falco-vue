<template>
    <div class="bug-tab-pane">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BugTabPane',
    props: {
        key: {
            type: [String, Number],
            required: true,
        },
    },
    setup() {},
});
</script>
