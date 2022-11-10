<template>
    <div>
        <fa-button class="m10" @click="info">Info</fa-button>
        <fa-button class="m10" @click="warn">Warning</fa-button>
        <fa-button class="m10" @click="error">Error</fa-button>
        <fa-button @click="success" class="m10">Success</fa-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '../../src';

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
