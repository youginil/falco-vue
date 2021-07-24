<template>
  <label class="bug-checkbox" :class="{ block: block, disabled: disabled }">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :class="{ partial: partial }"
      @change="onChange"
    />
    <span class="bug-checkbox-flag"></span>
    <span v-show="label" class="bug-checkbox-label">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BugCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    partial: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const onChange = (e: Event) => {
      emit('update:modelValue', (e.target as HTMLInputElement).checked);
    };

    return {
      onChange,
    };
  },
});
</script>

<style lang="scss">
@use "sass:math";
$height: 32px;
$input-height: 16px;

.bug-checkbox {
  display: inline-block;
  position: relative;
  font-weight: 500;

  &.block {
    display: block;
  }

  input {
    display: inline-block;
    width: $input-height;
    height: $input-height;
    margin: math.div($height - $input-height, 2) 0;
    opacity: 0;
  }

  .bug-checkbox-flag {
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    display: inline-block;
    height: $input-height;
    width: $input-height;
    position: absolute;
    left: 0;
    top: math.div($height - $input-height, 2);
    &::after {
      display: inline-block;
      border: 2px solid transparent;
      border-left: 0;
      border-top: 0;
      content: '';
      height: 9px;
      left: 4px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg);
      width: 5px;
    }
  }

  .bug-checkbox-label {
    display: inline-block;
    font-size: 14px;
    line-height: $height;
    margin-left: 5px;
  }

  input:checked + .bug-checkbox-flag {
    background-color: #1890ff;
    border-color: #1890ff;
    &::after {
      border-color: #fff;
    }
  }

  input:disabled {
    .bug-checkbox-flag {
      background-color: #f5f5f5;
      border-color: #f5f5f5;
    }
    .bug-checkbox-label {
      color: rgba(0, 0, 0, 0.25);
    }
  }

  input:not(.disabed):focus + .bug-checkbox-flag {
    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
  }

  .partial:checked + .bug-checkbox-flag::after {
    width: 6px;
    height: 2px;
    border: 0;
    left: 4px;
    top: 6px;
    transform: rotate(0);
    background-color: #fff;
  }

  &.disabled {
    .bug-checkbox-label {
      opacity: 0.4;
    }
    .bug-checkbox-flag {
      border-color: #d9d9d9;
    }
    input:checked + .bug-checkbox-flag {
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
  }
}
</style>
