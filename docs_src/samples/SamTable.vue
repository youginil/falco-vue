<template>
    <div>
        <bug-table :list="tableList" :sort="tableSort">
            <bug-table-column prop="id"></bug-table-column>
            <bug-table-column prop="name"></bug-table-column>
            <bug-table-column prop="age"></bug-table-column>
        </bug-table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const tableList = ref([
            { id: 1, name: 'John', age: 10 },
            { id: 2, name: 'Lily', age: 13 },
        ]);
        const tableSort = ref([{ prop: 'age', order: '' }]);

        return { tableList, tableSort };
    },
});
</script>
