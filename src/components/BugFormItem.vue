<template>
  <div
    class="bug-form-item"
    :class="{
      horizontal: layout === 'h',
      vertical: layout === 'v',
      block: block,
    }"
  >
    <div
      class="bug-form-item-label"
      :style="{
        width:
          layout === 'h'
            ? typeof labelWidth === 'string'
              ? labelWidth
              : `${labelWidth}px`
            : 'auto',
      }"
    >
      <span class="text-label">{{ label }}</span>
      <div class="slot-label">
        <slot name="label" />
      </div>
    </div>
    <div class="bug-form-item-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BugFormItem',
  props: {
    layout: {
      type: String as PropType<'h' | 'v'>,
      default: 'v',
    },
    label: {
      type: String,
      default: '',
    },
    labelWidth: {
      type: [String, Number],
      default: 100,
    },
    block: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss">
.bug-form-item {
  margin-bottom: 15px;
  display: inline-flex;

  &.block {
    display: flex;
  }

  .bug-form-item-label {
    align-items: center;

    > .text-label {
      font-weight: 600;
      flex-shrink: 0;
    }

    > .slot-label {
      flex-grow: 1;
    }
  }

  &.horizontal {
    align-items: center;

    .bug-form-item-label {
      display: inline-flex;
      flex-shrink: 0;
      width: 100px;
      text-align: right;
    }

    .bug-form-item-body {
      flex-grow: 1;
    }
  }

  &.vertical {
    flex-direction: column;

    .bug-form-item-label {
      display: flex;
      margin-bottom: 7px;
    }
  }
}
</style>
