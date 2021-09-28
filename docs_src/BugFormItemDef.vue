<template>
  <comp-def
    title="BugFromItem"
    :props="formItemApi.props"
    :slots="formItemApi.slots"
    :events="formItemApi.events"
  >
    <bug-form-item label="Username">
      <bug-input width="100%"></bug-input>
    </bug-form-item>
    <bug-form-item label="Password" layout="h">
      <bug-input type="password" width="100%"></bug-input>
    </bug-form-item>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugFormItemDef',
  components: { CompDef },
  setup() {
    const formItemApi = ref<CompAPI>({
      props: [
        {
          name: 'layout',
          type: 'enum',
          required: false,
          default: 'v',
          desc: 'Layout. v - vertical; h - horizontal',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Label',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Form item body',
        },
        {
          name: 'label',
          desc: 'Complex label rather than text label',
        },
      ],
      events: [],
    });
    return { formItemApi };
  },
});
</script>
