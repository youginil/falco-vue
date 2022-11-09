<template>
    <fa-popover
        :position="position"
        :trigger="trigger"
        :width="width"
        :padding="0"
    >
        <slot />
        <template #pop>
            <div class="falco-dropdown">
                <slot name="dropdown" />
            </div>
        </template>
    </fa-popover>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import FaPopover, { PopPosition } from './FaPopover.vue';

export default defineComponent({
    name: 'FaDropdown',
    components: { FaPopover },
    props: {
        position: {
            type: String as PropType<PopPosition>,
            default: 'bottom-middle',
        },
        trigger: {
            type: String as PropType<'hover' | 'click'>,
            default: 'hover',
        },
        width: {
            type: [String, Number],
            default: '',
        },
    },
});
</script>
