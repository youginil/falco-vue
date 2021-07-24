<template>
  <ul
    class="bug-checkbox-group"
    :class="{ vertical: layout === 'v' }"
    :style="style"
  >
    <li v-for="(option, i) in options" :key="i">
      <bug-checkbox
        :modelValue="isChecked(option.value)"
        :label="option.label"
        :disabled="disabled"
        @change="onChange(option.label)"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRef, toRefs } from 'vue';
import { isNumber } from '../utils';
import BugCheckbox from './BugCheckbox.vue';

type ValueType = string | number | boolean;
type CheckboxItem = { label: string; value: ValueType };

export default defineComponent({
  name: 'BugCheckboxGroup',
  components: { BugCheckbox },
  props: {
    modelValue: {
      type: Array as PropType<ValueType[]>,
      default: [],
    },
    options: {
      type: Array as PropType<CheckboxItem[]>,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    layout: {
      type: String as PropType<'h' | 'v'>,
      default: 'h',
    },
    width: {
      type: [String, Number],
    },
  },
  setup(props) {
    const { modelValue, options } = toRefs(props);

    const style = computed(() => {
      const s: Record<string, unknown> = {};
      if (props.width) {
        s.width = isNumber(props.width) ? `${props.width}px` : props.width;
      }
      return s;
    });

    const isChecked = (v: ValueType) => {
      return modelValue.value.includes(v);
    };

    const onChange = (label: string) => {
      const v = options.value.filter((item) => item.label === label)[0].value;
      const i = modelValue.value.indexOf(v);
      if (i >= 0) {
        modelValue.value.splice(i, 1);
      } else {
        modelValue.value.push(v);
      }
    };

    return {
      style,
      isChecked,
      onChange,
    };
  },
});
</script>

<style lang="scss">
.bug-checkbox-group {
  display: inline-block;
  > li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &.vertical > li {
    display: block;
    margin-right: 0;
  }
}
</style>
