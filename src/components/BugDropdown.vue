<template>
  <bug-popover
    :position="position"
    :trigger="trigger"
    :width="width"
    :padding="0"
  >
    <slot />
    <template #pop>
      <div class="bug-dropdown">
        <slot name="dropdown" />
      </div>
    </template>
  </bug-popover>
</template>

<script lang="ts">
import {defineComponent, PropType}from 'vue';
import BugPopover, { PopPosition } from './BugPopover.vue';

export default defineComponent({
  name: 'BugDropdown',
  components: {BugPopover},
  props: {
    position: {
      type: String as PropType<PopPosition>,
      default: 'bottom-middle'
    },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover'
    },
    width: {
      type: [String, Number],
      default: ''
    }
  }
})
</script>

<style lang="scss">
@import '../styles/var';

.bug-dropdown {
  color: $font-primary-color;
  padding: 4px 0;
  border-radius: 6px;
  overflow: hidden;
}
</style>
