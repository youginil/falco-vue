<template>
    <label class="falco-radio">
        <input
            :name="name"
            :checked="modelValue"
            type="radio"
            :disabled="disabled"
            @change="onChange"
        />
        <span class="falco-radio-flag"></span>
        <span v-show="label" class="falco-radio-label">{{ label }}</span>
    </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FaRadio',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const onChange = (e: Event) => {
            emit('update:modelValue', (e.target as HTMLInputElement).checked);
        };
        return {
            onChange,
        };
    },
});
</script>
