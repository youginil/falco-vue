<template>
  <div class="app">
    <ul class="app-nav" :class="{ expand: navExpand }">
      <li class="menu" :class="{ expand: navExpand }" @click="onClickMenu"></li>
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
            <img src="./docs_src/images/logo.png" alt="" style="width: 150px" />
          </div>
          <h3 class="mt20">Bug UI</h3>
          <p class="mt20">A simple efficient web UI library base on Vue3</p>
        </div>
        <neumorphism-generator v-if="comp === 'Neumorphism'" />
        <bug-backtop-def v-if="comp === 'BugBacktop'" />
        <bug-button-def v-if="comp === 'BugButton'"/>
        <bug-checkbox-def v-if="comp === 'BugCheckbox'" />
        <bug-confirm-def v-if="comp === 'BugConfirm'" />
        <bug-date-def v-if="comp === 'BugDate'" />
        <bug-dropdown-def v-if="comp === 'BugDropdown'" />
        <bug-form-item-def v-if="comp === 'BugFormItem'" />
        <bug-input-def v-if="comp === 'BugInput'" />
        <bug-loading-def v-if="comp === 'BugLoading'" />
        <bug-message-def v-if="comp === 'BugMessage'" />
        <bug-modal-def v-if="comp === 'BugModal'" />
        <bug-pagination-def v-if="comp === 'BugPagination'" />
        <bug-popover-def v-if="comp === 'BugPopover'" />
        <bug-radio-def v-if="comp === 'BugRadio'" />
        <bug-select-def v-if="comp === 'BugSelect'" />
        <bug-skeleton-def v-if="comp === 'BugSkeleton'" />
        <bug-table-def v-if="comp === 'BugTable'" />
        <bug-tabs-def v-if="comp === 'BugTabs'" />
        <bug-textarea-def v-if="comp === 'BugTextarea'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import BugBacktopDef from './docs_src/BugBacktopDef.vue';
import BugButtonDef from './docs_src/BugButtonDef.vue';
import BugCheckboxDef from './docs_src/BugCheckboxDef.vue';
import BugConfirmDef from './docs_src/BugConfirmDef.vue';
import BugDateDef from './docs_src/BugDateDef.vue';
import BugDropdownDef from './docs_src/BugDropdownDef.vue';
import BugFormItemDef from './docs_src/BugFormItemDef.vue';
import BugInputDef from './docs_src/BugInputDef.vue';
import BugLoadingDef from './docs_src/BugLoadingDef.vue';
import BugMessageDef from './docs_src/BugMessageDef.vue';
import BugModalDef from './docs_src/BugModalDef.vue';
import BugPaginationDef from './docs_src/BugPaginationDef.vue';
import BugPopoverDef from './docs_src/BugPopoverDef.vue';
import BugRadioDef from './docs_src/BugRadioDef.vue';
import BugSelectDef from './docs_src/BugSelectDef.vue';
import BugSkeletonDef from './docs_src/BugSkeletonDef.vue';
import BugTableDef from './docs_src/BugTableDef.vue';
import BugTabsDef from './docs_src/BugTabsDef.vue';
import BugTextareaDef from './docs_src/BugTextareaDef.vue';
import NeumorphismGenerator from './docs_src/NeumorphismGenerator.vue';

export default defineComponent({
  name: 'App',
  components: {
    BugBacktopDef,
    BugButtonDef,
    BugCheckboxDef,
    BugConfirmDef,
    BugDateDef,
    BugDropdownDef,
    BugFormItemDef,
    BugInputDef,
    BugLoadingDef,
    BugMessageDef,
    BugModalDef,
    BugPaginationDef,
    BugPopoverDef,
    BugRadioDef,
    BugSelectDef,
    BugSkeletonDef,
    BugTableDef,
    BugTabsDef,
    BugTextareaDef,
    NeumorphismGenerator,
  },
  setup() {
    const navs = ref([
      'Home',
      'Neumorphism',
      'BugBacktop',
      'BugButton',
      'BugCheckbox',
      'BugConfirm',
      'BugDate',
      'BugDropdown',
      'BugFormItem',
      'BugInput',
      'BugLoading',
      'BugMessage',
      'BugModal',
      'BugPagination',
      'BugPopover',
      'BugRadio',
      'BugSelect',
      'BugSkeleton',
      'BugTable',
      'BugTabs',
      'BugTextarea',
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

    return {
      navs,
      comp,
      navExpand,
      onClickMenu,
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
        display: none !important;
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
      background-image: url(./docs_src/images/list.png);
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
    height: 100%;
    overflow-y: auto;

    @include pc {
      flex-grow: 1;
    }

    .app-content-inner {
      width: 80%;
      max-width: 800px;
      padding: 40px 0;
      margin: 0 auto;

      .home {
        text-align: center;
      }
    }
  }
}
</style>
