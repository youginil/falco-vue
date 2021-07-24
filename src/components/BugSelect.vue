<template>
  <div
    class="bug-select"
    :class="{ open: open }"
    :style="selectStyle"
    @click="onClick"
  >
    <div class="bug-select-result" :class="{ disabled: disabled }">
      <span class="bug-select-result-content">{{ selectedLabel }}</span>
      <i class="bug-select-clear" @click="clear" v-show="!disabled"></i>
    </div>
    <div
      v-show="open"
      class="bug-select-menu"
      :class="{ above: position === 'up', below: position === 'down' }"
    >
      <div class="bug-select-menu-header"></div>
      <ul class="bug-select-menu-body">
        <li
          v-for="option in options"
          :key="option.value"
          value="option.value"
          class="bug-select-menu-item"
          :class="{ selected: isSelected(option.value) }"
          @click="onSelect(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
import { isArray, isNumber } from '../utils';

type SimpleValueType = string | number | boolean;

type ComplexValueType = SimpleValueType[];

type SelectOption = { value: SimpleValueType; label: string };

export default defineComponent({
  name: 'BugSelect',
  props: {
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: null,
    },
    options: {
      type: Array as PropType<SelectOption[]>,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    position: {
      type: String as PropType<'up' | 'down'>,
      default: 'down',
    },
  },
  setup(props, { emit }) {
    const open = ref(false);

    const selectStyle = computed((): Record<string, unknown> => {
      const style: Record<string, unknown> = {};
      if (props.width) {
        style.width = isNumber(props.width) ? `${props.width}px` : props.width;
      }
      return style;
    });

    const selectedLabel = computed(() => {
      const result: string[] = [];
      for (let i = 0; i < props.options.length; i += 1) {
        const { value, label } = props.options[i];
        if (props.multiple) {
          if (
            props.modelValue &&
            (props.modelValue as ComplexValueType).includes(value)
          ) {
            result.push(label);
          }
        } else if (props.modelValue === value) {
          result.push(label);
          break;
        }
      }
      return result.length ? result.join(', ') : props.placeholder;
    });

    const isSelected = (value: SimpleValueType): boolean => {
      if (props.multiple) {
        return (
          !!props.modelValue &&
          (props.modelValue as ComplexValueType).includes(value)
        );
      }
      return props.modelValue === value;
    };

    const onClick = () => {
      if (props.disabled) {
        return;
      }
      open.value = !open.value;
    };

    const onSelect = (v: SimpleValueType) => {
      if (props.multiple) {
        const values = props.modelValue as ComplexValueType;
        if (values.includes(v)) {
          const i = values.indexOf(v);
          values.splice(i, 1);
        } else {
          values.push(v);
        }
      } else {
        emit('update:modelValue', v === props.modelValue ? null : v);
      }
      emit('change');
    };

    const clear = (e: MouseEvent) => {
      e.stopPropagation();
      const isBlank = props.multiple
        ? (props.modelValue as ComplexValueType).length === 0
        : props.modelValue === null;
      emit('update:modelValue', props.multiple ? [] : null);
      if (!isBlank) {
        emit('change');
      }
    };

    onMounted(() => {
      if (props.multiple && !isArray(props.modelValue)) {
        emit('update:modelValue', []);
      }
    });

    return {
      open,
      selectStyle,
      selectedLabel,
      isSelected,
      onClick,
      onSelect,
      clear,
    };
  },
});
</script>

<style lang="scss">
@use "sass:math";
@import '../styles/var';

.bug-select {
  display: inline-block;
  position: relative;

  &.open::before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .bug-select-result {
    min-width: 100px;
    background-color: #fafbfc;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    padding: 5px 26px 5px 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    cursor: pointer;
    position: relative;

    &.disabled {
      cursor: default;
    }

    &:not(.disabled):hover {
      background-color: #f3f4f6;
    }

    &:not(.disabled):focus {
      box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
    }

    &:not(.disabled):active {
      box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
      background-color: #edeff2;
    }

    &::after {
      display: inline-block;
      content: '';
      border: 4px solid transparent;
      border-top-color: #24292e;
      position: absolute;
      right: 12px;
      top: math.div(32px - 8px, 2);
    }

    .bug-select-result-content {
      display: inline-block;
      height: 20px;
      line-height: 20px;
    }

    .bug-select-clear {
      display: none;
      width: 20px;
      height: 20px;
      background-color: #eee;
      border-radius: 50%;
      transition: background-color 0.3s ease;
      position: absolute;
      top: 5px;
      right: 5px;
      z-index: 1;

      &::before,
      &::after {
        display: inline-block;
        content: '';
        width: 10px;
        height: 2px;
        background-color: $font-primary-color;
        position: absolute;
        top: 9px;
        left: 5px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
      &:hover {
        background-color: #ccc;
      }
    }

    &:hover .bug-select-clear {
      display: inline-flex;
    }
  }
  .bug-select-menu {
    display: flex;
    flex-direction: column;
    min-width: 100px;
    background-color: #fff;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    overflow: hidden;
    position: absolute;
    left: 0;
    z-index: 1;

    &.below {
      top: 36px;
    }

    &.above {
      bottom: 36px;
    }

    .bug-select-menu-header {
      flex-shrink: 0;
      padding: 8px 10px;
      display: none;
    }

    .bug-select-menu-body {
      flex-grow: 1;
      overflow-y: auto;
    }

    .bug-select-menu-item {
      display: block;
      font-size: 12px;
      line-height: 18px;
      padding: 8px 8px 8px 30px;
      color: #586069;
      cursor: pointer;
      position: relative;
      &:not(:last-child) {
        border-bottom: 1px solid #eaecef;
      }
    }

    .bug-select-menu-item.selected {
      color: #24292e;

      &::before {
        display: inline-block;
        content: '';
        width: 8px;
        height: 6px;
        border-left: 2px solid #24292e;
        border-bottom: 2px solid #24292e;
        position: absolute;
        left: 10px;
        top: 14px;
        transform: rotate(-45deg);
      }
    }

    .bug-select-menu-item:hover {
      background-color: #0366d6;
      color: #fff;

      &::before {
        border-left-color: #fff;
        border-bottom-color: #fff;
      }
    }
  }
}
</style>
