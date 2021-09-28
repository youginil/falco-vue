<template>
  <comp-def
    title="BugTextarea"
    :props="textareaApi.props"
    :slots="textareaApi.slots"
    :events="textareaApi.events"
  >
    <bug-textarea></bug-textarea>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugTextareaDef',
  components: { CompDef },
  setup() {
    const textareaApi = ref<CompAPI>({
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          required: true,
          default: 'false',
          desc: 'Disabled',
        },
        {
          name: 'placeholder',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Placeholder',
        },
      ],
      slots: [],
      events: [],
    });
    return { textareaApi };
  },
});
</script>
