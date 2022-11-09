<script lang="ts">
import { h, defineComponent, PropType, VNode, Slot } from 'vue';

type TableList = Record<string, unknown>[];
type OrderBy = { prop: string; order: 'asc' | 'desc' | '' };

function firstUpper(v: unknown): unknown {
    if (typeof v === 'string' && /^[a-z]/.test(v)) {
        return v.slice(0, 1).toUpperCase() + v.slice(1);
    }
    return v;
}

export default defineComponent({
    name: 'FaTable',
    props: {
        list: {
            type: Array as PropType<TableList>,
            default: [],
        },
        sort: {
            type: Array as PropType<OrderBy[]>,
            default: [],
        },
    },
    render() {
        const ths: VNode[] = [];
        const tpls: (string | Slot)[] = [];
        if (this.$slots.default) {
            this.$slots
                .default()
                // @ts-ignore
                .filter((item) => item.type.name === 'FaTableColumn')
                .forEach((item) => {
                    const propData = item.props;
                    const propName = propData?.prop;
                    const thChildren = [
                        propData?.label || firstUpper(propName) || '',
                    ];
                    let sortable = false;
                    for (let i = 0; i < this.sort.length; i++) {
                        const ob = this.sort[i];
                        if (ob.prop === propName) {
                            thChildren.push(
                                h('span', {
                                    class: [
                                        'falco-table-order-by',
                                        ob.order === 'asc'
                                            ? 'order-by-asc'
                                            : '',
                                        ob.order === 'desc'
                                            ? 'order-by-desc'
                                            : '',
                                    ],
                                })
                            );
                            sortable = true;
                            break;
                        }
                    }
                    const thOn: Record<string, () => void> = {};
                    if (sortable) {
                        thOn.onClick = () => {
                            for (let i = 0; i < this.sort.length; i++) {
                                const ob = this.sort[i];
                                if (ob.prop === propName) {
                                    if (ob.order === 'asc') {
                                        ob.order = 'desc';
                                    } else if (ob.order === 'desc') {
                                        ob.order = '';
                                    } else {
                                        ob.order = 'asc';
                                    }
                                    this.sort.splice(i, 1, ob);
                                    this.$emit('resort', propName, ob.order);
                                    break;
                                }
                            }
                        };
                    }
                    ths.push(
                        h(
                            'th',
                            {
                                class: [
                                    'falco-table-th',
                                    sortable ? 'sortable' : '',
                                ],
                                style: {
                                    // @ts-ignore
                                    width: propData?.width
                                        ? propData.width
                                        : '',
                                },
                                ...thOn,
                            },
                            thChildren
                        )
                    );
                    // @ts-ignore
                    if (item.children && item.children.default) {
                        // @ts-ignore
                        tpls.push(item.children.default);
                    } else if (propName) {
                        tpls.push(propName);
                    } else {
                        tpls.push('');
                    }
                });
        }

        const trs = this.list.map((item) => {
            const tds = tpls.map((tpl) =>
                h(
                    'td',
                    { class: 'falco-table-td' },
                    typeof tpl === 'string' ? `${item[tpl]}` : [tpl(item)]
                )
            );
            return h('tr', { class: 'falco-table-row' }, tds);
        });
        const table = h('table', [h('thead', ths), h('tbody', trs)]);
        return h('div', { class: ['falco-table'] }, [table]);
    },
});
</script>
