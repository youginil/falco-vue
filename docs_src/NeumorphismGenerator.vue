<template>
  <div>
    <div class="preview-container" :style="{ background: color }">
      <div
        class="preview"
        :style="{
          width: width + 'px',
          height: height + 'px',
          borderRadius: radius + 'px',
          background: backgroundColor,
          boxShadow,
        }"
      >
        <span
          class="corner-item corner-tl"
          :class="{ selected: corner === 0 }"
          @click="corner = 0"
        ></span>
        <span
          class="corner-item corner-tr"
          :class="{ selected: corner === 1 }"
          @click="corner = 1"
        ></span>
        <span
          class="corner-item corner-bl"
          :class="{ selected: corner === 2 }"
          @click="corner = 2"
        ></span>
        <span
          class="corner-item corner-br"
          :class="{ selected: corner === 3 }"
          @click="corner = 3"
        ></span>
      </div>
    </div>
    <div class="flex-hc flex-vc mt20">
      <input type="color" v-model="color" class="mr30" />
      <div class="shapes">
        <div :class="{ selected: shape === 0 }" @click="shape = 0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="24"
            viewBox="0 0 145 24"
            fill="none"
            stroke="white"
          >
            <path
              d="M0 22H7C15.2843 22 22 15.2843 22 7.00001V3C22 2.44772 22.4477 2 23 2H121C121.552 2 122 2.44772 122 3V7.00001C122 15.2843 128.716 22 137 22H145"
              stroke="inherit"
              strokeWidth="6"
            />
          </svg>
        </div>
        <div :class="{ selected: shape === 1 }" @click="shape = 1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="24"
            viewBox="0 0 145 24"
            fill="none"
            stroke="white"
          >
            <path
              d="M0 22H7C15.2843 22 22 15.2843 22 7.00001V3.39336C22 2.7091 22.6808 2.2299 23.3304 2.44485C59.2066 14.3156 85.7767 12.9047 120.7 2.39438C121.343 2.20072 122 2.67921 122 3.3512V7.00001C122 15.2843 128.716 22 137 22H145"
              stroke="inherit"
              strokeWidth="6"
            />
          </svg>
        </div>
        <div :class="{ selected: shape === 2 }" @click="shape = 2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="33"
            viewBox="0 0 145 33"
            fill="none"
            stroke="white"
          >
            <path
              d="M0 31H7C15.2843 31 22 24.2843 22 16V11.7329C22 11.2966 22.2898 10.9083 22.7061 10.7779C60.0722 -0.924818 84.913 -0.925978 121.302 10.7745C121.714 10.9071 122 11.2935 122 11.727V16C122 24.2843 128.716 31 137 31H145"
              stroke="inherit"
              strokeWidth="6"
            />
          </svg>
        </div>
        <div :class="{ selected: shape === 3 }" @click="shape = 3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="24"
            viewBox="0 0 145 24"
            fill="none"
            stroke="white"
          >
            <path
              d="M0 2H22V21C22 21.5523 22.4477 22 23 22H121C121.552 22 122 21.5523 122 21V2H145"
              stroke="inherit"
              strokeWidth="6"
            />
          </svg>
        </div>
      </div>
      <span class="copy" @click="copyStyle">{{
        copied ? 'Copied' : 'Copy CSS'
      }}</span>
    </div>
    <div class="mt20">
      <div class="average">
        <bug-form-item
          layout="h"
          :label="'Width = ' + width"
          :block="true"
          class="pr20"
        >
          <input
            type="range"
            min="1"
            :max="maxSize"
            style="width: 100%"
            v-model="width"
          />
        </bug-form-item>
        <bug-form-item
          layout="h"
          :label="'Height = ' + height"
          :block="true"
          class="pl20"
        >
          <input
            type="range"
            min="1"
            :max="maxSize"
            style="width: 100%"
            v-model="height"
          />
        </bug-form-item>
      </div>
      <div class="average">
        <bug-form-item
          layout="h"
          :label="'Radius = ' + radius"
          :block="true"
          class="pr20"
        >
          <input
            type="range"
            min="1"
            :max="maxRadius"
            style="width: 100%"
            v-model="radius"
          />
        </bug-form-item>
        <bug-form-item
          layout="h"
          :label="'Intensity = ' + intensity"
          :block="true"
          class="pl20"
        >
          <input
            type="range"
            min="1"
            max="100"
            style="width: 100%"
            v-model="intensity"
          />
        </bug-form-item>
      </div>
      <div class="average">
        <bug-form-item
          layout="h"
          :label="'Offset = ' + offset"
          :block="true"
          class="pr20"
        >
          <input
            type="range"
            min="1"
            :max="maxOffset"
            style="width: 100%"
            v-model="offset"
          />
        </bug-form-item>
        <bug-form-item
          layout="h"
          :label="'Blur = ' + blur"
          :block="true"
          class="pl20"
        >
          <input
            type="range"
            min="1"
            :max="maxBlur"
            style="width: 100%"
            v-model="blur"
          />
        </bug-form-item>
      </div>
    </div>
    <div class="tr mt20">
      Inspired by <a href="https://neumorphism.io/" target="blank">https://neumorphism.io/</a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import BugFormItem from '../src/components/BugFormItem.vue';

enum Corner {
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
}

enum Shape {
  Flat,
  Concave,
  Convex,
  Pressed,
}

const MaxIntensity = 0.6;
const MinIntensity = 0.01;

function colorLuminance(color: string, intensity: number): string {
  color = color.substring(1);
  let result = '';
  for (let i = 0; i < 6; i += 2) {
    const c = parseInt(color.substring(i, i + 2), 16);
    result += Math.round(
      Math.min(Math.max(0, c + c * intensity), 255)
    ).toString(16);
  }
  return `#${result}`;
}

function realIntensity(percent: number): number {
  return (percent / 100) * (MaxIntensity - MinIntensity);
}

export default defineComponent({
  name: 'Neumorphism',
  components: { BugFormItem },
  setup() {
    const width = ref(200);
    const height = ref(200);
    const radius = ref(20);
    const offset = ref(20);
    const blur = ref(40);
    const color = ref('#EBECF0');
    const intensity = ref(
      Math.ceil(((0.15 - MinIntensity) / (MaxIntensity - MinIntensity)) * 100)
    );
    const corner = ref<Corner>(Corner.TopLeft);
    const shape = ref<Shape>(Shape.Flat);
    const copied = ref(false);

    const maxSize = ref(400);
    const maxOffset = ref(50);
    const maxRadius = computed(() => {
      const min = Math.min(width.value, height.value);
      return Math.ceil(min / 2);
    });
    const maxBlur = ref(100);

    watch(width, (v) => {
      height.value = v;
    });

    watch([width, height], ([w, h]) => {
      const min = Math.min(w, h);
      radius.value = Math.ceil(min / 10);
      blur.value = Math.ceil(min / 5);
      offset.value = Math.ceil(min / 10);
    });

    watch(offset, (o) => {
      blur.value = o * 2;
    });

    const backgroundColor = computed(() => {
      let result = `${color.value}`;
      let deg = 0;
      switch (corner.value) {
        case Corner.TopLeft:
          deg = Math.round(
            (Math.atan2(height.value, -width.value) / Math.PI) * 180
          );
          break;
        case Corner.TopRight:
          deg = Math.round(
            (Math.atan2(height.value, width.value) / Math.PI) * 180
          );
          break;
        case Corner.BottomLeft:
          deg = Math.round(
            (Math.atan2(-height.value, -width.value) / Math.PI) * 180
          );
          break;
        case Corner.BottomRight:
          deg = Math.round(
            (Math.atan2(-height.value, width.value) / Math.PI) * 180
          );
          break;
        default:
          throw new Error('Invalid corner');
      }
      if (shape.value === Shape.Concave || shape.value === Shape.Convex) {
        let firstGradientColor = '';
        let secondeGradientColor = '';
        if (shape.value === Shape.Concave) {
          firstGradientColor = colorLuminance(color.value, -0.1);
          secondeGradientColor = colorLuminance(color.value, 0.07);
        } else if (shape.value === Shape.Convex) {
          firstGradientColor = colorLuminance(color.value, 0.07);
          secondeGradientColor = colorLuminance(color.value, -0.1);
        }
        result = `linear-gradient(${deg}deg, ${firstGradientColor}, ${secondeGradientColor})`;
      }
      return result;
    });

    const boxShadow = computed(() => {
      const firstColor = colorLuminance(
        color.value,
        -realIntensity(intensity.value)
      );
      const secondColor = colorLuminance(
        color.value,
        realIntensity(intensity.value)
      );
      let firstOffset = [0, 0];
      let secondOffset = [0, 0];
      switch (corner.value) {
        case Corner.TopLeft:
          firstOffset = [offset.value, offset.value];
          secondOffset = [-offset.value, -offset.value];
          break;
        case Corner.TopRight:
          firstOffset = [-offset.value, offset.value];
          secondOffset = [offset.value, -offset.value];
          break;
        case Corner.BottomLeft:
          firstOffset = [offset.value, -offset.value];
          secondOffset = [-offset.value, offset.value];
          break;
        case Corner.BottomRight:
          firstOffset = [-offset.value, -offset.value];
          secondOffset = [offset.value, offset.value];
          break;
        default:
          throw new Error('Invalid corner');
      }
      const inset = shape.value === Shape.Pressed ? 'inset ' : '';

      return `${inset}${firstOffset[0]}px ${firstOffset[1]}px ${blur.value}px ${firstColor}, ${inset}${secondOffset[0]}px ${secondOffset[1]}px ${blur.value}px ${secondColor}`;
    });

    function copyStyle() {
      const el = document.createElement('textarea');
      el.value = [
        `width: ${width.value}px;`,
        `height: ${height.value}px;`,
        `border-radius: ${radius.value}px;`,
        `background: ${backgroundColor.value};`,
        `box-shadow: ${boxShadow.value};`,
      ].join('\n');
      el.style.position = 'fixed';
      el.style.left = '10000000px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      el.remove();

      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 1000);
    }

    return {
      width,
      height,
      radius,
      offset,
      blur,
      color,
      intensity,
      shape,
      corner,
      copied,
      backgroundColor,
      boxShadow,
      maxSize,
      maxOffset,
      maxBlur,
      maxRadius,
      copyStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
.preview-container {
  height: 500px;
  text-align: center;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.preview {
  display: inline-block;
  position: relative;

  .corner-item {
    display: inline-block;
    width: 26px;
    height: 26px;
    border: 2px solid #000000;
    position: absolute;

    &.selected {
      background-color: #ffff00;
    }

    &:not(.selected) {
      cursor: pointer;
    }

    &.corner-tl {
      top: -50px;
      left: -50px;
      border-bottom-right-radius: 30px;
    }

    &.corner-tr {
      top: -50px;
      right: -50px;
      border-bottom-left-radius: 30px;
    }

    &.corner-bl {
      bottom: -50px;
      left: -50px;
      border-top-right-radius: 30px;
    }

    &.corner-br {
      bottom: -50px;
      right: -50px;
      border-top-left-radius: 30px;
    }
  }
}

.shapes {
  display: inline-flex;
  border-radius: 4px;
  overflow: hidden;

  & > * {
    display: inline-flex;
    align-items: center;
    height: 33px;
    padding: 0 10px;
    background: #001f3f;
    opacity: 0.8;
    transition: all 0.3s linear;

    &.selected {
      opacity: 1;
    }

    &:not(.selected) {
      cursor: pointer;
    }

    & > svg {
      width: 45px;
      stroke-width: 6px;
    }
  }
}

.copy {
  display: inline-block;
  width: 100px;
  padding: 6px 0;
  border-radius: 4px;
  background-color: #3b843c;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  margin-left: 30px;
}

.average {
  display: flex;

  & > * {
    flex-grow: 1;
    flex-shrink: 0;
  }
}
</style>
