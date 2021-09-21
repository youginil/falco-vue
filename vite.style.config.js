const path = require('path');

// https://vitejs.dev/config/
export default () => {
  return {
    build: {
      emptyOutDir: false,
      rollupOptions: {
        input: {
          default: path.resolve(__dirname, 'src/themes/default/index.scss'),
          neumorphism: path.resolve(
            __dirname,
            'src/themes/neumorphism/index.scss'
          ),
        },
        output: {
          assetFileNames: () => 'themes/[name].[ext]',
        },
      },
      assetsInlineLimit: 1024 ** 3,
    },
    rollupOptions: {},
  };
};
