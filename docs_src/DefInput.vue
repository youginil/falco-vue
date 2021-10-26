<template>
  <comp-def
    title="BugInput"
    :props="inputApi.props"
    :slots="inputApi.slots"
    :events="inputApi.events"
  >
    <sam-input />
    <template #code>
      <sample-code src="SamInput" />
    </template>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamInput from './samples/SamInput.vue';

export default defineComponent({
  name: 'DefInput',
  components: { CompDef, SamInput },
  setup() {
    const inputApi = ref<CompAPI>({
      props: [
        {
          name: 'type',
          type: 'enum',
          required: false,
          default: 'text',
          desc: 'Type. "text", "number", "password"',
        },
        {
          name: 'placeholder',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Placeholder',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'fasle',
          desc: 'Disabled',
        },
        {
          name: 'width',
          type: ['string', 'number'],
          required: false,
          default: '',
          desc: 'Width',
        },
        {
          name: 'trim',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Trim',
        },
        {
          name: 'clearable',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Clearable',
        },
      ],
      slots: [],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'Change event',
        },
        {
          name: 'focus',
          params: '',
          desc: 'Focus event',
        },
        {
          name: 'blur',
          params: '',
          desc: 'Blur event',
        },
        {
          name: 'enter',
          params: '',
          desc: 'On Enter is pressed',
        },
      ],
    });

    return { inputApi };
  },
});
</script>
