import { createApp } from 'vue';
import BugUI from './src/index';
import './src/themes/neumorphism.scss';
import App from './App.vue';

createApp(App).use(BugUI).mount('#app');
