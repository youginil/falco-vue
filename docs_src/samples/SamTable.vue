<template>
    <div>
        <fa-table :list="tableList" :sort="tableSort">
            <fa-table-column prop="id"></fa-table-column>
            <fa-table-column prop="name"></fa-table-column>
            <fa-table-column prop="age"></fa-table-column>
        </fa-table>
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
