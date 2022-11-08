import vue from '@vitejs/plugin-vue';
const path = require('path');
const fs = require('fs');
const hljs = require('highlight.js/lib/common');
const marked = require('marked');

const sampleCodePlugin = {
    name: 'vue-sample-code',
    transform(code, id) {
        if (/\.vue$/.test(id)) {
            const result = [
                ...code.matchAll(/\<sample-code src="(.+)"\s*\/\>/g),
            ];
            result.forEach((item) => {
                let content = fs
                    .readFileSync(
                        path.resolve(
                            __dirname,
                            'docs_src/samples',
                            `${item[1]}.vue`
                        )
                    )
                    .toString();
                content = hljs.highlight(content, { language: 'html' }).value;
                code = code.replace(
                    item[0],
                    `<pre><code class="language-html hljs">${content}</code></pre>`
                );
            });
            const changelogs = [...code.matchAll(/\<change-log \/\>/g)];
            changelogs.forEach((item) => {
                let content = fs
                    .readFileSync(path.resolve(__dirname, 'CHANGELOG.md'))
                    .toString();
                content =
                    '<article class="markdown-body">' +
                    marked.parse(content) +
                    '</article>';
                code = code.replace(item[0], content);
            });
        }
        return { code, map: null };
    },
};

// https://vitejs.dev/config/
export default ({ command, mode }) => {
    return {
        base: '',
        build: {
            outDir: path.resolve(__dirname, 'docs'),
            sourcemap: true,
        },
        plugins: [sampleCodePlugin, vue()],
        rollupOptions: {},
    };
};
