<template>
    <div class="falco-dropdown-item" @click="onClick">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FaDropdownItem',
    props: {
        divide: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const handleClick = () => {
            emit('click');
        };
        return {
            handleClick,
        };
    },
});
</script>
