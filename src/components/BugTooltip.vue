<template>
  <bug-popover width="auto" :black="true" :padding="5">
    <slot />
    <template #pop>
      <div class="bug-tooltip">
        <slot name="tooltip" />
      </div>
    </template>
  </bug-popover>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BugPopover, { PopPosition } from './BugPopover.vue';

export default defineComponent({
  name: 'BugTooltip',
  components: { BugPopover },
  props: {
    position: {
      type: String as PropType<PopPosition>,
      default: 'bottom-middle',
    },
  },
});
</script>
