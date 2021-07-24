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

<style lang="scss">
@keyframes bug-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
.bug-skeleton {
  .bug-skeleton-loading {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: bug-skeleton-loading 1.4s ease infinite;
  }
  .bug-skeleton-paragraph {
    .bug-skeleton-paragraph-title {
      width: 38%;
      height: 16px;
      border-radius: 4px;
      margin-top: 16px;
    }
  }
  .bug-skeleton-paragraph-detail {
    display: block;
    margin-top: 20px;
    > li {
      display: block;
      height: 16px;
      border-radius: 4px;
      margin-top: 16px;
      &:last-child {
        width: 60%;
      }
    }
  }
  .bug-skeleton-table {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 16px);
    row-gap: 16px;
    column-gap: 16px;
    > * {
      border-radius: 4px;
    }
  }
}
</style>
