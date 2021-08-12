import { App, createApp } from 'vue';
import BugConfirm from './BugConfirm.vue';

let root: App;

function init() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  root = createApp(BugConfirm);
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
  const data = root._instance!.data;
  data.show = true;
  data.title = title;
  return new Promise((resolve) => {
    data.onclick = resolve;
  });
}

export default Confirm;
