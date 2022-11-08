<template>
    <div>
        <bug-popover>
            <template #default>
                <bug-button class="mr10">Hover</bug-button>
            </template>
            <template #pop> Content </template>
        </bug-popover>
        <bug-popover trigger="click">
            <template #default>
                <bug-button>Click</bug-button>
            </template>
            <template #pop> Content </template>
        </bug-popover>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
