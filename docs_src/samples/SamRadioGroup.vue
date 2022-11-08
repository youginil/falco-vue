<template>
    <div>
        <bug-radio-group
            :options="radioGroupOptions"
            v-model="radioGroupValue"
        ></bug-radio-group>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const radioGroupOptions = ref([
            { label: 'Apple', value: 1 },
            { label: 'Orange', value: 2 },
            { label: 'Banana', value: 3 },
        ]);
        const radioGroupValue = ref(1);

        return { radioGroupOptions, radioGroupValue };
    },
});
</script>
