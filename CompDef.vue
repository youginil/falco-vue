<template>
  <div class="comp-def">
    <h3 class="comp-title">{{ title }}</h3>
    <div class="examples">
      <slot />
    </div>
    <div class="props" v-if="props.length > 0">
      <h4 class="subtitle">Props</h4>
      <bug-table :list="props">
        <bug-table-column prop="name"></bug-table-column>
        <bug-table-column prop="type"></bug-table-column>
        <bug-table-column label="Required">
          <template #default="item">
            {{ item.required ? 'Y' : 'N'}}
          </template>
        </bug-table-column>
        <bug-table-column prop="default"></bug-table-column>
        <bug-table-column label="Description">
          <template #default="item">
            <p style="white-space: pre-wrap">{{ item.desc }}</p>
          </template>
        </bug-table-column>
      </bug-table>
    </div>
    <div class="slots" v-if="slots.length > 0">
      <h4 class="subtitle">Slots</h4>
      <bug-table :list="slots">
        <bug-table-column prop="name"></bug-table-column>
        <bug-table-column prop="desc" label="Description"></bug-table-column>
      </bug-table>
    </div>
    <div class="events" v-if="events.length > 0">
      <h4 class="subtitle">Events</h4>
      <bug-table :list="events">
        <bug-table-column prop="name"></bug-table-column>
        <bug-table-column prop="params"></bug-table-column>
        <bug-table-column prop="desc" label="Description"></bug-table-column>
      </bug-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BugTable from './src/components/BugTable.vue';
import BugTableColumn from './src/components/BugTableColumn.vue';

export type PropList = {
  name: string;
  type: string[] | string;
  required: boolean;
  default: string;
  desc: string;
}[];
export type SlotList = { name: string; desc: string }[];
export type EventList = {
  name: string;
  params: string[] | string;
  desc: string;
}[];

export default defineComponent({
  name: 'CompDef',
  components: { BugTable, BugTableColumn },
  props: {
    title: String,
    props: {
      type: Array as PropType<PropList>,
      default: [],
    },
    slots: {
      type: Array as PropType<SlotList>,
      default: [],
    },
    events: {
      type: Array as PropType<EventList>,
      default: [],
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.comp-title {
  font-weight: 400;
  text-align: center;
}

.subtitle {
  font-weight: 400;
  margin: 40px 0 30px 0;
}

.examples {
  margin-top: 30px;
}

.props,
.slots,
.events {
  margin-top: 20px;
}
</style>
