<template>
    <div>
        <bug-button class="m10">Default</bug-button>
        <bug-button class="m10" type="primary">Primary</bug-button>
        <bug-button class="m10" type="danger">Danger</bug-button>
        <bug-button class="m10" type="plain">Plain</bug-button>
        <bug-button class="m10" :disabled="true">Disabled</bug-button>
        <bug-button :loading="true" class="m10">Loading</bug-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
