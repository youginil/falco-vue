<template>
  <div class="comp-def">
    <h3 class="comp-title">{{ title }}</h3>
    <div class="examples">
      <slot />
      <div class="sample-code">
        <div>
          <span
            class="code-switch"
            :class="{ open: codeOpen }"
            @click="codeOpen = !codeOpen"
            title="Show sample code"
          ></span>
        </div>
        <div class="code-content" v-show="codeOpen">
          <slot name="code" />
        </div>
      </div>
    </div>
    <div class="props" v-if="props.length > 0">
      <h4 class="subtitle">Props</h4>
      <bug-table :list="props">
        <bug-table-column prop="name"></bug-table-column>
        <bug-table-column prop="type"></bug-table-column>
        <bug-table-column label="Required">
          <template #default="item">
            {{ item.required ? 'Y' : 'N' }}
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
import { defineComponent, PropType, ref } from 'vue';
import BugTable from '../src/components/BugTable.vue';
import BugTableColumn from '../src/components/BugTableColumn.vue';

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

export type CompAPI = {
  props: PropList;
  slots: SlotList;
  events: EventList;
};

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
  setup() {
    const codeOpen = ref(false);
    return {
      codeOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.comp-title {
  font-weight: 400;
  text-align: center;
  margin-top: 30px;
}

.subtitle {
  font-weight: 400;
  margin: 40px 0 20px 0;
}

.examples {
  margin-top: 30px;
}

.sample-code {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eeeeee;

  .code-switch {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url(./images/code.png);
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
    border-radius: 4px;
    cursor: pointer;
    transition: all .3s linear;

    &.open {
      background-color: #cccccc;
    }

    &:not(.open):hover {
      background-color: #dddddd;
    }
  }

  .code-content {
    padding-top: 10px;
  }
}

.props,
.slots,
.events {
  margin-top: 20px;
}
</style>
