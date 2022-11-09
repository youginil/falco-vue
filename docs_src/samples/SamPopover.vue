<template>
    <div>
        <fa-popover>
            <template #default>
                <fa-button class="mr10">Hover</fa-button>
            </template>
            <template #pop> Content </template>
        </fa-popover>
        <fa-popover trigger="click">
            <template #default>
                <fa-button>Click</fa-button>
            </template>
            <template #pop> Content </template>
        </fa-popover>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
