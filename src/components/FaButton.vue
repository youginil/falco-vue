<template>
    <button
        class="falco-button"
        :class="{
            'btn-default': type === 'default',
            'btn-primary': type === 'primary',
            'btn-danger': type === 'danger',
            'btn-plain': type === 'plain',
            loading: loading,
        }"
        :disabled="disabled || loading"
        :style="btnStyle"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { isNumber } from '../utils';

export default defineComponent({
    name: 'FaButton',
    props: {
        type: {
            type: String as PropType<
                'default' | 'primary' | 'danger' | 'plain'
            >,
            default: 'default',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [Number, String],
        },
    },
    setup(props) {
        const btnStyle = computed(() => {
            const s: Record<string, unknown> = {};
            if (props.width) {
                s.width = isNumber(props.width)
                    ? `${props.width}px`
                    : props.width;
            }
            return s;
        });

        return {
            btnStyle,
        };
    },
});
</script>
