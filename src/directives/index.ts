import { Directive, DirectiveBinding } from 'vue';

const directives: Record<string, Directive> = {
  cut: {
    mounted(el: HTMLElement, binding: DirectiveBinding): void {
      const wc = binding.arg && /^\d+$/.test(binding.arg) ? +binding.arg : 10;
      const text = el.innerText;
      el.dataset.text = text;
      el.title = `${text}\n(Toggle full text by DOUBLE CLICK)`;
      const sub = [...text].slice(0, wc).join('');
      el.innerText = `${sub}${sub.length < text.length ? '...' : ''}`;
      el.dataset.subText = el.innerText;
      el.addEventListener('dblclick', () => {
        if (
          el.dataset.text !== undefined &&
          el.dataset.text.length > el.innerText.length
        ) {
          el.innerText = el.dataset.text;
        } else if (
          el.dataset.subText !== undefined &&
          el.dataset.subText.length < el.innerText.length
        ) {
          el.innerText = el.dataset.subText;
        }
      });
    },
    updated(el: HTMLElement, binding: DirectiveBinding): void {
      const prevText = el.dataset.text || '';
      if (prevText !== el.innerText) {
        el.dataset.text = el.innerText;
      }
      const text = el.innerText;
      const wc = binding.arg && /^\d+$/.test(binding.arg) ? +binding.arg : 10;
      el.title = `${text}\n(Toggle full text by DOUBLE CLICK)`;
      const sub = [...text].slice(0, wc).join('');
      el.innerText = `${sub}${sub.length < text.length ? '...' : ''}`;
      el.dataset.subText = el.innerText;
    },
    unmounted(el: HTMLElement): void {
      el.innerText = el.dataset.text || '';
      el.removeAttribute('title');
      delete el.dataset.text;
      delete el.dataset.subText;
    },
  },
};

export default directives;
