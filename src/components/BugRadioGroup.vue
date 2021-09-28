<template>
  <ul class="bug-radio-group" :class="{ vertical: layout === 'v' }">
    <li v-for="(option, i) in options" :key="i">
      <bug-radio
        :name="radioName"
        :label="option.label"
        :disabled="disabled"
        :modelValue="modelValue === option.value"
        @change="onRadioChange(option.value, $event)"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import BugRadio from './BugRadio.vue';

type RadioValueType = string | number | boolean;
export type RadioItem = { label: string; value: RadioValueType };

export default defineComponent({
  name: 'BugRadioGroup',
  components: { BugRadio },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    options: {
      type: Array as PropType<RadioItem[]>,
      default: [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    layout: {
      type: String as PropType<'h' | 'v'>,
      default: 'h',
    },
  },
  setup(props, { emit }) {
    const radioName = ref(`bug-radio-${Math.random()}`);

    const onRadioChange = (v: RadioValueType, e: Event) => {
      e.stopPropagation();
      if ((e.target as HTMLInputElement).checked) {
        emit('update:modelValue', v);
      }
      emit('change');
    };

    return {
      radioName,
      onRadioChange,
    };
  },
});
</script>
