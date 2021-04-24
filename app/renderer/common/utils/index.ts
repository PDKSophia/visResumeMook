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
 * @param {string} value
 * @returns {number}
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
 * @param {number} time - 定时器轮询时间
 * @param {number | string} max - 最大执行，设置此参数会一直执行
 * @param {function[]/function} funcArray - 为函数时，目标函数；为数组时，数组第一项是目标函数，第二项是取消函数
 */
export function setPollPromise(funcArray: any, time = 300, max?: number | string): Promise<any> {
  let maxCount: number | string; // 最大执行次数，避免一直执行
  let isMax = false;
  if (max) {
    if (max === 'max') isMax = true;
    else maxCount = max;
  } else {
    const minCount = 10; // 最小执行次数
    const minTime = 10 * 1000; // 最小执行时间
    maxCount = Math.ceil(minTime / time);
    if (maxCount < minCount) maxCount = minCount;
  }
  let count = 0;
  let execFn: Function;
  let cancelFn: Function;
  if (Object.prototype.toString.call(funcArray) === '[object Array]') {
    execFn = funcArray[0];
    cancelFn = funcArray[1];
  } else {
    execFn = funcArray;
  }
  return new Promise((resolve: (res: any) => void, reject: (reason?: any) => void) => {
    const timeHandle = setInterval(() => {
      count++;
      if (cancelFn && cancelFn()) {
        clearInterval(timeHandle);
      } else {
        const res = execFn();
        if (res || res === 0 || res === '') {
          clearInterval(timeHandle);
          resolve(res);
        }
        if (!isMax && count >= maxCount) reject(new Error('执行失败'));
      }
    }, time);
  });
}
