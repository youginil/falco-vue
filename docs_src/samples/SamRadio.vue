<template>
    <div>
        <fa-radio class="mr10" label="Hello radio"></fa-radio>
        <fa-radio label="Disabled" :disabled="true"></fa-radio>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
