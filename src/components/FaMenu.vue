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
    name: 'FaMenu',
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

        watch(
            () => props.index,
            (v) => {
                if (v !== current.value) {
                    current.value = v;
                }
            }
        );
    },
    render() {
        const slot = this.$slots.default;
        const children = slot
            ? slot().filter((item) => {
                  return (
                      isVNode(item) &&
                      ['FaMenuItem', 'FaMenuGroup'].includes(
                          (item.type as ComponentOptions).name || ''
                      )
                  );
              })
            : [];
        return h(
            'div',
            {
                class: 'falco-menu',
            },
            children
        );
    },
});
</script>
