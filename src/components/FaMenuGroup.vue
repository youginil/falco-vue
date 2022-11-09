<script lang="ts">
import { defineComponent, h, isVNode, VNode, ComponentOptions } from 'vue';
import { animate } from '../utils';

export default defineComponent({
    name: 'FaMenuGroup',
    props: {
        title: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            show: false,
        };
    },
    render() {
        const that = this;
        let animating = false;
        const titleSlot = this.$slots.title;
        const title = h(
            'p',
            {
                class: 'falco-menu-group-title',
                onClick() {
                    if (animating) {
                        return;
                    }
                    animating = true;
                    that.$data.show = !that.$data.show;
                    const ct: HTMLDivElement = that.$el.lastChild;
                    if (that.$data.show) {
                        ct.style.position = 'fixed';
                        ct.style.left = '10000000000px';
                        ct.style.height = 'auto';
                        ct.style.display = 'block';
                        setTimeout(() => {
                            const h = ct.clientHeight;
                            ct.style.position = '';
                            ct.style.left = '';
                            ct.style.height = '0';
                            animate(
                                0,
                                h,
                                250,
                                (v) => {
                                    ct.style.height = `${v}px`;
                                    if (v === h) {
                                        ct.style.height = 'auto';
                                        animating = false;
                                    }
                                },
                                'easeOutCubic'
                            );
                        }, 0);
                    } else {
                        const h = ct.clientHeight;
                        animate(
                            h,
                            0,
                            250,
                            (v) => {
                                ct.style.height = `${v}px`;
                                if (v === h) {
                                    animating = false;
                                }
                            },
                            'easeOutCubic'
                        );
                    }
                },
            },
            [titleSlot ? titleSlot() : this.$props.title]
        );
        const slot = this.$slots.default;
        const content = h(
            'div',
            {
                class: 'falco-menu-group-content',
            },
            slot
                ? slot().filter((item: VNode) => {
                      return (
                          isVNode(item) &&
                          ['FaMenuItem', 'FaMenuGroup'].includes(
                              (item.type as ComponentOptions).name || ''
                          )
                      );
                  })
                : []
        );
        return h(
            'div',
            {
                class: { 'falco-menu-group': true, expand: that.$data.show },
            },
            [title, content]
        );
    },
});
</script>
