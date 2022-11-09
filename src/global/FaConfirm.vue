<template>
    <div class="fa-confirm">
        <fa-modal v-model:show="show" :headless="true" :width="300">
            <p class="fa-confirm-title">{{ title }}</p>
            <div class="tr">
                <fa-button class="mr10" @click="show = false"
                    >Cancel</fa-button
                >
                <fa-button type="primary" @click="handleConfirm"
                    >OK</fa-button
                >
            </div>
        </fa-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import FaModal from '../components/FaModal.vue';
import FaButton from '../components/FaButton.vue';

export default defineComponent({
    name: 'FaConfirm',
    components: { FaModal, FaButton },
    data() {
        return {
            show: false,
            title: '',
            onclick: () => {},
        };
    },
    methods: {
        handleConfirm() {
            this.show = false;
            this.onclick();
        },
    },
    mounted() {
        const instance = getCurrentInstance();
        // @ts-ignore
        window.__confirm = instance;
    },
});
</script>
