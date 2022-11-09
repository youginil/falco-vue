<template>
    <div class="falco-skeleton falco-skeleton-loading">
        <div v-if="layout === 'paragraph'" class="falco-skeleton-paragraph">
            <h3 class="falco-skeleton-paragraph-title falco-skeleton-loading"></h3>
            <ul class="falco-skeleton-paragraph-detail">
                <li class="falco-skeleton-loading"></li>
                <li class="falco-skeleton-loading"></li>
                <li class="falco-skeleton-loading"></li>
            </ul>
        </div>
        <div v-if="layout === 'table'" class="falco-skeleton-table">
            <div v-for="n in 15" :key="n" class="falco-skeleton-loading"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'FaSkeleton',
    props: {
        layout: {
            type: String as PropType<'paragraph' | 'table'>,
            default: 'paragraph',
        },
    },
});
</script>
