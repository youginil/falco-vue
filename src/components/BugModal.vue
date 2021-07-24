<template>
  <transition name="fade" @enter="onShow" @after-leave="onHide">
    <div v-show="show" class="bug-modal" @click="close">
      <transition name="move">
        <div v-show="show" class="bug-modal-box" :style="style" @click.stop="">
          <div v-if="!headless" class="bug-modal-header">
            <div class="bug-modal-title">{{ title }}</div>
            <span v-if="closable" class="bug-modal-close" @click="close"></span>
          </div>
          <div class="bug-modal-content">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { isNumber } from '../utils';

export default defineComponent({
  name: 'BugModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    headless: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props, { emit }) {
    const style = computed((): Record<string, unknown> => {
      const style: Record<string, unknown> = {};
      if (props.width) {
        style.width = isNumber(props.width) ? `${props.width}px` : props.width;
      }
      return style;
    });

    const close = () => {
      emit('update:show', false);
    };

    const onShow = () => {
      emit('show');
      document.body.style.overflow = 'hidden';
    };

    const onHide = () => {
      emit('hide');
      document.body.style.overflow = '';
    };

    return {
      style,
      close,
      onShow,
      onHide,
    };
  },
});
</script>

<style lang="scss">
@use "sass:math";
.bug-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  overflow: auto;
  z-index: 999;
}
.bug-modal-box {
  width: 500px;
  margin: 100px auto 50px;
  border: 1px solid #ebeef5;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
}
.bug-modal-header {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #f5f5f5;
  .bug-modal-title {
    flex-grow: 1;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .bug-modal-close {
    flex-shrink: 0;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: background-color 0.3s linear;
    cursor: pointer;
    position: relative;
    &::before,
    &::after {
      display: inline-block;
      content: '';
      width: 14px;
      height: 2px;
      background-color: #999;
      position: absolute;
      left: math.div(30px - 14px, 2);
      top: math.div(30px - 2px, 2);
    }
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
    &:hover {
      background-color: #ddd;
      &::before,
      &::after {
        background-color: #000;
      }
    }
  }
}
.bug-modal-content {
  padding: 15px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.move-enter-from,
.move-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
.move-enter-to,
.move-leave {
  transform: translateY(0);
  opacity: 1;
}
.move-enter-active,
.move-leave-active {
  transition: all 0.3s ease;
}
</style>
