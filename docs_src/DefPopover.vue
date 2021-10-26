<template>
  <comp-def
    title="BugPopover"
    :props="popApi.props"
    :slots="popApi.slots"
    :events="popApi.events"
  >
    <sam-popover />
    <template #code>
      <sample-code src="SamPopover" />
    </template>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamPopover from './samples/SamPopover.vue';

export default defineComponent({
  name: 'DefPopover',
  components: { CompDef, SamPopover },
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
