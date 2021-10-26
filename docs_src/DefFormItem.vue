<template>
  <comp-def
    title="BugFromItem"
    :props="formItemApi.props"
    :slots="formItemApi.slots"
    :events="formItemApi.events"
  >
    <sam-form-item />
    <template #code>
      <sample-code src="SamFormItem" />
    </template>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamFormItem from './samples/SamFormItem.vue';

export default defineComponent({
  name: 'DefFormItem',
  components: { CompDef, SamFormItem },
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
