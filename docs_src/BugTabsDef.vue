<template>
  <div>
    <comp-def
      title="BugTabs"
      :props="tabsApi.props"
      :slots="tabsApi.slots"
      :events="tabsApi.events"
    >
      <bug-tabs v-model="tab">
        <bug-tab-pane key="1">Apple</bug-tab-pane>
        <bug-tab-pane key="2">Orange</bug-tab-pane>
        <bug-tab-pane key="3">Banana</bug-tab-pane>
      </bug-tabs>
    </comp-def>
    <comp-def
      title="BugTabPane"
      :props="tabPaneApi.props"
      :slots="tabPaneApi.slots"
      :events="tabPaneApi.events"
    ></comp-def>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugTabsDef',
  components: { CompDef },
  setup() {
    const tabsApi = ref<CompAPI>({
      props: [],
      slots: [
        {
          name: 'default',
          desc: 'Tab panes',
        },
      ],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'On tab changed',
        },
      ],
    });
    const tabPaneApi = ref<CompAPI>({
      props: [
        {
          name: 'key',
          type: ['string', 'number'],
          required: true,
          default: '',
          desc: 'Tab pane unique key',
        },
      ],
      slots: [],
      events: [],
    });

    const tab = ref(1);

    return { tabsApi, tabPaneApi, tab };
  },
});
</script>
