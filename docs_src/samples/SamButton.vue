<template>
    <div>
        <fa-button class="m10">Default</fa-button>
        <fa-button class="m10" type="primary">Primary</fa-button>
        <fa-button class="m10" type="danger">Danger</fa-button>
        <fa-button class="m10" type="plain">Plain</fa-button>
        <fa-button class="m10" :disabled="true">Disabled</fa-button>
        <fa-button :loading="true" class="m10">Loading</fa-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
