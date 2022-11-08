<template>
    <div>
        <bug-dropdown>
            <template #default>This is dropdown</template>
            <template #dropdown>
                <bug-dropdown-item>Apple</bug-dropdown-item>
                <bug-dropdown-item>Banana</bug-dropdown-item>
                <bug-dropdown-item>Orange</bug-dropdown-item>
            </template>
        </bug-dropdown>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
