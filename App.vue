<template>
  <div class="app">
    <bug-backtop target=".app-content"></bug-backtop>
    <div class="app-nav" :class="{ expand: navExpand }">
      <span
        class="menu"
        :class="{ expand: navExpand }"
        @click="onClickExpand"
      ></span>
      <bug-menu @change="changeMenu" :index="comp" @click.stop="">
        <bug-menu-item index="Home">Home</bug-menu-item>
        <bug-menu-group title="Components">
          <bug-menu-item index="Backtop">Backtop</bug-menu-item>
          <bug-menu-item index="Button">Button</bug-menu-item>
          <bug-menu-item index="Checkbox">Checkbox</bug-menu-item>
          <bug-menu-item index="Confirm">Confirm</bug-menu-item>
          <bug-menu-item index="Date">Date</bug-menu-item>
          <bug-menu-item index="Dropdown">Dropdown</bug-menu-item>
          <bug-menu-item index="FormItem">FormItem</bug-menu-item>
          <bug-menu-item index="Input">Input</bug-menu-item>
          <bug-menu-item index="Loading">Loading</bug-menu-item>
          <bug-menu-item index="Menu">Menu</bug-menu-item>
          <bug-menu-item index="Message">Message</bug-menu-item>
          <bug-menu-item index="Modal">Modal</bug-menu-item>
          <bug-menu-item index="Pagination">Pagination</bug-menu-item>
          <bug-menu-item index="Popover">Popover</bug-menu-item>
          <bug-menu-item index="Radio">Radio</bug-menu-item>
          <bug-menu-item index="Select">Select</bug-menu-item>
          <bug-menu-item index="Skeleton">Skeleton</bug-menu-item>
          <bug-menu-item index="Table">Table</bug-menu-item>
          <bug-menu-item index="Tabs">Tabs</bug-menu-item>
          <bug-menu-item index="Textarea">Textarea</bug-menu-item>
        </bug-menu-group>
        <bug-menu-item index="Changelog">Changelog</bug-menu-item>
      </bug-menu>
    </div>
    <div class="app-content">
      <div class="app-content-inner">
        <div class="home" v-if="comp === 'Home'">
          <div class="tc">
            <img src="./docs_src/images/logo.png" alt="" style="width: 150px" />
          </div>
          <h3 class="mt20">Bug UI</h3>
          <p class="mt20">A simple efficient web UI library base on Vue3</p>
        </div>
        <def-backtop v-if="comp === 'Backtop'" />
        <def-button v-if="comp === 'Button'" />
        <def-checkbox v-if="comp === 'Checkbox'" />
        <def-confirm v-if="comp === 'Confirm'" />
        <def-date v-if="comp === 'Date'" />
        <def-dropdown v-if="comp === 'Dropdown'" />
        <def-form-item v-if="comp === 'FormItem'" />
        <def-input v-if="comp === 'Input'" />
        <def-loading v-if="comp === 'Loading'" />
        <def-menu v-if="comp === 'Menu'" />
        <def-message v-if="comp === 'Message'" />
        <def-modal v-if="comp === 'Modal'" />
        <def-pagination v-if="comp === 'Pagination'" />
        <def-popover v-if="comp === 'Popover'" />
        <def-radio v-if="comp === 'Radio'" />
        <def-select v-if="comp === 'Select'" />
        <def-skeleton v-if="comp === 'Skeleton'" />
        <def-table v-if="comp === 'Table'" />
        <def-tabs v-if="comp === 'Tabs'" />
        <def-textarea v-if="comp === 'Textarea'" />
        <div v-if="comp === 'Changelog'">
          <change-log />
        </div>
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
  },
  setup() {
    const comp = ref('Home');

    const navExpand = ref(false);

    function onClickExpand(e: Event) {
      e.stopPropagation();
      navExpand.value = !navExpand.value;
    }

    function changeMenu(menu: string) {
      comp.value = menu;
      location.hash = menu;
      navExpand.value = false;
    }

    onMounted(() => {
      document.addEventListener('click', () => {
        if (navExpand.value) {
          navExpand.value = false;
        }
      });
    });

    onBeforeMount(() => {
      const hash = location.hash ? location.hash.substring(1) : 'Home';
      comp.value = hash;
    });

    return {
      comp,
      navExpand,
      changeMenu,
      onClickExpand,
    };
  },
});
</script>

<style lang="scss">
@use 'sass:math';

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
      transition: all 0.3s ease-in-out;
      background-color: #ffffff;

      &.expand {
        left: 0;
        box-shadow: 0 2px 10px 4px #eeeeee;
      }
      .menu {
        display: block;
      }
    }

    $menu-size: 30px;
    .menu {
      display: inline-block;
      width: $menu-size;
      height: $menu-size;
      cursor: pointer;
      transition: all 0.3s linear;
      position: fixed;
      top: 10px;
      left: 20px;

      &::before,
      &::after {
        display: inline-block;
        content: '';
        width: $menu-size - 10px;
        height: 1px;
        background-color: #000;
        position: absolute;
        left: 5px;
      }
      &::before {
        top: math.div($menu-size, 3);
      }
      &::after {
        top: math.div($menu-size, 3) * 2;
      }

      &.expand {
        left: 320px;

        &::before {
          top: math.div($menu-size, 2);
          transform: rotate(45deg);
        }
        &::after {
          top: math.div($menu-size, 2);
          transform: rotate(-45deg);
        }
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
