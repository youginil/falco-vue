const fs = require('fs');
const path = require('path');

fs.copyFileSync(
  path.resolve(__dirname, 'dist/themes/neumorphism.css'),
  path.resolve(__dirname, 'docs/assets/neumorphism.css')
);
