<script lang="ts">
import {
  ComponentOptions,
  defineComponent,
  h,
  isVNode,
  provide,
  reactive,
  watch,
} from 'vue';

export default defineComponent({
  name: 'BugMenu',
  props: {
    index: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const current = reactive({ value: props.index });
    provide('current', current);
    watch(current, (v) => {
      emit('change', v.value);
    });
  },
  render() {
    const slot = this.$slots.default;
    const children = slot
      ? slot().filter((item) => {
          return (
            isVNode(item) &&
            ['BugMenuItem', 'BugMenuGroup'].includes(
              (item.type as ComponentOptions).name || ''
            )
          );
        })
      : [];
    return h(
      'div',
      {
        class: 'bug-menu',
      },
      children
    );
  },
});
</script>
