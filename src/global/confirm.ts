import { App, createApp } from 'vue';
import FaConfirm from './FaConfirm.vue';

let root: App;

function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    root = createApp(FaConfirm);
    root.mount(container);
}

if (document.body) {
    init();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        init();
    });
}

function Confirm(title: string): Promise<void> {
    // @ts-ignore
    const data = window.__confirm.data;
    data.show = true;
    data.title = title;
    return new Promise((resolve) => {
        data.onclick = resolve;
    });
}

export default Confirm;
