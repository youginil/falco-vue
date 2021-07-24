import { createApp } from 'vue';
import BugConfirm from './BugConfirm.vue';

const container = document.createElement('div');
document.body.appendChild(container);
const root = createApp(BugConfirm);
root.mount(container);

function Confirm(title: string): Promise<void> {
  const data = root._instance!.data;
  data.show = true;
  data.title = title;
  return new Promise((resolve) => {
    data.onclick = resolve;
  });
}

export default Confirm;
