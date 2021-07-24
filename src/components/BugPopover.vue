<template>
  <div
    class="bug-popover"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div ref="target" class="bug-popover-target" @click="onClick">
      <slot />
    </div>
    <transition name="bug-popover">
      <div
        v-show="show"
        class="bug-popover-pop"
        :class="[popClass, black ? 'black' : '']"
        :style="popStyle"
      >
        <slot name="pop" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
} from 'vue';
import { isNumber } from '../utils';

export type PopPosition =
  | 'top-start'
  | 'top-middle'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-middle'
  | 'bottom-end'
  | 'left-start'
  | 'left-middle'
  | 'left-end'
  | 'right-start'
  | 'right-middle'
  | 'right-end';

export default defineComponent({
  name: 'BugPopover',
  props: {
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
    position: {
      type: String as PropType<PopPosition>,
      default: 'bottom-middle',
    },
    width: {
      type: [String, Number],
      default: '',
    },
    padding: {
      type: Number,
      default: 10,
    },
    black: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const target = ref<HTMLElement>();
    const show = ref(false);

    const popClass = computed(() => {
      const [pos, align] = props.position.split('-');
      return [
        `pos-${pos}`,
        `${['top', 'bottom'].includes(pos) ? 'h' : 'v'}-${align}`,
      ];
    });

    const popStyle = computed((): Record<string, unknown> => {
      const style: Record<string, unknown> = {};
      if (props.width) {
        style.width = isNumber(props.width) ? `${props.width}px` : props.width;
      }
      if (props.padding !== undefined) {
        style.padding = `${props.padding}px`;
      }
      return style;
    });

    const onMouseEnter = () => {
      if (props.trigger === 'hover') {
        show.value = true;
      }
    };

    const onMouseLeave = () => {
      if (props.trigger === 'hover') {
        show.value = false;
      }
    };

    const onClick = (e: MouseEvent) => {
      if (props.trigger === 'click') {
        e.stopPropagation();
        show.value = !show.value;
      }
    };

    const onDocumentClick = () => {
      show.value = false;
    };

    const registerDocumentClick = () => {
      document.addEventListener('click', onDocumentClick);
    };

    const unregisterDocumentClick = () => {
      document.removeEventListener('click', onDocumentClick);
    };

    onMounted(() => {
      if (props.trigger === 'click') {
        registerDocumentClick();
      }
    });

    onBeforeUnmount(() => {
      if (props.trigger === 'click') {
        unregisterDocumentClick();
      }
    });

    return {
      show,
      target,
      popClass,
      popStyle,
      onClick,
      onMouseEnter,
      onMouseLeave,
    };
  },
});
</script>

<style lang="scss">
@use "sass:math";
$border-color: #ebeef5;
$large-triangle-width: 12px;
$small-triangle-width: 10px;
$gap: math.div($large-triangle-width, 2);
$large-triangle-offset: -$large-triangle-width;
$small-triangle-offset: -$small-triangle-width;

.bug-popover {
  display: inline-block;
  position: relative;
}
.bug-popover-pop {
  display: inline-block;
  padding: 10px;
  width: 200px;
  background-color: #fff;
  border: 1px solid $border-color;
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  &.black {
    background-color: #000;
    border-color: #000;
  }
  &::before {
    display: inline-block;
    content: '';
    border: math.div($large-triangle-width, 2) solid transparent;
    position: absolute;
  }
  &::after {
    display: inline-block;
    content: '';
    border: math.div($small-triangle-width, 2) solid transparent;
    position: absolute;
  }
  &.pos-top {
    bottom: 100%;
    margin-bottom: $gap;
    &::before {
      border-top-color: $border-color;
      bottom: $large-triangle-offset;
    }
    &::after {
      border-top-color: #fff;
      bottom: $small-triangle-offset;
    }
    &.black::before,
    &.black::after {
      border-top-color: #000;
    }
  }
  &.pos-bottom {
    top: 100%;
    margin-top: $gap;
    &::before {
      border-bottom-color: $border-color;
      top: $large-triangle-offset;
    }
    &::after {
      border-bottom-color: #fff;
      top: $small-triangle-offset;
    }
    &.black::before,
    &.black::after {
      border-bottom-color: #000;
    }
  }
  &.pos-left {
    right: 100%;
    margin-right: $gap;
    &::before {
      border-left-color: $border-color;
      right: $large-triangle-offset;
    }
    &::after {
      border-left-color: #fff;
      right: $small-triangle-offset;
    }
    &.black::before,
    &.black::after {
      border-left-color: #000;
    }
  }
  &.pos-right {
    left: 100%;
    margin-left: $gap;
    &::before {
      border-right-color: $border-color;
      left: $large-triangle-offset;
    }
    &::after {
      border-right-color: #fff;
      left: $small-triangle-offset;
    }
    &.black::before,
    &.black::after {
      border-right-color: #000;
    }
  }
  &.h-start {
    left: 0;
    &::before {
      left: 10px;
    }
    &::after {
      left: 11px;
    }
  }
  &.h-middle {
    left: 50%;
    transform: translateX(-50%);
    &::before,
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &.h-end {
    right: 0;
    &::before {
      right: 10px;
    }
    &::after {
      right: 11px;
    }
  }
  &.v-start {
    top: 0;
    &::before {
      top: 10px;
    }
    &::after {
      top: 11px;
    }
  }
  &.v-middle {
    top: 50%;
    transform: translateY(-50%);
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.v-end {
    bottom: 0;
    &::before {
      bottom: 10px;
    }
    &::after {
      bottom: 11px;
    }
  }
}

.bug-popover-enter,
.bug-popover-leave-to {
  opacity: 0;
}
.bug-popover-enter-to,
.bug-popover-leave {
  opacity: 1;
}
.bug-popover-enter-active,
.bug-popover-leave-active {
  transition: opacity 0.2s ease;
}
</style>
