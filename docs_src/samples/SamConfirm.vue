<template>
    <div>
        <fa-button @click="cfm">Confirm</fa-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { confirm } from '../../src';

export default defineComponent({
    setup() {
        function cfm() {
            confirm('Do you want do this?').then(() => {
                //
            });
        }

        return { cfm };
    },
});
</script>
