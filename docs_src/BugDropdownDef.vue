<template>
  <comp-def
    title="BugDropdown"
    :props="dropdownApi.props"
    :slots="dropdownApi.slots"
    :events="dropdownApi.events"
  >
    <bug-dropdown>
      <template #default>This is dropdown</template>
      <template #dropdown>
        <bug-dropdown-item>Apple</bug-dropdown-item>
        <bug-dropdown-item>Banana</bug-dropdown-item>
        <bug-dropdown-item>Orange</bug-dropdown-item>
      </template>
    </bug-dropdown>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugDropdownDef',
  components: { CompDef },
  setup() {
    const dropdownApi = ref<CompAPI>({
      props: [
        {
          name: 'position',
          type: 'string',
          required: false,
          default: 'bottom-middle',
          desc: [
            'Dropdown position.',
            '(top|bottom|left|right)-(start|middle|end)',
          ].join('\n'),
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Dropdown position',
        },
        {
          name: 'dropdown',
          desc: 'Dropdown content',
        },
      ],
      events: [],
    });
    return { dropdownApi };
  },
});
</script>
