<template>
    <div>
        <bug-checkbox class="mr10" label="Agree or disagree"></bug-checkbox>
        <bug-checkbox
            class="mr10"
            label="Disabled"
            :disabled="true"
        ></bug-checkbox>
        <bug-checkbox label="Partial selection" :partial="true"></bug-checkbox>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
