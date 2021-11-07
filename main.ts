import { createApp } from 'vue';
import BugUI from './src/index';
import './src/styles/index.scss';
import './node_modules/highlight.js/styles/default.css';
import './docs_src/styles/github-markdown.css';
import App from './App.vue';

createApp(App).use(BugUI).mount('#app');
