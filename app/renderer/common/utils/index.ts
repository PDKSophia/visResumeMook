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
