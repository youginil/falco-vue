<template>
    <div>
        <fa-date v-model="dateValue"></fa-date>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const dateValue = ref('2020-01-01');
        return { dateValue };
    },
});
</script>
