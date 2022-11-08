<template>
    <div class="app-menu"><i :class="'fas fa-' + icon"></i><slot /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppMenu',
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    setup() {},
});
</script>

<style lang="scss">
.app-menu {
    display: flex;
    align-items: center;

    & > *:first-child {
        margin-right: 8px;
    }
}
</style>
