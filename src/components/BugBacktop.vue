<template>
  <transition name="bug-backtop">
    <span v-show="show" class="bug-backtop" @click="scrollToTop"></span>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
const { setTimeout, clearTimeout } = window;

export default defineComponent({
  name: 'BugBacktop',
  props: {
    target: {
      type: String,
      default: '',
    },
    right: {
      type: Number,
      default: 100,
    },
    bottom: {
      type: Number,
      default: 100,
    },
  },
  setup(props) {
    const show = ref(false);
    let elem: Element | Document = document;
    let timer: number | null = null;

    const onScroll = (e: Event) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (e.target !== elem) {
          return;
        }
        show.value =
          (elem instanceof Document
            ? document.scrollingElement!.scrollTop
            : elem.scrollTop) >= 200;
        timer = null;
      }, 200);
    };

    const scrollToTop = () => {
      (elem instanceof Document ? elem.scrollingElement! : elem).scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    onMounted(() => {
      if (props.target && document.querySelector(props.target) === null) {
        console.warn(`BugBacktop: Invalid target "${props.target}"`);
      }
      elem = props.target
        ? document.querySelector(props.target) || document
        : document;
      elem.addEventListener('scroll', onScroll);
    });

    onBeforeUnmount(() => {
      elem.removeEventListener('scroll', onScroll);
    });

    return {
      show,
      scrollToTop,
    };
  },
});
</script>
