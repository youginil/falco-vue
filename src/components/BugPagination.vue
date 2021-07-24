<template>
  <div class="bug-pagination">
    <div v-if="total > 0" class="bug-pagination-total">
      Total&nbsp;<b>{{ total }}</b>
    </div>
    <span
      v-show="enablePrev"
      class="bug-pagination-prev"
      @click="onPageClick(page - 1)"
      >Previous</span
    >
    <span
      v-for="(p, i) in leftPages"
      :key="i"
      :class="{
        'bug-pagination-page': p !== null,
        'bug-pagination-gap': p === null,
      }"
      @click="p !== null && p !== page && onPageClick(p)"
      >{{ p === null ? '...' : p }}</span
    >
    <span class="bug-pagination-page current-page">{{ page }}</span>
    <span
      v-for="(p, i) in rightPages"
      :key="i"
      :class="{
        'bug-pagination-page': p !== null,
        'bug-pagination-gap': p === null,
      }"
      @click="p !== null && p !== page && onPageClick(p)"
      >{{ p === null ? '...' : p }}</span
    >
    <span
      v-show="enableNext"
      class="bug-pagination-next"
      @click="onPageClick(page + 1)"
      >Next</span
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BugPagination',
  props: {
    page: {
      type: Number,
      default: 0,
    },
    pages: {
      type: Number,
      default: 0,
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

<style lang="scss">
@import '../styles/var';

.bug-pagination {
  display: inline-block;
  color: $font-primary-color;
  white-space: nowrap;
  .bug-pagination-total {
    display: inline-block;
    line-height: 20px;
    padding: 5px 10px;
  }
  .bug-pagination-prev,
  .bug-pagination-next,
  .bug-pagination-page {
    display: inline-block;
    line-height: 20px;
    padding: 5px 10px;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    cursor: pointer;
  }
  .bug-pagination-prev,
  .bug-pagination-next {
    color: #0366d6;
  }
  .bug-pagination-prev::before,
  .bug-pagination-next::after {
    display: inline-block;
    content: '';
    width: 16px;
    height: 16px;
    margin: 2px 0;
    background-color: currentColor;
  }
  .bug-pagination-prev::before {
    clip-path: polygon(
      9.8px 12.8px,
      8.7px 12.8px,
      4.5px 8.5px,
      4.5px 7.5px,
      8.7px 3.2px,
      9.8px 4.3px,
      6.1px 8px,
      9.8px 11.7px,
      9.8px 12.8px
    );
  }
  .bug-pagination-next::after {
    clip-path: polygon(
      6.2px 3.2px,
      7.3px 3.2px,
      11.5px 7.5px,
      11.5px 8.5px,
      7.3px 12.8px,
      6.2px 11.7px,
      9.9px 8px,
      6.2px 4.3px,
      6.2px 3.2px
    );
  }
  .bug-pagination-page {
    &.current-page {
      background-color: #0366d6;
      color: #fff;
    }
  }
  .bug-pagination-prev:hover,
  .bug-pagination-next:hover,
  .bug-pagination-page:not(.current-page):hover {
    border-color: #e1e4e8;
  }
  .bug-pagination-gap {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    cursor: default;
  }
}
</style>
