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
        rollupOptions: {
          external: ['vue'],
          input: {
            bugui: path.resolve(__dirname, 'src/index.ts'),
            default: path.resolve(__dirname, 'src/themes/default/index.scss'),
            neumorphism: path.resolve(
              __dirname,
              'src/themes/neumorphism/index.scss'
            ),
          },
          output: {
            globals: {
              vue: 'Vue',
            },
            exports: 'named',
            entryFileNames: () => '[name].js',
            assetFileNames: () => 'themes/[name].[ext]',
          },
        },
        sourcemap: true,
        assetsInlineLimit: 1024 ** 3,
      },
      plugins: [vue()],
      rollupOptions: {},
    };
  } else {
    throw new Error('Invalid command');
  }
};
