export function isString(v: unknown): v is string {
  return typeof v === 'string';
}

export function isNull(v: unknown): v is null {
  return v === null;
}

export function isNumber(v: unknown): v is number {
  return typeof v === 'number' && v === v;
}

export function isArray(v: unknown): v is unknown[] {
  return Object.prototype.toString.call(v) === '[object Array]';
}

export function isObject(v: unknown): v is Object {
  return Object.prototype.toString.call(v) === '[object Object]';
}

export function isDef<T>(v: T): v is Exclude<T, null | undefined> {
  return v !== null && v !== undefined;
}

export function isUndef(v: unknown): v is null | undefined {
  return v === null || v === undefined;
}

export function animate(
  from: number,
  to: number,
  duration: number,
  callback: (v: number) => void
) {
  const start = Date.now();
  const dv = to - from;
  function step() {
    window.requestAnimationFrame(() => {
      const dt = Date.now() - start;
      if (dt < duration) {
        callback(from + (dv * dt) / duration);
        step();
      } else {
        callback(to);
      }
    });
  }
  step();
}
