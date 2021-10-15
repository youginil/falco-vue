<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'BugTabs',
  props: {
    modelValue: {
      type: [String, Number, Symbol],
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
    let curKey = this.$props.modelValue;
    let curIndex = keys.indexOf(curKey);
    if (curIndex < 0) {
      curIndex = 0;
      curKey = keys[0];
    }
    const that = this;
    const activeElem = h('span', { class: 'bug-tab-active' });
    const children = panes.map((item, idx) => {
      // @ts-ignore
      window.bcd = item;
      // @ts-ignore
      const content = item.children.default();
      const k = item.props?.key;
      if (k === undefined) {
        console.error(`BugTabPane's key is undefined`);
        return;
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
              setActiveTab(k);
            }
          },
        },
        content
      );
    });
    function setActiveTab(k: string | number | symbol) {
      const elem: HTMLDivElement = that.$el.children[keys.indexOf(k)];
      if (that.$props.vertical) {
        activeElem.el!.style.top = `${elem.offsetTop}px`;
        activeElem.el!.style.left = `${elem.offsetLeft}px`;
        activeElem.el!.style.height = `${elem.offsetHeight}px`;
        activeElem.el!.style.width = `${elem.offsetWidth}px`;
      } else {
        activeElem.el!.style.left = `${elem.offsetLeft}px`;
        activeElem.el!.style.width = `${elem.offsetWidth}px`;
      }
    }
    setTimeout(() => {
      setActiveTab(curKey!);
    }, 0);
    return h('div', { class: { 'bug-tabs': true, vertical: vertical } }, [
      ...children,
      activeElem,
    ]);
  },
});
</script>
