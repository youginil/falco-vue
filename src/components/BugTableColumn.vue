<template>
    <div class="bug-table-column">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BugTableColumn',
    props: {
        label: {
            type: String,
            default: '',
        },
        prop: {
            type: String,
            default: '',
        },
        width: {
            type: [String, Number],
            default: '',
        },
    },
});
</script>
