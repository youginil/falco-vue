<template>
    <div>
        <bug-button class="m10" @click="info">Info</bug-button>
        <bug-button class="m10" @click="warn">Warning</bug-button>
        <bug-button class="m10" @click="error">Error</bug-button>
        <bug-button @click="success" class="m10">Success</bug-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {message} from '../../src';

export default defineComponent({
    setup() {
        function info() {
            message.info('This is info');
        }
        function warn() {
            message.warn('This is warning');
        }
        function error() {
            message.error('This is error');
        }
        function success() {
            message.success('This is success');
        }
        return { info, warn, error, success };
    },
});
</script>
