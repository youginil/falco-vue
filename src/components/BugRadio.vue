<template>
  <label class="bug-radio">
    <input
      :name="name"
      :checked="modelValue"
      type="radio"
      :disabled="disabled"
      @change="onChange"
    />
    <span class="bug-radio-flag"></span>
    <span v-show="label" class="bug-radio-label">{{ label }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BugRadio',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
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

.bug-radio {
  display: inline-block;
  position: relative;

  input {
    width: $input-height;
    height: $input-height;
    margin: math.div($height - $input-height, 2) 0;
    opacity: 0;
  }

  .bug-radio-flag {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: $input-height;
    height: $input-height;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: math.div($height - $input-height, 2);
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background-color: #1890ff;
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s linear;
    }
  }

  .bug-radio-label {
    font-size: 14px;
    line-height: $height;
    padding-left: 5px;
  }

  input:checked + .bug-radio-flag {
    border-color: #1890ff;
    &::after {
      transform: scale(1);
    }
  }

  input:disabled {
    & + .bug-radio-flag {
      border-color: #d9d9d9;

      &::after {
        background-color: rgba(0, 0, 0, 0.2);
      }

      & + .bug-radio-label {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  input:not(.disabed):focus + .bug-radio-flag {
    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
  }
}
</style>
