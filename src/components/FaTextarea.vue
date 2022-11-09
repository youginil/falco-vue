<template>
    <textarea
        ref="text"
        class="falco-textarea"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="onInput"
    ></textarea>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from 'vue';

export default defineComponent({
    name: 'FaTextarea',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
    setup(props, { emit }) {
        const { modelValue } = toRefs(props);
        const text = ref<HTMLTextAreaElement>(
            document.createElement('textarea')
        );

        watch(modelValue, (newValue, oldValue) => {
            const elem = text.value;
            if (elem.value !== newValue) {
                elem.value = newValue;
            }
        });

        onMounted(() => {
            text.value.value = modelValue.value;
        });

        const onInput = () => {
            emit('update:modelValue', text.value.value);
        };

        return {
            text,
            onInput,
        };
    },
});
</script>
