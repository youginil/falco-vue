import { createApp } from 'vue';
import BugUI from './src/index';
import './src/themes/default/index.scss';
// import './src/themes/neumorphism/index.scss';
import App from './App.vue';

function removeTheme(theme: string) {
  const elems = document.head.querySelectorAll('link');
  for (let i = 0; i < elems.length; i++) {
    const reg = new RegExp(`${theme}\.css`);
    if (reg.test(elems[i].href)) {
      elems[i].remove();
    }
  }
}
function addTheme(theme: string) {
  const elem = document.createElement('link');
  elem.type = 'text/css';
  elem.rel = 'stylesheet';
  elem.href = `assets/${theme}.css`;
  document.head.appendChild(elem);
}

function setTheme(theme: string) {
  if (!['default', 'neumorphism'].includes(theme)) {
    theme = 'default';
  }
  if (theme === 'default') {
    removeTheme('neumorphism');
    addTheme('default');
  } else if (theme === 'neumorphism') {
    removeTheme('default');
    addTheme('neumorphism');
  }
  localStorage.setItem('theme', theme);
}

// @ts-ignore
window.setTheme = setTheme;

if (import.meta.env.PROD) {
  const theme = localStorage.getItem('theme');
  if (theme != null) {
    setTheme(theme);
  }
}

createApp(App).use(BugUI).mount('#app');
