<template>
  <div>
    <comp-def
      title="BugCheckbox"
      :props="checkboxApi.props"
      :slots="checkboxApi.slots"
      :events="checkboxApi.events"
    >
      <bug-checkbox class="mr10" label="Agree or disagree"></bug-checkbox>
      <bug-checkbox
        class="mr10"
        label="Disabled"
        :disabled="true"
      ></bug-checkbox>
      <bug-checkbox label="Partial selection" :partial="true"></bug-checkbox>
    </comp-def>
    <comp-def
      title="BugCheckboxGroup"
      :props="checkboxGroupApi.props"
      :slots="checkboxGroupApi.slots"
      :events="checkboxGroupApi.events"
    >
      <bug-checkbox-group
        :options="checkboxGroupOptions"
        v-model="checkboxGroupValue"
      ></bug-checkbox-group>
    </comp-def>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugCheckboxDef',
  components: { CompDef },
  setup() {
    const checkboxApi = ref<CompAPI>({
      props: [
        {
          name: 'label',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Label',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
        {
          name: 'partial',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Partial selection',
        },
        {
          name: 'block',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Block style',
        },
      ],
      slots: [],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'Change event',
        },
      ],
    });

    const checkboxGroupApi = ref<CompAPI>({
      props: [
        {
          name: 'options',
          type: 'Option[]',
          required: true,
          default: '',
          desc: [
            'Option list.',
            'type ValueType = string | number | boolean;',
            'type Option = {label: string; value: ValueType}',
          ].join('\n'),
        },
      ],
      slots: [],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'On change',
        },
      ],
    });

    const checkboxGroupOptions = ref([
      { label: 'Apple', value: 0 },
      { label: 'Banana', value: 1 },
      { label: 'Pear', value: 2 },
      { label: 'Orange', value: 3 },
    ]);
    const checkboxGroupValue = ref([0]);

    return {
      checkboxApi,
      checkboxGroupApi,
      checkboxGroupOptions,
      checkboxGroupValue,
    };
  },
});
</script>
