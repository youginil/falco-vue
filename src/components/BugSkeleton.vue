<template>
    <div class="bug-skeleton bug-skeleton-loading">
        <div v-if="layout === 'paragraph'" class="bug-skeleton-paragraph">
            <h3 class="bug-skeleton-paragraph-title bug-skeleton-loading"></h3>
            <ul class="bug-skeleton-paragraph-detail">
                <li class="bug-skeleton-loading"></li>
                <li class="bug-skeleton-loading"></li>
                <li class="bug-skeleton-loading"></li>
            </ul>
        </div>
        <div v-if="layout === 'table'" class="bug-skeleton-table">
            <div v-for="n in 15" :key="n" class="bug-skeleton-loading"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'BugSkeleton',
    props: {
        layout: {
            type: String as PropType<'paragraph' | 'table'>,
            default: 'paragraph',
        },
    },
});
</script>
