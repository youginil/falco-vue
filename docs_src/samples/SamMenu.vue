<template>
    <div>
        <fa-menu @change="onChange" :index="index">
            <fa-menu-group title="Dashboard">
                <fa-menu-item index="1-1">Home</fa-menu-item>
                <fa-menu-item index="1-2">User</fa-menu-item>
            </fa-menu-group>
            <fa-menu-group title="User">
                <fa-menu-item index="2-1">List</fa-menu-item>
                <fa-menu-item index="2-2">Add</fa-menu-item>
                <fa-menu-group title="Order">
                    <fa-menu-item index="3-1">List</fa-menu-item>
                    <fa-menu-item index="3-2">Add</fa-menu-item>
                </fa-menu-group>
                <fa-menu-item index="2-3">Delete</fa-menu-item>
            </fa-menu-group>
        </fa-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const index = ref('');

        function onChange(v: string) {
            console.log(v);
        }

        return { index, onChange };
    },
});
</script>
