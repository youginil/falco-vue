<template>
    <div>
        <fa-button @click="modalIsShow = true">Show Modal</fa-button>
        <fa-modal title="This is modal title" v-model:show="modalIsShow"
            >This is modal content</fa-modal
        >
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const modalIsShow = ref(false);
        return { modalIsShow };
    },
});
</script>
