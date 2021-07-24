<template>
  <button
    class="bug-button"
    :class="{
      'btn-default': type === 'default',
      'btn-primary': type === 'primary',
      'btn-danger': type === 'danger',
      'btn-plain': type === 'plain',
      loading: loading,
    }"
    :disabled="disabled || loading"
    :style="btnStyle"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { isNumber } from '../utils';

export default defineComponent({
  name: 'BugButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'danger' | 'plain'>,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
    },
  },
  setup(props, { emit }) {
    const btnStyle = computed(() => {
      const s: Record<string, unknown> = {};
      if (props.width) {
        s.width = isNumber(props.width) ? `${props.width}px` : props.width;
      }
      return s;
    });

    return {
      btnStyle,
    };
  },
});
</script>

<style lang="scss">
@import '../styles/var';

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.bug-button {
  position: relative;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  color: $font-primary-color;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  outline: none;
  padding: 5px 16px;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  white-space: nowrap;
  text-align: center;

  &:hover {
    background-color: #f3f4f6;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
  }

  &:active {
    background-color: #edeff2;
    box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
  }

  &:disabled {
    background-color: #fafbfc;
    border-color: rgba(27, 31, 35, 0.15);
    color: #959da5;
    cursor: default;
  }

  &.btn-primary {
    background-color: #2ea44f;
    border-color: rgba(27, 31, 35, 0.15);
    color: #fff;
    &:hover {
      background-color: #2c974b;
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
    }
    &:active {
      background-color: #2a8f47;
      box-shadow: inset 0 1px 0 rgba(20, 70, 32, 0.2);
    }
    &:disabled {
      background-color: #94d3a2;
      border-color: rgba(27, 31, 35, 0.1);
      box-shadow: 0 1px 0 rgba(27, 31, 35, 0.1),
        inset 0 1px 0 hsla(0, 0%, 100%, 0.03);
      color: hsla(0, 0%, 100%, 0.8);
    }
  }

  &.btn-danger {
    color: #cb2431;
    &:hover {
      background-color: #cb2431;
      border-color: rgba(27, 31, 35, 0.15);
      box-shadow: 0 1px 0 rgba(27, 31, 35, 0.1),
        inset 0 1px 0 hsla(0, 0%, 100%, 0.03);
      color: #fff;
    }
    &:focus {
      box-shadow: 0 0 0 3px rgba(203, 36, 49, 0.4);
    }
    &:active {
      background-color: #be222e;
      border-color: rgba(27, 31, 35, 0.15);
      box-shadow: inset 0 1px 0 rgba(134, 24, 29, 0.2);
      color: #fff;
    }
    &:disabled {
      background-color: #fafbfc;
      box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
        inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
      color: rgba(203, 36, 49, 0.5);
    }
  }

  &.btn-plain {
    border: transparent;
    background-color: transparent;
    transition: color 0.3s ease;
    &:hover {
      color: #0366d6;
    }
    &:focus {
      box-shadow: none;
    }
    &:active {
      box-shadow: none;
      background-color: transparent;
    }
    &:disabled {
      color: #ccc;
    }
  }

  &:disabled.loading {
    color: transparent;
    &::after {
      display: inline-block;
      content: '';
      width: 16px;
      height: 16px;
      border: 2px solid #eee;
      border-top-color: #666;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      position: absolute;
      left: 50%;
      margin-left: -8px;
      top: 50%;
      margin-top: -8px;
    }
  }
}
</style>
