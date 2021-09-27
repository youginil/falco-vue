<template>
  <div class="app">
    <ul class="app-nav" :class="{ expand: navExpand }">
      <li
        class="menu"
        :class="{ expand: navExpand }"
        @click="onClickMenu"
      ></li>
      <li
        class="nav-item"
        v-for="item in navs"
        :key="item"
        :class="{ selected: comp === item }"
        @click="comp = item"
      >
        {{ item }}
      </li>
    </ul>
    <div class="app-content">
      <div class="app-content-inner">
        <div class="home" v-if="comp === 'Home'">
          <div class="tc">
            <img src="./images/logo.png" alt="" style="width: 100px">
          </div>
          <h3 class="mt20">Bug UI</h3>
          <p class="mt20">A simple efficient web UI library base on Vue3</p>
          <!-- <div class="mt20">
            <h5>Themes</h5>
            <bug-radio-group
              :options="themes"
              v-model="theme"
              @change="onThemeChange"
            ></bug-radio-group>
          </div> -->
        </div>
        <comp-def
          title="BugBacktop"
          :props="backtopApi.props"
          :slots="backtopApi.slots"
          :events="backtopApi.events"
          v-if="comp === 'BugBacktop'"
        >
          <bug-backtop></bug-backtop>
        </comp-def>
        <comp-def
          title="BugButton"
          :props="buttonApi.props"
          :slots="buttonApi.slots"
          :events="buttonApi.events"
          v-if="comp === 'BugButton'"
        >
          <bug-button class="m10">Default</bug-button>
          <bug-button class="m10" type="primary">Primary</bug-button>
          <bug-button class="m10" type="danger">Danger</bug-button>
          <bug-button class="m10" type="plain">Plain</bug-button>
          <bug-button class="m10" :disabled="true">Disabled</bug-button>
          <bug-button :loading="true" class="m10">Loading</bug-button>
        </comp-def>
        <comp-def
          title="BugCheckbox"
          :props="checkboxApi.props"
          :slots="checkboxApi.slots"
          :events="checkboxApi.events"
          v-if="comp === 'BugCheckbox'"
        >
          <bug-checkbox class="mr10" label="Agree or disagree"></bug-checkbox>
          <bug-checkbox
            class="mr10"
            label="Disabled"
            :disabled="true"
          ></bug-checkbox>
          <bug-checkbox
            label="Partial selection"
            :partial="true"
          ></bug-checkbox>
        </comp-def>
        <comp-def
          title="BugCheckboxGroup"
          :props="checkboxGroupApi.props"
          :slots="checkboxGroupApi.slots"
          :events="checkboxGroupApi.events"
          v-if="comp === 'BugCheckbox'"
        >
          <bug-checkbox-group
            :options="checkboxGroupOptions"
            v-model="checkboxGroupValue"
          ></bug-checkbox-group>
        </comp-def>
        <comp-def
          title="BugDate"
          :props="dateApi.props"
          :slots="dateApi.slots"
          :events="dateApi.events"
          v-if="comp === 'BugDate'"
        >
          <bug-date v-model="dateValue"></bug-date>
        </comp-def>
        <comp-def
          title="BugDropdown"
          :props="dropdownApi.props"
          :slots="dropdownApi.slots"
          :events="dropdownApi.events"
          v-if="comp === 'BugDropdown'"
        >
          <bug-dropdown>
            <template #default>This is dropdown</template>
            <template #dropdown>
              <bug-dropdown-item>Apple</bug-dropdown-item>
              <bug-dropdown-item>Banana</bug-dropdown-item>
              <bug-dropdown-item>Orange</bug-dropdown-item>
            </template>
          </bug-dropdown>
        </comp-def>
        <comp-def
          title="BugFromItem"
          :props="formItemApi.props"
          :slots="formItemApi.slots"
          :events="formItemApi.events"
          v-if="comp === 'BugFormItem'"
        >
          <bug-form-item label="Username">
            <bug-input width="100%"></bug-input>
          </bug-form-item>
          <bug-form-item label="Password" layout="h">
            <bug-input type="password" width="100%"></bug-input>
          </bug-form-item>
        </comp-def>
        <comp-def
          title="BugInput"
          :props="inputApi.props"
          :slots="inputApi.slots"
          :events="inputApi.events"
          v-if="comp === 'BugInput'"
        >
          <bug-input
            class="mr10"
            :clearable="true"
            v-model="inputText"
          ></bug-input>
          <bug-input
            placeholder="number"
            type="number"
            v-model="inputNumber"
          ></bug-input>
        </comp-def>
        <comp-def
          title="BugLoading"
          :props="loadingApi.props"
          :slots="loadingApi.slots"
          :events="loadingApi.events"
          v-if="comp === 'BugLoading'"
        >
          <bug-loading tip="Loading..."></bug-loading>
        </comp-def>
        <comp-def
          title="BugModal"
          :props="modalApi.props"
          :slots="modalApi.slots"
          :events="modalApi.events"
          v-if="comp === 'BugModal'"
        >
          <bug-button @click="modalIsShow = true">Show Modal</bug-button>
          <bug-modal title="This is modal title" v-model:show="modalIsShow"
            >This is modal content</bug-modal
          >
        </comp-def>
        <comp-def
          title="BugPagination"
          :props="pgApi.props"
          :slots="pgApi.slots"
          :events="pgApi.events"
          v-if="comp === 'BugPagination'"
        >
          <bug-pagination :page="2" :pages="10" :total="100"></bug-pagination>
        </comp-def>
        <comp-def
          title="BugPopover"
          :props="popApi.props"
          :slots="popApi.slots"
          :events="popApi.events"
          v-if="comp === 'BugPopover'"
        >
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
        </comp-def>
        <comp-def
          title="BugRadio"
          :props="radioApi.props"
          :slots="radioApi.slots"
          :events="radioApi.events"
          v-if="comp === 'BugRadio'"
        >
          <bug-radio class="mr10" label="Hello radio"></bug-radio>
          <bug-radio label="Disabled" :disabled="true"></bug-radio>
        </comp-def>
        <comp-def
          title="BugRadioGroup"
          :props="radioGroupApi.props"
          :slots="radioGroupApi.slots"
          :events="radioGroupApi.events"
          v-if="comp === 'BugRadio'"
        >
          <bug-radio-group
            :options="radioGroupOptions"
            v-model="radioGroupValue"
          ></bug-radio-group>
        </comp-def>
        <comp-def
          title="BugSelect"
          :props="selectApi.props"
          :slots="selectApi.slots"
          :events="selectApi.events"
          v-if="comp === 'BugSelect'"
        >
          <bug-select
            :options="selectOptions"
            v-model="selectValue"
          ></bug-select>
        </comp-def>
        <comp-def
          title="BugSkeleton"
          :props="skeletonApi.props"
          :slots="skeletonApi.slots"
          :events="skeletonApi.events"
          v-if="comp === 'BugSkeleton'"
        >
          <bug-skeleton></bug-skeleton>
          <bug-skeleton class="mt20" layout="table"></bug-skeleton>
        </comp-def>
        <comp-def
          title="BugTable"
          :props="tableApi.props"
          :slots="tableApi.slots"
          :events="tableApi.events"
          v-if="comp === 'BugTable'"
        >
          <bug-table :list="tableList" :sort="tableSort">
            <bug-table-column prop="id"></bug-table-column>
            <bug-table-column prop="name"></bug-table-column>
            <bug-table-column prop="age"></bug-table-column>
          </bug-table>
        </comp-def>
        <comp-def
          title="BugTableColumn"
          :props="tableColumnApi.props"
          :slots="tableColumnApi.slots"
          :events="tableColumnApi.events"
          v-if="comp === 'BugTable'"
        ></comp-def>
        <comp-def
          title="BugTabs"
          :props="tabsApi.props"
          :slots="tabsApi.slots"
          :events="tabsApi.events"
          v-if="comp === 'BugTabs'"
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
          v-if="comp === 'BugTabs'"
        ></comp-def>
        <comp-def
          title="BugTextarea"
          :props="textareaApi.props"
          :slots="textareaApi.slots"
          :events="textareaApi.events"
          v-if="comp === 'BugTextarea'"
        >
          <bug-textarea></bug-textarea>
        </comp-def>
        <comp-def
          title="BugMessage"
          :props="msgApi.props"
          :slots="msgApi.slots"
          :events="msgApi.events"
          v-if="comp === 'BugMessage'"
        >
          <bug-button class="m10" @click="info">Info</bug-button>
          <bug-button class="m10" @click="warn">Warning</bug-button>
          <bug-button class="m10" @click="error">Error</bug-button>
          <bug-button @click="success" class="m10">Success</bug-button>
        </comp-def>
        <comp-def
          title="BugConfirm"
          :props="confirmApi.props"
          :slots="confirmApi.slots"
          :events="confirmApi.events"
          v-if="comp === 'BugConfirm'"
        >
          <bug-button @click="confirm">Confirm</bug-button>
        </comp-def>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { BugConfirm, BugMessage } from './src';
import CompDef, { EventList, PropList, SlotList } from './CompDef.vue';

type CompAPI = {
  props: PropList;
  slots: SlotList;
  events: EventList;
};

export default defineComponent({
  name: 'App',
  components: { CompDef },
  setup() {
    const navs = ref([
      'Home',
      'BugBacktop',
      'BugButton',
      'BugCheckbox',
      'BugDate',
      'BugDropdown',
      'BugFormItem',
      'BugInput',
      'BugLoading',
      'BugModal',
      'BugPagination',
      'BugPopover',
      'BugRadio',
      'BugSelect',
      'BugSkeleton',
      'BugTable',
      'BugTabs',
      'BugTextarea',
      'BugMessage',
      'BugConfirm',
    ]);

    const comp = ref('Home');

    const navExpand = ref(false);

    function onClickMenu(e: Event) {
      e.stopPropagation();
      navExpand.value = !navExpand.value;
    }

    onMounted(() => {
      document.addEventListener('click', () => {
        if (navExpand.value) {
          navExpand.value = false;
        }
      });
    });

    const themes = ref([
      {
        label: 'Default',
        value: 'default',
      },
      {
        label: 'Neumorphism',
        value: 'neumorphism',
      },
    ]);
    const theme = ref('default');

    function onThemeChange() {
      // @ts-ignore
      window.setTheme && window.setTheme(theme.value);
    }

    const backtopApi = ref<CompAPI>({
      props: [
        {
          name: 'target',
          type: 'string',
          required: false,
          default: '',
          desc: 'Target to backtop. The prop is a query selector',
        },
        {
          name: 'right',
          type: 'number',
          required: false,
          default: '100',
          desc: 'Right distance to right edge',
        },
        {
          name: 'bottom',
          type: 'number',
          required: false,
          default: '100',
          desc: 'Right distance to bottom edge',
        },
      ],
      slots: [],
      events: [],
    });

    const buttonApi = ref<CompAPI>({
      props: [
        {
          name: 'type',
          type: 'enum',
          required: false,
          default: '"default"',
          desc: 'Button type. "default", "primary", "danger", "plain"',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
        {
          name: 'loading',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Loading',
        },
        {
          name: 'width',
          type: ['string', 'number'],
          required: false,
          default: '',
          desc: 'Button width. "100px", "100%"',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Button content',
        },
      ],
      events: [
        {
          name: 'click',
          params: '',
          desc: 'Click event',
        },
      ],
    });

    const checkboxApi = ref<CompAPI>({
      props: [
        {
          name: 'label',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Label',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
        {
          name: 'partial',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Partial selection',
        },
        {
          name: 'block',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Block style',
        },
      ],
      slots: [],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'Change event',
        },
      ],
    });

    const checkboxGroupApi = ref<CompAPI>({
      props: [
        {
          name: 'options',
          type: 'Option[]',
          required: true,
          default: '',
          desc: [
            'Option list.',
            'type ValueType = string | number | boolean;',
            'type Option = {label: string; value: ValueType}',
          ].join('\n'),
        },
      ],
      slots: [],
      events: [],
    });

    const dateApi = ref<CompAPI>({
      props: [
        {
          name: 'clearable',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Clearable',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
      ],
      slots: [],
      events: [],
    });

    const dropdownApi = ref<CompAPI>({
      props: [
        {
          name: 'position',
          type: 'string',
          required: false,
          default: 'bottom-middle',
          desc: [
            'Dropdown position.',
            '(top|bottom|left|right)-(start|middle|end)',
          ].join('\n'),
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Dropdown position',
        },
        {
          name: 'dropdown',
          desc: 'Dropdown content',
        },
      ],
      events: [],
    });

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

    const inputApi = ref<CompAPI>({
      props: [
        {
          name: 'type',
          type: 'enum',
          required: false,
          default: 'text',
          desc: 'Type. "text", "number", "password"',
        },
        {
          name: 'placeholder',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Placeholder',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'fasle',
          desc: 'Disabled',
        },
        {
          name: 'width',
          type: ['string', 'number'],
          required: false,
          default: '',
          desc: 'Width',
        },
        {
          name: 'trim',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Trim',
        },
        {
          name: 'clearable',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Clearable',
        },
      ],
      slots: [],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'Change event',
        },
        {
          name: 'focus',
          params: '',
          desc: 'Focus event',
        },
        {
          name: 'blur',
          params: '',
          desc: 'Blur event',
        },
        {
          name: 'enter',
          params: '',
          desc: 'On Enter is pressed',
        },
      ],
    });

    const loadingApi = ref<CompAPI>({
      props: [
        {
          name: 'tip',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Loading tip',
        },
      ],
      slots: [],
      events: [],
    });

    const modalApi = ref<CompAPI>({
      props: [
        {
          name: 'show',
          type: 'boolean',
          required: true,
          default: 'false',
          desc: 'The variable for controling the modal. v-model:show=""',
        },
        {
          name: 'title',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Modal title',
        },
        {
          name: 'headless',
          type: 'boolean',
          required: false,
          default: 'true',
          desc: 'Remove title section',
        },
        {
          name: 'closeable',
          type: 'boolean',
          required: false,
          default: 'true',
          desc: 'Remove close button',
        },
        {
          name: 'width',
          type: ['string', 'number'],
          required: false,
          default: '',
          desc: 'Modal width',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Modal content',
        },
      ],
      events: [
        {
          name: 'show',
          params: '',
          desc: 'After show',
        },
        {
          name: 'hide',
          params: '',
          desc: 'After hide',
        },
      ],
    });

    const pgApi = ref<CompAPI>({
      props: [
        {
          name: 'page',
          type: 'number',
          required: true,
          default: '',
          desc: 'Current page number',
        },
        {
          name: 'pages',
          type: 'number',
          required: true,
          default: '',
          desc: 'Total pages',
        },
        {
          name: 'total',
          type: 'number',
          required: true,
          default: '',
          desc: 'Total number',
        },
      ],
      slots: [],
      events: [
        {
          name: 'change',
          params: '',
          desc: 'On page changed',
        },
      ],
    });
    const popApi = ref<CompAPI>({
      props: [
        {
          name: 'trigger',
          type: 'enum',
          required: false,
          default: 'hover',
          desc: 'Trigger way. "hover", "click"',
        },
        {
          name: 'position',
          type: 'string',
          required: false,
          default: 'bottom-middle',
          desc: 'Popover position. (top|bottom|left|right)-(start|middle|end)',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Popover position',
        },
        {
          name: 'pop',
          desc: 'Popover content',
        },
      ],
      events: [],
    });

    const radioApi = ref<CompAPI>({
      props: [
        {
          name: 'label',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Label',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
      ],
      slots: [],
      events: [],
    });

    const radioGroupApi = ref<CompAPI>({
      props: [
        {
          name: 'options',
          type: 'Option[]',
          required: true,
          default: '',
          desc: [
            'Options.',
            'type Value = string | number | boolean;',
            'type Option = {label: string; value: Value};',
          ].join('\n'),
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          default: 'false',
          desc: 'Disabled',
        },
        {
          name: 'layout',
          type: 'enum',
          required: false,
          default: 'h',
          desc: 'Layout. h - horizontal; v - vertical',
        },
      ],
      slots: [],
      events: [],
    });

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

    const skeletonApi = ref<CompAPI>({
      props: [
        {
          name: 'layout',
          type: 'enum',
          required: false,
          default: '"paragraph"',
          desc: 'Layout. "paragraph", "table"',
        },
      ],
      slots: [],
      events: [],
    });

    const tableApi = ref<CompAPI>({
      props: [
        {
          name: 'list',
          type: 'TableList',
          required: true,
          default: '',
          desc: [
            'Table data',
            'type TableList = Record<string, unknown>[]',
          ].join('\n'),
        },
        {
          name: 'sort',
          type: 'Order[]',
          required: false,
          default: '',
          desc: [
            'Order parameter',
            'type Order = { prop: string; order: "asc" | "desc" | "" }',
          ].join('\n'),
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'Column definitions',
        },
      ],
      events: [
        {
          name: 'resort',
          params: '',
          desc: 'On resort',
        },
      ],
    });

    const tableColumnApi = ref<CompAPI>({
      props: [
        {
          name: 'label',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Column label',
        },
        {
          name: 'prop',
          type: 'string',
          required: false,
          default: '""',
          desc: [
            'Column property name.',
            'Use "prop" as column name if not set "label"',
          ].join('\n'),
        },
        {
          name: 'width',
          type: ['string', 'number'],
          required: false,
          default: '',
          desc: 'Column width',
        },
      ],
      slots: [
        {
          name: 'default',
          desc: 'For custom column content',
        },
      ],
      events: [],
    });

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

    const textareaApi = ref<CompAPI>({
      props: [
        {
          name: 'disabled',
          type: 'boolean',
          required: true,
          default: 'false',
          desc: 'Disabled',
        },
        {
          name: 'placeholder',
          type: 'string',
          required: false,
          default: '""',
          desc: 'Placeholder',
        },
      ],
      slots: [],
      events: [],
    });

    const msgApi = ref<CompAPI>({
      props: [],
      slots: [],
      events: [],
    });

    const confirmApi = ref<CompAPI>({
      props: [],
      slots: [],
      events: [],
    });

    const checkboxGroupOptions = ref([
      { label: 'Apple', value: 0 },
      { label: 'Banana', value: 1 },
      { label: 'Pear', value: 2 },
      { label: 'Orange', value: 3 },
    ]);
    const checkboxGroupValue = ref([0]);
    const dateValue = ref('2020-01-01');
    const inputText = ref('');
    const inputNumber = ref(0);
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
    const modalIsShow = ref(false);
    return {
      navs,
      comp,
      navExpand,
      onClickMenu,
      themes,
      theme,
      onThemeChange,
      backtopApi,
      buttonApi,
      checkboxApi,
      checkboxGroupApi,
      dateApi,
      dropdownApi,
      formItemApi,
      inputApi,
      loadingApi,
      modalApi,
      pgApi,
      popApi,
      radioApi,
      radioGroupApi,
      selectApi,
      skeletonApi,
      tableApi,
      tableColumnApi,
      tabsApi,
      tabPaneApi,
      textareaApi,
      msgApi,
      confirmApi,

      checkboxGroupOptions,
      checkboxGroupValue,
      dateValue,
      inputText,
      inputNumber,
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
      confirm,
      modalIsShow,
    };
  },
});
</script>

<style lang="scss">
@mixin pc {
  @media screen and (min-width: 800px) {
    @content;
  }
}

@mixin phone {
  @media screen and (max-width: 800px) {
    @content;
  }
}

.app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @include pc {
    display: flex;
  }

  & > .app-nav {
    background-color: #ffffff;
    border-right: 1px solid #eeeeee;
    width: 300px;
    overflow-y: auto;

    @include pc {
      flex-shrink: 0;
      height: 100%;
      .menu {
        display: none;
      }
    }

    @include phone {
      position: fixed;
      top: 0;
      left: -300px;
      bottom: 0;
      z-index: 1;
      transition: all 0.3s linear;

      &.expand {
        left: 0;
        box-shadow: 0 2px 10px 4px #eeeeee;
      }
      .menu {
        display: block;
      }
    }

    .menu {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-image: url(./images/list.png);
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
      transition: all 0.3s linear;
      position: fixed;
      top: 20px;
      left: 20px;

      &.expand {
        left: 320px;
      }
    }

    & > .nav-item {
      display: block;
      font-size: 16px;
      font-weight: 300;
      padding: 16px 20px;
      cursor: pointer;
      transition: all 0.3s linear;

      &:not(:last-child) {
        border-bottom: 1px solid #eeeeee;
      }

      &:not(.selected):hover {
        background: #eeeeee;
      }

      &.selected {
        background: #eeeeee;
      }
    }
  }

  & > .app-content {
    padding: 50px 0;
    overflow-y: auto;

    @include pc {
      flex-grow: 1;
    }

    .app-content-inner {
      width: 80%;
      max-width: 800px;
      margin: 0 auto;

      .home {
        text-align: center;
      }
    }
  }
}
</style>
