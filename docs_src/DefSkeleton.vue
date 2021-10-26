<template>
  <comp-def
    title="BugSkeleton"
    :props="skeletonApi.props"
    :slots="skeletonApi.slots"
    :events="skeletonApi.events"
  >
    <sam-skeleton />
    <template #code>
      <sample-code src="SamSkeleton" />
    </template>
  </comp-def>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CompDef, { CompAPI } from './CompDef.vue';
import SamSkeleton from './samples/SamSkeleton.vue';

export default defineComponent({
  name: 'DefSkeleton',
  components: { CompDef, SamSkeleton },
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
