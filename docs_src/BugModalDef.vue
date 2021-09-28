<template>
  <comp-def
    title="BugModal"
    :props="modalApi.props"
    :slots="modalApi.slots"
    :events="modalApi.events"
  >
    <bug-button @click="modalIsShow = true">Show Modal</bug-button>
    <bug-modal title="This is modal title" v-model:show="modalIsShow"
      >This is modal content</bug-modal
    >
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugModalDef',
  components: { CompDef },
  setup() {
    const modalApi = ref<CompAPI>({
      props: [
        {
          name: 'show',
          type: 'boolean',
          required: true,
          default: 'false',
          desc: 'The variable for controling the modal. v-model:show=""',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Modal title',
        },
        {
          name: 'headless',
          type: 'boolean',
          required: false,
          default: 'true',
          desc: 'Remove title section',
        },
        {
          name: 'closeable',
          type: 'boolean',
          required: false,
          default: 'true',
          desc: 'Remove close button',
        },
        {
          name: 'width',
          type: ['string', 'number'],
          required: false,
          default: '',
          desc: 'Modal width',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Modal content',
        },
      ],
      events: [
        {
          name: 'show',
          params: '',
          desc: 'After show',
        },
        {
          name: 'hide',
          params: '',
          desc: 'After hide',
        },
      ],
    });

    const modalIsShow = ref(false);

    return { modalApi, modalIsShow };
  },
});
</script>
