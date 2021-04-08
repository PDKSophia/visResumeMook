// 创建uid
export function createUID() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
    .replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0;
      let v = c === 'x' ? r : (r & 3) | 8;
      return v.toString(16);
    })
    .toUpperCase();
}

/**
 * 将字符串数字转成整型数字
 * @param {String} value
 * @returns {Number}
 */
export function transformStringToNumber(value: string): number {
  return Number(value);
}

/**
 * 剔除px
 */
export function reducePX(value: string | number | undefined): string {
  if (!value) return '';
  const _value = String(value);
  return _value.replace('px', '');
}

/**
 * @desc 轮询执行func函数 当func返回值.status为true时，返回.data；支持取消
 * @param {Function[]/Function} funcs - 为函数时，目标函数；为数组时，数组第一项时目标函数，第二项是取消函数
 * @param {number} time - 定时器轮询时间
 * @param {number | string} max - 最大执行，设置此参数会一直执行
 */
export function setPollPromise(funcs: any, time = 300, max?: number | string) {
  let maxCount: number | string; // 最大执行次数，避免一直执行
  let isMax = false;
  if (max) {
    if (max === 'max') isMax = true;
    else maxCount = max;
  } else {
    const minTime = 10 * 1000; // 最小执行时间
    const minCount = 10; // 最小执行次数
    maxCount = Math.ceil(minTime / time);
    if (maxCount < minCount) maxCount = minCount;
  }
  let count = 0;
  let execution_fn: Function;
  let cancel_fn: Function;
  if (Object.prototype.toString.call(funcs) === '[object Array]') {
    execution_fn = funcs[0];
    cancel_fn = funcs[1];
  } else {
    execution_fn = funcs;
  }
  return new Promise((resolve, reject) => {
    const timeHandle = setInterval(() => {
      count++;
      if (cancel_fn && cancel_fn()) {
        clearInterval(timeHandle);
      } else {
        const res = execution_fn();
        if (res || res === 0 || res === '') {
          clearInterval(timeHandle);
          resolve(res);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        if (!isMax && count >= maxCount) reject();
      }
    }, time);
  });
}
