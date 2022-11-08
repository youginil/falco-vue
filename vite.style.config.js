const path = require('path');

// https://vitejs.dev/config/
export default () => {
    return {
        publicDir: false,
        build: {
            emptyOutDir: false,
            rollupOptions: {
                input: {
                    style: path.resolve(__dirname, 'src/styles/index.scss'),
                },
                output: {
                    assetFileNames: () => '[name].[ext]',
                },
            },
            assetsInlineLimit: 1024 ** 3,
        },
        rollupOptions: {},
    };
};
