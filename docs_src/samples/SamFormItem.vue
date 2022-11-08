<template>
    <div>
        <bug-form-item label="Username">
            <bug-input width="100%"></bug-input>
        </bug-form-item>
        <bug-form-item label="Password" layout="h">
            <bug-input type="password" width="100%"></bug-input>
        </bug-form-item>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
