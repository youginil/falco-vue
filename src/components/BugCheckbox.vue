<template>
    <label class="bug-checkbox" :class="{ block: block, disabled: disabled }">
        <input
            type="checkbox"
            :checked="modelValue"
            :disabled="disabled"
            :class="{ partial: partial }"
            @change="onChange"
        />
        <span class="bug-checkbox-flag"></span>
        <span v-show="label" class="bug-checkbox-label">{{ label }}</span>
    </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BugCheckbox',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        partial: {
            type: Boolean,
            default: false,
        },
        block: {
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
