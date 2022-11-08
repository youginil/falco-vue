<template>
    <div>
        <iframe />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import * as sfc from '@vue/compiler-sfc';

export default defineComponent({
    name: 'LiveSample',
    props: {
        src: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        onMounted(() => {
            fetch(
                'http://localhost:3000/docs_src/samples/' +
                    props.src +
                    '.vue?raw'
            )
                .then((response) => {
                    return response.text();
                })
                .then((response) => {
                    const result = sfc.parse(response);
                });
        });
    },
});
</script>
