/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-10 19:27:08
 */
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
 * 监听DOM变化
 */
export function watchDomChange(dom: any, callback: () => void) {
  const MutationObserver =
    window.MutationObserver || (window as any).WebKitMutationObserver || (window as any).MozMutationObserver;
  const observer = new MutationObserver(callback);
  observer.observe(dom, {
    childList: true,
    subtree: true,
  });
  return observer;
}
