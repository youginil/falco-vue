<template>
  <div class="bug-input" :style="{ width: width || false }">
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :style="[clearable && !disabled ? 'padding-right: 32px' : '']"
      @input="oninput"
      @keydown="onKeydown"
      @focus="onFocus"
      @blur="onBlur"
    />
    <span class="clear" v-if="clearable" @click="clear"></span>
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
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const input = ref<HTMLInputElement>(document.createElement('input'));

    watch(modelValue, (newValue, oldValue) => {
      if (newValue !== input.value.value) {
        // @ts-ignore
        input.value.value = newValue;
      }
    });

    onMounted(() => {
      // @ts-ignore
      input.value.value = modelValue.value;
    });

    const oninput = () => {
      const v = input.value.value;
      if (props.type === 'number') {
        // 把全角的数字转化成半角。65296 - 全角的0；65305 - 全角的9
        const n = [...`${v}`]
          .map((char) => {
            const code = char.charCodeAt(0);
            if (code >= 65296 && code <= 65305) {
              return `${code - 65296}`;
            }
            return (code >= 48 && code <= 57) || code === 46 ? char : '';
          })
          .join('');
        input.value.value = n;
        emit('update:modelValue', n);
        emit('change', n);
      } else {
        emit('update:modelValue', v);
        emit('change', v);
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
      }
      emit('blur', e);
    };

    function clear() {
      const v = props.type === 'number' ? 0 : '';
      emit('update:modelValue', v);
      emit('change', v);
    }

    return {
      input,
      oninput,
      onKeydown,
      onFocus,
      onBlur,
      clear,
    };
  },
});
</script>
