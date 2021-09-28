<template>
  <comp-def
    title="BugButton"
    :props="buttonApi.props"
    :slots="buttonApi.slots"
    :events="buttonApi.events"
  >
    <bug-button class="m10">Default</bug-button>
    <bug-button class="m10" type="primary">Primary</bug-button>
    <bug-button class="m10" type="danger">Danger</bug-button>
    <bug-button class="m10" type="plain">Plain</bug-button>
    <bug-button class="m10" :disabled="true">Disabled</bug-button>
    <bug-button :loading="true" class="m10">Loading</bug-button>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugButtonDef',
  components: { CompDef },
  setup() {
    const buttonApi = ref<CompAPI>({
      props: [
        {
          name: 'type',
          type: 'enum',
          required: false,
          default: '"default"',
          desc: 'Button type. "default", "primary", "danger", "plain"',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
        {
          name: 'loading',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Loading',
        },
        {
          name: 'width',
          type: ['string', 'number'],
          required: false,
          default: '',
          desc: 'Button width. "100px", "100%"',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Button content',
        },
      ],
      events: [
        {
          name: 'click',
          params: '',
          desc: 'Click event',
        },
      ],
    });

    return {
      buttonApi,
    };
  },
});
</script>
