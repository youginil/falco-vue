<template>
  <div class="bug-dropdown-item" @click="onClick">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BugDropdownItem',
  props: {
    divide: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click');
    };
    return {
      handleClick,
    };
  },
});
</script>

<style lang="scss">
@import '../styles/var';

.bug-dropdown-item {
  line-height: 1.5;
  padding: 4px 8px 4px 16px;
  color: $font-primary-color;
  cursor: pointer;
  &:hover {
    background-color: #0366d6;
    color: #fff;
  }
}
</style>
