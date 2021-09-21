import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  console.log(command, mode);
  if (command === 'serve') {
    return {
      optimizeDeps: {
        entries: path.resolve(__dirname, 'index.html'),
      },
      plugins: [vue()],
    };
  } else if (command === 'build') {
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'bugui',
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
