<template>
  <div class="bug-input" :style="{ width: width || false }">
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="oninput"
      @keydown="onKeydown"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, toRefs, watch } from 'vue';

export default defineComponent({
  name: 'BugInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String as PropType<'text' | 'number' | 'password'>,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: '',
    },
    trim: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const input = ref<HTMLInputElement>(document.createElement('input'));

    watch(modelValue, (newValue, oldValue) => {
      if (newValue !== input.value.value) {
        //
      }
    });

    onMounted(() => {
      // @ts-ignore
      input.value.value = modelValue.value;
    });

    const oninput = () => {
      if (props.type === 'number') {
        // 把全角的数字转化成半角。65296 - 全角的0；65305 - 全角的9
        const n = [...`${input.value.value}`]
          .map((char) => {
            const code = char.charCodeAt(0);
            if (code >= 65296 && code <= 65305) {
              return `${code - 65296}`;
            }
            return (code >= 48 && code <= 57) || code === 46 ? char : '';
          })
          .join('');
        input.value.value = n;
        emit('change', n);
      } else {
        emit('change', input.value.value);
      }
    };

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        emit('enter');
      }
    };

    const onFocus = (e: FocusEvent) => {
      emit('focus', e);
    };

    const onBlur = (e: FocusEvent) => {
      const elem = input.value;
      if (!props.disabled && /(^\s+|\s+$)/.test(`${elem.value}`)) {
        elem.value = `${elem.value}`.trim();
        emit('change', elem.value);
      }
      emit('blur', e);
    };

    return {
      input,
      oninput,
      onKeydown,
      onFocus,
      onBlur,
    };
  },
});
</script>

<style lang="scss">
.bug-input {
  display: inline-block;
  width: 150px;
  input {
    background-color: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    box-shadow: inset 0 1px 0 rgba(225, 228, 232, 0.2);
    color: #24292e;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    padding: 5px 12px;
    width: 100%;
    &::placeholder {
      color: #a3aab1;
    }
    &:focus {
      border-color: #0366d6;
      box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
    }
    &:disabled {
      background-color: #f3f4f6;
      color: #959da5;
    }
  }
}
</style>
