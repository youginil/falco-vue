const path = require('path');
const fs = require('fs');
const sass = require('sass');

function compileStyle(src, dst) {
  console.log('Compiling', src);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  const css = sass
    .renderSync({
      file: src,
      outputStyle: 'compressed',
    })
    .css.toString();
  fs.writeFileSync(dst, css, { flag: 'w+' });
}

const list = [
  {
    src: path.resolve(__dirname, 'src/themes/default/index.scss'),
    dst: path.resolve(__dirname, 'dist/themes/default.css'),
  },
  {
    src: path.resolve(__dirname, 'src/themes/neumorphism/index.scss'),
    dst: path.resolve(__dirname, 'dist/themes/neumorphism.css'),
  },
];

for (let i = 0; i < list.length; i++) {
  compileStyle(list[i].src, list[i].dst);
}
