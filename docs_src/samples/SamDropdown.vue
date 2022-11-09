<template>
    <div>
        <fa-dropdown>
            <template #default>This is dropdown</template>
            <template #dropdown>
                <fa-dropdown-item>Apple</fa-dropdown-item>
                <fa-dropdown-item>Banana</fa-dropdown-item>
                <fa-dropdown-item>Orange</fa-dropdown-item>
            </template>
        </fa-dropdown>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
