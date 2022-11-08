import { createApp } from 'vue';
import bug from './src/index';
import './src/styles/index.scss';
import './node_modules/highlight.js/styles/default.css';
import './docs_src/styles/github-markdown.css';
import './node_modules/@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue';

createApp(App).use(bug).mount('#app');
