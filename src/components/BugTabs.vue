<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
    name: 'BugTabs',
    props: {
        modelValue: {
            type: [String, Number],
        },
        vertical: {
            type: Boolean,
            default: false,
        },
    },
    setup() {},
    render() {
        // @ts-ignore
        const panes = this.$slots.default();
        const keys = panes.map((item) => item.props?.key);
        const vertical = this.$props.vertical;
        const curKey = this.$props.modelValue;
        let curIndex = keys.indexOf(curKey);
        if (curIndex < 0) {
            curIndex = 0;
        }
        const that = this;
        const children = panes.map((item, idx) => {
            // @ts-ignore
            window.bcd = item;
            // @ts-ignore
            const content = item.children.default();
            const k = item.props?.key;
            if (k === undefined) {
                console.error(`BugTabPane's key is undefined`);
            }
            return h(
                'span',
                {
                    class: {
                        'bug-tab-pane': true,
                        block: vertical,
                        selected: curIndex === idx,
                    },
                    onClick() {
                        if (k !== that.$props.modelValue) {
                            that.$emit('update:modelValue', k);
                            that.$emit('change', k);
                        }
                    },
                },
                content
            );
        });
        return h(
            'div',
            { class: { 'bug-tabs': true, vertical: vertical } },
            children
        );
    },
});
</script>
