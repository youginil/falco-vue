<template>
    <div class="falco-loading">
        <span class="falco-loading-spin" :style="style"></span>
        <p v-if="tip" class="falco-loading-tip">{{ tip }}</p>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'FaLoading',
    props: {
        tip: {
            type: String,
            default: '',
        },
        size: {
            type: [String, Number],
            default: '',
        },
    },
    setup(props) {
        const style = computed(() => {
            const result: Record<string, unknown> = {};
            if (props.size) {
                const size =
                    typeof props.size === 'string'
                        ? props.size
                        : `${props.size}px`;
                result.width = size;
                result.height = size;
            }
            return result;
        });

        return {
            style,
        };
    },
});
</script>
