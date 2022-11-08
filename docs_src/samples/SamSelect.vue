<template>
    <div>
        <bug-select :options="selectOptions" v-model="selectValue"></bug-select>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const selectOptions = ref([
            { label: 'Apple', value: 1 },
            { label: 'Orange', value: 2 },
            { label: 'Banana', value: 3 },
        ]);
        const selectValue = ref(1);

        return { selectOptions, selectValue };
    },
});
</script>
