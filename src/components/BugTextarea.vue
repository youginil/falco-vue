<template>
  <textarea
    ref="text"
    class="bug-textarea"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInput"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from 'vue';

export default defineComponent({
  name: 'BugTextarea',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const text = ref<HTMLTextAreaElement>(document.createElement('textarea'));

    watch(modelValue, (newValue, oldValue) => {
      const elem = text.value;
      if (elem.value !== newValue) {
        elem.value = newValue;
      }
    });

    onMounted(() => {
      text.value.value = modelValue.value;
    });

    const onInput = () => {
      emit('update:modelValue', text.value.value);
    };

    return {
      text,
      onInput,
    };
  },
});
</script>

<style lang="scss">
.bug-textarea {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100px;
  padding: 8px 12px;
  line-height: 1.5;
  background-color: #fafbfc;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  &:focus {
    box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
    border-color: #0366d6;
    background-color: #fff;
  }
}
</style>
