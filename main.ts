import { createApp } from 'vue';
import BugUI from './src/index';
import './src/themes/default/index.scss';
// import './src/themes/neumorphism/index.scss';
import App from './App.vue';

createApp(App).use(BugUI).mount('#app');
