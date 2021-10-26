import { createApp } from 'vue';
import BugUI from './src/index';
import './src/themes/default/index.scss';
// import './src/themes/neumorphism/index.scss';
import './node_modules/highlight.js/styles/default.css';
import App from './App.vue';

createApp(App).use(BugUI).mount('#app');
