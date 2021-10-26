<template>
  <div>
    <comp-def
      title="BugRadio"
      :props="radioApi.props"
      :slots="radioApi.slots"
      :events="radioApi.events"
    >
      <sam-radio />
      <template #code>
        <sample-code src="SamRadio" />
      </template>
    </comp-def>
    <comp-def
      title="BugRadioGroup"
      :props="radioGroupApi.props"
      :slots="radioGroupApi.slots"
      :events="radioGroupApi.events"
    >
      <sam-radio-group />
      <template #code>
        <sample-code src="SamRadioGroup" />
      </template>
    </comp-def>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamRadio from './samples/SamRadio.vue';
import SamRadioGroup from './samples/SamRadioGroup.vue';

export default defineComponent({
  name: 'DefRadio',
  components: { CompDef, SamRadio, SamRadioGroup },
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

    return { radioApi, radioGroupApi };
  },
});
</script>
