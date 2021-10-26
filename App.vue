<template>
  <div class="app">
    <ul class="app-nav" :class="{ expand: navExpand }">
      <li class="menu" :class="{ expand: navExpand }" @click="onClickExpand"></li>
      <li
        class="nav-item"
        v-for="item in navs"
        :key="item"
        :class="{ selected: comp === item }"
        @click="onClickMenu(item)"
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
        <def-backtop v-if="comp === 'BugBacktop'" />
        <def-button v-if="comp === 'BugButton'" />
        <def-checkbox v-if="comp === 'BugCheckbox'" />
        <def-confirm v-if="comp === 'BugConfirm'" />
        <def-date v-if="comp === 'BugDate'" />
        <def-dropdown v-if="comp === 'BugDropdown'" />
        <def-form-item v-if="comp === 'BugFormItem'" />
        <def-input v-if="comp === 'BugInput'" />
        <def-loading v-if="comp === 'BugLoading'" />
        <def-menu v-if="comp === 'BugMenu'" />
        <def-message v-if="comp === 'BugMessage'" />
        <def-modal v-if="comp === 'BugModal'" />
        <def-pagination v-if="comp === 'BugPagination'" />
        <def-popover v-if="comp === 'BugPopover'" />
        <def-radio v-if="comp === 'BugRadio'" />
        <def-select v-if="comp === 'BugSelect'" />
        <def-skeleton v-if="comp === 'BugSkeleton'" />
        <def-table v-if="comp === 'BugTable'" />
        <def-tabs v-if="comp === 'BugTabs'" />
        <def-textarea v-if="comp === 'BugTextarea'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
import DefBacktop from './docs_src/DefBacktop.vue';
import DefButton from './docs_src/DefButton.vue';
import DefCheckbox from './docs_src/DefCheckbox.vue';
import DefConfirm from './docs_src/DefConfirm.vue';
import DefDate from './docs_src/DefDate.vue';
import DefDropdown from './docs_src/DefDropdown.vue';
import DefFormItem from './docs_src/DefFormItem.vue';
import DefInput from './docs_src/DefInput.vue';
import DefLoading from './docs_src/DefLoading.vue';
import DefMenu from './docs_src/DefMenu.vue';
import DefMessage from './docs_src/DefMessage.vue';
import DefModal from './docs_src/DefModal.vue';
import DefPagination from './docs_src/DefPagination.vue';
import DefPopover from './docs_src/DefPopover.vue';
import DefRadio from './docs_src/DefRadio.vue';
import DefSelect from './docs_src/DefSelect.vue';
import DefSkeleton from './docs_src/DefSkeleton.vue';
import DefTable from './docs_src/DefTable.vue';
import DefTabs from './docs_src/DefTabs.vue';
import DefTextarea from './docs_src/DefTextarea.vue';
import NeumorphismGenerator from './docs_src/NeumorphismGenerator.vue';

export default defineComponent({
  name: 'App',
  components: {
    DefBacktop,
    DefButton,
    DefCheckbox,
    DefConfirm,
    DefDate,
    DefDropdown,
    DefFormItem,
    DefInput,
    DefLoading,
    DefMenu,
    DefMessage,
    DefModal,
    DefPagination,
    DefPopover,
    DefRadio,
    DefSelect,
    DefSkeleton,
    DefTable,
    DefTabs,
    DefTextarea,
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
      'BugMenu',
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

    function onClickExpand(e: Event) {
      e.stopPropagation();
      navExpand.value = !navExpand.value;
    }

    function onClickMenu(menu: string) {
      comp.value = menu;
      location.hash = menu;
    }

    onMounted(() => {
      document.addEventListener('click', () => {
        if (navExpand.value) {
          navExpand.value = false;
        }
      });
    });

    onBeforeMount(() => {
      const hash = location.hash ? location.hash.substring(1) : '';
      if (navs.value.includes(hash)) {
        comp.value = hash;
      }
    });

    return {
      navs,
      comp,
      navExpand,
      onClickMenu,
      onClickExpand,
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
