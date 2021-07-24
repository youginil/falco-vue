<template>
  <div class="bug-date" :class="{ open: open }" @click="toggleOpen">
    <div class="bug-date-result">
      <input type="text" placeholder="Date" :value="modelValue" readonly />
      <span class="date-icon">
        <svg
          t="1592813672025"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2216"
          width="14"
          height="14"
        >
          <path
            d="M752.3 166.1V77.9h-50v88.2H321.7V77.9h-50v88.2H64v780h896v-780H752.3z m157.7 740H114v-690h157.7v101.8h50V216.1h380.5v101.8h50V216.1H910v690z"
            fill="#707070"
            p-id="2217"
          ></path>
        </svg>
      </span>
      <span class="clear-btn" @click.stop="clear" v-show="clearable"></span>
    </div>
    <transition name="bug-date-panel">
      <div
        v-show="open"
        class="bug-date-panel"
        :class="{ show: open }"
        @click.stop=""
      >
        <div class="bug-date-header">
          <div>
            <span class="bug-date-2prev" @click="stride(-1)"></span>
            <span
              v-show="level === PanelLevel.Day"
              class="bug-date-prev"
              @click="step(-1)"
            ></span>
          </div>
          <div>
            <span
              class="bug-date-title"
              :class="{ clickable: level !== PanelLevel.YearInterval }"
              @click="onClickYearTitle"
              >{{ yearTitle }}</span
            >
            <span
              v-show="level === PanelLevel.Day"
              class="bug-date-title clickable"
              @click="onClickMonthTitle"
              >{{ monthTitle }}</span
            >
          </div>
          <div>
            <span
              v-show="level === PanelLevel.Day"
              class="bug-date-next"
              @click="step(1)"
            ></span>
            <span class="bug-date-2next" @click="stride(1)"></span>
          </div>
        </div>
        <!-- year interval -->
        <ul
          v-show="level === PanelLevel.YearInterval"
          class="bug-date-year-content"
        >
          <li
            v-for="item in yearIntervalData"
            :key="item.start"
            @click="onClickYearInterval(item.start)"
          >
            <span
              class="year-item"
              :class="{
                preview: item.preview,
                selected: year >= item.start && year <= item.end,
              }"
              >{{ item.start }}-{{ item.end }}</span
            >
          </li>
        </ul>
        <!-- year -->
        <ul v-show="level === PanelLevel.Year" class="bug-date-year-content">
          <li
            v-for="(item, i) in yearData"
            :key="i"
            @click="onClickYear(item.year)"
          >
            <span
              class="year-item"
              :class="{ preview: item.preview, selected: year === item.year }"
              >{{ item.year }}</span
            >
          </li>
        </ul>
        <!-- month -->
        <ul v-show="level === PanelLevel.Month" class="bug-date-year-content">
          <li
            v-for="(item, i) in monthData"
            :key="i"
            @click="onClickMonth(item.month)"
          >
            <span
              class="year-item"
              :class="{ selected: month === item.month }"
              >{{ item.label }}</span
            >
          </li>
        </ul>
        <!-- day -->
        <div v-show="level === PanelLevel.Day" class="bug-date-day-content">
          <div class="bug-date-day-wrapper">
            <ul class="bug-date-week">
              <li>日</li>
              <li>一</li>
              <li>二</li>
              <li>三</li>
              <li>四</li>
              <li>五</li>
              <li>六</li>
            </ul>
            <ul class="bug-date-days">
              <li
                v-for="(item, i) in dayData"
                :key="i"
                class="bug-date-day-item"
                :class="{
                  preview: item.preview,
                  'bug-date-today': item.today,
                  selected: item.selected,
                }"
                @click="onClickDay(item.day)"
              >
                <span class="bug-date-day">{{ item.day }}</span>
              </li>
            </ul>
          </div>
          <div class="bug-date-today-btn" @click="onClickToday">今天</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue';

enum PanelLevel {
  YearInterval,
  Year,
  Month,
  Day,
}

type YearIntervalData = {
  start: number;
  end: number;
  preview: boolean;
}[];
type YearData = { year: number; preview: boolean }[];
type MonthData = { month: number; label: string }[];
type DayData = {
  day: number;
  preview: boolean;
  today: boolean;
  selected: boolean;
}[];

function parseDate(date: string): [number, number, number] {
  const arr = date.split('-').map((n) => parseInt(n));
  const t = new Date(date);
  if (
    arr.length === 3 &&
    arr[0] === t.getFullYear() &&
    arr[1] === t.getMonth() + 1 &&
    arr[2] === t.getDate()
  ) {
    return [arr[0], arr[1], arr[2]];
  }
  return [0, 0, 0];
}

export default defineComponent({
  name: 'BugDate',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const open = ref(false);
    const level = ref(PanelLevel.YearInterval);

    const year = ref(2020);
    const month = ref(1);
    const day = ref(1);
    let yearIntervalData = ref<YearIntervalData>([]);
    let yearData = ref<YearData>([]);
    let monthData = ref<MonthData>([]);
    let dayData = ref<DayData>([]);

    const yearTitle = computed((): string => {
      let start: number;
      switch (level.value) {
        case PanelLevel.YearInterval:
          start = Math.floor(year.value / 100) * 100;
          return `${start}-${start + 99}`;
        case PanelLevel.Year:
          start = Math.floor(year.value / 10) * 10;
          return `${start}-${start + 9}`;
        case PanelLevel.Month:
        case PanelLevel.Day:
          return `${year.value}年`;
        default:
      }
      return '';
    });

    const monthTitle = computed((): string => {
      if (level.value === PanelLevel.Day) {
        return `${month.value}月`;
      }
      return '';
    });

    const selectedTS = computed((): number => {
      if (!modelValue) {
        return 0;
      }
      const [y, m, d] = parseDate(modelValue.value);
      return new Date(y, m - 1, d).getTime();
    });

    const toggleOpen = () => {
      open.value = !open.value;
      if (!open.value) {
        return;
      }
      if (modelValue.value) {
        [year.value, month.value, day.value] = parseDate(modelValue.value);
      } else {
        const now = new Date();
        year.value = now.getFullYear();
        month.value = now.getMonth() + 1;
        day.value = now.getDate();
      }
      level.value = PanelLevel.Day;
      fillDayData();
    };
    const clear = () => {
      emit('update:modelValue', '');
      emit('change');
      open.value = false;
    };

    const fillYearIntervalData = (offset = 0) => {
      year.value += 100 * offset;
      const start = Math.floor(year.value / 100) * 100;
      const result: YearIntervalData = [
        { start: start - 10, end: start - 1, preview: true },
      ];
      for (let i = 0; i < 10; i++) {
        result.push({
          start: start + i * 10,
          end: start + i * 10 + 9,
          preview: false,
        });
      }
      result.push({ start: start + 100, end: start + 109, preview: true });
      yearIntervalData.value = result;
    };

    const fillYearData = (offset = 0) => {
      year.value += 10 * offset;
      const start = Math.floor(year.value / 10) * 10;
      const result: YearData = [{ year: start - 1, preview: true }];
      for (let i = 0; i < 10; i++) {
        result.push({ year: start + i, preview: false });
      }
      result.push({ year: start + 10, preview: true });
      yearData.value = result;
    };

    const fillMonthData = (yearOffset = 0) => {
      year.value += yearOffset;
      if (monthData.value.length === 0) {
        const result: MonthData = [];
        for (let i = 1; i <= 12; i++) {
          result.push({ month: i, label: `${i}月` });
        }
        monthData.value = result;
      }
    };

    const fillDayData = (yearOffset = 0, monthOffset = 0) => {
      year.value += yearOffset;
      month.value += monthOffset;
      if (month.value > 12) {
        month.value = month.value % 12;
      } else if (month.value < 1) {
        month.value = (month.value % 12) + 12;
      }
      const firstDay = new Date(year.value, month.value - 1, 1);
      const firstDayWeek = firstDay.getDay();
      const firstDayTS = firstDay.getTime();
      const lastDay = new Date(year.value, month.value, 0);
      const lastDate = lastDay.getDate();
      const lastDayWeek = lastDay.getDay();
      const lastDayTS = lastDay.getTime();
      const today = new Date();
      const todayTS = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ).getTime();
      const result: DayData = [];
      for (let i = 0; i < firstDayWeek; i++) {
        const t = new Date(firstDay.getTime() - (firstDayWeek - i) * 86400000);
        const ts = t.getTime();
        result.push({
          day: t.getDate(),
          preview: true,
          today: ts === todayTS,
          selected: ts === selectedTS.value,
        });
      }
      for (let i = 1; i <= lastDate; i++) {
        const ts = firstDayTS + 86400000 * (i - 1);
        result.push({
          day: i,
          preview: false,
          today: ts === todayTS,
          selected: ts === selectedTS.value,
        });
      }
      for (let i = lastDayWeek + 1; i <= 6; i++) {
        const ts = lastDayTS + (i - lastDayWeek) * 86400000;
        result.push({
          day: i - lastDayWeek,
          preview: true,
          today: ts === todayTS,
          selected: ts === selectedTS.value,
        });
      }
      dayData.value = result;
    };

    const stride = (offset = 0) => {
      switch (level.value) {
        case PanelLevel.YearInterval:
          fillYearIntervalData(offset);
          break;
        case PanelLevel.Year:
          fillYearData(offset);
          break;
        case PanelLevel.Month:
          fillMonthData(offset);
          break;
        case PanelLevel.Day:
          fillDayData(offset);
          break;
        default:
          break;
      }
    };

    const step = (offset = 0) => {
      if (level.value === PanelLevel.Day) {
        fillDayData(0, offset);
      }
    };

    const onClickYearTitle = () => {
      switch (level.value) {
        case PanelLevel.Year:
          level.value--;
          fillYearIntervalData();
          break;
        case PanelLevel.Month:
        case PanelLevel.Day:
          level.value = PanelLevel.Year;
          fillYearData();
          break;
        default:
          break;
      }
    };

    const onClickMonthTitle = () => {
      level.value = PanelLevel.Month;
      fillMonthData();
    };

    const onClickYearInterval = (y: number) => {
      year.value = y;
      fillYearData();
      level.value = PanelLevel.Year;
    };

    const onClickYear = (y: number) => {
      year.value = y;
      fillMonthData();
      level.value = PanelLevel.Month;
    };

    const onClickMonth = (m: number) => {
      month.value = m;
      fillDayData();
      level.value = PanelLevel.Day;
    };
    const onClickDay = (d: number) => {
      day.value = d;
      emit(
        'update:modelValue',
        `${year.value}-${month.value > 9 ? month.value : '0' + month.value}-${
          day.value > 9 ? day.value : '0' + day.value
        }`
      );
      emit('change');
      open.value = false;
    };

    const onClickToday = () => {
      const today = new Date();
      const y = today.getFullYear();
      const m = today.getMonth() + 1;
      const d = today.getDate();
      emit('change', `${y}-${m > 9 ? m : '0' + m}-${d > 9 ? d : '0' + d}`);
      open.value = false;
    };

    return {
      PanelLevel,
      open,
      level,
      year,
      month,
      day,
      yearIntervalData,
      yearData,
      monthData,
      dayData,
      yearTitle,
      monthTitle,
      toggleOpen,
      clear,
      stride,
      step,
      onClickYearTitle,
      onClickMonthTitle,
      onClickYearInterval,
      onClickYear,
      onClickMonth,
      onClickDay,
      onClickToday,
    };
  },
});
</script>

<style lang="scss">
@use "sass:math";
$panel-width: 280px;
$header-height: 40px;

.bug-date {
  display: inline-block;
  width: 150px;
  position: relative;
  &.open::before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
.bug-date-result {
  width: 100%;
  position: relative;

  input {
    outline: none;
    border: 1px solid #e1e4e8;
    background-color: #fff;
    font-size: 14px;
    line-height: 20px;
    padding: 5px 12px;
    width: 100%;
    border-radius: 6px;
    cursor: default;
    &::placeholder {
      color: #a3aab1;
    }
    &:focus {
      border-color: #0366d6;
      box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
    }
    &:disabled {
      background-color: #f3f4f6;
      color: #959da5;
    }
  }

  .date-icon {
    display: inline-block;
    position: absolute;
    top: 8px;
    right: 10px;
  }

  .clear-btn {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #999;
    opacity: 0;
    position: absolute;
    top: 7px;
    right: 7px;
    cursor: pointer;
    transition: opacity 0.2s linear;

    &:hover {
      display: inline-block;
      opacity: 1;
    }

    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 10px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      left: 4px;
      top: 8px;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &.clearable:hover .clear-btn {
    opacity: 1;
  }
}

.bug-date-panel {
  position: absolute;
  top: 32px;
  left: 0;
  width: $panel-width;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

  .bug-date-header {
    height: $header-height;
    border-bottom: 1px solid #f0f0f0;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bug-date-2prev,
    .bug-date-2next,
    .bug-date-prev,
    .bug-date-next {
      display: inline-flex;
      width: 16px;
      height: $header-height;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      color: #999;
      transition: color 0.3s linear;
    }
    @mixin pseudo {
      display: inline-block;
      content: '';
      width: 6px;
      height: 6px;
      border: 1px solid transparent;
      border-top-color: currentColor;
      border-left-color: currentColor;
      transition: border-color 0.3s linear;
    }
    @mixin btn-hover {
      &:hover {
        color: #000;
      }
    }
    .bug-date-2prev {
      @include btn-hover;
      &::before,
      &::after {
        @include pseudo;

        transform: rotate(-45deg);
      }
    }
    .bug-date-2next {
      @include btn-hover;
      &::before,
      &::after {
        @include pseudo;

        transform: rotate(135deg);
      }
    }
    .bug-date-prev {
      @include btn-hover;
      &::before {
        @include pseudo;

        transform: rotate(-45deg);
      }
    }
    .bug-date-next {
      @include btn-hover;
      &::before {
        @include pseudo;

        transform: rotate(135deg);
      }
    }

    .bug-date-title {
      display: inlien-block;
      height: 40px;
      line-height: 40px;
      font-weight: 500;
      &.clickable {
        cursor: pointer;
        transition: color 0.3s linear;
      }
      &.clickable:hover {
        color: #1890ff;
      }
    }
  }
}
.bug-date-year-content {
  display: flex;
  flex-wrap: wrap;
  > * {
    width: math.div($panel-width, 3);
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .year-item {
    min-width: 60px;
    font-size: 14px;
    line-height: 24px;
    padding: 0 5px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    transition: background-color 0.3s linear;
    &:hover {
      background-color: #f5f5f5;
    }
  }

  .year-item.preview {
    color: rgba(0, 0, 0, 0.25);
  }

  .year-item.selected {
    background-color: #1890ff;
    color: #fff;
  }
}
.bug-date-day-content {
  .bug-date-day-wrapper {
    padding: 8px 12px;
  }
  .bug-date-week {
    display: flex;
    color: rgba(0, 0, 0, 0.65);
    > * {
      width: math.div($panel-width - 24px, 7);
      text-align: center;
      height: 30px;
      line-height: 30px;
      cursor: default;
    }
  }
  .bug-date-days {
    display: flex;
    flex-wrap: wrap;
    > * {
      width: math.div($panel-width - 24px, 7);
      text-align: center;
    }
  }
  > .bug-date-today-btn {
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #1890ff;
    border-top: 1px solid #f0f0f0;
    cursor: pointer;
  }
}
.bug-date-day-item {
  .bug-date-day {
    display: inline-block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
    border: 1px solid transparent;
    border-radius: 2px;
    margin: 3px 0;
    cursor: pointer;
    transition: background 0.3s, border 0.3s;
  }
  &.preview {
    .bug-date-day {
      color: rgba(0, 0, 0, 0.25);
    }
  }
  &.selected {
    .bug-date-day {
      color: #fff;
      background-color: #1890ff;
    }
  }
  &.bug-date-today {
    .bug-date-day {
      border-color: #1890ff;
    }
  }
  &:not(.selected) {
    &:hover .bug-date-day {
      background-color: #f5f5f5;
    }
    &:not(.bug-date-today):hover .bug-date-day {
      background-color: #f5f5f5;
    }
  }
}
.bug-date-panel-enter,
.bug-date-panel-leave-to {
  opacity: 0;
}
.bug-date-panel-enter-to,
.bug-date-panel-leave {
  opacity: 1;
}
.bug-date-panel-enter-active,
.bug-date-panel-leave-active {
  transition: opacity 0.3s ease;
}
</style>
