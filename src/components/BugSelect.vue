<template>
    <div
        class="bug-select"
        :class="{ open: open }"
        :style="selectStyle"
        @click="onClick"
    >
        <div class="bug-select-result" :class="{ disabled: disabled }">
            <span class="bug-select-result-content">{{ selectedLabel }}</span>
            <i class="bug-select-clear" @click="clear" v-show="!disabled"></i>
        </div>
        <div
            v-show="open"
            class="bug-select-menu"
            :class="{ above: position === 'up', below: position === 'down' }"
        >
            <div class="bug-select-menu-header"></div>
            <ul class="bug-select-menu-body">
                <li
                    v-for="option in options"
                    :key="option.value"
                    value="option.value"
                    class="bug-select-menu-item"
                    :class="{ selected: isSelected(option.value) }"
                    @click="onSelect(option.value)"
                >
                    {{ option.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
import { isArray, isNumber } from '../utils';

type SimpleValueType = string | number | boolean;

type ComplexValueType = SimpleValueType[];

type SelectOption = { value: SimpleValueType; label: string };

export default defineComponent({
    name: 'BugSelect',
    props: {
        modelValue: {
            type: [String, Number, Boolean, Array],
            default: null,
        },
        options: {
            type: Array as PropType<SelectOption[]>,
            required: true,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [String, Number],
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        position: {
            type: String as PropType<'up' | 'down'>,
            default: 'down',
        },
    },
    setup(props, { emit }) {
        const open = ref(false);

        const selectStyle = computed((): Record<string, unknown> => {
            const style: Record<string, unknown> = {};
            if (props.width) {
                style.width = isNumber(props.width)
                    ? `${props.width}px`
                    : props.width;
            }
            return style;
        });

        const selectedLabel = computed(() => {
            const result: string[] = [];
            for (let i = 0; i < props.options.length; i += 1) {
                const { value, label } = props.options[i];
                if (props.multiple) {
                    if (
                        props.modelValue &&
                        (props.modelValue as ComplexValueType).includes(value)
                    ) {
                        result.push(label);
                    }
                } else if (props.modelValue === value) {
                    result.push(label);
                    break;
                }
            }
            return result.length ? result.join(', ') : props.placeholder;
        });

        const isSelected = (value: SimpleValueType): boolean => {
            if (props.multiple) {
                return (
                    !!props.modelValue &&
                    (props.modelValue as ComplexValueType).includes(value)
                );
            }
            return props.modelValue === value;
        };

        const onClick = () => {
            if (props.disabled) {
                return;
            }
            open.value = !open.value;
        };

        const onSelect = (v: SimpleValueType) => {
            if (props.multiple) {
                const values = props.modelValue as ComplexValueType;
                if (values.includes(v)) {
                    const i = values.indexOf(v);
                    values.splice(i, 1);
                } else {
                    values.push(v);
                }
            } else {
                emit('update:modelValue', v === props.modelValue ? null : v);
            }
            emit('change');
        };

        const clear = (e: MouseEvent) => {
            e.stopPropagation();
            const isBlank = props.multiple
                ? (props.modelValue as ComplexValueType).length === 0
                : props.modelValue === null;
            emit('update:modelValue', props.multiple ? [] : null);
            if (!isBlank) {
                emit('change');
            }
        };

        onMounted(() => {
            if (props.multiple && !isArray(props.modelValue)) {
                emit('update:modelValue', []);
            }
        });

        return {
            open,
            selectStyle,
            selectedLabel,
            isSelected,
            onClick,
            onSelect,
            clear,
        };
    },
});
</script>
