<template>
  <comp-def
    title="BugSkeleton"
    :props="skeletonApi.props"
    :slots="skeletonApi.slots"
    :events="skeletonApi.events"
  >
    <bug-skeleton></bug-skeleton>
    <bug-skeleton class="mt20" layout="table"></bug-skeleton>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';

export default defineComponent({
  name: 'BugSkeletonDef',
  components: { CompDef },
  setup() {
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
    return { skeletonApi };
  },
});
</script>
