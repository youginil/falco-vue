import { createApp } from 'vue';
import BugUI from './src/index';
import './src/themes/default/index.scss';
// import './src/themes/neumorphism/index.scss';
import App from './App.vue';

function setTheme(theme: string) {
  if (theme === 'neumorphism') {
    const elem = document.createElement('link');
    elem.type = 'text/css';
    elem.rel = 'stylesheet';
    elem.href = 'assets/neumorphism.css';
    document.head.appendChild(elem);
  } else {
    const elems = document.head.querySelectorAll('link');
    for (let i = 0; i < elems.length; i++) {
      if (/neumorphism\.css/.test(elems[i].href)) {
        elems[i].remove();
      }
    }
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
