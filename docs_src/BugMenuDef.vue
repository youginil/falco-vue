<template>
  <comp-def
    title="BugMenu"
    :props="api.props"
    :slots="api.slots"
    :events="api.events"
  >
    <bug-menu @change="onChange" :index="index">
      <bug-menu-group title="Dashboard">
        <bug-menu-item index="1-1">Home</bug-menu-item>
        <bug-menu-item index="1-2">User</bug-menu-item>
      </bug-menu-group>
      <bug-menu-group title="User">
        <bug-menu-item index="2-1">List</bug-menu-item>
        <bug-menu-item index="2-2">Add</bug-menu-item>
        <bug-menu-group title="Order">
          <bug-menu-item index="3-1">List</bug-menu-item>
          <bug-menu-item index="3-2">Add</bug-menu-item>
        </bug-menu-group>
        <bug-menu-item index="2-3">Delete</bug-menu-item>
      </bug-menu-group>
    </bug-menu>
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
import BugMenu from '../src/components/BugMenu.vue';
import BugMenuGroup from '../src/components/BugMenuGroup.vue';
import BugMenuItem from '../src/components/BugMenuItem.vue';

export default defineComponent({
  name: 'BugMenuDef',
  components: { CompDef, BugMenu, BugMenuGroup, BugMenuItem },
  setup() {
    const index = ref('');

    function onChange(v: string) {
      console.log(v);
    }

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
      index,
      onChange,
      api,
      groupApi,
      itemApi,
    };
  },
});
</script>
