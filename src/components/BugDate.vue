<template>
  <div class="bug-date" :class="{ open: open }" @click="toggleOpen">
    <div class="bug-date-result" ref="resultElem">
      <input
        type="text"
        placeholder="Date"
        :value="modelValue"
        readonly
        :disabled="disabled"
      />
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
      <div v-show="open" class="bug-date-panel" @click.stop="" ref="panelElem">
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
              >-{{ monthTitle }}</span
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
          <div class="bug-date-today-btn" @click="onClickToday">Today</div>
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const resultElem = ref<HTMLDivElement>();
    const panelElem = ref<HTMLDivElement>();
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
          return `${year.value}`;
        default:
      }
      return '';
    });

    const monthTitle = computed((): string => {
      if (level.value === PanelLevel.Day) {
        return month.value > 9 ? `${month.value}` : `0${month.value}`;
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
      if (props.disabled) {
        return;
      }
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

      const classList = panelElem.value!.classList;
      classList.remove('top', 'bottom', 'left', 'right');
      const { x, y, width, height } = resultElem.value!.getBoundingClientRect();
      const ww = window.innerWidth;
      const wh = window.innerHeight;
      const size = 300;
      if (wh - y - height >= size || y < size) {
        classList.add('bottom');
        if (ww - x - width >= size) {
          classList.add('right');
        } else {
          classList.add('left');
        }
      } else {
        classList.add('top');
        if (ww - x - width >= size) {
          classList.add('right');
        } else {
          classList.add('left');
        }
      }
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
        year.value += 1;
      } else if (month.value < 1) {
        month.value = (month.value % 12) + 12;
        year.value -= 1;
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
      emit(
        'update:modelValue',
        `${y}-${m > 9 ? m : '0' + m}-${d > 9 ? d : '0' + d}`
      );
      open.value = false;
    };

    return {
      resultElem,
      panelElem,
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
