<template>
  <div class="tc">
    <bug-backtop></bug-backtop>
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
      <bug-dropdown position="top-start">
        <template #default>
          <bug-button class="mr10">Top-Start</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
      <bug-dropdown position="top-middle">
        <template #default>
          <bug-button class="mr10">Top-Middle</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
      <bug-dropdown class="mr10" position="top-end">
        <template #default>
          <bug-button>Top-End</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
      <bug-dropdown class="mr10" position="bottom-start">
        <template #default>
          <bug-button>Bottom-Start</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
      <bug-dropdown class="mr10" position="bottom-middle">
        <template #default>
          <bug-button>Bottom-Middle</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
      <bug-dropdown position="bottom-end">
        <template #default>
          <bug-button>Bottom-End</bug-button>
        </template>
        <template #dropdown>Content</template>
      </bug-dropdown>
    </div>
    <h4 class="title">BugFormItem</h4>
    <div style="width: 300px; margin: 0 auto">
      <bug-form-item label="Username">
        <bug-input width="100%"></bug-input>
      </bug-form-item>
      <bug-form-item label="Password" layout="h">
        <bug-input type="password" width="100%"></bug-input>
      </bug-form-item>
    </div>
    <h4 class="title">BugInput</h4>
    <div>
      <bug-input class="mr10"></bug-input>
      <bug-input placeholder="number" type="number"></bug-input>
    </div>
    <h4 class="title">BugLoading</h4>
    <div>
      <bug-loading tip="Loading..."></bug-loading>
    </div>
    <h4 class="title">BugPopover</h4>
    <div>
      <bug-popover>
        <template #default>
          <bug-button class="mr10">Hover</bug-button>
        </template>
        <template #pop> Content </template>
      </bug-popover>
      <bug-popover trigger="click">
        <template #default>
          <bug-button>Click</bug-button>
        </template>
        <template #pop> Content </template>
      </bug-popover>
    </div>
    <h4 class="title">BugRadio</h4>
    <div>
      <bug-radio class="mr10" label="Hello radio"></bug-radio>
      <bug-radio label="Disabled" :disabled="true"></bug-radio>
    </div>
    <h4 class="title">BugRadioGroup</h4>
    <div>
      <bug-radio-group
        :options="radioGroupOptions"
        v-model="radioGroupValue"
      ></bug-radio-group>
    </div>
    <h4 class="title">BugSelect</h4>
    <div>
      <bug-select :options="selectOptions" v-model="selectValue"></bug-select>
    </div>
    <h4 class="title">BugSkeleton</h4>
    <div style="width: 500px; margin: 0 auto">
      <bug-skeleton></bug-skeleton>
      <bug-skeleton class="mt20" layout="table"></bug-skeleton>
    </div>
    <h4 class="title">BugTable</h4>
    <div style="width: 800px; margin: 0 auto">
      <bug-table :list="tableList" :sort="tableSort">
        <bug-table-column prop="id"></bug-table-column>
        <bug-table-column prop="name"></bug-table-column>
        <bug-table-column prop="age"></bug-table-column>
      </bug-table>
    </div>
    <h4 class="title">BugTabs</h4>
    <div>
      <bug-tabs v-model="tab">
        <bug-tab-pane key="1">Apple</bug-tab-pane>
        <bug-tab-pane key="2">Orange</bug-tab-pane>
        <bug-tab-pane key="3">Banana</bug-tab-pane>
      </bug-tabs>
    </div>
    <h4 class="title">BugTextarea</h4>
    <div style="width: 600px; margin: 0 auto;">
      <bug-textarea></bug-textarea>
    </div>
    <h4 class="title">BugMessage</h4>
    <div>
      <bug-button class="mr10" @click="info">Info</bug-button>
      <bug-button class="mr10" @click="warn">Warning</bug-button>
      <bug-button class="mr10" @click="error">Error</bug-button>
      <bug-button @click="success">Success</bug-button>
    </div>
    <h4 class="title">BugConfirm</h4>
    <div>
      <bug-button @click="confirm">Confirm</bug-button>
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
    const radioGroupOptions = ref([
      { label: 'Apple', value: 1 },
      { label: 'Orange', value: 2 },
      { label: 'Banana', value: 3 },
    ]);
    const radioGroupValue = ref(1);
    const selectOptions = ref([
      { label: 'Apple', value: 1 },
      { label: 'Orange', value: 2 },
      { label: 'Banana', value: 3 },
    ]);
    const selectValue = ref(1);
    const tableList = ref([
      { id: 1, name: 'John', age: 10 },
      { id: 2, name: 'Lily', age: 13 },
    ]);
    const tableSort = ref([{ prop: 'age', order: '' }]);
    const tab = ref(1);
    function info() {
      BugMessage.info('This is info');
    }
    function warn() {
      BugMessage.warn('This is warning');
    }
    function error() {
      BugMessage.error('This is error');
    }
    function success() {
      BugMessage.success('This is success');
    }
    function confirm() {
      BugConfirm('Do you want do this?').then(() => {
        //
      });
    }
    return {
      checkboxGroupOptions,
      checkboxGroupValue,
      dateValue,
      radioGroupOptions,
      radioGroupValue,
      selectOptions,
      selectValue,
      tableList,
      tableSort,
      tab,
      info,
      warn,
      error,
      success,
      confirm
    };
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
  margin: 50px 0;
}

h4.title {
  margin: 20px 0;
}
</style>
