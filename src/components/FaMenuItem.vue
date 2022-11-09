<template>
    <div
        class="falco-menu-item"
        :class="{ selected: index === current.value }"
        @click="onClick(index)"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, UnwrapRef } from 'vue';

export default defineComponent({
    name: 'FaMenuItem',
    props: {
        index: {
            type: String,
            required: true,
        },
    },
    inject: ['current'],
    setup() {
        const ci: UnwrapRef<{ value: string }> | undefined = inject('current');

        function onClick(idx: string) {
            if (ci && idx !== ci.value) {
                ci.value = idx;
            }
        }
        return {
            onClick,
        };
    },
});
</script>
