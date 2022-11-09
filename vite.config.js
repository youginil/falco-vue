import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default ({ command, mode }) => {
    if (command === 'serve') {
        return {
            optimizeDeps: {
                entries: path.resolve(__dirname, 'index.html'),
            },
            plugins: [
                vue({
                    template: {
                        compilerOptions: {
                            isCustomElement(tag) {
                                return (
                                    tag === 'sample-code' ||
                                    tag === 'change-log'
                                );
                            },
                        },
                    },
                }),
            ],
        };
    } else if (command === 'build') {
        return {
            publicDir: false,
            build: {
                lib: {
                    entry: path.resolve(__dirname, 'src/index.ts'),
                    name: 'bug4vue',
                },
                rollupOptions: {
                    external: ['vue'],
                    output: {
                        globals: {
                            vue: 'Vue',
                        },
                        exports: 'named',
                    },
                },
                sourcemap: true,
            },
            plugins: [vue()],
        };
    } else {
        throw new Error('Invalid command');
    }
};
