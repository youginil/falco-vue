import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return {
    base: '',
    build: {
      outDir: path.resolve(__dirname, 'docs'),
      sourcemap: true,
    },
    plugins: [vue()],
    rollupOptions: {},
  };
};
