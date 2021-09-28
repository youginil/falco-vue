<template>
  <comp-def
    title="BugSelect"
    :props="selectApi.props"
    :slots="selectApi.slots"
    :events="selectApi.events"
  >
    <bug-select :options="selectOptions" v-model="selectValue"></bug-select>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugSelectDef',
  components: { CompDef },
  setup() {
    const selectApi = ref<CompAPI>({
      props: [
        {
          name: 'options',
          type: 'Option[]',
          required: true,
          default: '',
          desc: [
            'Options',
            'type Value = string | number | boolean;',
            'type MultiValue = Value[];',
            'type Option = { value: Value; label: string };',
          ].join('\n'),
        },
      ],
      slots: [],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'On selection changed',
        },
      ],
    });

    const selectOptions = ref([
      { label: 'Apple', value: 1 },
      { label: 'Orange', value: 2 },
      { label: 'Banana', value: 3 },
    ]);
    const selectValue = ref(1);

    return { selectApi, selectOptions, selectValue };
  },
});
</script>
