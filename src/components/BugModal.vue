<template>
    <transition name="fade" @enter="onShow" @after-leave="onHide">
        <div v-show="show" class="bug-modal" @click="close">
            <transition name="move">
                <div
                    v-show="show"
                    class="bug-modal-box"
                    :style="style"
                    @click.stop=""
                >
                    <div v-if="!headless" class="bug-modal-header">
                        <div class="bug-modal-title">{{ title }}</div>
                        <span
                            v-if="closable"
                            class="bug-modal-close"
                            @click="close"
                        ></span>
                    </div>
                    <div class="bug-modal-content">
                        <slot />
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { isNumber } from '../utils';

export default defineComponent({
    name: 'BugModal',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        headless: {
            type: Boolean,
            default: false,
        },
        closable: {
            type: Boolean,
            default: true,
        },
        width: {
            type: [String, Number],
            default: '',
        },
    },
    setup(props, { emit }) {
        const style = computed((): Record<string, unknown> => {
            const style: Record<string, unknown> = {};
            if (props.width) {
                style.width = isNumber(props.width)
                    ? `${props.width}px`
                    : props.width;
            }
            return style;
        });

        const close = () => {
            emit('update:show', false);
        };

        const onShow = () => {
            emit('show');
            document.body.style.overflow = 'hidden';
        };

        const onHide = () => {
            emit('hide');
            document.body.style.overflow = '';
        };

        return {
            style,
            close,
            onShow,
            onHide,
        };
    },
});
</script>
