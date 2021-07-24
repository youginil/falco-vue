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
      default: ''
    },
    right: {
      type: Number,
      default: 100
    },
    bottom: {
      type: Number,
      default: 100
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

<style lang="scss">
.bug-backtop {
  display: inline-flex;
  width: 40px;
  height: 40px;
  background-color: #eee;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: fixed;
  bottom: 40px;
  right: 40px;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    display: inline-block;
    border-bottom: 8px solid #aaa;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
  &:hover {
    background-color: #ccc;
  }
}
.bug-backtop-enter,
.bug-backtop-leave-to {
  opacity: 0;
}
.bug-backtop-enter-to,
.bug-backtop-leave {
  opacity: 1;
}
.bug-backtop-enter-active,
.bug-backtop-leave-active {
  transition: opacity 0.3s ease;
}
</style>
