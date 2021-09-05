<template>
  <div class="tc">
    <h4 class="title">BugButton</h4>
    <div>
      <bug-button class="mr10">Default</bug-button>
      <bug-button class="mr10" type="primary">Primary</bug-button>
      <bug-button class="mr10" type="danger">Danger</bug-button>
      <bug-button class="mr10" type="plain">Plain</bug-button>
      <bug-button class="mr10" :disabled="true">Disabled</bug-button>
      <bug-button :loading="true">Loading</bug-button>
    </div>
    <h4 class="title">BugCheckbox</h4>
    <div>
      <bug-checkbox class="mr10" label="Agree or disagree"></bug-checkbox>
      <bug-checkbox
        class="mr10"
        label="Disabled"
        :disabled="true"
      ></bug-checkbox>
      <bug-checkbox label="Partial selection" :partial="true"></bug-checkbox>
    </div>
    <h4 class="title">BugCheckboxGroup</h4>
    <div>
      <bug-checkbox-group
        :options="checkboxGroupOptions"
        v-model="checkboxGroupValue"
      ></bug-checkbox-group>
    </div>
    <h4 class="title">BugDate</h4>
    <div>
      <bug-date v-model="dateValue"></bug-date>
    </div>
    <h4 class="title">BugDropdown</h4>
    <div>
      <bug-dropdown position="top-left">
        <template #default>
          <bug-button class="mr10">Top-Left</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
      <bug-dropdown position="top-middle">
        <template #default>
          <bug-button class="mr10">Top-Middle</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
      <bug-dropdown position="top-right">
        <template #default>
          <bug-button>Top-Right</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BugConfirm, BugMessage } from './src';

export default defineComponent({
  name: 'App',
  setup() {
    const checkboxGroupOptions = ref([
      { label: 'Apple', value: 0 },
      { label: 'Banana', value: 1 },
      { label: 'Pear', value: 2 },
      { label: 'Orange', value: 3 },
    ]);
    const checkboxGroupValue = ref([0]);
    const dateValue = ref('2020-01-01');
    return {
      checkboxGroupOptions,
      checkboxGroupValue,
      dateValue,
    };
  },
});
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
}

h4.title {
  margin: 20px 0;
}
</style>
