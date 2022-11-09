<template>
    <div>
        <fa-input
            class="mr10"
            :clearable="true"
            v-model="inputText"
        ></fa-input>
        <fa-input
            placeholder="number"
            type="number"
            v-model="inputNumber"
        ></fa-input>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const inputText = ref('');
        const inputNumber = ref(0);
        return { inputText, inputNumber };
    },
});
</script>
