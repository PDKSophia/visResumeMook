/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
export function isUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}

/**
 * 获取URL中的参数的值
 * @param {string} paras 参数key
 * @returns {string} 返回参数的value
 */
export function getUrlParam(paras?: string) {
  let url = window.location.search;
  let paramString = url.substring(url.indexOf('?') + 1, url.length).split('&');
  let paraObj: {
    [key: string]: string;
  } = {};
  let j = '';
  for (let i = 0; (j = paramString[i]); i++) {
    const key = j.substring(0, j.indexOf('=')).toLowerCase();
    const value = j.substring(j.indexOf('=') + 1, j.length);
    paraObj[key] = value;
  }
  let returnValue: any;
  if (paras) {
    returnValue = paraObj[paras.toLowerCase()];
  } else {
    returnValue = { ...paraObj };
  }
  return typeof returnValue === 'undefined' ? '' : returnValue;
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
