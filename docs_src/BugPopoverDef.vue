<template>
  <comp-def
    title="BugPopover"
    :props="popApi.props"
    :slots="popApi.slots"
    :events="popApi.events"
  >
    <bug-popover>
      <template #default>
        <bug-button class="mr10">Hover</bug-button>
      </template>
      <template #pop> Content </template>
    </bug-popover>
    <bug-popover trigger="click">
      <template #default>
        <bug-button>Click</bug-button>
      </template>
      <template #pop> Content </template>
    </bug-popover>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugPopoverDef',
  components: { CompDef },
  setup() {
    const popApi = ref<CompAPI>({
      props: [
        {
          name: 'trigger',
          type: 'enum',
          required: false,
          default: 'hover',
          desc: 'Trigger way. "hover", "click"',
        },
        {
          name: 'position',
          type: 'string',
          required: false,
          default: 'bottom-middle',
          desc: 'Popover position. (top|bottom|left|right)-(start|middle|end)',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Popover position',
        },
        {
          name: 'pop',
          desc: 'Popover content',
        },
      ],
      events: [],
    });
    return { popApi };
  },
});
</script>
