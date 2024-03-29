<template>
    <div class="falco-pagination">
        <div v-if="total > 0" class="falco-pagination-total">
            Total&nbsp;<b>{{ total }}</b>
        </div>
        <span
            v-show="enablePrev"
            class="falco-pagination-prev"
            @click="onPageClick(page - 1)"
        ></span>
        <span
            v-for="(p, i) in leftPages"
            :key="i"
            :class="{
                'falco-pagination-page': p !== null,
                'falco-pagination-gap': p === null,
            }"
            @click="p !== null && p !== page && onPageClick(p)"
            >{{ p === null ? '...' : p }}</span
        >
        <span class="falco-pagination-page current-page">{{ page }}</span>
        <span
            v-for="(p, i) in rightPages"
            :key="i"
            :class="{
                'falco-pagination-page': p !== null,
                'falco-pagination-gap': p === null,
            }"
            @click="p !== null && p !== page && onPageClick(p)"
            >{{ p === null ? '...' : p }}</span
        >
        <!-- for mobile -->
        <span class="falco-page-info">{{ page + ' / ' + pages }}</span>
        <span
            v-show="enableNext"
            class="falco-pagination-next"
            @click="onPageClick(page + 1)"
        ></span>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'FaPagination',
    props: {
        page: {
            type: Number,
            required: true,
        },
        pages: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            default: 0,
        },
    },
    setup(props, { emit }) {
        const enablePrev = computed(() => {
            return props.page > 1;
        });

        const enableNext = computed(() => {
            return props.page < props.pages;
        });

        const leftPages = computed((): (number | null)[] => {
            const pages: (number | null)[] = [];
            if (props.page >= 7) {
                pages.push(1, 2, null, props.page - 2, props.page - 1);
            } else {
                for (let p = 1; p < props.page; p++) {
                    pages.push(p);
                }
            }
            return pages;
        });

        const rightPages = computed((): (number | null)[] => {
            const pages: (number | null)[] = [];
            if (props.page <= props.pages - 6) {
                pages.push(
                    props.page + 1,
                    props.page + 2,
                    null,
                    props.pages - 1,
                    props.pages
                );
            } else {
                for (let p = props.page + 1; p <= props.pages; p++) {
                    pages.push(p);
                }
            }
            return pages;
        });

        const onPageClick = (p: number) => {
            emit('change', p);
        };

        return {
            enablePrev,
            enableNext,
            leftPages,
            rightPages,
            onPageClick,
        };
    },
});
</script>
