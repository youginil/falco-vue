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
