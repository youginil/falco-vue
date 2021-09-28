<template>
  <div>
    <comp-def
      title="BugRadio"
      :props="radioApi.props"
      :slots="radioApi.slots"
      :events="radioApi.events"
    >
      <bug-radio class="mr10" label="Hello radio"></bug-radio>
      <bug-radio label="Disabled" :disabled="true"></bug-radio>
    </comp-def>
    <comp-def
      title="BugRadioGroup"
      :props="radioGroupApi.props"
      :slots="radioGroupApi.slots"
      :events="radioGroupApi.events"
    >
      <bug-radio-group
        :options="radioGroupOptions"
        v-model="radioGroupValue"
      ></bug-radio-group>
    </comp-def>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugRadioDef',
  components: { CompDef },
  setup() {
    const radioApi = ref<CompAPI>({
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

    const radioGroupApi = ref<CompAPI>({
      props: [
        {
          name: 'options',
          type: 'Option[]',
          required: true,
          default: '',
          desc: [
            'Options.',
            'type Value = string | number | boolean;',
            'type Option = {label: string; value: Value};',
          ].join('\n'),
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
        {
          name: 'layout',
          type: 'enum',
          required: false,
          default: 'h',
          desc: 'Layout. h - horizontal; v - vertical',
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
    const radioGroupOptions = ref([
      { label: 'Apple', value: 1 },
      { label: 'Orange', value: 2 },
      { label: 'Banana', value: 3 },
    ]);
    const radioGroupValue = ref(1);

    return { radioApi, radioGroupApi, radioGroupOptions, radioGroupValue };
  },
});
</script>
