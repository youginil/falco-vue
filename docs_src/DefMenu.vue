<template>
  <comp-def
    title="BugMenu"
    :props="api.props"
    :slots="api.slots"
    :events="api.events"
  >
    <sam-menu />
    <template #code>
      <sample-code src="SamMenu" />
    </template>
  </comp-def>
  <comp-def
    title="BugMenuGroup"
    :props="groupApi.props"
    :slots="groupApi.slots"
    :events="groupApi.events"
  ></comp-def>
  <comp-def
    title="BugMenuItem"
    :props="itemApi.props"
    :slots="itemApi.slots"
    :events="itemApi.events"
  ></comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamMenu from './samples/SamMenu.vue';

export default defineComponent({
  name: 'DefMenu',
  components: { CompDef, SamMenu },
  setup() {
    const api = ref<CompAPI>({
      props: [
        {
          name: 'index',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Current menu index',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Menu content',
        },
      ],
      events: [
        {
          name: 'change',
          params: 'index',
          desc: 'On menu changed',
        },
      ],
    });

    const groupApi = ref<CompAPI>({
      props: [
        {
          name: 'title',
          type: 'string',
          required: true,
          default: '',
          desc: 'Group title',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Group content',
        },
      ],
      events: [],
    });

    const itemApi = ref<CompAPI>({
      props: [
        {
          name: 'index',
          type: 'string',
          required: true,
          default: '',
          desc: 'Menu index',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Menu item content',
        },
      ],
      events: [],
    });

    return {
      api,
      groupApi,
      itemApi,
    };
  },
});
</script>
