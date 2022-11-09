<template>
    <div
        class="falco-form-item"
        :class="{
            horizontal: layout === 'h',
            vertical: layout === 'v',
            block: block,
        }"
    >
        <div
            class="falco-form-item-label"
            :style="{
                width:
                    layout === 'h'
                        ? typeof labelWidth === 'string'
                            ? labelWidth
                            : `${labelWidth}px`
                        : 'auto',
            }"
        >
            <span class="text-label">{{ label }}</span>
            <div class="slot-label">
                <slot name="label" />
            </div>
        </div>
        <div class="falco-form-item-body">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'FaFormItem',
    props: {
        layout: {
            type: String as PropType<'h' | 'v'>,
            default: 'v',
        },
        label: {
            type: String,
            default: '',
        },
        labelWidth: {
            type: [String, Number],
            default: 100,
        },
        block: {
            type: Boolean,
            default: true,
        },
    },
});
</script>
