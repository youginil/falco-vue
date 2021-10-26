<template>
  <div>
    <comp-def
      title="BugCheckbox"
      :props="checkboxApi.props"
      :slots="checkboxApi.slots"
      :events="checkboxApi.events"
    >
      <sam-checkbox />
      <template #code>
        <sample-code src="SamCheckbox" />
      </template>
    </comp-def>
    <comp-def
      title="BugCheckboxGroup"
      :props="checkboxGroupApi.props"
      :slots="checkboxGroupApi.slots"
      :events="checkboxGroupApi.events"
    >
      <sam-checkbox-group />
      <template #code>
        <sample-code src="SamCheckboxGroup" />
      </template>
    </comp-def>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamCheckbox from './samples/SamCheckbox.vue';
import SamCheckboxGroup from './samples/SamCheckboxGroup.vue';

export default defineComponent({
  name: 'DefCheckbox',
  components: { CompDef, SamCheckbox, SamCheckboxGroup },
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

    return {
      checkboxApi,
      checkboxGroupApi,
    };
  },
});
</script>
