<template>
    <div>
        <fa-checkbox class="mr10" label="Agree or disagree"></fa-checkbox>
        <fa-checkbox
            class="mr10"
            label="Disabled"
            :disabled="true"
        ></fa-checkbox>
        <fa-checkbox label="Partial selection" :partial="true"></fa-checkbox>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
