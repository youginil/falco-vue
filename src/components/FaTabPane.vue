<template>
    <div class="falco-tab-pane">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FaTabPane',
    props: {
        key: {
            type: [String, Number],
            required: true,
        },
    },
    setup() {},
});
</script>
