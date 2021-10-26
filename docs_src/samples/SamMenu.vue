<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const index = ref('');

    function onChange(v: string) {
      console.log(v);
    }

    return { index, onChange };
  },
});
</script>
