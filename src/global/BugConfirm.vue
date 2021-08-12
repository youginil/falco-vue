<template>
  <div class="bug-confirm">
    <bug-modal v-model:show="show" :headless="true" :width="300">
      <p class="bug-confirm-title">{{ title }}</p>
      <div class="tr">
        <bug-button class="mr10" @click="show = false">Cancel</bug-button>
        <bug-button type="primary" @click="handleConfirm">OK</bug-button>
      </div>
    </bug-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BugModal from '../components/BugModal.vue';
import BugButton from '../components/BugButton.vue';

export default defineComponent({
  name: 'BugConfirm',
  components: { BugModal, BugButton },
  data() {
    return {
      show: false,
      title: '',
      onclick: () => {},
    };
  },
  methods: {
    handleConfirm() {
      this.show = false;
      this.onclick();
    },
  },
});
</script>
